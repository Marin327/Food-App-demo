import React, { useEffect, useRef } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CartProvider } from './src/context/CartContext';

// Импортирай екраните си
import HomeScreen from './src/screens/HomeScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import ProductScreen from './src/screens/ProductScreen';
import CartScreen from './src/screens/CartScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createNativeStackNavigator();

function SplashScreen({ navigation }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => navigation.replace('Home'), 1500);
    });
  }, []);

  return (
    <View style={styles.splashContainer}>
      <Animated.Text style={[styles.splashText, { opacity }]}>
        Добре дошли в Foodly!
      </Animated.Text>
    </View>
  );
}

function FadeInScreen({ children }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return <Animated.View style={{ flex: 1, opacity }}>{children}</Animated.View>;
}

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home">
            {props => (
              <FadeInScreen>
                <HomeScreen {...props} />
              </FadeInScreen>
            )}
          </Stack.Screen>
          <Stack.Screen name="Category">
            {props => (
              <FadeInScreen>
                <CategoryScreen {...props} />
              </FadeInScreen>
            )}
          </Stack.Screen>
          <Stack.Screen name="Product">
            {props => (
              <FadeInScreen>
                <ProductScreen {...props} />
              </FadeInScreen>
            )}
          </Stack.Screen>
          <Stack.Screen name="Cart">
            {props => (
              <FadeInScreen>
                <CartScreen {...props} />
              </FadeInScreen>
            )}
          </Stack.Screen>
          <Stack.Screen name="Orders">
            {props => (
              <FadeInScreen>
                <OrdersScreen {...props} />
              </FadeInScreen>
            )}
          </Stack.Screen>
          <Stack.Screen name="Settings">
            {props => (
              <FadeInScreen>
                <SettingsScreen {...props} />
              </FadeInScreen>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#ff7043',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
});
