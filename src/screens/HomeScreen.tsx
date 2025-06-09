// src/screens/HomeScreen.jsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const categories = ['Soups', 'Desserts', 'Salads', 'Main Courses', 'Drinks'];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Категории</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Category', { category: item })}
          >
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
  item: {
    padding: 20,
    backgroundColor: '#ff7043',
    borderRadius: 10,
    marginBottom: 12,
  },
  itemText: { color: '#fff', fontSize: 20 },
});
