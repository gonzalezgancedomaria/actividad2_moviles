import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/HomeScreen';
import EventosScreen from './screens/EventosScreen';

const Tab = createMaterialBottomTabNavigator();
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
        <Tab.Screen name="Eventos" component={EventosScreen}
        options={{
          tabBarLabel: 'Eventos',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard-list" color={color} size={26} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
