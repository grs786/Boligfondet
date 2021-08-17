import { StyleSheet } from 'react-native';
import Constants from '../../constants';

const styles = StyleSheet.create({
    container: {
      backgroundColor: Constants.Colors.WHITE,
      flex: 1,
      top:10

    },
    rowStyle:  { 
      padding: Constants.BaseStyle.PADDING },
    textStyle: { 
      ...Constants.Fonts.regular 
    },
    leftIconStyle: {
        height:45,
        width:45
    },
    rightIconStyle: {
      height:30,
      width:30
    },
    headerStyle :{
        marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1.5,
    },
    bubbleView: {
      alignItems:'center',
      bottom:80
    },
    titleView: {
    marginTop:20,
    paddingHorizontal: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
    },
    title: {
      ...Constants.Fonts.Helvetica.extraLargeBold,
    },
    viewAll: {
      ...Constants.Fonts.OpenSans.smallBold,
      color: Constants.Colors.PRIMARY_COLOR
    },
    subConatiner: {
      paddingHorizontal:5
    },
    titleText: {
      ...Constants.Fonts.OpenSans.large
    },
    titleText1: {
      ...Constants.Fonts.OpenSans.smallBold,
      // marginTop:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 3,
    },
    itemKey: {
      ...Constants.Fonts.OpenSans.smallRegular,
    },
    itemValue: {
      ...Constants.Fonts.OpenSans.semiSmallBold,
    },
    itemValue1: {
      ...Constants.Fonts.Helvetica.regular,
      color: Constants.Colors.PRIMARY_COLOR,
      top:10  
    },
    topContainer: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginTop:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 3,
    },
    secondTopContainer: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginTop:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 4,
    },
    rowContainer: {
      paddingHorizontal:5,
      height:30,
      borderRadius:4,
      alignItems:'center',
      justifyContent:'center',
      position:'absolute',
      right:120
    },
    rowContainer1: {
      paddingHorizontal:5,
      height:30,
      borderRadius:4,
      alignItems:'center',
      justifyContent:'center',
      position:'absolute',
      right:20
    },
    iconStyle: {
      position:'absolute',
      right:20
    },
    textInfo: {
      color: Constants.Colors.PRIMARY_COLOR,
      ...Constants.Fonts.Helvetica.regular
    },
    textInfo1: {
      color: Constants.Colors.PRIMARY_COLOR,
      ...Constants.Fonts.Helvetica.regular,
      right:20
    },
    crouselContainer: {
      backgroundColor:Constants.Colors.WHITE,
      width:'95%',
      alignSelf:'center',
      borderRadius:8,
      borderWidth:.5,
      borderColor: Constants.Colors.BORDER_COLOR_2,
      marginTop :(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 4,
      ...Constants.BaseStyle.SHADOW_STYLE,
      paddingVertical:20,
      height:230
  },
  paginationMainView: {
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    top:212,
    elevation:5,
    zIndex:5
    
  },
  iconMainView: {
    paddingHorizontal:15
  },
  iconView: {
    height:30,
    width:30
  },
  norecordContainer: {
    backgroundColor:Constants.Colors.WHITE,
    width:'95%',
    alignSelf:'center',
    borderRadius:8,
    borderWidth:.5,
    borderColor: Constants.Colors.BORDER_COLOR_2,
    marginTop :(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 4,
    ...Constants.BaseStyle.SHADOW_STYLE,
    paddingVertical:20,
    height:230,
    justifyContent:'center',
    alignItems:'center'
  },
  noRecordText: {
    color: Constants.Colors.PRIMARY_COLOR,
      ...Constants.Fonts.Helvetica.regular,
  },
  barChatContainer: {
    height: 200, 
    justifyContent: 'center'
  },
  barChatSubContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between' ,
    alignItems:'center'
  }
  
  
  });

  export default styles;