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
import { func, shape } from 'prop-types';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';
import { ToastActionsCreators } from 'react-native-redux-toast';
import Regex from '../../utilities/Regex';
import Constants from '../../constants';
import { AuthStyles } from '../../styles';
import { Button, Header, PhoneNumberInput } from '../../components';
import { TextField } from 'react-native-material-textfield';

class Signup1 extends React.Component {
  static propTypes = {
    navigation: shape({
      dispatch: func.isRequired,
      goBack: func.isRequired,
      navigate: func.isRequired,
    }).isRequired,
  };

  state = {
    fullName: '',
    fullNameError: '',
    emailError: '',
    passwordError: '',
    email: '',
    countryCode: '91',
    phoneNumber: '',
    isValidNumber: false,
    password: '',
    zipCode: '',
    zipCodeError: '',
    getEmailUpdate: false,
    termsCondition: false,
    termsConditionError: '',
    errorLabel: ''
  };

  fullnameRef = React.createRef();

  emailRef = React.createRef();

  zipCodeRef = React.createRef();

  passwordRef = React.createRef();

  scrollViewRef = React.createRef();

  changeHandler = (state, value) => {
    this.setState({ [state]: value, [state + 'Error']: '' });
  }

  onSubmit = () => {
    Keyboard.dismiss();
    let emailError = '', passwordError = '', fullNameError = '', zipCodeError = '', termsConditionError = '', error = false

    const { fullName, email, password, zipCode, termsCondition, } = this.state;
    const {
      navigation: { navigate },
    } = this.props;
    const {
      enterEmail,
      enterValidEmail,
      enterPassword,
      invalidPassword,
      enterFullName,
      enterZipCode,
      selectTerms,
    } = Constants.i18n.validations;

    if (_.isEmpty(fullName.trim())) {
      fullNameError = enterFullName;
      error = true
    }

    if (_.isEmpty(email.trim())) {
      emailError = enterEmail;
      error = true
    } else if (!Regex.validateEmail(email)) {
      emailError = enterValidEmail
      error = true
    }

    if (_.isEmpty(zipCode.trim())) {
      zipCodeError = enterZipCode;
      error = true
    }
    if (_.isEmpty(password.trim())) {
      passwordError = enterPassword;
      error = true
    }

    if (termsCondition != true) {
      return;
    }

    if (error) {
      this.setState({
        fullNameError,
        emailError,
        zipCodeError,
        passwordError,
        termsConditionError,
        errorLabel: ''
      })
    } else {
      const requestObject = {
        ID: 1,
        UserName: email,
        Password: password,
      };

      //   signup({
      //     callback: () => console.log('welcome'),
      //     data: requestObject,

      //   }), err => {
      //     this.setState({
      //       errorLabel: err
      //     })

      // }
      navigate('Signup2')
    }
  };

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

  onChangeNumber = (val) => {
    this.setState({ phoneNumber: val, isValidNumber: this.phone?.isValidNumber(val) })

  }

  render() {
    const { fullName, email, password, fullNameError, emailError, getEmailUpdate,
      zipCode, passwordError, termsCondition, phoneNumber, isValidNumber,
      countryCode, zipCodeError, errorLabel } = this.state;
    const {
      navigation: { navigate, goBack },
    } = this.props;
    const {
      signup: { personalDetails, fullnameLabel, getupdatefromEmail, zipCideLabel, alreadyHaveAccount },
      login: { emailId, passwordText, login },
      button: { next },
      validations: { selectTerms },
      header: { step1 }
    } = Constants.i18n;

    return (
      <View style={AuthStyles.container}>
        <Header hideRightIcon={true} onPressBack={()=> goBack()} showRightTitle rightTitle={step1}  showTitle={true} />
        <Text style={AuthStyles.label}>{personalDetails}</Text>
        <View style={AuthStyles.content}>
          <ScrollView
            ref={this.scrollViewRef}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyboardDismissMode={Platform.OS === 'ios' ? 'on-drag' : 'none'}
            keyboardShouldPersistTaps="always">
            {errorLabel !== '' && <Text >{`*${errorLabel}`} </Text>}
            <TextField
              activeLineWidth={1}
              ref={this.fullnameRef}
              label={fullnameLabel}
              labelFontSize={12}
              value={fullName}
              onChangeText={text => this.changeHandler('fullName', text)}
              tintColor={Constants.Colors.GRAY}
              errorColor={Constants.Colors.ERROR}
              error={fullNameError}
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
                this.handleScrollView(findNodeHandle(this.fullnameRef.current));
              }}
              onBlur={() => {
                this.resetScrollView(findNodeHandle(this.fullnameRef.current));
              }}
              onSubmitEditing={() => this.emailRef.current.focus()}
            />
            <TextField
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
              containerStyle={{ marginBottom: 15 }}
              textContentType={'emailAddress'}
              autoCapitalize={'none'}
              onFocus={() => {
                this.handleScrollView(findNodeHandle(this.fullnameRef.current));
              }}
              onBlur={() => {
                this.resetScrollView(findNodeHandle(this.fullnameRef.current));
              }}
              onSubmitEditing={() => this.zipCodeRef.current.focus()}
            />
            <View style={AuthStyles.getUpdate}>
              <TouchableOpacity onPress={() => this.setState({ getEmailUpdate: !getEmailUpdate })}>
                {!getEmailUpdate ? <Constants.Images.CheckBox height={18} width={18} /> : <Constants.Images.CheckBoxActive height={18} width={18} />}</TouchableOpacity>
              <Text style={AuthStyles.getUpdateText}>{getupdatefromEmail}</Text>
            </View>

