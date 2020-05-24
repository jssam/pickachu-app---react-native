import React from "react";
import{Text,StyleSheet,FlatList,View, Image} from "react-native";

const Picscat=  (poses)=>{
    
return(<View >
    <Image source={poses.images} style={styles.image} />
<Text>{poses.title}</Text>
</View>
    );
};
const styles = StyleSheet.create({ 
    image:{
        width:"100%",
        height:170
    }
   });
export default Picscat;
