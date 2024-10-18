import { View } from "react-native";
import styles from "../styles/styles";
import React, { useState } from "react";
import { Input, Button } from "react-native-elements";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authentication, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

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
      <Input
        placeholder="Digite seu Nome"
        label="Nome"
        leftIcon={{ type: "material", name: "badge" }}
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <Input
        placeholder="Digite seu Email"
        label="Email"
        leftIcon={{ type: "material", name: "email" }}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Digite sua Senha"
        label="Senha"
        leftIcon={{ type: "material", name: "lock" }}
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry
      />
      <Input
        placeholder="Adicone uma foto com url"
        label="Foto"
        leftIcon={{ type: "material", name: "face" }}
        value={fotoURL}
        onChangeText={(text) => setFotoUrl(text)}
      />
      <Button
        title="Cadastrar-se"
        onPress={registrar}
        buttonStyle={styles.formButton}
      />
    </View>
  );
};