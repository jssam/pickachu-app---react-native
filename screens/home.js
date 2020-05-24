import React from "react";
import{Text,StyleSheet,View, Button} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const home =(poses)=>{


    const sam = "hello to";
    return(  <View style={styles.container}>
       <View style={{width: "100%", height: "40%", backgroundColor: 'powderblue'}} >
    <Text style = {styles.text} >{sam} pickachu pika pi </Text></View>
   
    <Button
        Color='red'
        onPress={()=>poses.navigation.navigate("Home1")}
        title="list of cartoon"        
        /><View style = {styles.container1}>
        <TouchableOpacity
         onPress={()=>poses.navigation.navigate("Home2") }>
            <Text style={styles.button1}>list of cartoon</Text>
        </TouchableOpacity></View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'darkgray',
      },
      container1: {
     
        width:"100%",
        height:"10%",
        backgroundColor: 'black',
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