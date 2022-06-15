/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import BasicScreen from './screens/BasicComponets';
import OxymainFun from "./screens/OxyMain";


AppRegistry.registerComponent(appName, () => OxymainFun);
