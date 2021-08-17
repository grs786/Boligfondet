import { StyleSheet } from 'react-native';
import Constants from '../../constants';

const styles = StyleSheet.create({
    container: {
      backgroundColor: Constants.Colors.WHITE,
      flex: 1,
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
    
    
  
  });

  export default styles;