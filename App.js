import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from "@expo/vector-icons";

import Login from './screens/Login'
import Cadastro from './screens/Cadastro'
import Home from "./screens/Home";
import Ecopoints from './screens/Ecopoints'
import Chat from './screens/Chat'
import Perfil from "./screens/Perfil";
import Mudanca from "./screens/Mudanca";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function Entrar() {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarActiveTintColor:"#fff",
      tabBarShowLabel: false,
      tabBarStyle:{
        position: 'absolute',
        backgroundColor:"#30687A",
        borderTopWidth: 0,

        bottom: 14,
        left: 14,
        right: 14,
        elevation: 0,
        borderRadius: 8,
        height: 60,
      }
    }}>
      <Tab.Screen name="Home" component={Home}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size,focused})=>{
          if(focused){
            return <Ionicons name="home" size={size} color={color}/>
          }
          return <Ionicons name="home-outline" size={size} color={color}/>
        } 
      }} />
      <Tab.Screen name="Ecopoints" component={Ecopoints}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size,focused})=>{
          if(focused){
            return <Ionicons name="map" size={size} color={color}/>
          }
          return <Ionicons name="map-outline" size={size} color={color}/>
        } 
         
      }}
       />
      <Tab.Screen name="Chat" component={Chat}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size,focused})=>{
          if(focused){
            return <Ionicons name="chatbubble" size={size} color={color}/>
          }
          return <Ionicons name="chatbubble-outline" size={size} color={color}/>
        }  
      }}
       />
      <Tab.Screen name="Perfil" component={Perfil}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size,focused})=>{
          if(focused){
            return <Ionicons name="person" size={size} color={color}/>
          }
          return <Ionicons name="person-outline" size={size} color={color}/>
        }  
      }}
       />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}
        options={{
          headerShown: false,
          title:"Login",
          headerTitleAlign:"center",
          headerStyle: {
            backgroundColor: '#30687A'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }} />
        <Stack.Screen name="Cadastro" component={Cadastro}
        options={{
          title:"Cadastro",
          headerTitleAlign:"center",
          headerStyle: {
            backgroundColor: '#30687A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }} />
        <Stack.Screen name="Home" component={Entrar}
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
        <Stack.Screen name="Mudanca" component={Mudanca}
        options={{
          title:"Mudanca",
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