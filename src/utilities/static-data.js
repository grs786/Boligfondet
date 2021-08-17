const propertyDetailData = [
    {
      id: 0,
      icon: require('../assets/images/property.jpeg'),
      title: 'Eplebakken72',
      value: '6 200 000',
      yield: '11 720',
      Change: '+6.3%',
      stockPrice: '62',
      status: 0,
    },
    {
        id: 1,
        icon: require('../assets/images/property.jpeg'),
        title: 'Demo',
        value: '3 200 000',
        yield: '18 720',
        Change: '+5.3%',
        stockPrice: '82',
        status: 1,
      },
      {
        id: 2,
        icon: require('../assets/images/property.jpeg'),
        title: 'Eplebakken',
        value: '9 200 000',
        yield: '1 720',
        Change: '+5.3%',
        stockPrice: '62',
        status: 0
      },
]

const documentsData = [
  
  {
    id:0,
    title: 'Januray 2021'
  },
  {
    id:1,
    title: 'February 2021'
  },
  {
    id:2,
    title: 'March 2021'
  },
  {
    id:3,
    title: 'April 2021'
  },
  {
    id:4,
    title: 'May 2021'
  },
  {
    id:5,
    title: 'June 2021'
  },
  {
    id:6,
    title: 'July 2021'
  },

]

const dotIcons = [
  {
    index:0,
    icon:require('../assets/images/coin.png'),
    iconActive:require('../assets/images/coin_active.png'),
  },
  {
    index:1,
    icon:require('../assets/images/money.png'),
    iconActive:require('../assets/images/money-active.png'),
  },
  {
    index:2,
    icon:require('../assets/images/stock.png'),
    iconActive:require('../assets/images/stock_active.png'),
  }
]



exports.propertyDetailData = propertyDetailData;
exports.documentsData = documentsData;
exports.dotIcons = dotIcons;