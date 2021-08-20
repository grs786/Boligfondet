import React from 'react';
import {
  Keyboard,
  findNodeHandle,
  View,
  Image,
  ScrollView,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';
import _ from 'lodash';
import {func, shape} from 'prop-types';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';
import { connect } from 'react-redux';
import {ToastActionsCreators} from 'react-native-redux-toast';
import Regex from '../../utilities/Regex';
import Constants from '../../constants';
import {AuthStyles} from '../../styles';
import {Button, TextInput,Header} from '../../components';
import * as userActions from '../../actions/user-actions-types';
import { TextField } from 'react-native-material-textfield';

class Login extends React.Component {
  static propTypes = {
    navigation: shape({
      dispatch: func.isRequired,
      navigate: func.isRequired,
    }).isRequired,
  };

  state = {
    password: '',
    email: '',
    emailError: '',
    passwordError: '',
    errorLabel: '',
  };

  usernameRef = React.createRef();

  passwordRef = React.createRef();

  scrollViewRef = React.createRef();

  changeHandler = (state, value) => {
    this.setState({ [state]: value, [state + 'Error']: '' });
  }

  onSubmit = () => {
    Keyboard.dismiss();
    let emailError = '', passwordError = '', error = false
    const {email, password} = this.state;
    const {
      navigation: {dispatch, navigate},login,deviceToken,
    } = this.props;
    const {
      enterEmail,
      enterValidEmail,
      enterPassword,
      invalidPassword,
    } = Constants.i18n.validations;

    if (_.isEmpty(email.trim())) {
      emailError = enterEmail;
      error = true
    } else if (!Regex.validateEmail(email)) {
      emailError = enterValidEmail
      error = true
    }
    if (_.isEmpty(password.trim())) {
      passwordError = enterPassword;
      error = true
    }

    if (error) {
      this.setState({
        emailError,
        passwordError,
        errorLabel: ''
      })
    } else {
      const requestObject = {
        ID:1,
        UserName: email,
        Password:password,
      };
  
      login({
        callback: () => console.log('welcome'),
        data: requestObject,
        
      }), err => {
        this.setState({
          errorLabel: err
        })
      
    }
    navigate('Dashboard')
  }
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
    const {email, password, errorLabel, emailError, passwordError} = this.state;
    const {
      navigation: { navigate, goBack },
    } = this.props;
    const {
      common: { forgotPass,textHere },
      login: { emailId, passwordText, login },
      signup: { signup, createAccount },
    } = Constants.i18n;

    return (
      <View style={AuthStyles.container}>
        <Header hideRightIcon={true} onPressBack={()=> goBack()} showTitle={true} />
        <View style={AuthStyles.content}>
          <ScrollView
            ref={this.scrollViewRef}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyboardDismissMode={Platform.OS === 'ios' ? 'on-drag' : 'none'}
            keyboardShouldPersistTaps="always">
              <View style={AuthStyles.bubbleContainer}>
              <Image source={Constants.Images.bubble} style={AuthStyles.bubbleIcon} resizeMode='contain'></Image>
              <Constants.Images.LogoLogin style={AuthStyles.logoIcon}/>
             {errorLabel !== '' && <Text >{`*${errorLabel}`} </Text>}
             </View>
            <TextField
            activeLineWidth={1}
            ref={this.usernameRef}
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
            containerStyle={{ marginBottom: 15,marginTop:60 }}
            textContentType={'emailAddress'}
            autoCapitalize={'none'}
            onFocus={() => {
              this.handleScrollView(findNodeHandle(this.usernameRef.current));
            }}
            onBlur={() => {
              this.resetScrollView(findNodeHandle(this.usernameRef.current));
            }}
            onSubmitEditing={() => this.passwordRef.current.focus()}
          />
           <TextField
            activeLineWidth={1}
            ref={this.passwordRef}
            label={passwordText}
            labelFontSize={12}
            value={password}
            secureTextEntry={true}
            onChangeText={text => this.changeHandler('password', text)}
            tintColor={Constants.Colors.GRAY}
            errorColor={Constants.Colors.ERROR}
            error={passwordError}
            keyboardType={'email-address'}
            returnKeyType={'next'}
            placeholderTextColor={Constants.Colors.GRAY}
            labelTextStyle={Constants.Colors.BLACK}
            titleTextStyle={Constants.Colors.BLACK}
            labelPadding={15}
            containerStyle={{ marginBottom: 15 }}
            textContentType={'emailAddress'}
            autoCapitalize={'none'}
            onFocus={() => {
              this.handleScrollView(findNodeHandle(this.passwordRef.current));
            }}
            onBlur={() => {
              this.resetScrollView(findNodeHandle(this.passwordRef.current));
            }}
            onSubmitEditing={this.onSubmit}
          />
            <TouchableOpacity
              hitSlop={Constants.BaseStyle.HIT_SLOP}
              onPress={() => navigate('ForgotPassword')}
              activeOpacity={0.9}>
              <Text style={AuthStyles.textDecorationLineStyle}>
                {`${forgotPass}?`}
              </Text>
            </TouchableOpacity>
            <Button
              onPress={this.onSubmit}
              style={AuthStyles.buttonStyle}
              title={login}
            />
            <View style={AuthStyles.bottomViewStyle}>
            <TouchableOpacity
              hitSlop={Constants.BaseStyle.HIT_SLOP}
              onPress={() => navigate('Signup1')}
              activeOpacity={0.9}>
              <Text style={AuthStyles.extDecorationLineStyle}>
                {createAccount}
              </Text>
            </TouchableOpacity>
            <Text style={AuthStyles.signupLineStyle}>{signup}</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
ReactMixin(Login.prototype, TimerMixin);

export default connect(
  ({ user: { deviceToken } }) => ({ deviceToken }),
  {
    login: userActions.login,
  }
)(Login);

