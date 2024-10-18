import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/Home'
import Login from './screens/Login'
import Cadastro from './screens/Cadastro'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}
        options={{
          title:"Home",
          headerTitleAlign:"center",
          headerStyle: {
            backgroundColor: '#30687A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }} />
        <Stack.Screen name="Cadastro" component={Cadastro}
        options={{
          title:"Home",
          headerTitleAlign:"center",
          headerStyle: {
            backgroundColor: '#30687A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }} />
        <Stack.Screen name="Home" component={Home}
        options={{
          title:"Home",
          headerTitleAlign:"center",
          headerStyle: {
            backgroundColor: '#30687A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}