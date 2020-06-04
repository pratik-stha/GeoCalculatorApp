import React,{useState,useEffect} from 'react';
import {View, StyleSheet,Text,TouchableOpacity, FlatList,SafeAreaView,TouchableHighlight} from 'react-native';
import {setupHistoryListener } from '../../Helper/fb-History';
import { Ionicons } from '@expo/vector-icons';
import {timestamp} from 'react-timestamp';
import { color } from 'react-native-reanimated';



var currentDate = new Date();

const HistoryScreen=({route,navigation})=>{

   const [DataArr,setDataArr] = useState([]);


    useEffect(()=>{
     
        setupHistoryListener((items)=>{setDataArr(items)});

    },[]);

    const PopulateData=(val)=>{
        {navigation.navigate('Geo Calculator',{val})};
    };


    const Item=({index,item})=> {
      console.log("The output is: ",item.state.latA);
        return (

        <TouchableHighlight style={{borderRadius:25}} underlayColor='#28b0ed' onPress={()=>PopulateData(item.state)}>
               <View style={styles.item}>
                <Text style={{color:'white' , fontSize:18}}>  Start: {item.state.latA} , {item.state.lonA}</Text>
                <Text style={{color:'white' , fontSize:18}}>  End: {item.state.latB} , {item.state.lonB}</Text>
                <Text style={{color:'white' , fontSize:12, textAlign:'center'}}>  Timstamp:{item.state.timestamp}</Text>
                </View>
        </TouchableHighlight>
  
          
        );
      }
      
      navigation.setOptions(
        {
          
            headerLeft:()=>(
                <TouchableOpacity onPress = {()=>{navigation.navigate('Geo Calculator')}}>
                <Ionicons style={{marginLeft:20}} name="ios-arrow-back" size={24} color="white" />
                </TouchableOpacity>
        )
        }


    );

    return (
        <SafeAreaView style={styles.container}>
             
         <FlatList
          data={DataArr}
          renderItem={Item}
          keyExtractor={item => item.id}
        />
  

 
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin :0,
    backgroundColor: "#cce0f7",
    },

    item: {
      backgroundColor: '#0f88bf',
      padding: 5,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 25,
    },
    title: {
      fontSize: 45,
    },

  });

export default HistoryScreen;