import React from 'react';
import { Button, StyleSheet, Text, ScrollView,SafeAreaView, View} from 'react-native';


export default function EventosScreen ({navigation}){
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card,styles.cardOne]}><Text>Candlelight</Text></View>
                <View style={[styles.card,styles.cardTwo]}><Text>Opera Concert</Text></View>
                <View style={[styles.card,styles.cardThree]}><Text>Escape Room</Text></View>
                <View style={[styles.card,styles.cardOne]}><Text>Musical</Text></View>
                <View style={[styles.card,styles.cardTwo]}><Text>Van Gogh Expo</Text></View>
            </ScrollView>
            <Button title="Volver a Inicio" onPress={() => navigation.goBack()} style={styles.button}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 12,
        backgroundColor: '#06232c'
      },
    tituloTexto:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      height: 100,
      borderRadius: 10,
      margin: 8
    },
    cardOne: {
      backgroundColor: '#fdcae1'
    },
    cardTwo: {
      backgroundColor: '#84b6f4'
    },
    cardThree: {
      backgroundColor: '#fdfd96'
    },
    button:{
      backgroundColor: '#ae92ed',
      color: '#fff'
    }, 
})