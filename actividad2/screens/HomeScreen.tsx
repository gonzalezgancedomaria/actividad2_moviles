import { Button, View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import React,{useState} from 'react';

import FloatingButton from '../componentes/FloatingButton';
import EventosReviewScreen from './EventosReviewScreen';

export default function HomeScreen({ navigation }) {

    const [text, onChangeText] = useState('Dublin');

    const handleFloatingButtonPress = () => {
      console.log('Ir al formulario')
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
      <EventosReviewScreen></EventosReviewScreen>
      <Button
        title="Ver más eventos"
        onPress={() => navigation.navigate('Eventos')}
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
    input: {
        height: 40,
        width: 150,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff'
      },
})