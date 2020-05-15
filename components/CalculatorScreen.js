import React,{useState}from 'react';
import {StyleSheet, Text, View,TextInput} from 'react-native';
import {Button,Input} from 'react-native-elements';
import {computeDistance,computeBearing} from '../Methods';

const CalculatorScreen = ()=>{
    const [state,setState] = useState({latA:'',latB:'',lonA:'',lonB:'',result:''});
    
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

    return(
        <View style={styles.container}>
            <Text>  {state.result} </Text>

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
                updateState({result: computeDistance(parseFloat(state.latA),parseFloat(state.lonA),parseFloat(state.latB),parseFloat(state.lonB))});
               
            }
           } />

            <Button title = "Clear"
                    onPress = {()=>
                    { 
                            updateState({latA:'',latB:'',lonA:'',lonB:'',result:''});           
                    }
                } />
        </View>
    );

};



const styles = StyleSheet.create(
{
    container:{

        margin :20,
        
    }

});

export default CalculatorScreen;