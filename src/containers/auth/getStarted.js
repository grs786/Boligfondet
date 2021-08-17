import React, { PureComponent } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { func, shape } from 'prop-types';
import Constants from '../../constants';
import { Button } from '../../components';

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: Constants.Colors.WHITE,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 65,
    borderColor: Constants.Colors.WHITE,
    borderWidth:1,
    position:'absolute',
    bottom:160,
    alignSelf:'center'
  },
  container: { flex: 1 },
  content: {
    alignSelf:'center',
    flex:1,
    justifyContent:'center'
  },
  textStyle:{
      color:Constants.Colors.BUTTON_TEXT,
      ...Constants.Fonts.OpenSans.regularBold
  }
});

class GetStarted extends PureComponent {

  render() {
    const { navigation: { navigate } } = this.props;
    const {
      button: { getStarted }
    } = Constants.i18n;

    return (
        <ImageBackground  style={styles.container} source={Constants.Images.background} >
        <View style={styles.content}>
          <Button
            onPress={() => navigate('Dashboard')}
            style={styles.buttonStyle}
            title={getStarted}
            textStyle={styles.textStyle}
          />
        </View>
       </ImageBackground>
    );
  }
}

export default GetStarted;

