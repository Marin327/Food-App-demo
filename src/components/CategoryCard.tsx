import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Category } from '../types/category';

export default function CategoryCard({ category, onPress }: { category: Category; onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ marginBottom: 15, backgroundColor: '#eee', borderRadius: 10 }}>
        <Image source={{ uri: category.image }} style={{ height: 100, width: '100%' }} />
        <Text style={{ padding: 10, fontSize: 18 }}>{category.name}</Text>
      </View>
    </TouchableOpacity>
  );
}