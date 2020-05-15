import React,{useState}from 'react';
import {StyleSheet, Text, View,TextInput} from 'react-native';
import {Button,Input} from 'react-native-elements';
import methods from './methods';

const CalculatorScreen = ()=>{
    const [state,setState] = useState({latA:'',latB:'',lonA:'',longB:'',result:''});
    
    const updateState =(vals)=>{
       
        setState(
            {
                ...state,
                ...vals,

            }
        );
    };

    const compute=()=>{
        var a=parseFloat(state.latA);
        var b=parseFloat(state.lonA);
        var c = a+b;
        return c;
    
    }

    const checkValidation=(num)=>
    {
        if(isNaN(num)){
            return 'Must be a number';
        }

        else{
            
            return 'Is a number';
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
                              
                    value={state.latA}

                    
                    
            />
            <Input  placeholder='Enter the longitude of point A' 
                    type="number" 
                    pattern="[0-9]*" 
                    inputmode="numeric" 
                    onChangeText={(val)=>updateState({lonA:val})}
                    value={state.lonA}
            />

            <Input  placeholder='Enter the latitude of point B' 
                    type="number" 
                    pattern="[0-9]*" 
                    inputmode="numeric" 
                    onChangeText={(val)=>updateState({latB:val})} 
                    value={state.latB}
            />

            <Input  placeholder='Enter the longitude of point B' 
                    type="number" 
                    pattern="[0-9]*" 
                    inputmode="numeric" 
                    onChangeText={(val)=>updateState({lonB:val})}
                    value={state.lonB}
            />

            <Button title = "Calculate"
            onPress = {()=>
            {
                updateState({result: compute()});
               
            }
           } />

            <Button title = "Clear"
                    onPress = {()=>
                    { 
                            updateState({result: compute()});           
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