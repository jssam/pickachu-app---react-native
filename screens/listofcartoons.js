import React from "react";
import{Text,StyleSheet,FlatList} from "react-native";
const listofcartoons =()=>{
   const sam = [
       {name :"1.picakachu"  },
       {name :"2.schinchan" },
       {name :"3.harrypotter" },
       {name :"4.pokemon" },
       {name :"5.doremon" },
       {name :"6.nobita" },
       {name :"7.hazirumaru" },
       {name :"8.sanyam" }
   ];
   return <FlatList
   horizontal = {false}
   showsHorizontalScrollIndicator= {false}
   keyExtractor = {(ram)=>ram.name}
   data = {sam}
   renderItem ={
       ({item})=>{
       return <Text style = {styles.text}>{item.name}</Text>
       }
   }
   />

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    text:{
        fontSize:50,
        marginVertical:20
    }
});
export default listofcartoons;