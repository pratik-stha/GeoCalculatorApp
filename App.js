import React from 'react';
import { StyleSheet, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import CalculatorScreen from './components/CalculatorScreen';
import {Button} from 'react-native-elements';

export default function App() {

 return (

   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <SafeAreaView style={styles.container} >
       <CalculatorScreen />

     </SafeAreaView>
   </TouchableWithoutFeedback>



 );
}

const styles = StyleSheet.create({
 container: {
   backgroundColor: "#fff",
   margin: 20,
   flex: 1
 },
});