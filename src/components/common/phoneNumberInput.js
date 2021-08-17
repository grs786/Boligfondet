import React from 'react';
import { Platform, Text, StyleSheet, View } from 'react-native';
import Constants from '../../constants';
import { func } from 'prop-types';
import PhoneInput from "../../../modified_modules/react-native-phone-input"
import TextInput from "./text-input"

const isIOS = Platform.OS == "ios"

const styles = StyleSheet.create({

  phoneInputMainView: {
    flexDirection: 'row',
    width: "95%",
    alignSelf: 'center',
  },
  phoneInputStyle: {
    borderBottomColor: Constants.Colors.GRAY,
    borderBottomWidth: 1,
    // height: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 7,
    marginVertical: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1.1, 
    width: '20%',
    marginTop: isIOS ? (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 30 : (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 4.8,
    alignItems:'center',
  },
  numberInput: {
    width: "80%",
  },
  phoneInput: {
    width: "100%",
    alignSelf: 'center',
    borderBottomColor: Constants.Colors.BLACK,  

  },
  warningText: {
    color: Constants.Colors.ERROR,
    // ...Constants.Fonts.Text.regular,
    position: 'absolute',
    left: 65,
    top: 65
  },

})

const PhoneNumberInput = (props) => {
  const { phoneNumber, returnCountryCode, onChangeNumber, isValidNumber, } = props
  return (
    <View style={styles.phoneInputMainView}>
      <PhoneInput
        style={styles.phoneInputStyle}
        // ref={this.phone}
        initialCountry="in"
        onSelectCountry={(val) => returnCountryCode(val.dialCode)}
      />
      <View style={styles.numberInput}>
        <TextInput
          label={"Phone Number"}
          keyboardType={"number-pad"}
          value={phoneNumber}
          onChangeText={onChangeNumber}
          containerStyle={styles.phoneInput}
        />
      </View>
      {/* {phoneNumber?.length > 0 && !isValidNumber && <Text style={styles.warningText}>Not valid number</Text>} */}

    </View>
  )
}


PhoneNumberInput.propTypes = {
  onChangeNumber: func.isRequired,
};
PhoneNumberInput.defaultProps = {
  onChangeNumber: null,
};

export default PhoneNumberInput;