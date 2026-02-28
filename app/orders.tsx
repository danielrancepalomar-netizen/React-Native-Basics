import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function OrdersScreen() {
  const data = [
    { id: '1', item: '2 Fried Chicken', status: 'Pending' },
    { id: '2', item: '1 Burger Steak', status: 'Ready' },
    { id: '3', item: '1 Iced Tea', status: 'Pending' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kitchen Tickets</Text>
      
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View>
              <Text style={styles.foodName}>{item.item}</Text>
              <Text style={{fontSize: 12, color: 'gray'}}>Table 5</Text>
            </View>
            <Text style={{ color: item.status === 'Ready' ? 'green' : 'orange', fontWeight: 'bold' }}>
              {item.status}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity 
        style={styles.btn}
        onPress={() => Alert.alert("Message", "Order Done!")}
      >
        <Text style={{color: 'white', fontWeight: 'bold'}}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: 'white' 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    marginTop: 40 
  },
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  foodName: { 
    fontSize: 16 
  },
  btn: { 
    backgroundColor: 'black', 
    padding: 15, 
    alignItems: 'center', 
    marginTop: 20 
  }
});