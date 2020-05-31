import React,{useState,useEffect} from 'react';
import {View, StyleSheet,Text,TouchableOpacity, FlatList,SafeAreaView} from 'react-native';
import { setupHistoryListener } from '../../Helper/fb-History';


const DATA = [
    {
      LatA:45.999,
      LonA:12.345,
      LatB:45.7869,
      LonB:12.567
    },

    {
        LatA:43.499,
        LonA:10.345,
        LatB:47.7869,
        LonB:11.567
      },
  
      {
        LatA:5.999,
        LonA:1.345,
        LatB:5.7869,
        LonB:1.567
      },
  
        
  ];

const HistoryScreen=({route,navigation})=>{

   const [DataArr,setDataArr] = useState([]);


    useEffect(()=>{
        try{
            initHistorysDB();
        }catch(err){
            console.log(err);
        }

        setupHistoryListener((items)=>{setDataArr(items)});

    },[]);


    const Item=({index,item})=> {
      console.log(item);
        return (
          <View style={styles.item}>
            <Text>Start:</Text>
            <Text>End:</Text>
            <Text>TimeStamp</Text>
          </View>
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