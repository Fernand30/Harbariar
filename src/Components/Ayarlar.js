
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
            <Text style={styles.title}>Ayarlar</Text>
            <Image source={Images.setting} style={styles.setting}/>
          </View>
          <View style={styles.mainView}>
            <View style={styles.borderView}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Haber Kayanklari</Text>
              </TouchableOpacity>
              <View style={styles.line}/>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Categoriar</Text>
              </TouchableOpacity>
              <View style={styles.line}/>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Haber Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>   
        </SafeAreaView> 
    )}
}

module.exports = Ayarlar;
