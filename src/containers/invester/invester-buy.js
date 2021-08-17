import React from 'react';
import { View, Text, Image, findNodeHandle, ScrollView, Keyboard, TouchableOpacity, } from 'react-native';
import Constants from '../../constants';
import { Button } from '../../components';
import styles from './invester-buy-styles';
import { goBack } from '../../actions/nav-action-types';
import * as userActions from '../../actions/user-actions-types';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';
import _ from 'lodash';
import StaticData from '../../utilities/static-data'


class InvesterBuy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: '',
            quantutyError: '',
            errorLabel: '',
        }
    }

    quantityRef = React.createRef();
    scrollViewRef = React.createRef();

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

    onSubmit = () => {
        Keyboard.dismiss();
        let quantutyError = '', error = false
        const { quantity } = this.state;
        const {
            navigation: { dispatch, navigate }, login, deviceToken,
        } = this.props.props;
        const {
            enterQuantity,
        } = Constants.i18n.validations;

        if (_.isEmpty(quantity.trim())) {
            quantutyError = enterQuantity;
            error = true
        }
        if (error) {
            this.setState({
                quantutyError,
                errorLabel: ''
            })
        } else {
            const requestObject = {
                ID: 1,
                quantity: quantity
            };

             err => {
                this.setState({
                    errorLabel: err
                })

            }
            navigate('Invester')
        }
    }
    changeHandler = (state, value) => {
        this.setState({ [state]: value, [state + 'Error']: '' });
    }


    render() {
        const { invest } = Constants.i18n.dashboard;
        // const { data } = this.props.navigation.state.params;
        const { navigation: { navigate} } = this.props.props;
        console.log('pro>>>',this.props)
        const { quantity, errorLabel, quantutyError } = this.state;

        const {
            button: { buy },
        } = Constants.i18n;
        return (
            <View style={styles.container}>
                {StaticData.propertyDetailData.slice(0,1).map(data=>
                <View>
                <View style={styles.subContainer}>
                    <Text style={styles.text}>{data.title}</Text>
                    <View>
                        <TouchableOpacity style={styles.cardView} 
                        onPress={()=> navigate('MineEllendommer',{data:data})}
                        >
                            <View style={styles.rowContainer}>

                                <Image source={require('../../assets/images/property.jpeg')} style={styles.icon} />
                                <View style={styles.itemContainer}>
                                    <View style={styles.keyValueContainer}>
                                        <Text style={styles.key}>{'Verdi'}</Text>
                                        <Text style={styles.value}>{data.value}</Text>
                                    </View>
                                    <View style={styles.keyValueContainer}>
                                        <Text style={styles.key}>{'Utbytte/m'}</Text>
                                        <Text style={styles.value}>{data.value}</Text>
                                    </View>
                                    <View style={styles.keyValueContainer}>
                                        <Text style={styles.key}>{'Endring'}</Text>
                                        <Text style={styles.value}>{data.value}</Text>
                                    </View>
                                    <View style={styles.keyValueContainer}>
                                        <Text style={styles.key}>{'Aksjekurs'}</Text>
                                        <Text style={styles.value}>{data.value}</Text>
                                    </View>
                                </View>
                            </View>
                            </TouchableOpacity>
                            {errorLabel !== '' && <Text >{`*${errorLabel}`} </Text>}
                        <TextField
                            activeLineWidth={1}
                            ref={this.quantityRef}
                            label={'Quantity'}
                            labelFontSize={12}
                            value={quantity}
                            onChangeText={text => this.changeHandler('quantity', text)}
                            tintColor={Constants.Colors.GRAY}
                            errorColor={Constants.Colors.ERROR}
                            error={quantutyError}
                            keyboardType={'email-address'}
                            returnKeyType={'next'}
                            placeholderTextColor={Constants.Colors.GRAY}
                            labelTextStyle={Constants.Colors.BLACK}
                            titleTextStyle={Constants.Colors.BLACK}
                            labelPadding={15}
                            containerStyle={{ marginBottom: 15, marginTop: 10 }}
                            textContentType={'emailAddress'}
                            autoCapitalize={'none'}
                            // onFocus={() => {
                            //   this.handleScrollView(findNodeHandle(this.quantityRef.current));
                            // }}
                            // onBlur={() => {
                            //   this.resetScrollView(findNodeHandle(this.quantityRef.current));
                            // }}
                            onSubmitEditing={this.onSubmit}
                        />
                        <View style={styles.bottomView}>
                            <Text style={styles.keys}>{'Tilgjengelig for kjop'}</Text>
                            <Text style={styles.values}>{'NOK 1 536 000'}</Text>
                        </View>
                        <View style={styles.bottomView}>
                            <Text style={styles.keys}>{'Tilgjengelig for kjop'}</Text>
                            <Text style={styles.values}>{'NOK 1 536 000'}</Text>
                        </View>
                    </View>

                    <Button
                        onPress={this.onSubmit}
                        style={styles.buttonStyle}
                        title={buy}
                    />
                    <Text style={styles.bottomText}>{'Avtale detailjer'}</Text>
                </View>
                </View>
                )}
                
            </View>
        )
    }
}

export default connect(
    null,
    {
    login: userActions.login,
    }
    
)(InvesterBuy);



