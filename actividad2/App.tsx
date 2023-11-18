import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "./screens/HomeScreen";
import EventosScreen from "./screens/EventosScreen";
import DetalleEventoScreen from "./screens/DetalleEventoScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { AnadirEventoScreen } from "./screens/AnadirEventoScreen";

const Tab = createMaterialBottomTabNavigator();

export type RootStackPramList = {
  Home: undefined;
  Details: {evento: Evento}
}

export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
        }}/>
        <Tab.Screen
          name="Eventos"
          component={EventosScreen}
          options={{
            tabBarLabel: "Eventos",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="clipboard-list"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Detalle"
          component={DetalleEventoScreen}
          options={{
            tabBarLabel: "Detalle",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="ticket" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={AnadirEventoScreen}
          options={{
            tabBarLabel: "Add",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bookmark-plus" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>   
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
