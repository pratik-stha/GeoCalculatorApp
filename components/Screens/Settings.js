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
             <Dropdown label='Distance Unit' data={DistanceUnit} value={distanceUnit} onChangeText={(Vali)=>setDistanceUnit(Vali)}/>
             <Dropdown label='Bearing Angle Unit' data={BearingUnit} value={bearingUnit} onChangeText={(Vali)=>setBearingUnit(Vali)}/>
    <Text>You Selected {distanceUnit} and {bearingUnit}</Text>
        </View>


    );
}

const styles = StyleSheet.create({});

export default SettingScreen;