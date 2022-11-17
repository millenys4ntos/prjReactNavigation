import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home.js'
import Mongagua from './components/Mongagua.js';
import Itanhaem from './components/Itanhaem.js';
import Santos from './components/Santos.js';
import PG from './components/PG.js';
import SV from './components/SV.js';

export default function App() {
  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Mongagua" component={Mongagua} />
        <Stack.Screen name="Itanhaem" component={Itanhaem} />
        <Stack.Screen name="Santos" component={Santos} />
        <Stack.Screen name="PG" component={PG} />
        <Stack.Screen name="SV" component={SV} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
