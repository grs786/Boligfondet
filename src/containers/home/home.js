import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';
import { arrayOf, shape, string, func } from 'prop-types';
import { connect } from 'react-redux';
import { Header, Rows, NoRecordFound,BarChart} from '../../components';
import Constants from '../../constants';
import * as userActions from '../../actions/user-actions-types';
import styles from './home-styles';
import StaticData from '../../utilities/static-data';
// import { LineChart, XAxis, Grid, BarChart } from 'react-native-svg-charts'
import Carousel, { Pagination } from 'react-native-snap-carousel' // 3.6.0
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph'
import {
  // LineChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Defs, LinearGradient, Stop } from 'react-native-svg'
import { LineChart, Grid } from 'react-native-svg-charts'


const linearData = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0
    }
  }

   Gradient = () => (
    <Defs key={'gradient'}>
        <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
            <Stop offset={'0%'} stopColor={Constants.Colors.PRIMARY_COLOR}/>
            <Stop offset={'100%'} stopColor={Constants.Colors.PRIMARY_COLOR}/>
        </LinearGradient>
    </Defs>
)


  renderComponent = ({ item }) => {
    const data = [
      { label: 'Jan',  value: 500,  bottomLabel:'1ar', status:0 },
      { label: 'Feb',  value: 312,  bottomLabel:'6m',  status:1 },
      { label: 'Mar',  value: 424,  bottomLabel:'12m', status:1 },
      { label: 'Apr',  value: 745,  bottomLabel:'3ar', status:0 },
      { label: 'May',  value: 89 ,  bottomLabel:'1ar', status:1 },
      { label: 'Jun',  value: 434 , bottomLabel:'5ar', status:1 },
      { label: 'July', value: 634 , status:0 },
     
    ]
    const fill = Constants.Colors.PRIMARY_COLOR
    const data1 = [5, 8, 6, 7]
      .map((value) => ({ value }))
    const data2 = [9, 7, 12, 9]
      .map((value) => ({ value }))

  
    const { hi, padinDevident, totalValue } = Constants.i18n.dashboard;
    switch (this.state.activeSlide) {
      case 0:
        return (
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.subConatiner} >
              <Text style={styles.titleText}>{hi + ' ' + item.title}</Text>
              <View style={styles.topContainer}>
                <Text style={styles.itemKey}>{padinDevident}</Text>
                <View style={styles.rowContainer}>
                  <Text style={styles.itemValue}>{'+83 70'}</Text>
                </View>
                <View style={styles.rowContainer1}>
                  <Text style={styles.itemValue}>{'+2.64%'}</Text>
                </View>
              </View>
              <View style={styles.secondTopContainer}>
                <Text style={styles.itemKey}>{'Awkast Aksjer / ar'}</Text>
                <View style={styles.rowContainer}>
                  <Text style={styles.itemValue}>{'+83 70'}</Text>
                </View>
                <View style={styles.rowContainer1}>
                  <Text style={styles.itemValue}>{'+2.64%'}</Text>
                </View>
              </View>
              <View style={styles.secondTopContainer}>
                <View>
                  <Text style={styles.titleText1}>{totalValue}</Text>

                  <Text style={styles.itemValue1}>{'3 382 000 NOK · +9.42%'}</Text>
                </View>
                <Constants.Images.LogoHeader style={styles.iconStyle} />
              </View>
            </View>
          </TouchableOpacity>
        );
        break;

      case 1:
        const barData = [
        {
          data: data1,
          svg: {
            fill: Constants.Colors.PRIMARY_COLOR,
            x: -10,
  
          },
        },
        {
          data: data2,
          svg: {
            fill: Constants.Colors.LIGHT_GREEN,
  
          },
        },
      ]
        return (
          <View style={styles.barChatContainer}>
            <View style={styles.barChatSubContainer}>
              <Text style={styles.textInfo}>{'2.6 %'}</Text>
              <Text style={styles.textInfo1}>{'84,375'}</Text>
            </View>
           <BarChart data={data} round={100} unit="€"/>

          </View>

        )
        break;
      case 2:
        return (
          <LineChart
          style={ { height: 200 } }
          data={ linearData }
          contentInset={ { top: 20, bottom: 20 } }
          svg={{
              strokeWidth: 2,
              stroke: 'url(#gradient)',
          }}
      >
          <Grid/>
        {this.Gradient()}
      </LineChart>
        )
        break;
    }

  }

  ListEmptyComponent = () => (
    <TouchableOpacity activeOpacity={0.7}>
      <Text>No Data Found</Text>
    </TouchableOpacity>
  )

  SnapItemData = (index) => {
    const Id = StaticData.propertyDetailData[index].id;
    this.setState({ activeSlide: index })
      ;
  }


  renderItem = ({ item }) => {
    return (
      <Rows
        title={item.title}
        icon={item.icon}
        value={item.value}
        rightIcon={item.status == 0 ? <Constants.Images.ArrowDown /> : <Constants.Images.ArrowUp />}
        isShowBottomView
      />
    )
  }

  render() {

    const { myProperty, viewAll, message, desciption, noRecord } = Constants.i18n.dashboard;


    return (
      <View style={styles.container}>
        <Header iconName={Constants.Images.logoHeader}
          leftIconStyle={styles.leftIconStyle}
          style={styles.headerStyle}
          rightIconName={Constants.Images.drawr}
          rightIconStyle={styles.rightIconStyle} />
          {StaticData.propertyDetailData ?
          <View>
           <View style={styles.crouselContainer}>
          <Carousel
            ref={ ref => this.carouselRef = ref }
            data={ StaticData.propertyDetailData }
            renderItem={this.renderComponent}
            onSnapToItem={this.SnapItemData}
            sliderWidth={Constants.BaseStyle.DEVICE_WIDTH}
            itemWidth={Constants.BaseStyle.DEVICE_WIDTH - 35}
            slideStyle={{ width : Constants.BaseStyle.DEVICE_WIDTH - 35 }}
          />
          </View>
        <View style={styles.paginationMainView}>
        <Pagination
         dotsLength={3}
          renderDots={ activeIndex => (
            StaticData.dotIcons.map((screen, i) => (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.iconMainView}
                key={ i }
                onPress={() => {
                  this.carouselRef._snapToItem(this.carouselRef._getPositionIndex(i));
                }}
              >
                <Image source={screen.iconActive} style={styles.iconView}/>
               
              </TouchableOpacity>
            ))
          )}
          activeDotIndex={ this.state.activeSlide }
        />
        </View>
        </View>: <View style={styles.norecordContainer}><Text style={styles.noRecordText}>{noRecord}</Text></View>}
        <View style={styles.titleView}>
          <Text style={styles.title} >{myProperty}</Text>
           {StaticData.propertyDetailData.length ? <TouchableOpacity>
            <Text style={styles.viewAll} >{viewAll}</Text>
          </TouchableOpacity>:null}
        </View>

        <FlatList
          style={styles.container}
          data={StaticData.propertyDetailData}
          renderItem={this.renderItem}
          keyExtractor={(item => item.id)}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<NoRecordFound icon={<Constants.Images.EmptyInvest/>} message={message} description={desciption}  />}
        />
      </View>
    );
  }
}


ReactMixin(Home.prototype, TimerMixin);


export default Home;

