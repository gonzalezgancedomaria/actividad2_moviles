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
import { EVENTS_LIST } from "../data/events";

export default function EventosScreen({ navigation, route }) {
  const [eventos, setEvento] = useState(EVENTS_LIST);

  const colors = ["#fdcae1", "#84b6f4", "#fdfd96"];

  useEffect(() => {
    if (route.params?.eventoToAdd) {
      var eventoToAdd = route.params?.eventoToAdd;
      eventoToAdd.id = eventos[eventos.length - 1].id++;
      setEvento(eventos.concat(route.params?.eventoToAdd));
    }
  }, [route.params?.eventoToAdd]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={eventos}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Detalle", {
                evento: item,
              });
            }}
            style={[
              styles.card,
              { backgroundColor: colors[index % colors.length] },
              index % 2 === 0
                ? {
                    marginRight: 30,
                  }
                : {
                    marginLeft: 30,
                  },
            ]}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <Button
        color="#ae92ed"
        title="Volver al inicio"
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 30,
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
    marginTop: 15,
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
