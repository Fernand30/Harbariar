import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';

const window = Dimensions.get('window');
import {Colors, Images, Constants } from '../Themes';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
  play:{width:10,height:10/208*240},
  textView: {marginLeft:20,backgroundColor:'transparent',color:'black',fontSize:16},
  eachView: {flexDirection:'row', alignItems: 'center', paddingLeft: 20,marginTop:20},
  title: {backgroundColor:'#d3d3d3',height:40, justifyContent:'center'},
});

export default function Menu({ onItemSelected }) {
  return (
    
      <View style={styles.Container}>

          <View style={styles.title}>
            
              <Text style={styles.textView} onPress={() => onItemSelected('Profile')}>Catergoriler</Text>
          </View>

        
          <View style={styles.eachView}>
              <Image source={Images.play} style={styles.play}/>
              <Text style={styles.textView} onPress={() => onItemSelected('screen2')}>Gundem</Text>
          </View>
          <View style={styles.eachView}>
               <Image source={Images.play} style={styles.play}/>
              <Text style={styles.textView} onPress={() => onItemSelected('screen3')}>Turkiye</Text>
          </View>
          <View style={styles.eachView}>
               <Image source={Images.play} style={styles.play}/>
              <Text style={styles.textView} onPress={() => onItemSelected('screen4')}>Dunya</Text>
          </View>
          <View style={styles.eachView}>
              <Image source={Images.play} style={styles.play}/>
              <Text style={styles.textView} onPress={() => onItemSelected('screen5')}>Spor</Text>
          </View>
          <View style={styles.eachView}>
              <Image source={Images.play} style={styles.play}/>
              <Text style={styles.textView} onPress={() => onItemSelected('Events')}>Ekonomi</Text>
          </View>
          <View style={styles.eachView}>
               <Image source={Images.play} style={styles.play}/>
              <Text style={styles.textView} onPress={() => onItemSelected('Help')}>TEknologi</Text>
          </View>
          <View style={styles.eachView}>
               <Image source={Images.play} style={styles.play}/>
              <Text style={styles.textView} onPress={() => onItemSelected('Sign')}>Saglik</Text>
          </View>  
          <View style={styles.eachView}>
               <Image source={Images.play} style={styles.play}/>
              <Text style={styles.textView} onPress={() => onItemSelected('Policies')}>Olympiyat</Text>
          </View> 
          <View style={styles.eachView}>
               <Image source={Images.play} style={styles.play}/>
              <Text style={styles.textView} onPress={() => onItemSelected('Policies')}>Ankara</Text>
          </View> 
          <View style={styles.eachView}>
               <Image source={Images.play} style={styles.play}/>
              <Text style={styles.textView} onPress={() => onItemSelected('Policies')}>Bitcoin</Text>
          </View> 
          
      </View>  
    
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};
