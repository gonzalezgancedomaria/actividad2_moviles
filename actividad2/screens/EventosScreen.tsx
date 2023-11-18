import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { EVENTS_LIST } from '../data/events'


export default function EventosScreen({ navigation, route }) {
  const [eventos, setEvento] = useState(EVENTS_LIST);

  useEffect(()=>{
    if (route.params?.eventoToAdd) {
      var eventoToAdd = route.params?.eventoToAdd;
      eventoToAdd.id = eventos[eventos.length-1].id++;
      setEvento(eventos.concat(route.params?.eventoToAdd))
  }
  }, [route.params?.eventoToAdd]);

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
          data={eventos}
          // ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('Detalle', {
                evento: item
              })
            }} style={[styles.card,styles.cardTwo]}><Text>{item.name}</Text></TouchableOpacity>

          )}
        />
      
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        <Text>Volver al inicio</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 12,
    backgroundColor: "#06232c",
  },
  tituloTexto: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 8,
  },
  cardOne: {
    backgroundColor: "#fdcae1",
  },
  cardTwo: {
    backgroundColor: "#84b6f4",
  },
  cardThree: {
    backgroundColor: "#fdfd96",
  },
  button: {
    backgroundColor: "#ae92ed",
    color: "#fff",
  },
});
