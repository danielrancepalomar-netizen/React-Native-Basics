import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.searchField} 
        placeholder="Anong ulam ang gusto mo?" 
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  searchField: {
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderRadius: 25,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#DDD'
  }
});

export default SearchBar;