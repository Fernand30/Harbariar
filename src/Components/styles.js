const React = require("react-native");
const { Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
  container: {
    flex: 1,
  },
  hearderView:{
    backgroundColor: 'white',
    height: 40,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:20
  },  
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  menu:{
    width:20,
    height: 20/48*32
  },
  title:{
    fontSize: 18,
    fontWeight: '700'
  },
  setting:{
    width: 20,
    height: 20
  },
  mainView:{
    flex:1
  },
  back:{
    width: 20,
    height: 20/1196*922
  },
  fixView:{
    width:200
  },
  button:{
    borderColor: '#007aff',
    borderWidth:0.5,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 4,
    marginHorizontal: 15,
    paddingVertical:10
  },
  button1:{
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
    alignItems: 'center',
    justifyContent:'space-between',
    borderRadius: 3,
    marginHorizontal: 10,
    paddingVertical:5,
    paddingHorizontal: 10,
    backgroundColor:'white'
  },
  buttonText:{
    color:'#007aff',
    fontSize: 17,
    fontWeight: '700'
  },
  buttonText1:{
    color:'#000',
    fontSize: 15,
    width: 100,
  },
  borderView:{
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 4,
    paddingVertical: 10,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 3,
    marginTop:10
  },
  borderView1:{
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 4,
    paddingVertical: 10,
    backgroundColor: '#efeff4',
    marginHorizontal: 10,
    borderRadius: 3,
    marginTop:10,
  },
  line:{
    marginVertical:10,
    height:1,
    backgroundColor:'black'
  },
  line1:{
    marginVertical:5,
    height:1,
  },
  line3:{
    marginTop:2,
    height:1,
    backgroundColor:'black',
    marginLeft: 10
  },
  rowView:{
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent:'space-between',
    marginTop:20
  },
  rowView1:{
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop:5,
    justifyContent:'space-between'
  },
  rowText:{
    fontSize:16,
  },
  checkbutton:{
    backgroundColor:'black',
    width:20,
    height:20,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:2
  },
  check:{
    width: 10,
    height: 10/18*14
  },
  plus:{
    fontSize:22
  },
  empty:{
    width:15,
    height: 15
  },
  textinput:{
    height:30,
    paddingVertical:0,
    width:100,
    marginLeft:10,
    paddingLeft:5
  }
};
