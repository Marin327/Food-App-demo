import React from 'react';
import { View, Text, Button } from 'react-native';
import { Product } from '../types/product';

export default function CartItem({ item, onRemove }: { item: Product; onRemove: () => void }) {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text>{item.name} - {item.price.toFixed(2)} лв</Text>
      <Button title="Премахни" onPress={onRemove} />
    </View>
  );
}
