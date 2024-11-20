import React from "react";
import { Platform } from "react-native";
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Importa as telas necessárias
import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import Home from "./screens/Home";
import Ecopoints from "./screens/Ecopoints";
import ChatScreen from "./screens/Chat";
import Perfil from "./screens/Perfil";
import UserListScreen from "./screens/UserListScreen";
import Mudanca from "./screens/Mudanca";
import CreatePost from "./screens/CreatePost"; // Importa a tela CreatePost
import { PostProvider } from "./screens/PostContext"; // Importa o contexto para gerenciamento de postagens
import RewardsScreen from "./screens/components/RewardsScreen";
import QrScannerScreen from "./screens/components/QrScannerScreen"; // Importa a tela de scanner de QR


const Stack = createNativeStackNavigator(); // Cria o stack navigator
const Tab = createBottomTabNavigator(); // Cria o bottom tab navigator

// Componente para a navegação do Chat usando Stack
function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserList"
        component={UserListScreen} // Tela que exibe a lista de usuários
        options={{
          title: "Usuários",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#215678" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen} // Tela de chat
        options={{
          title: "Chat",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#215678" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          tabBarStyle: { display: "none" },
        }}
      />
    </Stack.Navigator>
  );
}

// Função para as Abas do App
function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Estiliza as opções do Tab Navigator
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#b0c4de",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#215678",
          borderTopWidth: 0,
          borderTopColor: "#d1d1d1",
          height: Platform.OS === "ios" ? 80 : 60,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          borderRadius: 20,
          bottom: 10,
          left: 10,
          right: 10,
        },
        // Define o ícone do Tab baseado na Tela
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Ecopoints") {
            iconName = focused ? "map" : "map-outline";
          } else if (route.name === "ChatStack") {
            iconName = focused ? "chatbubble" : "chatbubble-outline";
          } else if (route.name === "Perfil") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "QrScanner") {
            iconName = focused ? "qr-code" : "qr-code-outline";
          } else if (route.name === "Rewards") {
            iconName = focused ? "wallet" : "wallet-outline";
          }

          return (
            <Ionicons
              name={iconName}
              size={size + 5}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Ecopoints"
        component={Ecopoints}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="QrScanner"
        component={QrScannerScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Rewards"
        component={RewardsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ChatStack"
        component={ChatStack} // Componente para a navegação de chat
        options={({ route }) => ({
          headerShown: false,
          // Estilo da tab com base na rota atual
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";
            if (routeName === "Chat") {
              return { display: "none" }; // Esconde a tab quando está na tela de chat
            }
            return {
              position: "absolute",
              backgroundColor: "#215678",
              borderTopWidth: 0,
              bottom: 14,
              left: 14,
              right: 14,
              elevation: 10,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.1,
              shadowRadius: 5,
              borderRadius: 20,
              height: Platform.OS === "ios" ? 80 : 60,
            };
          })(route),
        })}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

// Componente principal da navegação
export default function App() {
  return (
    <PostProvider> 
      <NavigationContainer>
        <Stack.Navigator>
          {/* Tela de Login */}
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          {/* Tela de Cadastro */}
          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{
              title: "Cadastro",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#215678" },
              headerTintColor: "#fff",
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />
          {/* Tela para Mudança de Senha */}
          <Stack.Screen
            name="Mudanca"
            component={Mudanca}
            options={{
              title: "Alterar Senha",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#215678" },
              headerTintColor: "#fff",
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />
          {/* Navegação das abas */}
          <Stack.Screen
            name="HomeTabs"
            component={AppTabs}
            options={{ headerShown: false }}
          />
          {/* Tela para Criar Postagem */}
          <Stack.Screen
            name="CreatePost"
            component={CreatePost}
            options={{
              title: "Criar Postagem",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#215678" },
              headerTintColor: "#fff",
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PostProvider>
  );
}
