import { View, } from 'react-native'
import styles from '../styles/styles';
import React, { useEffect, useState } from 'react'
import { Input, Button } from 'react-native-elements';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { authentication } from '../firebase';

const Login = ({navigation}) => {
    const [email, setEmail]=useState('');
    const [senha, setSenha]=useState('');

    const loginUser =async()=>{
      signInWithEmailAndPassword(authentication, email, senha)
      .then((userCredential)=>{
        const user = userCredential.user;
        navigation.navigate('Home')
      })
      .catch((error)=>{
        
        const errorMessage = error.message;
        alert(errorMessage);
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
      <Input
      placeholder='Digite seu Email'
      label='Email'
      leftIcon={{type: 'material', name:"email"}}
      value={email}
      onChangeText={text => setEmail(text)}
      />
      <Input
      placeholder='Digite sua Senha'
      label='Senha'
      leftIcon={{type: 'material', name:"lock"}}
      value={senha}
      onChangeText={text => setSenha(text)}
      secureTextEntry
      />
      <Button title="Login"  onPress={loginUser} buttonStyle={styles.formButton} />
      <Button title="Cadastrar-se" buttonStyle={styles.formButton}
      onPress={()=> navigation.navigate('Cadastro')}/>
    </View>
  )
}

export default Login