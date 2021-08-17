
import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text
} from "react-native";
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Constants from '../constants';
import Home from './home/home';
import Messages from './messages';
import More from './more';
import Invester from './invester/invester';

const config = {
  tabBarOptions:{
    activeBackgroundColor: '#fff',
    activeTintColor: '#000',
    inactiveBackgroundColor: '#fff',
    inactiveTintColor: 'gray',
    showIcon: true,
    style: Constants.BaseStyle.TAB_GROUP_STYLE,
},
}

const styles = StyleSheet.create({
  logo: {
    height: 25,
    width: 25,
    tintColor:'#33d6ff'
  },
});

const { home, invest, inbox, settings } = Constants.i18n.dashboard


const routes ={
   Home: {
    screen: Home,
     navigationOptions: () => ({
      tabBarIcon: ({ focused }) => (
        focused ?
        <Constants.Images.Dashboard/> : <Constants.Images.Dashboard/>
       ),
     }),
  },
  Invester: {
    screen: Invester,
    navigationOptions: () => ({
      tabBarLabel: 'Invest',
      tabBarIcon: ({ focused }) => (
        focused ?
          <Constants.Images.Invest/> :  <Constants.Images.Invest/>
      ),
    }),
  },
  Messages: {
    screen: Messages,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => (
        focused ?
          <Constants.Images.Inbox/> : <Constants.Images.Inbox/>
      ),
    }),
  },
  More: {
    screen: More,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => (
        focused ?
         <Constants.Images.Settings/> : <Constants.Images.Settings/>
      ),
    }),
  },
}

const Dashboard = createBottomTabNavigator(routes,config);

export default createAppContainer(Dashboard);
