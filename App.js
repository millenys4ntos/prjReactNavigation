import React from 'react';
import { Text, view } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './componets/Home'
import Mongagua from './components/Mongagua';

export default function App() {
  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Mongagua" component={Mongagua} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
