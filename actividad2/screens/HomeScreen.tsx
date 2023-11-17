import { Button, View, Text, StyleSheet, TextInput } from 'react-native';
import React,{useState} from 'react';

import FloatingButton from '../componentes/FloatingButton';

export default function HomeScreen({ navigation }) {

    const [text, onChangeText] = useState('Dublin');

    const handleFloatingButtonPress = () => {
      navigation.navigate('Eventos');
    };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Eventos especiales en <Text style={styles.ciudad}>{text}</Text></Text>
      <Text style={styles.fuente}>Introduce una ciudad:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        title="Ver eventos"
        onPress={() => navigation.navigate('Eventos')}
        style={styles.button}
      />

      <FloatingButton onPress={handleFloatingButtonPress} />
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
    button:{
      backgroundColor: '#ae92ed',
      color: '#fff'
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