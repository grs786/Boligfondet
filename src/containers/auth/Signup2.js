import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Keyboard,Image } from 'react-native';
import { func, shape } from 'prop-types';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';
import Constants from '../../constants';
import { Header, Button } from '../../components';
import { AuthStyles } from '../../styles';

const checkBoxType = [
  {
    id: 0,
    value: false,
    label: 'No'

  },
  {
    id: 1,
    value: true,
    label: 'Yes'
  },
]

class Signup2 extends PureComponent {

  state = {
    enableFingerPrint: false,
    id: 0
  }

  onSelectType = (item, id) => {
    this.setState({ id: id, enableFingerPrint: item.value })
  }

  onSubmit = () => {
    Keyboard.dismiss();
    const {
      navigation: { navigate },
    } = this.props;

    navigate('Signup3')

  }


  render() {
    const { navigation: { goBack } } = this.props;
    const {
      signup: { enableFignerPrintText },
      common: { textHere },
      button: { next },
      header: { step2 }
    } = Constants.i18n;

    return (
      <ScrollView style={AuthStyles.container} showsVerticalScrollIndicator={false}>
        <Header hideRightIcon={true} onPressBack={() => goBack()} showRightTitle rightTitle={step2} showTitle={true}  />
        <View style={AuthStyles.subContainer}>
          <Image source={Constants.Images.bubble} style={AuthStyles.bubbleIcon} resizeMode='contain'></Image>
          <View style={AuthStyles.logoContainer}>
            <Constants.Images.EmptyScan />
          </View>
          <Text style={AuthStyles.enableFingerText}>{enableFignerPrintText}</Text>

        </View>
        <View style={AuthStyles.checkBoxStyle}>
          {checkBoxType.map((item, id) =>
            <View>
              <TouchableOpacity onPress={() => this.onSelectType(item, id)} >
                {id == !this.state.enableFingerPrint ? <Constants.Images.CheckBox height={27} width={27} /> : <Constants.Images.CheckBoxActive height={27} width={27} />}
              </TouchableOpacity>
              <Text style={AuthStyles.lableText}>{item.label}</Text>
            </View>
          )}
        </View>
        <Button
          onPress={this.onSubmit}
          style={AuthStyles.signup2buttonStyle}
          title={next}
        />
      </ScrollView>
    );
  }
}
ReactMixin(Signup2.prototype, TimerMixin);

export default Signup2;

