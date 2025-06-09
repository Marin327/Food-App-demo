import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
// Други екрани

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Категории' }} />
      <Stack.Screen name="Category" component={CategoryScreen} options={{ title: 'Ястия' }} />
      {/* Други екрани */}
    </Stack.Navigator>
  );
}
