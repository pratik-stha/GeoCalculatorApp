import React,{useState,useEffect} from 'react';
import {View, StyleSheet,Text,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Dropdown } from 'react-native-material-dropdown';


const SettingScreen=({route,navigation})=>{
    
  const [distanceUnit,setDistanceUnit] = useState();
  const [bearingUnit,setBearingUnit] = useState();

  console.log(route.params);

 let DistanceUnit = [{
    value: 'Km',
  }, {
    value: 'Mi',
  }];

  let BearingUnit = [{
    value: 'Deg',
  }, {
    value: 'Mils',
  }];
    
    
    navigation.setOptions(
        {
            
            headerLeft:()=>(
                <TouchableOpacity onPress = {()=>{navigation.navigate('Geo Calculator',{distanceUnit,bearingUnit})}}>
             <AntDesign style={{marginLeft:20}} name="save" size={24} color="black" />
               </TouchableOpacity>
            ),

            headerRight:()=>(
                    <TouchableOpacity title='Cancel' onPress = {()=>{navigation.navigate('Geo Calculator')}}>
                    <AntDesign style={{marginRight:20}} name="closecircleo" size={24} color="black" />
                   </TouchableOpacity>
                  )
        }
    );

    return (
        <View>
      
             <Text> Welcome to Setting Screen</Text>
             <Dropdown label='Distance Unit' data={DistanceUnit} onChangeText={(Vali)=>setDistanceUnit(Vali)}/>
             <Dropdown label='Bearing Angle Unit' data={BearingUnit} onChangeText={(Vali)=>setBearingUnit(Vali)}/>
             <Text>You Selected</Text>
        </View>


    );
}

const styles = StyleSheet.create({});

export default SettingScreen;