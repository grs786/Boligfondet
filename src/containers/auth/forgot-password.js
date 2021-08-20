import React from 'react';
import {
  Keyboard,
  findNodeHandle,
  View,
  Image,
  ScrollView,
  Text,
  Platform,
} from 'react-native';
import _ from 'lodash';
import { func, shape } from 'prop-types';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';
import { ToastActionsCreators } from 'react-native-redux-toast';
import Regex from '../../utilities/Regex';
import Constants from '../../constants';
import { AuthStyles } from '../../styles';
import { Button, Header } from '../../components';
import { TextField } from 'react-native-material-textfield';

class ForgotPassword extends React.Component {
  static propTypes = {
    navigation: shape({
      dispatch: func.isRequired,
      goBack: func.isRequired,
    }).isRequired,
  };

  state = {
    email: '',
    emailError: '',
    errorLabel: ''
  };

  emailRef = React.createRef();

  scrollViewRef = React.createRef();

  onSubmit = () => {
    Keyboard.dismiss();
    let emailError = '', error = false
    const { email } = this.state;
    const {
      navigation: { dispatch, navigate }, login, deviceToken,
    } = this.props;
    const {
      enterEmail,
      enterValidEmail,
    } = Constants.i18n.validations;

    if (_.isEmpty(email.trim())) {
      emailError = enterEmail;
      error = true
    } else if (!Regex.validateEmail(email)) {
      emailError = enterValidEmail
      error = true
    }

    if (error) {
      this.setState({
        emailError,
        errorLabel: ''
      })
    } else {
      const requestObject = {
        ID: 1,
        UserName: email,
      };

      //   login({
      //     callback: () => console.log('welcome'),
      //     data: requestObject,

      //   }), err => {
      //     this.setState({
      //       errorLabel: err
      //     })

      // }
      navigate('Dashboard')
    }
  }

  changeHandler = (state, value) => {
    this.setState({ [state]: value, [state + 'Error']: '' });
  }


  handleScrollView = ref => {
    const context = this;
    const scrollResponder = context.scrollViewRef.current.getScrollResponder();

    context.setTimeout(() => {
      scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
        ref,
        (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 20,
        true,
      );
    }, 300);
  };

  resetScrollView = ref => {
    const context = this;
    const scrollResponder = context.scrollViewRef.current.getScrollResponder();

    context.setTimeout(() => {
      scrollResponder.scrollResponderScrollNativeHandleToKeyboard(ref, 0, true);
    }, 300);
  };

  render() {
    const { email, errorLabel, emailError } = this.state;
    const {
      common: { emailAddress, forgotPass },
      forgotPass: { desciption, sendLink },
      login: { emailId },
    } = Constants.i18n;
    const {
      navigation: { goBack },
    } = this.props;

    return (
      <View style={AuthStyles.container}>
        <Header hideRightIcon={true} onPressBack={() => goBack()} showTitle={true} />
        <Text style={AuthStyles.label}>{forgotPass}</Text>
        <Text style={AuthStyles.description}>{desciption}</Text>
        <View style={AuthStyles.content}>

          <ScrollView
            ref={this.scrollViewRef}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyboardDismissMode={Platform.OS === 'ios' ? 'on-drag' : 'none'}
            keyboardShouldPersistTaps="always">
            {errorLabel !== '' && <Text >{`*${errorLabel}`} </Text>}
            <TextField
              style={AuthStyles.textfiledStyle}
              activeLineWidth={1}
              ref={this.emailRef}
              label={emailId}
              labelFontSize={12}
              value={email}
              onChangeText={text => this.changeHandler('email', text)}
              tintColor={Constants.Colors.GRAY}
              errorColor={Constants.Colors.ERROR}
              error={emailError}
              keyboardType={'email-address'}
              returnKeyType={'next'}
              placeholderTextColor={Constants.Colors.GRAY}
              labelTextStyle={Constants.Colors.BLACK}
              titleTextStyle={Constants.Colors.BLACK}
              labelPadding={15}
              containerStyle={{ marginTop: 60 }}
              textContentType={'emailAddress'}
              autoCapitalize={'none'}
              onFocus={() => {
                this.handleScrollView(findNodeHandle(this.emailRef.current));
              }}
              onBlur={() => {
                this.resetScrollView(findNodeHandle(this.emailRef.current));
              }}
              onSubmitEditing={this.onSubmit}
            />
            <Button
              onPress={this.onSubmit}
              style={AuthStyles.forgotPassbuttonStyle}
              title={sendLink}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
ReactMixin(ForgotPassword.prototype, TimerMixin);

export default ForgotPassword;