            <PhoneNumberInput
              phoneNumber={phoneNumber}
              onChangeNumber={this.onChangeNumber}
              isValidNumber={isValidNumber}
              returnCountryCode={(dialCode) => this.setState({ countryCode: dialCode })} />

            <TextField
              activeLineWidth={1}
              ref={this.zipCodeRef}
              label={zipCideLabel}
              labelFontSize={12}
              value={zipCode}
              onChangeText={text => this.changeHandler('zipCode', text)}
              tintColor={Constants.Colors.GRAY}
              errorColor={Constants.Colors.ERROR}
              error={zipCodeError}
              keyboardType={'email-address'}
              returnKeyType={'next'}
              // placeholder={'Enter here'}
              placeholderTextColor={Constants.Colors.GRAY}
              labelTextStyle={Constants.Colors.BLACK}
              titleTextStyle={Constants.Colors.BLACK}
              labelPadding={15}
              containerStyle={{ marginBottom: 15 }}
              textContentType={'emailAddress'}
              autoCapitalize={'none'}
              onFocus={() => {
                this.handleScrollView(findNodeHandle(this.fullnameRef.current));
              }}
              onBlur={() => {
                this.resetScrollView(findNodeHandle(this.fullnameRef.current));
              }}
              onSubmitEditing={() => this.passwordRef.current.focus()}
            />
            <TextField
              activeLineWidth={1}
              ref={this.passwordRef}
              label={passwordText}
              labelFontSize={12}
              value={password}
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
              containerStyle={{ marginBottom: 20 }}
              textContentType={'emailAddress'}
              autoCapitalize={'none'}
              onFocus={() => {
                this.handleScrollView(findNodeHandle(this.passwordRef.current));
              }}
              onBlur={() => {
                this.resetScrollView(findNodeHandle(this.passwordRef.current));
              }}
              renderRightAccessory={() => <Constants.Images.Back />}
            // onSubmitEditing={() => this.passwordRef.current.focus()}
            />
            <View style={AuthStyles.getUpdate}>
              <TouchableOpacity onPress={() => this.setState({ termsCondition: !termsCondition })}>
                {!termsCondition ? <Constants.Images.CheckBox height={18} width={18} /> : <Constants.Images.CheckBoxActive height={18} width={18} />}</TouchableOpacity>
              <Text style={AuthStyles.termsText}>{'I accept'}</Text>
              <Text style={[AuthStyles.termsText, { color: Constants.Colors.PRIMARY_COLOR }]}>{' Terms & Conditions'}</Text>
              <Text style={AuthStyles.termsText}>{' of company'}</Text>
            </View>
            {!termsCondition ? <Text style={AuthStyles.acceptTerms} >{selectTerms} </Text> : null}
            <Button
              onPress={this.onSubmit}
              style={AuthStyles.buttonStyle}
              title={next}
            />
            <View style={AuthStyles.bottomViewStyle}>
              <TouchableOpacity
                hitSlop={Constants.BaseStyle.HIT_SLOP}
                onPress={() => navigate('Signup2')}
                activeOpacity={0.9}>
                <Text style={AuthStyles.extDecorationLineStyle}>
                  {alreadyHaveAccount}
                </Text>
              </TouchableOpacity>
              <Text style={AuthStyles.signupLineStyle}>{' ' + login}</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
ReactMixin(Signup1.prototype, TimerMixin);

export default Signup1;
