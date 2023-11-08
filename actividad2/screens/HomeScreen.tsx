import { View, Text, StyleSheet, TextInput } from 'react-native';
import React,{useState} from 'react';

export default function HomeScreen() {

    const [text, onChangeText] = useState('Dublin');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Eventos especiales en <Text style={styles.ciudad}>{text}</Text></Text>
      <Text style={styles.fuente}>Introduce una ciudad:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#06232c',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    },
    fuente:{
        color: '#fff'
    },
    ciudad:{
        color: '#ae92ed'
    },
    input: {
        height: 40,
        width: 150,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff'
      },
})