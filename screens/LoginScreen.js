import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable, Image } from 'react-native';
import { useFonts, BalsamiqSans_400Regular, BalsamiqSans_700Bold } from '@expo-google-fonts/balsamiq-sans';
// import logoImg from '../assets/logo.png';

export default function LoginScreen({ navigation }) {
//   state={
//     email:"",
//     password:""
//   }
  
//   render(){
    let [fontsLoaded] = useFonts({
        BalsamiqSans_400Regular,
        BalsamiqSans_700Bold,
    });
    
    if (!fontsLoaded) {
        return null;
    }
    return (
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logoImg} />
        <Text style={styles.logo}>Happy Hour.</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Username..." 
            placeholderTextColor="darkgreen"
            // onChangeText={text => this.setState({email:text})}
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="darkgreen"
            // onChangeText={text => this.setState({password:text})}
            />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <Pressable onPress={() => navigation.navigate('SearchScreen', {user: "Yutian"})} style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </Pressable>
        <TouchableOpacity>
          <Text style={styles.signUpText}>Signup</Text>
        </TouchableOpacity>

  
      </View>
    );
  }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImg: {
    width: 100,
    height: 200,
    marginBottom: 10,
  },
  logo: {
    fontFamily: 'BalsamiqSans_700Bold',
    fontSize:35,
    color:"green",
    marginBottom:40,
    marginTop: 6,
  },
  inputView: {
    width:"80%",
    backgroundColor:"white",
    borderWidth: 2,
    borderColor: "gray",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    fontFamily: 'BalsamiqSans_700Bold',
    height:50,
    color:"darkgreen"
  },
  forgot:{
    fontFamily: 'BalsamiqSans_700Bold',
    color:"gray",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"green",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    fontFamily: 'BalsamiqSans_700Bold',
    color:"white"
  },
  signUpText:{
    fontFamily: 'BalsamiqSans_700Bold',
    color:"gray"
  }
});