import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from './screens/home';
import { List } from './screens/list';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="List" component={List}/>
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}