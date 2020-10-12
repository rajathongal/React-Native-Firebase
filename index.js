/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Todos from './Components/Screens/Todos';
import {enableScreens} from 'react-native-screens'

enableScreens()
AppRegistry.registerComponent(appName, () => Todos);
