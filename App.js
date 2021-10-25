
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Thumb from './src/Thumb';
import FullInfo from './src/FullInfo';
import { NavigationContainer } from '@react-navigation/native';
import FullInfoState from "./src/context/fullInfo/FullInfoState";


const App = () => {
  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Thumb" component={Thumb} options={{ headerShown: false }} />
        <Stack.Screen name="FUllInfo" component={FullInfo} options={{ headerShown: false, }} />
      </Stack.Navigator>
    );
  }

  return (

    <>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </>

  )
}
export default () => {
  return (
    <FullInfoState>
      <App />
    </FullInfoState>
  )
}
