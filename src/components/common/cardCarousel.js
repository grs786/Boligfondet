import React from 'react';
import { StyleSheet, View, ViewPropTypes,TouchableHighlight } from 'react-native';
import { node } from 'prop-types';
import Constants from '../../constants';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const styles = StyleSheet.create({
  crouselContainer: {
      flex:1,
      backgroundColor:Constants.Colors.WHITE,
      width:'95%',
      alignSelf:'center',
      borderRadius:8,
      borderWidth:.5,
      borderColor: Constants.Colors.BUTTON_COLOR,
      marginVertical:40
  },
  paginationDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Constants.Colors.PRIMARY_COLOR,
  },
  inActiveDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 134, 193, 0.5)',
  },
  paginationMainView: {
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    zIndex: -10000,
    justifyContent: 'center',
    bottom: -40,
  },
});

class  CardCarousel extends React.Component{
  const = {
  containerStyle,
  mainContainerStyle,
  itemData,
  SnapItemData,
  activeSlide,
  allowPagination,
  renderItem,
  carousel,
  ListEmptyComponent = <View />
  } = this.props;
 

  pagination = (index) => {
    return (
      <Pagination
        dotsLength={itemData.length}
        activeDotIndex={activeSlide}
        dotStyle={styles.paginationDotStyle}
        inactiveDotStyle={styles.inActiveDotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.8}
      />
    );
  }
  render(){
  return (
    <View style={[styles.crouselContainer,mainContainerStyle]}>
      <Carousel
        containerStyle={containerStyle}
        ref={carousel}
        data={itemData}
        renderItem={renderItem}
        sliderWidth={Constants.BaseStyle.DEVICE_WIDTH}
        itemWidth={Constants.BaseStyle.DEVICE_WIDTH - 35}
        onSnapToItem={index => SnapItemData(index)}
        firstItem={activeSlide}
        ListEmptyComponent={ListEmptyComponent}
      />
      {allowPagination &&
        <View style={styles.paginationMainView}>{this.pagination()}</View>
      }
    </View>
  )
}
}

CardCarousel.defaultProps = { style: {} };
CardCarousel.propTypes = { style: ViewPropTypes.style,containerStyle: ViewPropTypes.style ,mainContainerStyle: ViewPropTypes.style  };

export default CardCarousel;
