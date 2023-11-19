import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackPramList } from "../App";

type DetailsProps = NativeStackScreenProps<RootStackPramList, "Details">;

export default function DetalleEventoScreen({ route }: DetailsProps) {
  const evento = route.params?.evento;
  return (
    <View style={styles.container}>
      {evento == undefined ? (
        <Text style={styles.text}>Selecciona un evento antes</Text>
      ) : (
        <View style={[styles.card, styles.elevatedCard]}>
          <View style={styles.headingContainer}>
            <Text style={styles.headerText}>{evento.name}</Text>
          </View>
          <View style={styles.bodyContainer}>
            <Text numberOfLines={4}>{evento.description}</Text>
          </View>
          <View style={styles.bodyContainer}>
          <Text style={styles.bold}>Lugar: {evento.place}</Text>
            <Text style={styles.bold}>Precio: {evento.price} €</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#06232c",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
    color: "#fff",
  },
  bold: {
    fontWeight: "bold"
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: "#84b6f4",
  },
  headingContainer: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  cardImage: {
    height: 190,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  socialLinks: {
    fontSize: 16,
    color: "#000000",
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
