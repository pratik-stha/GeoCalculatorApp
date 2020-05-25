import React,{useState, useEffect}from 'react';
import {StyleSheet, Text, View,TextInput,Keyboard, TouchableOpacity} from 'react-native';
import {Button,Input} from 'react-native-elements';
import {computeDistance,computeBearing, check_error} from '../Methods';
import { AntDesign } from '@expo/vector-icons';



let Flag =false;

const CalculatorScreen = ({route,navigation})=>{
    console.log('In Calculator page: ');
    console.log(route.params);

    const [state,setState] = useState({latA:'',latB:'',lonA:'',lonB:''});
    const [dist,setDist] = useState();
    const [angl,setAngl] = useState();

    const [distanceUnit,setdistanceUnit]=useState("Km");
    const [bearingUnit,setbearingUnit] = useState("Deg");

   
 

    const updateState =(vals)=>{
       
        setState(
            {
                ...state,
                ...vals,

            }
        );
    };

    const checkValidation=(num)=>
    {
        if(isNaN(num)){
            return 'Must be a number';
        }

        else{
            
            return '';
        }

    }

  

    navigation.setOptions(
        {
            headerRight:()=>(
                    <TouchableOpacity onPress = {()=>{navigation.navigate('Settings',{distanceUnit,bearingUnit})}}>
                    <AntDesign style={{marginRight:20}} name="setting" size={24} color="black" />
                    </TouchableOpacity>
            )
        }


    );
   
    
    useEffect(() => {
        console.log('Profile: called anytime a specific state variable changes')
        if (route.params?.distanceUnit) {
          setdistanceUnit(route.params.distanceUnit)
        }
        if (route.params?.bearingUnit) {
          setbearingUnit(route.params.bearingUnit);
        }
            Flag = true;
            console.log(Flag);
         }, [route.params?.distanceUnit, route.params?.bearingUnit]);
  
    console.log(Flag);     
     if(Flag){
        if(check_error(state.latA,state.latB,state.lonA,state.lonB)){
                     
                    
            setDist(computeDistance(parseFloat(state.latA),parseFloat(state.lonA),parseFloat(state.latB),parseFloat(state.lonB),distanceUnit));
            setAngl(computeBearing(parseFloat(state.latA),parseFloat(state.lonA),parseFloat(state.latB),parseFloat(state.lonB),bearingUnit));
            Keyboard.dismiss();

         }
         else{
            setDist('INVALID');
            setAngl('INVALID');
         Keyboard.dismiss();
         }
        console.log(distanceUnit,bearingUnit);
        Flag = false;
    }  



    return(
        <View style={styles.container}>

            <Input  placeholder='Enter the latitude of point A' 
                    type="number" 
                    pattern="[0-9]*" 
                    inputmode="numeric" 
                    onChangeText={(val)=>                        
                        {
                            updateState({latA:val});
                            var msg = checkValidation(val);
                            console.log(msg);
                         }
                    }
                    errorMessage={checkValidation(state.latA)}          
                    value={state.latA}

                    
                    
            />
            <Input  placeholder='Enter the longitude of point A' 
                    type="number" 
                    pattern="[0-9]*" 
                    inputmode="numeric" 
                    onChangeText={(val)=>updateState({lonA:val})}
                    value={state.lonA}
                    errorMessage={checkValidation(state.lonA)}  
            />

            <Input  placeholder='Enter the latitude of point B' 
                    type="number" 
                    pattern="[0-9]*" 
                    inputmode="numeric" 
                    onChangeText={(val)=>updateState({latB:val})} 
                    value={state.latB}
                    errorMessage={checkValidation(state.latB)}  
            />

            <Input  placeholder='Enter the longitude of point B' 
                    type="number" 
                    pattern="[0-9]*" 
                    inputmode="numeric" 
                    onChangeText={(val)=>updateState({lonB:val})}
                    value={state.lonB}
                    errorMessage={checkValidation(state.lonB)}  
            />

            <Button title = "Calculate"
            onPress = {()=>
            {
                if(check_error(state.latA,state.latB,state.lonA,state.lonB)){
                     
                    
                   setDist(computeDistance(parseFloat(state.latA),parseFloat(state.lonA),parseFloat(state.latB),parseFloat(state.lonB),distanceUnit));
                   setAngl(computeBearing(parseFloat(state.latA),parseFloat(state.lonA),parseFloat(state.latB),parseFloat(state.lonB),bearingUnit));
                   Keyboard.dismiss();

                }
                else{
                   setDist('INVALID');
                   setAngl('INVALID');
                Keyboard.dismiss();
                }
               
            }
           } />


            <Button title = "Clear"
                    onPress = {()=>
                    { 
                            updateState({latA:'',latB:'',lonA:'',lonB:'',DistanceResult:'',BearingResult:''});
                            setDist();
                            setAngl();
                            Keyboard.dismiss();           
                    }
                } />

                
            <Text>Distance: {dist} </Text>
            <Text>Bearing Angle: {angl} </Text>
            <Text>The selected units are {distanceUnit} and {bearingUnit}</Text>
        </View>
    );

};



const styles = StyleSheet.create(
{
    container:{

        margin :20,
        
    },

});

export default CalculatorScreen;