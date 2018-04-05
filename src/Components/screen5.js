import React,{Component,PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Picker,
  ScrollView,
  BackHandler,
  SafeAreaView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import styles from './styles.js'


import {Colors, Images, Constants } from '../Themes';

export default class Screen extends Component {

  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
      this.state = ({
        isOpen: false,
        selectedItem: '',
      });
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }

   goBack(){
      Actions.pop();
   } 

   toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>{
    if(item=='screen2'){
      Actions.Ayarlar();
    }else if(item=='screen3'){
      Actions.screen2();
    }else if(item=='screen4'){
      Actions.screen3();
    }else if(item=='screen5'){
      Actions.screen4();
    }
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  }
    

  render() {
    
   
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
    return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <View style={styles.hearderView}>
        <TouchableOpacity onPress={()=>this.toggle()} >
          <Image source={Images.menu} style={styles.menu}/>
        </TouchableOpacity>
        <Text style={styles.title}>Harbeler</Text>
        <Image source={Images.setting} style={styles.setting}/>
      </View>
      <View style={styles.mainView}>
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
            <ImageBackground source={Images.background} style={styles.backgroundImage}>
              
            </ImageBackground>
        </SideMenu> 
        </View>
      </View>    
      </SafeAreaView>  
    );
  }
}

AppRegistry.registerComponent('Profile', () => Layout_Text);