import React from 'react';
import { StyleSheet, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import CalculatorScreen from './components/CalculatorScreen';
import SettingScreen from './components/Screens/Settings';
import HistoryScreen from './components/Screens/History';
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
    
      <Stack.Screen name="Geo Calculator" component={CalculatorScreen} options={{ title:'Geo Calculator',headerStyle:{backgroundColor:'#264391'} ,headerTitleStyle:{color:'white',textAlign:'center', alignSelf: 'center'}}} />
      <Stack.Screen name="Settings" component={SettingScreen} options={{ title:'Settings',headerStyle:{backgroundColor:'#264391'} ,headerTitleStyle:{color:'white',textAlign:'center', alignSelf: 'center'}}}/>
      <Stack.Screen name="History" component={HistoryScreen} options={{ title:'History',headerStyle:{backgroundColor:'#264391'} ,headerTitleStyle:{color:'white',textAlign:'center', alignSelf: 'center'}}}/>
    
      </Stack.Navigator>
    </NavigationContainer>

  </SafeAreaView>
</TouchableWithoutFeedback>


 );
}

const styles = StyleSheet.create({
 container: {
  
  backgroundColor: "#cce0f7",
  flex: 1

 },
});