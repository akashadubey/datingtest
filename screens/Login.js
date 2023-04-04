import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { LinearGradient } from 'expo-linear-gradient';
const backImage = require("../assets/backImage.png");

export default function Login({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Login success"))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };
  
  return ( 
    <View style={styles.container}>
      <LinearGradient
          colors={['rgba(246,197,4,1)', 'rgba(246,140,4,1)']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5}}
          style={styles.linearGradient}
        >
        </LinearGradient>
      <View style={styles.banner}/>
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Log In</Text>
         <TextInput
        style={styles.input}
        placeholder="Enter email"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <LinearGradient
          colors={['rgba(246,197,4,1)', 'rgba(246,140,4,1)']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5}}
          style={styles.linearGradient_login}
        >
          <TouchableOpacity style={styles.button_login} onPress={onHandleLogin}>
            <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Log In</Text>
          </TouchableOpacity>
        </LinearGradient>
      
      <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
        <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={{color: '#f57c00', fontWeight: '600', fontSize: 14}}> Sign Up</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "orange",
    alignSelf: "center",
    paddingBottom: 24,
  },
  demoTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "orange",
    alignSelf: "center",
    paddingBottom: 10,
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  backImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: 'cover',
  },
  whiteSheet: {
    width: '100%',
    height: '75%',
    position: "absolute",
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '75%',
    position: "absolute",
  },
  linearGradient_login: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 58,
    marginTop: 40,
    borderRadius: 10,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
});
