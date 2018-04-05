
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
import { CheckBox } from 'react-native-elements';
import {Colors, Images, Constants } from '../Themes';
import styles from './styles.js'

class Ayarlar extends Component {

    constructor(props){
        super(props);
        this.state=({
          checked: true
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
            <Text style={styles.title}></Text>
            <View style={styles.fixView}/>
          </View>
          <View style={styles.mainView}>
           <View style={styles.rowView}>
              <Text style={styles.rowText}>Sabah</Text>
              <TouchableOpacity style={styles.checkbutton}>
                <Image source={Images.check} style={styles.check}/>
              </TouchableOpacity>
           </View>
           <View style={styles.rowView}>
              <Text style={styles.rowText}>Milliyet</Text>
              <TouchableOpacity style={styles.checkbutton}>
                <Image source={Images.check} style={styles.check}/>
              </TouchableOpacity>
           </View>
           <View style={styles.rowView}>
              <Text style={styles.rowText}>Cumhuriyet</Text>
              <TouchableOpacity style={styles.checkbutton}>
                <Image source={Images.check} style={styles.check}/>
              </TouchableOpacity>
           </View>
           <View style={styles.rowView}>
              <Text style={styles.rowText}>Ntv</Text>
              <TouchableOpacity style={styles.checkbutton}>
                <Image source={Images.check} style={styles.check}/>
              </TouchableOpacity>
           </View>
           <View style={styles.rowView}>
              <Text style={styles.rowText}>CnnTuk</Text>
              <TouchableOpacity style={styles.checkbutton}>
                <Image source={Images.check} style={styles.check}/>
              </TouchableOpacity>
           </View>
           <View style={styles.rowView}>
              <Text style={styles.rowText}>HarberTruk</Text>
              <TouchableOpacity style={styles.checkbutton}>
                <Image source={Images.check} style={styles.check}/>
              </TouchableOpacity>
           </View>
           <View style={styles.rowView}>
              <Text style={styles.rowText}>AnadoluAjasu</Text>
              <TouchableOpacity style={styles.checkbutton}>
                <Image source={Images.check} style={styles.check}/>
              </TouchableOpacity>
           </View>

          </View>
        </View>    
        </SafeAreaView>
    )}
}

module.exports = Ayarlar;
