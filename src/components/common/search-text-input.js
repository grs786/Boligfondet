import React from 'react';
import { View, ViewPropTypes, StyleSheet, TouchableOpacity, TextInput, Text } from 'react-native';
import { bool, func, string, number } from 'prop-types';
import Constants from '../../constants';

const styles = StyleSheet.create({
  cancelTextStyle: {
    // ...Constants.Fonts.regularBold,
    // color: Constants.Colors.PRIMARY_COLOR,
    marginLeft: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 2,
  },
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal:(Constants.BaseStyle.DEVICE_WIDTH / 100) * .5,
    marginTop:(Constants.BaseStyle.DEVICE_WIDTH / 100) * 6,
    borderColor: Constants.Colors.BORDER_COLOR,
    borderWidth:1,
    width:'95%',
    height:41,
    backgroundColor:'#F6FAFF'
  },
  searchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchTextInput: {
    ...Constants.Fonts.OpenSans.regular,
    // color: '#F6FAFF',
    flex: 1,
    height: 50,
    borderColor: '#F6FAFF',
    borderWidth: 1,
    borderRadius: 8,
  },
  iconStyle: {
    // backgroundColor: Constants.Colors.PRIMARY_COLOR,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4

  },
  marginLeft: { marginLeft: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 4 },
  // marginRight: { marginRight: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 5 }
});

export default class SearchTextInput extends React.PureComponent {
  static propTypes = {
    autoCapitalize: string,
    autoCorrect: bool,
    autoFocus: bool,
    container: ViewPropTypes.style,
    editable: bool,
    keyboardType: string,
    maxLength: number,
    multiline: bool,
    onBlur: func,
    onCancel: func,
    onChange: func,
    onChangeText: func.isRequired,
    onContentSizeChange: func,
    onFocus: func,
    onKeyPress: func,
    onSubmitEditing: func,
    onRightIconClick: func,
    placeholder: string,
    placeholderTextColor: string,
    returnKeyType: string,
    secureTextEntry: bool,
    showRight: bool,
    showSearch: bool,
    style: ViewPropTypes.style,
    value: string,
  };

  static defaultProps = {
    autoCapitalize: 'none',
    autoCorrect: false,
    autoFocus: false,
    container: {},
    editable: true,
    keyboardType: 'default',
    maxLength: 250,
    multiline: false,
    onBlur: () => true,
    onCancel: () => true,
    onChange: () => true,
    onContentSizeChange: () => true,
    onFocus: () => true,
    onKeyPress: () => true,
    onSubmitEditing: () => true,
    onRightIconClick: () => true,
    placeholder: 'Search by name',
    placeholderTextColor: Constants.Colors.GRAY,
    returnKeyType: 'done',
    secureTextEntry: false,
    showRight: true,
    showSearch: true,
    style: {},
    value: '',
  };

  onFocus() {
    const { onFocus } = this.props;

    if (onFocus) {
      onFocus();
    }
  }

  onBlur() {
    const { onBlur } = this.props;

    if (onBlur) {
      onBlur();
    }
  }

  onChange(event) {
    const { onChange } = this.props;

    if (onChange) {
      onChange(event);
    }
  }

  focus() {
    if (this.textInput) {
      this.textInput.focus();
    }
  }

  render() {
    const {
      placeholder,
      placeholderTextColor,
      onChangeText,
      value,
      editable,
      returnKeyType,
      onSubmitEditing,
      showRight,
      showSearch,
      onCancel,
      container,
      style,
      onRightIconClick,
      isEng,
      ...restProps
    } = this.props;

    return (
      <View style={[styles.container, container]}>
        <View style={[styles.searchContainer, style]}>
        {showRight && (
            <TouchableOpacity style={styles.iconStyle} hitSlop={Constants.BaseStyle.HALF_HIT_SLOP} activeOpacity={0.9} onPress={onRightIconClick}>
              <Constants.Images.Search style={styles.marginRight} height={23} width={23} />
            </TouchableOpacity>
          )}
          <TextInput
            blurOnSubmit
            ref={(textInput) => {
              this.textInput = textInput;
            }}
            style={styles.searchTextInput}
            value={value}
            returnKeyType={returnKeyType}
            onChangeText={onChangeText}
            onChange={(event) => this.onChange(event)}
            onFocus={() => this.onFocus()}
            onBlur={() => this.onBlur()}
            selectionColor={Constants.Colors.BLACK}
            onSubmitEditing={onSubmitEditing}
            placeholder={placeholder}
            placeholderTextColor={Constants.Colors.GRAY}
            editable={editable}
            {...restProps}
          />

         
        </View>
      </View>
    );
  }
}
