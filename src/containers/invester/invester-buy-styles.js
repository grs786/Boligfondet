import { StyleSheet } from 'react-native';
import Constants from '../../constants';

const styles = StyleSheet.create({
    container: {
      backgroundColor: Constants.Colors.WHITE,
      flex: 1,
    },
    subContainer: {
      paddingHorizontal:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1.5,
    },
    textStyle: {
        marginRight:200
    },
    text: {
      textAlign:'center',
      marginTop:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 6,
      ...Constants.Fonts.Helvetica.large
    },
    cardView: {
      paddingHorizontal:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1.5,
      backgroundColor:Constants.Colors.WHITE,
      width:'100%',
      alignSelf:'center',
      borderRadius:8,
      borderWidth:.5,
      borderColor: Constants.Colors.GRAY,
      marginTop:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1.5,
    },
    rowContainer: {
      flexDirection:'row',
    },
    icon: {
      height:100,
      width:100,
      alignSelf:'center',
      borderRadius:8
    },
    itemContainer: {
      
      paddingHorizontal:20,
      padding:20,
      paddingVertical:10,
    },
    key: {
      ...Constants.Fonts.OpenSans.smallRegular,
    },
    value: {
      ...Constants.Fonts.OpenSans.smallBold,
      left: 50,
    },
    keyValueContainer: {
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:10,
      paddingVertical: 5
    },
    bottomView: {
      flexDirection:'row',
      justifyContent:'space-between',
      paddingVertical:15
    },
    keys: {
      ...Constants.Fonts.OpenSans.regularBold,
    },
    values: {
      ...Constants.Fonts.OpenSans.mediumSemiBold,
    },
    buttonStyle: {
      backgroundColor: Constants.Colors.BUTTON_COLOR,
      marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 7,
      width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 90,
      alignSelf:'center'
    },
    bottomText: {
      textAlign:'center',
      top:20,
      ...Constants.Fonts.OpenSans.regular
    },
    headerStyle: {
      borderBottomColor:Constants.Colors.BORDER_COLOR,
      borderWidth:1,
      borderTopColor: Constants.Colors.WHITE,
      borderRightColor:Constants.Colors.WHITE,
      borderLeftColor:Constants.Colors.WHITE
    }
    
    
  
  });

  export default styles;