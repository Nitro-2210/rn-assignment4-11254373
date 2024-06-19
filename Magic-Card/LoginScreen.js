import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';



export default function LoginScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', {name, email});
  };

  const AppleImage = require('./assets/images/apple.png');
  const GoogleImage = require('./assets/images/google.png');
  const fbImage = require('./assets/images/fb.png');
  
  return (
   
    <View style={styles.container}> 
     <View><Text style={styles.card1}>Magic-Card</Text></View>      
      <Text style={styles.title}> Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#000"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#000"
      />
      <Button title="Login" onPress={handleLogin} />
      <View style={{marginTop:80, alignItems:'center'}}><Text>or continue with -----------------</Text></View>
      <View style={styles.img}>
        <Image style={styles.img2} source={AppleImage}></Image>
        <Image style={styles.img2} source={GoogleImage}></Image>
        <Image style={styles.img2} source={fbImage}></Image>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('')}> 
      <View style={{flexDirection:'row'}}><Text>Don't have an account? <Text style={styles.registerLink}>Register</Text>
      </Text></View></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'justify',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  img:{
    flexDirection: 'row',
    height: 40,
    width: 35,
    marginRight: 50,
    marginTop: 20,
    padding: 20,
    marginBottom:100
  },
  img2:{
    height: 40,
    width: 35,
    marginLeft: 39,
    marginTop: 50,
    alignContent: 'center',
    marginBottom:10
  },
  card1:{
    fontSize: 35,
    marginBottom: 52,
    fontStyle:'italic',
    fontWeight:600,
  },
  registerLink: {
    marginTop: 16,
    color: 'blue',
    textAlign: 'center',
  },
});
