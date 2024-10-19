import { Pressable, Text, TextInput, View, } from 'react-native'
import styles from '../styles/styles';
import React, { useEffect, useState } from 'react'
import { Input, Button } from 'react-native-elements';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { authentication } from '../firebase';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native';


const Login = ({navigation}) => {
    const [email, setEmail]=useState('');
    const [senha, setSenha]=useState('');

    const mudanca=()=>{
      navigation.navigate('Mudanca')
    }

    const loginUser =async()=>{
      signInWithEmailAndPassword(authentication, email, senha)
      .then((userCredential)=>{
        const user = userCredential.user;
        navigation.navigate('Home')
      })
      .catch((error)=>{
        
        const errorMessage = error.message;
        alert('É necessário está cadastrado para realizar o login');
      })
    }
    /*useEffect(()=>{
      onAuthStateChanged(authentication, (user)=>{
        if(user){
          navigation.navigate('Home')
        }else{ console.log("'É necessário ter um email cadastrado para fazer o login'")
        }
      })
    },[])*/

  return (
    <View style={styles.container}>
      <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-Vindo(a)</Text> 
      </Animatable.View>

      <Animatable.View animation='fadeInUp'  style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>

        <TextInput
        placeholder='Digite seu email...'
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        
        />
        <Text style={styles.title}>Senha</Text>
        
        <TextInput
        placeholder='Senha'
        style={styles.input}
        value={senha}
        onChangeText={text => setSenha(text)}
        secureTextEntry
        />

        <TouchableOpacity onPress={loginUser} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('Cadastro')} style={styles.buttonRegister}>
          <Text style={styles.registerText}>Não possui uma conta? Cadastrar-se</Text>
        </TouchableOpacity> 

        <TouchableOpacity onPress={mudanca} style={styles.buttonRegister}>
          <Text style={styles.registerText}>Esqueceu sua senha?</Text>
        </TouchableOpacity> 

      </Animatable.View>

    </View>
  )
}

export default Login
