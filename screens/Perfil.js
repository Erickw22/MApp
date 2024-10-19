import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { authentication } from '../firebase'
import styles from '../styles/styles';
import { signOut } from 'firebase/auth';
import { useRoute } from '@react-navigation/native';
import Login from './Login';

export default function Perfil({navigation}) {
  const router = useRoute(); 

  const  logout=()=>{
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <View>
        <Button onPress={logout}
        title='Sair'>
        </Button>
      </View>
    </View>
  )
}
