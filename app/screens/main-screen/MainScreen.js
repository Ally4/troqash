import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';


export default function MainScreen() {



    const data = [
      { id: '1', title: 'Clothes' },
      { id: '2', title: 'Electronics' },
      { id: '3', title: 'Shoes' },
      { id: '4', title: 'Furniture' },
      { id: '5', title: 'Others' },
    ];

    const navigation = useNavigation();


  return (
      <SafeAreaView style={styles.container1}> 
      <ScrollView >
        <View style={{backgroundColor:"#00A859", width:250, height:250, top: -90, left:-90}}></View>
        <View>
        <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require("../../assets/photos/left-arrow.png")} style={{marginTop:-220, marginLeft:10, width:40, height:40}}/></TouchableOpacity>
        <Image source={require("../../assets/photos/user.png")} style={{marginTop:-150, marginLeft:10, width:50, height:50}}/>
        <Text style={styles.textName}>TROQASH</Text>
        {/* <Image source={require("../../assets/photos/logo-blue.png")} style={{marginTop:-40, marginLeft:135}}/> */}
        <Image source={require("../../assets/photos/notification.png")} style={{marginTop:-30,marginLeft:330, width:35, height:35}}/>
        </View>
        <Text style={styles.helloText}>Hello, <Text style={styles.abebeText}>Master G!</Text></Text>
        <Text style={styles.testText}>What are you going to change, or change for money today?.</Text>
        <TextInput
         style={{
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 10,
          borderColor:"#00A859",
          borderWidth:1,
          width:300,
          marginTop:20,
          marginLeft:40
          }}
          placeholder={'Search'}
           />
         <Text style={styles.labText}>Categories</Text>
         <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ margin: 10,   backgroundColor: 'white',
          padding: 10,
          borderRadius: 10,
          borderColor:"#00A859",
          borderWidth:2,
          width:150}}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
         <Text style={styles.labText}>New items</Text>
         <Image source={require("../../assets/photos/plus-green.png")} style={{width:100, height:100, marginTop:260, marginLeft:280}}/>
         </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
},
button: {
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 5,
  width:300,
  marginLeft:40

  // justifyContent:"center"    its not working in js engine: hermes
},
button2: {
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 5,
  width:300,
  marginLeft:40,
  marginTop:20,
  borderWidth: 2,
  borderColor: "#00A859",

  // justifyContent:"center"    its not working in js engine: hermes
},
buttonText: {
  color: '#000',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
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
line: {
  height: 1,
  width: '40%',
  backgroundColor: '#00A859',
  marginTop:20,
},
lineBox: {
  marginLeft:150,
},
lineText: {
  marginLeft:25,
  marginTop:15,
},
resetText: {
  marginTop: 20,
  fontWeight: 'bold',
  textAlign: 'center',
},
resetParagraphEnter: {
  textAlign: 'center',
  marginRight: 10,
},
helloText: {
  fontWeight:'bold',
  fontSize: 40,
  marginLeft:10,
  marginTop:-80,
},
abebeText: {
  color: '#00A859',
  fontWeight:'bold',
  fontSize: 40,
},
testText: {
  color: 'grey',
  fontWeight:'bold',
  fontSize: 13,
  marginLeft:10,
},
labText: {
  color: 'black',
  fontWeight:'bold',
  fontSize: 20,
  marginLeft:10,
},
textName: {
  color: '#00A859',
  fontSize: 30,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 20,
},
})