import { ifIphoneX } from 'react-native-iphone-x-helper';
import { StyleSheet } from 'react-native';
import Constants from '../constants';

const styles = {
  alignText: { textAlign: 'center' },
  buttonStyle: {
    backgroundColor: Constants.Colors.BUTTON_COLOR,
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 7,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 90,
    alignSelf:'center'
  },
  forgotPassbuttonStyle: {
    backgroundColor: Constants.Colors.BUTTON_COLOR,
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 15,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 90,
    alignSelf:'center'
  },
  logOutbuttonStyle: {
    backgroundColor: Constants.Colors.BUTTON_COLOR,
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 50,
    alignSelf:'center',
    bottom:20
  },
  container: {
    backgroundColor: Constants.Colors.WHITE,
    flex: 1,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1.5,
  },
  description: {
    ...Constants.Fonts.OpenSans.regular,
    color: Constants.Colors.GRAY,
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 70,
    marginLeft: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 4,
  },
  emailTextStyle: { color: Constants.Colors.BLACK },
  logoStyle: {
    alignSelf: 'center',
    height: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 30,
    marginVertical: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 8,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 50,
    
  },
  navigationBarStyle: { ...ifIphoneX({ height: 64 }, { height: 44 }) },
  sepratorStyle: {
    ...Constants.Fonts.regularBold,
    color: Constants.Colors.GRAY,
    fontFamily: 'Avenir-Medium',
  },
  signupTextInputContainer: { marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 5 },
  textDecorationLineStyle: {
    ...Constants.Fonts.OpenSans.regularBold,
    color: Constants.Colors.PRIMARY_COLOR,
    textAlign: 'right',
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  },
  extDecorationLineStyle: {
    ...Constants.Fonts.OpenSans.regular,
    color: Constants.Colors.TEXT_COLOR2,
    textAlign: 'right',
    marginBottom:20
  },
  signupLineStyle: {
    color: Constants.Colors.PRIMARY_COLOR,
    textAlign: 'right',
    ...Constants.Fonts.OpenSans.regularBold,
  },
  textStyle: {
    ...Constants.Fonts.extraLargeBold,
    color: Constants.Colors.BLACK,
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
  },
  bottomViewStyle :{
    flexDirection:'row',
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 4,
    justifyContent:'center',
  },
  label: {
    ...Constants.Fonts.OpenSans.largeHeaderBold,
    color: Constants.Colors.DARK_BLACK,
    textAlign: 'left',
    marginLeft: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 4,
  },
  getUpdate :{
    flexDirection:'row',
    alignItems:'center',
  },
  getUpdateText: {
    color:Constants.Colors.GRAY,
    ...Constants.Fonts.OpenSans.smallRegular,
    left:8
  },
  termsText: {
    color:Constants.Colors.TEXT_COLOR2,
    ...Constants.Fonts.OpenSans.smallRegular,
    left:8
  },
  loginTexthere: {
    position:'absolute',
    ...Constants.Fonts.OpenSans.mediumSemiBold,
    top:60,
    left:140
  },
  bubbleContainer: {
    alignItems:'center'
  },
  logoIcon: {
    top:40
  },
  textfiledStyle: {
  ...Constants.Fonts.OpenSans.regular,
  color: Constants.Colors.TEXT_COLOR2
  },

  /// Login Security Screen Style
  subContainer: {
    alignItems:'center'
  },
  textHere: {
    position:'absolute',
    bottom:570,
    ...Constants.Fonts.OpenSans.mediumSemiBold
  },
  
  logoContainer: {
    marginTop:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 5,
  },
  textLabel: {
    paddingVertical: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 3.5,
    ...Constants.Fonts.OpenSans.regular,
    color: Constants.Colors.TEXT_COLOR
  },
  
  orText: {
    paddingVertical: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1,
    ...Constants.Fonts.OpenSans.smallSemiBold,
    color: Constants.Colors.GRAY
  },
  acceptTerms:{
    color: Constants.Colors.ERROR,
    top:5,
    fontSize:12,
    fontWeight:'900'
  },
  
  //Signup 2
  enableFingerText: {
    paddingVertical: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 3.5,
    ...Constants.Fonts.OpenSans.extraLargeBold,
    color: Constants.Colors.TEXT_COLOR,
    textAlign:'center',
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 4,
  },
  checkBoxStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    flex:1,
    paddingHorizontal: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 15,
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
  },
  lableText: {
    textAlign:'center',
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
    ...Constants.Fonts.OpenSans.extraLarge
  },
  signup2buttonStyle: {
    backgroundColor: Constants.Colors.BUTTON_COLOR,
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 7,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 90,
    alignSelf:'center',
    marginBottom: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
  },
  signup3buttonStyle: {
    backgroundColor: Constants.Colors.BUTTON_COLOR,
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 20,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 90,
    alignSelf:'center',
    marginBottom: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
    bottom:20
  },

  //Signup 3
  textInput: {
    borderBottomColor:Constants.Colors.BORDER_COLOR,
    borderWidth:1,
    borderColor:'#fff',
    width:'90%',
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 7,
    textAlign:'center',
    ...Constants.Fonts.OpenSans.extraLarge

  },
  errorText:{
    color: Constants.Colors.ERROR,
    top:5,
    fontSize:12,
    fontWeight:'900',
    paddingHorizontal: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 3,

  },

  bubbleIcon: {
    height:200,
    width:300
  }
  

  

};

export default StyleSheet.create(styles);
