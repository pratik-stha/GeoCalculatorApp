import React,{useState,useEffect} from 'react';
import {View, StyleSheet,Text,TouchableOpacity, FlatList,SafeAreaView,TouchableHighlight} from 'react-native';
import {setupHistoryListener } from '../../Helper/fb-History';
import {timestamp} from 'react-timestamp';



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

        <TouchableHighlight underlayColor='green' onPress={()=>PopulateData(item.state)}>
               <View style={styles.item}>
                <Text>Start: {item.state.latA} , {item.state.lonA}</Text>
                <Text>End: {item.state.latB} , {item.state.lonB}</Text>
                <Text>Timstamp:{item.state.timestamp}</Text>
                </View>
        </TouchableHighlight>
  
          
        );
      }
      
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
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 5,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 45,
    },

  });

export default HistoryScreen;