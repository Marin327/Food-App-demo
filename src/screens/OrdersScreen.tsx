import React from 'react';
import { View, Text } from 'react-native';

export default function OrdersScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>История на поръчките</Text>
      <Text>(Тук по-късно ще се показват направените поръчки.)</Text>
    </View>
  );
}
