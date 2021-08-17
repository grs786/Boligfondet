import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ViewPropTypes, Image, SafeAreaView } from 'react-native';
import { oneOfType, bool, func, string, number } from 'prop-types';
import Constants from '../../constants';

const styles = StyleSheet.create({

  safeAreaView: {
    flex: 1
  },
  container: {
    alignItems: 'center',
    backgroundColor: Constants.Colors.TRANSPARENT,
    flexDirection: 'row',
    shadowColor: 'gray',
    color: Constants.Colors.TRANSPARENT,
    height: 50,
    justifyContent:'space-between',
  },
  content: {
    flexDirection: 'row',
    marginRight: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 4,
    marginLeft: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 4,
    alignItems: 'center',
  },
  iconStyle: {
    height: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 5,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 5,
  },
  textStyle: {
    justifyContent: 'center',
    ...Constants.Fonts.OpenSans.regular,
    width:'100%'
  },
  rightSideView: {
    marginRight: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 4,
  },
  rightTitleStyle:{
    marginRight: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 4,
    ...Constants.Fonts.OpenSans.regular,
    color: Constants.Colors.TEXT_COLOR
  },
  centerIconStyle:{
    height:210,
    width:210
  }
});

function Header(props) {
  const {
    hideleftIcon,
    hideRightIcon,
    iconName,
    onPressBack,
    style,
    textStyle,
    text,
    rightIcon,
    onPressRight,
    rightIconName,
    showRightTitle,
    rightTitle,
    leftIconStyle,
    rightIconStyle,
    showTitle
  } = props;

  return (
      <View style={[styles.container, style]}>
        <TouchableOpacity
          hitSlop={Constants.BaseStyle.HIT_SLOP}
          underlayColor={Constants.Colors.TRANSPARENT}
          onPress={onPressBack}
          style={styles.content}
        >
          {!hideleftIcon ? <Image source={iconName} style={[styles.iconStyle,leftIconStyle]}/>: null }
        </TouchableOpacity>
        {showTitle ? <Text style={[styles.textStyle, textStyle]}>{text}</Text> : <Image source={Constants.Images.headerbubble} style={styles.centerIconStyle} resizeMode='contain'/>}
         {!hideRightIcon ? <TouchableOpacity onPress={onPressRight} style={styles.rightSideView}><Image source={rightIconName} style={[styles.iconStyle,rightIconStyle]} /></TouchableOpacity> : null}
        {showRightTitle ? <Text style={styles.rightTitleStyle}>{rightTitle}</Text>: null}
      </View>
  );
};

Header.propTypes = {
  hideleftIcon: bool,
  hideRightIcon: bool,
  onPressBack: func,
  style: ViewPropTypes.style,
  text: string,
  textStyle: Text.propTypes.style,
  onPressRight: func
};

Header.defaultProps = {
  hideleftIcon: false,
  hideIcon: false,
  iconName: Constants.Images.back,
  onPressBack: () => true,
  onPressRight: () => { },
  style: {},
  text: '',
  textStyle: {},

};

export default Header;
