import React, { useContext } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { CartContext } from '../context/CartContext';

export default function CartScreen() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Количка</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <Text>{item.name} - {item.price.toFixed(2)} лв</Text>
            <Button title="Премахни" onPress={() => removeFromCart(item.id)} />
          </View>
        )}
      />
      <Text style={{ marginTop: 10, fontSize: 18 }}>Общо: {total.toFixed(2)} лв</Text>
      <Button title="Изчисти количката" onPress={clearCart} />
    </View>
  );
}