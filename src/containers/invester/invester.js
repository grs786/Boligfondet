import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';
import { arrayOf, shape, string, func } from 'prop-types';
import { connect } from 'react-redux';
import { Header, Rows, NoRecordFound , SearchTextInput } from '../../components';
import Constants from '../../constants';
import * as userActions from '../../actions/user-actions-types';
import styles from '../home/home-styles';
import StaticData from '../../utilities/static-data';


class Invester extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          data: [...StaticData.propertyDetailData],
          search:'',
        }
      }
    

    renderItem = ({ item }) => {
        const { navigation : { navigate }} = this.props;
        return (
            <Rows
                title={item.title}
                icon={item.icon}
                value={item.value}
                rightIcon={item.status == 0 ? <Constants.Images.ArrowDown /> : <Constants.Images.ArrowUp />}
                onPress={()=>navigate('InvesterTab',{ data:item })}
            />
        )
    }

    onSearch = text => {
        const newData = StaticData.propertyDetailData?.filter(item => {
          const itemData = item?.title.toUpperCase()
          const textData = text?.toUpperCase();
          this.setState({ search: text })
          return itemData?.indexOf(textData) > -1;
        });
        this.setState({ data: newData })
      };
  

    render() {

        const { investProperty, noRecord, placeHolder } = Constants.i18n.dashboard;
        const { data,search } = this.state;

        return (
            <View style={styles.container}>
                <Header 
                    iconName={Constants.Images.logoHeader}
                    leftIconStyle={styles.leftIconStyle}
                    style={styles.headerStyle}
                    rightIconName={Constants.Images.drawr}
                    rightIconStyle={styles.rightIconStyle} />
                     <View style={styles.titleView}>
                     <Text style={styles.title} >{investProperty}</Text>
                     </View>
                <SearchTextInput placeholder={placeHolder} value={search} onChangeText={this.onSearch} />

                <FlatList
                    style={styles.container}
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={(item => item.id)}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={<NoRecordFound message={noRecord} />}
                />
            </View>
        );
    }
}

ReactMixin(Invester.prototype, TimerMixin);

export default Invester;

