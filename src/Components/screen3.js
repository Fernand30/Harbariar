
import React, { Component } from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Navigator,
  Image,
  BackHandler,
  SafeAreaView
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import {Colors, Images, Constants } from '../Themes';
import styles from './styles.js'

class Ayarlar extends Component {

    constructor(props){
        super(props);
        this.state=({
          
        })
      }

    componentDidMount() {
      that  = this
      BackHandler.addEventListener('hardwareBackPress', function() {
          that.back();
          return true;
      });
    }

    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    
    handleBackButton() {
      return true;
    } 

    back(){
      Actions.pop()
    }

    render() {
      return(
        <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.hearderView}>
            <TouchableOpacity onPress={()=>this.back()} >
              <Image source={Images.back} style={styles.back}/>
            </TouchableOpacity>
            <Text style={styles.title}>Kisisel Katergorialerin</Text>
            <Text style={styles.plus}>+</Text>
          </View>
          <View style={styles.mainView}>
            <View style={styles.borderView1}>
              <TouchableOpacity style={styles.button1}>
                <Text style={styles.buttonText1}>olympiyat</Text>
                <Image source={Images.empty} style={styles.empty}/>
              </TouchableOpacity>
              <View style={styles.line1}/>
              <TouchableOpacity style={styles.button1}>
                <Text style={styles.buttonText1}>ankara</Text>
                <Image source={Images.empty} style={styles.empty}/>
              </TouchableOpacity>
              <View style={styles.line1}/>
              <TouchableOpacity style={styles.button1}>
                <Text style={styles.buttonText1}>bitcoin</Text>
                <Image source={Images.empty} style={styles.empty}/>
              </TouchableOpacity>
            </View>
          </View>
        </View> 
        </SafeAreaView>   
    )}
}

module.exports = Ayarlar;
