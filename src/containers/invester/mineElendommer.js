import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableHighlight, ScrollView, Alert, FlatList, Dimensions } from 'react-native';
import Constants from '../../constants';
import { Header, CardCarousel, BarChart } from '../../components';
import styles from './myElendommer-styles';
import * as userActions from '../../actions/user-actions-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import ImageSlider from 'react-native-image-slider';
import Slideshow from 'react-native-image-slider-show';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import StaticData from '../../utilities/static-data';
import { Defs, LinearGradient, Stop } from 'react-native-svg'
import { LineChart, Grid, PieChart  } from 'react-native-svg-charts'
import Carousel, { Pagination } from 'react-native-snap-carousel' // 3.6.0

const linearData = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

class MineElendommer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSlice: {
        label: '',
        value: 0
      },
      labelWidth: 0,
      position: 1,
      interval: null,
      dataSource: [
        {
          url: 'https://i.imgur.com/UYiroysl.jpg',
          id: 0,
          index: 0
        }, {
          url: 'https://i.imgur.com/UPrs1EWl.jpg',
          id: 1,
          index: 1
        }, {
          url: 'https://i.imgur.com/MABUbpDl.jpg',
          id: 2,
          index: 2
        },
      ],
      activeSlide: 0,
      locations: {
        latitude: 0,
        longitude: 0,
      },

      secondActiveSlides: 0
    };

  }

  Gradient = () => (
    <Defs key={'gradient'}>
        <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
            <Stop offset={'0%'} stopColor={Constants.Colors.PRIMARY_COLOR}/>
            <Stop offset={'100%'} stopColor={Constants.Colors.PRIMARY_COLOR}/>
        </LinearGradient>
    </Defs>
)


  componentDidMount() {
    this.getCurrentLocation();
  }

  getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log('position', position)
        const locations = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        this.setState({ locations });
      },
    );


  }


  renderCardView = () => {
    const { data } = this.props.navigation.state.params;
    return (
      <View>
        <View style={styles.cardView}>
          <View style={styles.rowContainers}>
            <Image source={require('../../assets/images/property.jpeg')} style={styles.icon} />
            <View style={styles.itemContainer}>
              <View style={styles.keyValueContainer}>
                <Text style={styles.key}>{'Verdi'}</Text>
                <Text style={styles.value}>{data.value}</Text>
              </View>
              <View style={styles.keyValueContainer}>
                <Text style={styles.key}>{'Utbytte/m'}</Text>
                <Text style={styles.value}>{'11720'}</Text>
              </View>
              <View style={styles.keyValueContainer}>
                <Text style={styles.key}>{'Endring'}</Text>
                <Text style={styles.value}>{'+6.30%'}</Text>
              </View>
              <View style={styles.keyValueContainer}>
                <Text style={styles.key}>{'Aksjekurs'}</Text>
                <Text style={styles.value}>{'62'}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }

  renderBulderComponent = () => {
    return (
      <View style={styles.carouselMainContainer}>
        <Image source={require('../../assets/images/property.jpeg')} />
      </View>
    );

  }

  renderSmallCardView = () => {
    return (
      <View style={styles.smallCardView}>
        <View style={styles.cardContainer}>
          <Text style={styles.textStyles}>{'Mitte Utbytte/m'}</Text>
          <Constants.Images.Home style={styles.iconStyle} height={30} width={30} />
          <Text style={styles.textStyles1}>{'%'}</Text>
          <View style={styles.bottomViewStyle}>
            <Text style={styles.valueText}>{'36'}</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.textStyles}>{'Mitte Utbytte/m'}</Text>
          <Constants.Images.CardActive style={styles.iconStyle} height={30} width={30} />
          <Text style={styles.textStyles1}>{'NDK'}</Text>
          <View style={styles.bottomViewStyle}>
            <Text style={styles.valueText}>{'8474'}</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.textStyles}>{'Mitte Utbytte/m'}</Text>
          <Constants.Images.Stock style={styles.iconStyle} height={30} width={30} />
          <Text style={styles.textStyles1}>{'NDK'}</Text>
          <View style={styles.bottomViewStyle}>
            <Text style={styles.valueText}>{'746465'}</Text>
          </View>
        </View>

      </View>
    )
  }

  SnapItemData = (index) => {
    const Id = this.state.dataSource[index].id;
    this.setState({ activeSlide: index })
      ;
  }

  SnapItemData2 = (index) => {
    const Id = StaticData.propertyDetailData[index].id;
    this.setState({ secondActiveSlides: index })
      ;
  }

  ListEmptyComponent = () => (
    <TouchableOpacity activeOpacity={0.7}>
      <Text>No Data Found</Text>
    </TouchableOpacity>
  )

  renderLocation = () => {
    const { loaction } = Constants.i18n.dashboard;
    const { locations } = this.state;
    return (
      <View style={styles.locationContainer}>
        <Text style={styles.labelText}>{loaction}</Text>
        <View style={styles.locationStyle}>
          <MapView
            loadingIndicatorColor={Constants.Colors.PRIMARY_COLOR}
            ref={(c) => this.mapView = c} //eslint-disable-line
            //   provider={PROVIDER_GOOGLE}
            style={styles.maps}
            initialRegion={{
              ...locations,
              latitudeDelta: 0.0115,
              longitudeDelta: 0.02121,
            }}
          >
            <Marker.Animated
              coordinate={locations}
              title={'Gauravvaddo, Opp Lane Of Pizza Hut ,Calangute, India'}
            >
              <Constants.Images.Home height={20} width={20} />
            </Marker.Animated>
          </MapView>
        </View>
      </View>
    )
  }

  renderBuilder = () => {
    const { builder } = Constants.i18n.dashboard;
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.labelText}>{builder + ' -12'}</Text>
        <View style={styles.rowStyle}>
          <TouchableOpacity onPress={() => this.buildercarouselRef.snapToPrev()}>
            <Image source={Constants.Images.prevoius} style={styles.imageIcon2} />
          </TouchableOpacity>
          <CardCarousel
            carousel={ref => this.buildercarouselRef = ref}
            mainContainerStyle={styles.carouselStyle}
            itemData={this.state.dataSource}
            activeSlide={this.state.activeSlide}
            SnapItemData={this.SnapItemData}
            renderItem={this.renderBulderComponent}
            ListEmptyComponent={this.ListEmptyComponent}
          />
          <TouchableOpacity onPress={() => this.buildercarouselRef.snapToNext()}>
            <Image source={Constants.Images.next} style={styles.imageIcon} />
          </TouchableOpacity>
        </View>
      </View>

    );
  }


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
                <Constants.Images.LogoHeader style={styles.iconStyles} />
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

  renderAksje = () => {
    return (
      <View style={styles.overSickContainer}>
        <View style={styles.rowItems}>
          <Text style={styles.textTitle}>{'Okonomi'}</Text>
          <View style={styles.rows}>
            <Text style={styles.key1}>{'Leleintekt/m'}</Text>
            <Text style={styles.value1}>{'18 400'}</Text>
          </View>
          <View style={styles.rows}>
            <Text style={styles.key1}>{'Leleintekt/m'}</Text>
            <Text style={styles.value1}>{'18 400'}</Text>
          </View>
          <View style={styles.rows}>
            <Text style={styles.key1}>{'Leleintekt/m'}</Text>
            <Text style={styles.value1}>{'18 400'}</Text>
          </View>
          <View style={styles.rows}>
            <Text style={styles.key1}>{'Leleintekt/m'}</Text>
            <Text style={styles.value1}>{'18 400'}</Text>
          </View>
        </View>
        <View style={styles.rowItems}>
          <Text style={styles.textTitle}>{'Utleie'}</Text>
          <View style={styles.rows}>
            <Text style={styles.key1}>{'Leleintekt/m'}</Text>
            <Text style={styles.value1}>{'18 400'}</Text>
          </View>
          <View style={styles.rows}>
            <Text style={styles.key1}>{'Leleintekt/m'}</Text>
            <Text style={styles.value1}>{'18 400'}</Text>
          </View>
          <View style={styles.rows}>
            <Text style={styles.key1}>{'Leleintekt/m'}</Text>
            <Text style={styles.value1}>{'18 400'}</Text>
          </View>
          <View style={styles.rows}>
            <Text style={styles.key1}>{'Leleintekt/m'}</Text>
            <Text style={styles.value1}>{'18 400'}</Text>
          </View>
        </View>
      </View>
    )
  }

  renderDocuments = ({ item }) => {
    return (
      <View>
        <View style={styles.documentItems}>
          <View style={styles.docSubContainer}>
          <Text style={styles.docTitle}>{item.title}</Text>
            <Constants.Images.Pdf height={35} width={25}/>
          </View>
        </View>
      </View>

    )
  }

  renderInfo = () => {
    return (
      <View style={styles.infoContainer}>
        
        <View style={styles.infoRowContainer}>
          <Text style={styles.infoKey}>{'Aksjekiasse eiendom'}</Text>
          <Text style={styles.infoValue}>{'B'}</Text>
        </View>
        <View style={styles.infoRowContainer}>
          <Text style={styles.infoKey}>{'Antall Aksjer aksjeklass'}</Text>
          <Text style={styles.infoValue}>{'1000'}</Text>
        </View>
        <View style={styles.infoRowContainer}>
          <Text style={styles.infoKey}>{'Antall Aksjer aksjeklass'}</Text>
          <Constants.Images.Pdf height={25} width={25} />
        </View>
      </View>
    )
  }

  render() {
    const { mineelendommer } = Constants.i18n.dashboard;
    const { data } = this.props.navigation.state.params;
    const { navigation: { goBack } } = this.props;
    const { labelWidth, selectedSlice } = this.state;
    const { label, value } = selectedSlice;
    const keys = ['google', 'facebook', 'linkedin', 'youtube', 'Twitter'];
    const values = [15, 25, 35, 45, 55];
    const colors = ['#600080', '#9900cc', '#c61aff', '#d966ff', '#ecb3ff']
    const data1 = keys.map((key, index) => {
      return {
        key,
        value: values[index],
        svg: { fill: colors[index] },
        arc: { outerRadius: (70 + values[index]) + '%', padAngle: label === key ? 0.1 : 0 },
        onPress: () => this.setState({ selectedSlice: { label: key, value: values[index] } })
      }
    })
    const deviceWidth = Dimensions.get('window').width

    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Header showTitle={true}
          style={styles.headerStyle}
          onPressBack={() => goBack()}
          text={`${mineelendommer + ' ' + data.title}`}
          textStyle={styles.textStyle} />
        <View style={styles.subContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.text}>{data.title}</Text>
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={styles.text1}>{'Invest'}</Text>
            </TouchableOpacity>
          </View>
          {this.renderCardView()}
          <Text style={styles.textLabel}>{'En flott 3 roms lelighet sentrait i Oslo.'}</Text>
          <Text style={styles.textLabel}>{'Hey takhoyde samt nyrennovert kjokken og bad'}</Text>
          {this.renderSmallCardView()}
          {this.renderBuilder()}
          {this.renderLocation()}
           <View style={styles.aksjeStyle}>
                      <Text style={[styles.labelText,{top:30}]}>{'Aksje & Utbytte'}</Text>
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
                    </View> 
          <Text style={[styles.labelText, { marginTop: 15 }]}>{'Eirskap'}</Text>
           <PieChart
          style={{ height: 200 }}
          outerRadius={'80%'}
          innerRadius={'45%'}
          data={data1}
        /> 
          <Text
            onLayout={({ nativeEvent: { layout: { width } } }) => {
              this.setState({ labelWidth: width });
            }}
            style={{
              position: 'absolute',
              left: deviceWidth / 2 - labelWidth / 2,
              textAlign: 'center'
            }}>
            {`${label} \n ${value}`}
          </Text>
          <Text style={[styles.labelText, { marginTop: 15 }]}>{'Aksje & Utbytte'}</Text>
          {this.renderAksje()}
          <Text style={[styles.labelText, { marginTop: 15 }]}>{'Documents'}</Text>
          <View style={styles.documentsContainer}>
            <View style={styles.mainTop}>
            <View style={styles.docViewStyle}>
              <Text style={styles.docTitleText}>{'Boligfondet'}</Text>
              <Constants.Images.Detail2 />
            </View>
              <TouchableOpacity onPress={(index) => {
                this.flatRef.scrollToIndex({ animated: true, index: 1 });
              }} style={{ top: 30, marginLeft:10 }}>
                <Image source={Constants.Images.prevoius} style={styles.arrowIcon} />
              </TouchableOpacity>
              <FlatList
                ref={ref => this.flatRef = ref}
                scrollEnabled
                contentContainerStyle={{ bottom: 10 }}
                showsHorizontalScrollIndicator={true}
                horizontal
                data={StaticData.documentsData}
                renderItem={this.renderDocuments} />
              <TouchableOpacity onPress={(index) => { this.flatRef.scrollToIndex({ animated: true, index: 5 }) }} style={styles.nextIcon}>
                <Image source={Constants.Images.next}  style={styles.arrowIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.documentsContainer}>
           
            <View style={styles.mainTop}>
            <View style={styles.docViewStyle}>
              <Text style={styles.docTitleText}>{'Utbytte'}</Text>
              <Constants.Images.Money1 />
            </View>
              <TouchableOpacity onPress={(index) => {
                this.secondflatRef.scrollToIndex({ animated: true, index: 1 });
              }} style={styles.prevIcon}>
                <Image source={Constants.Images.prevoius} style={styles.arrowIcon} />
              </TouchableOpacity>
              <FlatList
                ref={ref => this.secondflatRef = ref}
                scrollEnabled
                contentContainerStyle={{ bottom: 10 }}
                showsHorizontalScrollIndicator={true}
                horizontal
                data={StaticData.documentsData}
                renderItem={this.renderDocuments} />
              <TouchableOpacity onPress={(index) => { this.secondflatRef.scrollToIndex({ animated: true, index: 5 }) }} style={styles.nextIcon}>
                <Image source={Constants.Images.next}  style={styles.arrowIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.documentsContainer}>
           
            <View style={styles.mainTop}>
            <View style={styles.docViewStyle}>
              <Text style={styles.docTitleText}>{'Regnskap'}</Text>
              <Constants.Images.Calculator />
            </View>
              <TouchableOpacity onPress={(index) => {
                this.thirdflatRef.scrollToIndex({ animated: true, index: 1 });
              }} style={{ top: 30, marginLeft:20 }}>
                <Image source={Constants.Images.prevoius} style={styles.arrowIcon} />
              </TouchableOpacity>
              <FlatList
                ref={ref => this.thirdflatRef = ref}
                scrollEnabled
                contentContainerStyle={{ bottom: 10 }}
                showsHorizontalScrollIndicator={true}
                horizontal
                data={StaticData.documentsData}
                renderItem={this.renderDocuments} />
              <TouchableOpacity onPress={(index) => { this.thirdflatRef.scrollToIndex({ animated: true, index: 5 }) }} style={styles.nextIcon}>
                <Image source={Constants.Images.next}  style={styles.arrowIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.infoMainContainer}>
          <View style={styles.infoSubContainer}>
          <Text style={styles.docTitleText}>{'Aksje Info'}</Text>
        </View>
          {this.renderInfo()}
        </View>
        </View>
      </ScrollView>
    )
  }
}

export default connect(
  null,
  {
    login: userActions.login,
  }
)(MineElendommer);



