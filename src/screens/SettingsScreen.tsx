import React from 'react';
import { View, Text } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Настройки</Text>
      <Text>Езици, профил, информация и др.</Text>
    </View>
  );
}
