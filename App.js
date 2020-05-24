import React from 'react';
import { StyleSheet, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import CalculatorScreen from './components/CalculatorScreen';
import SettingScreen from './components/Screens/Settings';
import {Button} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';

export default function App() {

  const Stack = createStackNavigator();

 return (
  
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <SafeAreaView style={styles.container} >
  <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Geo Calculator" component={CalculatorScreen} options={{headerTitleStyle:{alignSelf:'center'},}} />
    
      <Stack.Screen name="Settings" component={SettingScreen} options={{headerTitleStyle:{alignSelf:'center'},}}/>
    
      </Stack.Navigator>
    </NavigationContainer>

  </SafeAreaView>
</TouchableWithoutFeedback>


 );
}

const styles = StyleSheet.create({
 container: {
   backgroundColor: "#fff",
   margin: 1,
   flex: 1
 },
});