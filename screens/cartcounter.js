import React, { useState } from "react";
import{Text,StyleSheet,FlatList,View, Image,Button} from "react-native";
import { set, round } from "react-native-reanimated";
import { TextInput } from "react-native-gesture-handler";
const num= 15
const cartcounter=  ()=>{
    const [count, setcount]= useState(0)
    const[name , setname]= useState("")
    const[color , setcolor]= useState([])
return(<View>
<Button
    onPress={()=>{setcount(count+num)}}
    title="increase cartoon"        
    /><Button
    onPress={()=>{setcount(count-num)}}
    title="decrease cartoon"        
    />
    <Text >{count}</Text>
    <Text>Write the name of the cartoons</Text>
    <TextInput
     style = {styles.textinput}
     onChangeText = {false}
     autoCapitalize= {false}
     value={name}
     onChangeText={sam=>{setname(sam)}}
     />
    <Text>cartoon name is {name}</Text>
    <View>
    <Button
    onPress={()=>setcolor([...color,rgbrandom()])}
    title="list the color"        
    />
    <FlatList
    keyExtractor={(item)=>{item}}
    data={color}
    renderItem={({item})=>{
    return <View      style= {{width:"100%", height:100, backgroundColor:item}}      />}
    }
    
    
    />
   </View>
           
    </View>
    );
};
const rgbrandom=()=>{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

return `rgb(${red},${green},${blue})`
}


const styles = StyleSheet.create({ 
    image:{
        width:"100%",
        height:170
    },
    textinput:{
        width:"80%",
        height:"30%",
        fontSize:20,
        margin:20,
        bordercolor:20,
        borderWidth:2,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
        
        
    }
   
   });
export default cartcounter;
