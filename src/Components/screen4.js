
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
            
          </View>
          <View style={styles.mainView}>
            <View style={styles.borderView}>
              <View style={styles.rowView1}>
                <Text style={styles.buttonText1}>Katergori{'\n'}Adi</Text>
                <View style={{marginLeft:10, flex:1}}>
                  <TextInput underlineColorAndroid='transparent' placeholder="Bitcoin" style={styles.textinput}/>
                  <View style={styles.line3}/>
                </View>
              </View>
              <View style={styles.line}/>
              <View style={styles.rowView1}>
                <Text style={styles.buttonText1}>Anahata{'\n'}Kelimiler</Text>
                <View style={{marginLeft:10, flex:1}}>
                  <TextInput underlineColorAndroid='transparent' placeholder="Bitcoin,kripto" style={styles.textinput}/>
                  <View style={styles.line3}/>
                </View>
              </View>
              <View style={styles.line}/>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Keydet</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>  
        </SafeAreaView>  
    )}
}

module.exports = Ayarlar;
