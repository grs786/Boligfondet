import React from 'react';
import { View,Text, ScrollView } from 'react-native';
import { Tabs,Header } from '../../components';
import InvesterBuy from './invester-buy';
import Constants from '../../constants';
import styles from './invester-tab-styles';

export class Sell extends React.Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text>Sell Screen</Text>
            </View>
        )
    }
}


export default class InvesterTab extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        const { navigation: { goBack, navigate} } = this.props;
        console.log('pro',this.props)
        const { invest } = Constants.i18n.dashboard;
        const { data } = this.props.navigation.state.params
        return (
          <View style={styles.container}>
             <Header showTitle={true}
                    style={styles.headerStyle}
                    onPressBack={() => goBack()}
                    text={`${invest + data.title }`}
                    textStyle={styles.textStyle} 
                    /> 
                    <ScrollView>
            <Tabs
              style={{alignItems:'center'}}
              tab1Heading={'Buy'}
              tab2Heading={'Sell'}
              tab1Content={< InvesterBuy props={this.props}/>}
              tab2Content={<Sell />}
            />
            </ScrollView>
          </View>
        );
      }
}