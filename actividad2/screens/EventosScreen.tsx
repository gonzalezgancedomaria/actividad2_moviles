import React, { useState } from "react";
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


export default function EventosScreen({ navigation }) {
  const [eventos, addEvento] = useState(EVENTS_LIST);

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
        {/* <View style={[styles.card,styles.cardOne]}><Text>Candlelight</Text></View>
                <View style={[styles.card,styles.cardTwo]}><Text>Opera Concert</Text></View>
                <View style={[styles.card,styles.cardThree]}><Text>Escape Room</Text></View>
                <View style={[styles.card,styles.cardOne]}><Text>Musical</Text></View>
                <View style={[styles.card,styles.cardTwo]}><Text>Van Gogh Expo</Text></View> */}
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
