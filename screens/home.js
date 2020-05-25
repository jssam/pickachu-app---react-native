import React from "react";
import{Text,StyleSheet,View, Button, ImageBackground} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const home =(poses)=>{
    const image = { uri: "https://reactjs.org/logo-og.png" };

    const sam = "hello to";
    return(  <View style={styles.container}>
        <ImageBackground source={require("../../assets/pica.png")} style={styles.image}>
       <View style={{width: "100%", height: "40%", backgroundColor: 'powderblue'}} >
    <Text style = {styles.text} >{sam} pickachu pika pi </Text></View>
   
    <Button
        Color='red'
        onPress={()=>poses.navigation.navigate("Home1")}
        title="list of cartoon"        
        /><View style = {styles.container1}>
        <TouchableOpacity
         onPress={()=>poses.navigation.navigate("Home2") }>
            <Text style={styles.button1}>pics of cartoon</Text>
        </TouchableOpacity></View>
        <View style = {styles.container2}>
        <TouchableOpacity
         onPress={()=>poses.navigation.navigate("Home3") }>
            <Text style={styles.button1}>couter of pokimon</Text>
        </TouchableOpacity></View></ImageBackground>



        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'darkgray',
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      container1: {
     
        width:"100%",
        height:"7%",
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      },
      container2: {
     
        width:"100%",
        height:"7%",
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      },

    text:{
        fontSize:50
    },
    button1:{
        fontSize:30,
        color:"chartreuse"
    }
});
export default home;