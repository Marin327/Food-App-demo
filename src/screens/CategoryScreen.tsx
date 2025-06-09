// src/screens/CategoryScreen.jsx
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Picker } from 'react-native';
import { menuData } from '../data/menuData';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default function CategoryScreen({ route }) {
  const { category } = route.params;
  const [selectedDay, setSelectedDay] = useState(days[0]);

  const items = menuData[selectedDay]?.[category] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>

      <View style={styles.pickerContainer}>
        <Text>Избери ден:</Text>
        <Picker
          selectedValue={selectedDay}
          onValueChange={day => setSelectedDay(day)}
          style={styles.picker}
        >
          {days.map(day => (
            <Picker.Item key={day} label={day} value={day} />
          ))}
        </Picker>
      </View>

      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemName}>{item.name} - {item.price}лв</Text>
            <Text style={styles.itemDesc}>{item.description}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>Няма ястия за този ден.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
  pickerContainer: { marginBottom: 16 },
  picker: { height: 50, width: 200 },
  item: {
    marginBottom: 12,
    padding: 12,
    backgroundColor: '#ffd180',
    borderRadius: 8,
  },
  itemName: { fontWeight: '600', fontSize: 18 },
  itemDesc: { fontSize: 14, color: '#4e342e' },
});
