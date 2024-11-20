import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { db, authentication } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const RewardsScreen = () => {
    const [points, setPoints] = useState(0);
    const [rewards, setRewards] = useState([
      { id: 1, name: 'Cupom Ifood - 10% OFF', cost: 100 },
      { id: 2, name: 'Desconto Americanas - R$20', cost: 200 },
      { id: 3, name: 'Cupom Quiosque longa-vida - R$10', cost: 150 },
      /* Adicionar mais opçoes de trocas seguindo o esquema dos acimas*/
    ]);
  
    useEffect(() => {
      const fetchPoints = async () => {
        const user = authentication.currentUser;
        if (user) {
          const userDocRef = doc(db, 'users', user.uid);
          const userDocSnap = await getDoc(userDocRef);
  
          if (userDocSnap.exists()) {
            setPoints(userDocSnap.data().points || 0);
          }
        }
      };
      fetchPoints();
    }, []);
  
    const handleRedeem = async (reward) => {
      if (points >= reward.cost) {
        const newPoints = points - reward.cost;
        const user = authentication.currentUser;
        const userDocRef = doc(db, 'users', user.uid);
        await updateDoc(userDocRef, { points: newPoints });
        setPoints(newPoints);
        alert(`Você trocou ${reward.cost} pontos por ${reward.name}`);
      } else {
        alert('Pontos insuficientes para essa troca, selecione outra opção!');
      }
    };
  
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <Text>Pontos disponíveis: {points}</Text>
        <FlatList
          data={rewards}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleRedeem(item)}>
              <Text>{item.name} - {item.cost} pontos</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };
  
  export default RewardsScreen;