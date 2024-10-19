import { View, Text, TextInput,TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import React, { useState } from "react";
import { Input, Button } from "react-native-elements";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authentication, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import * as Animatable from 'react-native-animatable';


export default function Cadastro () {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [fotoURL, setFotoUrl] = useState("");

  const registrar = async () => {
    createUserWithEmailAndPassword(authentication, email, senha)
    .then((userCredentials)=>{
        const userUId = userCredentials.user.uid;
        const docRef = doc(db, 'users', userUId);
        const docSnap = setDoc(docRef, {
            avatarUrl:fotoURL ? fotoURL :'https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-avatar-icon-png-image_695765.jpg',
            nome,
            senha,
            userUId
        })
        .then(()=>
        alert("Email cadastrado com sucesso!"))
    })
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeaderCadastro}>
      </Animatable.View>

      <Animatable.View animation='fadeInUp'  style={styles.containerForm}>
        <Text style={styles.title}>Nome</Text>

        <TextInput
        placeholder='Digite seu Nome'
        keyboardType="name-phone-pad"
        style={styles.input}
        value={nome}
        onChangeText={(text) => setNome(text)}
        
        />
        <Text style={styles.title}>Email</Text>
        
        <TextInput
        placeholder='Digite seu Email'
        keyboardType="email-address"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.title}>Senha</Text>

        <TextInput
        placeholder='Senha'
        style={styles.input}
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry
        />

        <Text style={styles.title}>Avatar ou foto</Text>

        <TextInput
        placeholder='Adicone uma foto com url'
        keyboardType="url"
        style={styles.input}
        value={fotoURL}
        onChangeText={(text) => setFotoUrl(text)}
        />

        <TouchableOpacity onPress={registrar} style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

      </Animatable.View>
    </View>
    
  );
};

