import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export const AnadirEventoScreen = ({ route, navigation }) => {
  const [name, setNombre] = useState("");
  const [description, setDescripcion] = useState("");
  const [place, setLugar] = useState("");
  const [price, setFecha] = useState("");

  const handleGuardar = () => {
    navigation.navigate({
      name: "Eventos",
      params: {
        eventoToAdd: {
          name: name,
          description: description,
          place: place,
          price: price,
        },
      },
      merge: true,
    });
    console.log("Guardar evento:", name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setNombre}
        placeholder="Introduzca el nombre"
        placeholderTextColor="white"
      />

      <Text style={styles.label}>Descripción:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescripcion}
        placeholder="Introduzca la descripción"
        multiline={true}
        placeholderTextColor="white"
      />

      <Text style={styles.label}>Lugar:</Text>
      <TextInput
        style={styles.input}
        value={place}
        onChangeText={setLugar}
        placeholderTextColor="white"
        placeholder="Introduzca el lugar"
      />

      <Text style={styles.label}>Precio:</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setFecha}
        placeholder="Seleccione el precio"
        placeholderTextColor="white"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleGuardar}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#06232c",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "white",
  },
  input: {
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    color: "white",
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#ae92ed",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
