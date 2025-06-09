import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Product } from '../types/product';

export default function ProductCard({ product, onPress }: { product: Product; onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ marginBottom: 10 }}>
        <Image source={{ uri: product.image }} style={{ height: 120, borderRadius: 8 }} />
        <Text style={{ fontSize: 18 }}>{product.name}</Text>
        <Text>{product.price.toFixed(2)} лв</Text>
      </View>
    </TouchableOpacity>
  );
}
