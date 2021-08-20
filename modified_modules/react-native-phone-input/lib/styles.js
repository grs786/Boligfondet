import { StyleSheet, Dimensions, Platform } from 'react-native';
import Constants from '../../../src/constants';

const {
  width, height,
} = Dimensions.get('window');

const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: (SCREEN_HEIGHT / 100) * 2,
    marginRight: (SCREEN_HEIGHT / 100) * 2,
    width: (SCREEN_WIDTH / 100) * 60,
  },
  countryCodeText: {
    ...Constants.Fonts.OpenSans.regular,
    // color: Constants.Colors.TEXT_COLOR2,
    bottom:5
  },
  downArrow: {
    color: Constants.Colors.PRIMARY_COLOR,
    marginLeft: 8,
  },
  buttonTextStyle: {
    fontSize: 14,
    color: 'black',
  },
  basicContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // elevation: 5,
    // shadowColor: 'rgba(0, 0, 0, 0.10000000149011612)',
    // shadowOffset: {
    //   height: 1,
    //   width: 1,
    // },
    // shadowOpacity: 0.4,
    // shadowRadius: 5,
  },
  modal: {
    backgroundColor: 'rgba(0,0,0,.7)',
    flex: 1,
  },
  modalContainer: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  buttonView: {
    width: SCREEN_WIDTH,
    padding: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bottomPicker: { width: SCREEN_WIDTH },
  flag: {
    borderRadius: 2,
    backgroundColor: 'white',
    alignSelf: 'center',
    height: (SCREEN_WIDTH / 100) * 5,
    marginLeft: (SCREEN_WIDTH / 100) * 3,
    width: (SCREEN_WIDTH / 100) * 7,
  },
  text: {
    padding: 0,
    justifyContent: 'center',
    color: 'black',
    flex: 1,
    marginHorizontal: 10,
    fontSize: 14,
    ...Platform.select({
      android: { height: (SCREEN_HEIGHT / 100) * 7.8 },
      ios: { height: (SCREEN_HEIGHT / 100) * 5 },
    }),
  },
  itemStyle: {
    fontSize: 14,
    color: 'black',
  },
  arrow:{
    height:15,
    width:15,
    left:2,
    bottom:5
  }
});
