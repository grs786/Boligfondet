import React, { PureComponent } from 'react';
import { StyleSheet, View,Text,TouchableOpacity, ScrollView, Image } from 'react-native';
import { func, shape } from 'prop-types';
import Constants from '../../constants';
import { Header } from '../../components';
import {AuthStyles} from '../../styles';

const styles = StyleSheet.create({
  container: { flex: 1 },
 
});

class LoginSecurity extends PureComponent {
  

  render() {
    const { navigation: { navigate, goBack } } = this.props;
    const {
      signup: { signup },
      login : { login },
      common: { textHere, faceDetector, fingerPrint, or }
    } = Constants.i18n;

    return (
      <ScrollView style={AuthStyles.container} showsVerticalScrollIndicator={false}>
          <Header hideRightIcon={true} onPressBack={()=> goBack()} showTitle={true} />
          <View style={AuthStyles.subContainer}>
      <Image source={Constants.Images.bubble} style={AuthStyles.bubbleIcon} resizeMode='contain'></Image>
      <TouchableOpacity style={AuthStyles.logoContainer} onPress={()=> navigate('Login')}>
      <Constants.Images.Face/>
      </TouchableOpacity>
      <Text style={AuthStyles.textLabel}>{faceDetector}</Text>
      <Text style={AuthStyles.orText}>{or.toUpperCase()}</Text>
      <TouchableOpacity style={AuthStyles.logoContainer} onPress={()=> navigate('Login')}>
      <Constants.Images.Scan/>
      </TouchableOpacity>
      <Text style={AuthStyles.textLabel}>{fingerPrint}</Text>
      </View>
        </ScrollView>
    );
  }
}

export default LoginSecurity;

