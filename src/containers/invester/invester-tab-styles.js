import { StyleSheet } from 'react-native';
import Constants from '../../constants';

const styles = StyleSheet.create({
    container: {
      backgroundColor: Constants.Colors.WHITE,
      flex: 1,
    },
    textStyle: {
        marginRight:280
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