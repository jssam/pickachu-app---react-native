import React from "react";
import{Text,StyleSheet,FlatList,View} from "react-native";
import Picscat from "../components/Picscat";

const picscartoons =  ()=>{
    
    return(<View>
    <Picscat title = "schinchan" images={require("../../assets/shinchan.png")}/>
    <Picscat title="pickachu" images={require("../../assets/pica.png")}/>
    <Picscat title = "doremon"images={require("../../assets/doremon.png")}/>
        
    </View>

    );
};
const style = StyleSheet.create({});
export default picscartoons;