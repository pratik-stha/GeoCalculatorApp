import React,{useState,useEffect} from 'react';
import {View, StyleSheet,Text,TouchableOpacity, FlatList,SafeAreaView,TouchableHighlight} from 'react-native';
import {setupHistoryListener } from '../../Helper/fb-History';


const HistoryScreen=({route,navigation})=>{

   const [DataArr,setDataArr] = useState([]);


    useEffect(()=>{
     
        setupHistoryListener((items)=>{setDataArr(items)});

    },[]);

    const PopulateData=(item)=>{
        {navigation.navigate('Geo Calculator',{item})};
    };

    const Item=({index,item})=> {
      console.log("The output is: ",item.state.latA);
        return (

        <TouchableHighlight underlayColor='green' onPress={()=>PopulateData(item)}>
               <View style={styles.item}>
                <Text>Start: {item.state.latA} , {item.state.lonA}</Text>
                <Text>End: {item.state.latB} , {item.state.lonB}</Text>
                <Text>TimeStamp</Text>
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