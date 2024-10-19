import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect } from "react";
import { Image, TextInput, View , StyleSheet, Pressable, Text, Button} from "react-native";
import {  } from "react-native-paper";
import { MetricCard } from "../components/MetricCard";
export default function Dashboard() {


  const handleLogin = () => {
    router.push('dashboard')
  }
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "start",
        marginTop:40,
      }}
    >
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Dashboard</Text>
            <AntDesign name="bells" size={24} color="black"/>
        </View>
        <View style={styles.metricts}>
          <ThemedText type="light">Device Status</ThemedText>
          <View style={styles.metricList}>
          <View style={styles.metricWrap}>
            <MetricCard/>
          </View>
          <View style={styles.metricWrap}>
            <MetricCard/>
          </View>
          <View style={styles.metricWrap}>
            <MetricCard/>
          </View>
          <View style={styles.metricWrap}>
            <MetricCard/>
          </View>

          </View>
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
    },
    header:{
        padding:20,
        flex:0,
        justifyContent:'space-between',
        flexDirection:'row',
        backgroundColor:'white'
    },
    headerTitle:{
        fontWeight:'bold',
        fontSize:25,
        textAlign:'left'
    },
    metricts:{
      paddingLeft:20,
      paddingRight:20
    },
    metricList:{
      flex:0,
      flexDirection:'row',
      gap:5,
      flexWrap:'wrap',
      justifyContent:'center'
    },
    metricWrap:{
      width:'49%',
    }
})