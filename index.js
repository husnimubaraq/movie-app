/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { AppWrapper } from 'layouts/default';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppWrapper);
