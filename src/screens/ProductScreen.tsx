import React, { useContext } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { PRODUCTS } from '../data/products';
import { useRoute } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';

export default function ProductScreen() {
  const route = useRoute();
  const { productId } = route.params as { productId: string };
  const product = PRODUCTS.find(p => p.id === productId);
  const { addToCart } = useContext(CartContext);

  if (!product) return <Text>Продуктът не е намерен.</Text>;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Image source={{ uri: product.image }} style={{ height: 200, borderRadius: 10 }} />
      <Text style={{ fontSize: 24, marginVertical: 10 }}>{product.name}</Text>
      <Text>{product.description}</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{product.price.toFixed(2)} лв</Text>
      <Button title="Добави в количката" onPress={() => addToCart(product)} />
    </View>
  );
}