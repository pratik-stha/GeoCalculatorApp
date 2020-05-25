import React,{useState,useEffect} from 'react';
import {View, StyleSheet,Text,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Dropdown } from 'react-native-material-dropdown';


const SettingScreen=({route,navigation})=>{
  
  console.log('In Settings page:');
  console.log(route.params);
  
  const initialDistanceUnit = route.params.distanceUnit;
  const initialBearingUnit = route.params.bearingUnit;
  
  console.log(initialDistanceUnit);
  console.log(initialBearingUnit);

  const [distanceUnit,setDistanceUnit] = useState(initialDistanceUnit);
  const [bearingUnit,setBearingUnit] = useState(initialBearingUnit);

 let DistanceUnit = [{
    value: "Km",
  }, {
    value: "Mi",
  }];

  let BearingUnit = [{
    value: "Deg",
  }, {
    value: "Mils",
  }];
    
    
    navigation.setOptions(
        {
            
            headerLeft:()=>(
                <TouchableOpacity onPress = {()=>{navigation.navigate('Geo Calculator',{distanceUnit,bearingUnit})}}>
             <AntDesign style={{marginLeft:20}} name="save" size={24} color="white" />
               </TouchableOpacity>
            ),

            headerRight:()=>(
                    <TouchableOpacity title='Cancel' onPress = {()=>{navigation.navigate('Geo Calculator')}}>
                    <AntDesign style={{marginRight:20}} name="closecircleo" size={24} color="white" />
                   </TouchableOpacity>
                  )
        }
    );

    return (
        <View style={styles.container}>
      
             <Text style={{textAlign:'center'}}> Welcome to Setting Screen</Text>
             <View style={styles.dropDownStyle}>
             <Dropdown label='Distance Unit' data={DistanceUnit} value={distanceUnit} onChangeText={(Vali)=>setDistanceUnit(Vali)}/>
             <Dropdown label='Bearing Angle Unit' data={BearingUnit} value={bearingUnit} onChangeText={(Vali)=>setBearingUnit(Vali)}/>
             </View>
    <Text style={{textAlign:'center'}}>You Selected {distanceUnit} and {bearingUnit}</Text>
        </View>


    );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    margin :0,
    backgroundColor: "#cce0f7",
    },

    dropDownStyle:{
      marginLeft:15,
      marginRight:15,
      }
});

export default SettingScreen;