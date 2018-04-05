import React from 'react'
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {Router, Route, Schema, Animations, Scene,TabBar} from 'react-native-router-flux'

import Ayarlar from './Components/Ayarlar.js';
import screen2 from './Components/screen2.js';
import screen3 from './Components/screen3.js';
import screen4 from './Components/screen4.js';
import screen5 from './Components/screen5.js';

const Routes = () => (

  <Router hideNavBar={true}>
    <Scene key = "root">
      <Scene key = "screen5" component = {screen5} hideNavBar={true} {...this.props} initial />
      <Scene key = "Ayarlar" component = {Ayarlar} hideNavBar={true} panHandlers={null} />
      <Scene key = "screen2" component = {screen2} hideNavBar={true} panHandlers={null} />
      <Scene key = "screen3" component = {screen3} hideNavBar={true} panHandlers={null} />
      <Scene key = "screen4" component = {screen4} hideNavBar={true} panHandlers={null} />
      <Scene key = "screen5" component = {screen5} hideNavBar={true} panHandlers={null} />
    </Scene>
 </Router>

);

export default Routes

