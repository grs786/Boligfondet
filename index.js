/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Application from './src';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';


AppRegistry.registerComponent(appName, () => Application);
