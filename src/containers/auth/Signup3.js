import React, { PureComponent } from 'react';
import { View, Text, ScrollView, TextInput,Keyboard, Image } from 'react-native';
import { func, shape } from 'prop-types';
import TimerMixin from 'react-timer-mixin';
import _ from 'lodash';
import ReactMixin from 'react-mixin';
import Constants from '../../constants';
import { Header, Button } from '../../components';
import { AuthStyles } from '../../styles';


class Signup3 extends PureComponent {

    state = {
        upiId: '',
        upiIdError: false
    }

    onSubmit = () => {
        Keyboard.dismiss();
        const {
            navigation: { navigate },
        } = this.props;
        const { upiId } = this.state;
        if (_.isEmpty(upiId.trim())) {
            this.setState({ upiIdError: true });
            return;
          }
        

        navigate('GetStarted')

    }


    render() {
        const { navigation: { goBack } } = this.props;
        const { upiId, upiIdError } = this.state;
        const {
            signup: { upiIdText },
            common: { textHere },
            button: { verifyNow },
            header: { step3 }
        } = Constants.i18n;

        return (
            <ScrollView style={AuthStyles.container} showsVerticalScrollIndicator={false}>
                <Header hideRightIcon={true} onPressBack={() => goBack()} showRightTitle rightTitle={step3}  showTitle={true} />
                <View style={AuthStyles.subContainer}>
                    <Image source={Constants.Images.bubble} style={AuthStyles.bubbleIcon} resizeMode='contain'></Image>
                    <View style={AuthStyles.logoContainer}>
                        <Constants.Images.LogoLogin />
                    </View>
                    <TextInput 
                      style={AuthStyles.textInput}
                      placeholder={upiIdText}
                      value={upiId}
                      onChangeText={(text)=> this.setState({ upiId:text })}
                    />
                   
                </View>
                {upiIdError  ? <Text style={AuthStyles.errorText} >{'Please enter UPI ID'} </Text> : null}
                <Button
                    onPress={this.onSubmit}
                    style={AuthStyles.signup3buttonStyle}
                    title={verifyNow}
                />
            </ScrollView>
        );
    }
}
ReactMixin(Signup3.prototype, TimerMixin);

export default Signup3;

