import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewPropTypes,
} from "react-native";
import { bool, func, string, number } from "prop-types";
import Constants from "../../constants";
import Avatar from './Avatar'

const mainContainer = {
  paddingHorizontal: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1,
  paddingVertical: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
  width: '95%',
  borderRadius: 8,
  borderWidth: 1,
  borderColor: Constants.Colors.BORDER_COLOR,
  alignSelf: 'center',
  marginTop: 15
}
const styles = StyleSheet.create({
  container: {
    ...mainContainer,
    // justifyContent: 'space-between'
  },
  avatar: {
    height: 80,
    width: 80,
    alignItems: 'center'
  },
  titleText: {
    ...Constants.Fonts.OpenSans.large,
    top: 5
  },
  key: {
    ...Constants.Fonts.OpenSans.smallRegular,
  },
  value: {
    ...Constants.Fonts.OpenSans.smallBold,
    left: 2
  },
  buttonStyle: {
    height: 35, width: '75%',
    backgroundColor: Constants.Colors.SECONDARY_COLOR,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    left: 20
  },
  bottomMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 3,
    paddingHorizontal: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 5,
    alignItems: 'center'
  },
  text: {
    ...Constants.Fonts.OpenSans.mediumSemiBold,
    color: Constants.Colors.BUTTON_COLOR
  },
  rowContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  rows: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  keyValueContainer: {
    paddingHorizontal: 5, 
    justifyContent: 'space-between',
  },
  iconView: {
    alignSelf: 'flex-end',
     top: 6, 
     right: 2 
  },
  itemContainer: {
    flexDirection: 'row', 
    paddingVertical: 5,
    justifyContent:'space-between'
  }
});

const Rows = ({ activeOpacity, title, style, icon, avatarStyle, onPress, value, rightIcon, isShowBottomView }) => {


  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        activeOpacity={0.5, activeOpacity}
        onPress={onPress}
        style={styles.rowContainer}
      >
        {icon && <Avatar image={icon} style={[styles.avatar, avatarStyle]} />}

        <View style={styles.keyValueContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <View>
            <View style={styles.itemContainer}>
              <Text style={styles.key}>{'Verdi:'}</Text>
              <Text style={styles.value}>{value}</Text>

            </View>
            <View style={styles.rows}>
              <Text style={styles.key}>{'Endring:'}</Text>
              <Text style={styles.value}>{value}</Text>
            </View>
          </View>
        </View>
        <View style={styles.keyValueContainer}>
          <View style={styles.iconView}>
            {rightIcon}
          </View>
          <View>
            <View style={styles.itemContainer}>
              <Text style={styles.key}>{'Utbytte/m:'}</Text>
              <Text style={styles.value}>{value}</Text>

            </View>
            <View style={styles.rows}>
              <Text style={styles.key}>{'Aksjekurs:'}</Text>
              <Text style={styles.value}>{value}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity >
      {isShowBottomView &&
        <View style={styles.bottomMainView}>
          <TouchableOpacity>
          <Constants.Images.Share />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.text}>{'Invest'}</Text>
          </TouchableOpacity>
        </View>

      }
    </View>
  );
};

Rows.propTypes = {
  onPress: func,
  style: ViewPropTypes.style,
  title: string.isRequired,
  value: string.isRequired,
  isShowBottomView: bool.isRequired
};

Rows.defaultProps = {
  style: {},
};


export default Rows;

