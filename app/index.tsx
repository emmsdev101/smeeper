import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
import { useState } from "react";
import { Image, TextInput, View , StyleSheet, Pressable, Text, Alert} from "react-native";
import {  } from "react-native-paper";
export default function Index() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleUsername = (val) => {
    setUsername(val)
  }
  const handlePassword = (val) => {
    setPassword(val)
  }
  const Button = ({title, style, onPress})=>{
    return (
      <Pressable style={style.buttonContainer} onPress={onPress}>
          <Text style={style.buttonText}>{title}</Text>
    </Pressable>
    )
  }

  const handleLogin = () => {
    if(username == 'admin' && password == '1234')router.replace('dashboard')
      else Alert.alert('Login Failed','Wrong username or password')
  }
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding:30,
        paddingTop:100
      }}
    >
      <Image source={require('@/assets/images/icon_transparent.png')} style={{
        width:250,height:250, borderRadius:100
      }}/>
    <ThemedText type="subtitle" >Welcome to Smeeper!</ThemedText>
    <ThemedText type="default" >Keep your home clean</ThemedText>
    
    <View style={{
      flex:0,
      justifyContent:'flex-start',
      alignItems:'center',
      gap:10,
      width:'100%',
      margin:30
    }}>
      <TextInput placeholder={"Username"} style={styles.loginInput} onChangeText={handleUsername}/>
      <TextInput placeholder={"Password"} style={styles.loginInput} secureTextEntry={true}  onChangeText={handlePassword}/>
      <Button title={"LOGIN"} style={styles} onPress={handleLogin}/>

    </View>

    </ThemedView>
  );
}
const styles = StyleSheet.create({
  loginInput:{
    width:'100%',
    borderColor:'gray',
    borderWidth:1,
    height:50,
    borderRadius:50,
    paddingLeft:20
   },
   loginButton:{

   },
   buttonContainer:{
    backgroundColor:'#f5e12f',
    width:'100%',
    height:'auto',
    padding:20,
    flex:0,
    justifyContent:'center',
    borderRadius:50
   },
   buttonText:{ 
    textAlign:'center',
    fontWeight:'bold',
    fontSize:20
    }
})