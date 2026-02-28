import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, Image, ScrollView, 
  FlatList, TouchableOpacity, Modal, Button, Alert 
} from 'react-native';
import { useRouter } from 'expo-router';
import SearchBar from '../components/SearchBar';

export default function HomeScreen() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const ulam = [
    { id: '1', n: 'Crispy Chicken' },
    { id: '2', n: 'Sizzling Sisig' },
    { id: '3', n: 'Pork BBQ' },
    { id: '4', n: 'Iced Tea' },
  ];

  return (
    <ScrollView style={styles.main}>
      
      <View style={styles.nav}>
        <View>
          <Text>Home Screen</Text>
          <Text style={styles.title}>Manok ni Daniel</Text>
        </View>
        <TouchableOpacity 
          style={styles.redBtn} 
          onPress={() => router.push('/orders')}
        >
          <Text style={{color: 'white'}}>Orders</Text>
        </TouchableOpacity>
      </View>

      <SearchBar />

      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500' }} 
        style={styles.pic} 
      />

      <Text style={styles.label}>Menu</Text>

      <FlatList 
        data={ulam}
        numColumns={2} 
        keyExtractor={item => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.menuBox}>
            <Text style={{fontWeight: 'bold'}}>{item.n}</Text>
          </View>
        )}
      />

      <View style={{padding: 20}}>
        <TouchableOpacity 
          style={styles.modalBtn}
          onPress={() => setShow(true)}
        >
          <Text style={{color: 'white'}}>Show Modal</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={show} transparent={true}>
        <View style={styles.darkBg}>
          <View style={styles.mBox}>
            <Text>This is a modal</Text>
            <Button 
              title="Close" 
              onPress={() => {
                setShow(false);
                Alert.alert("Notice", "Modal Closed!");
              }} 
            />
          </View>
        </View>
      </Modal>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  redBtn: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  pic: {
    width: 300,
    height: 150,
    alignSelf: 'center',
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 10,
  },
  menuBox: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
  },
  modalBtn: {
    backgroundColor: 'red',
    padding: 10,
    width: 100,
    borderRadius: 5,
  },
  darkBg: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  mBox: {
    backgroundColor: 'white',
    padding: 20,
    width: 200,
    borderRadius: 5,
  },
});