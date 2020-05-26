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
                    <AntDesign style={{marginRight:20}} name="setting" size={24} color="white" />
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
            <View style={styles.inputArea}>
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
            </View>

            <View    style = {styles.CalButton}>
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
           </View>

          <View style={styles.clearButton}>
            <Button title = "Clear"
                    style = {{width:20}}
                    onPress = {()=>
                    { 
                            updateState({latA:'',latB:'',lonA:'',lonB:'',DistanceResult:'',BearingResult:''});
                            setDist();
                            setAngl();
                            Keyboard.dismiss();           
                    }
                } />
            </View>

            <View style={styles.resultstyle}>    
                    <View style={{flexDirection:'row'}}>
                            <Text style={{flex:1,borderTopWidth:1,borderLeftWidth:1,borderBottomWidth:1, textAlign:'center'}}>Distance:</Text>
                            <Text style={{flex:1,borderTopWidth:1,borderBottomWidth:1,borderLeftWidth:1,borderRightWidth:1, textAlign:'center'}}>{dist}</Text>
                            
                    </View>   
                    <View style={{flexDirection:'row'}}>  
                        <Text style={{flex:1,borderLeftWidth:1,borderBottomWidth:1,textAlign:'center'}}>Bearing Angle: </Text>  
                        <Text style={{flex:1,borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1,textAlign:'center'}}>{angl} </Text>
                    </View>
                              
                            
            </View>
                 <Text style={{textAlign:'center',marginTop:10}}>The selected units are {distanceUnit} and {bearingUnit}</Text>
        </View>
    );

};



const styles = StyleSheet.create(
{
    container:{
        flex:1,
        backgroundColor: "#cce0f7",
        
    },
    inputArea:{
        marginTop:15,
        textDecorationColor:'black',

    },

    CalButton:{
        marginLeft:10,
        marginRight:15,
    },

    clearButton:{
        marginLeft:10,
        marginRight:15,
        marginTop:10,
    },

    resultstyle:{
        marginTop:15,
        marginLeft:25,
        marginRight:25,
    }
    


    

});

export default CalculatorScreen;