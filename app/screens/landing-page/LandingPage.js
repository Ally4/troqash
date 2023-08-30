import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function LandingPage({navigation}) {
  return (
            <SafeAreaView style={styles.container}>
              <ScrollView >
        {/* <View style={{backgroundColor:"black", width:250, height:250, borderRadius:150, opacity:0.2, top: -90, left:-90}}></View> */}
        {/* <Image source={require("../../assets/photos/logo.png")} style={{marginTop:150}}/> */}
        <Text style={styles.textName}>TROQASH</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Signup')}>
      <Text style={styles.buttonText1}>Sign Up</Text>
    </TouchableOpacity>
    </ScrollView>
      </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 350,
    // alignContent: 'center',
},
button: {
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 5,
  width:300,
  marginLeft:40
  // justifyContent:"center"    its not working in js engine: hermes
},
buttonText: {
  color: '#00A859',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},
textName: {
  color: '#00A859',
  fontSize: 30,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 20,
},
button1: {
  backgroundColor: '#00A859',
  padding: 10,
  borderRadius: 5,
  borderColor:"white",
  borderWidth:2,
  width:300,
  marginTop:20,
  marginLeft:40
  // justifyContent:"center"    its not working in js engine: hermes
},
buttonText1: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},
})
