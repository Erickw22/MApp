import { FlatList, View, Text} from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { authentication, db } from '../firebase'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ecopoints from './Ecopoints'
import Perfil from './Perfil'



export default function Home({navigation}) {
    return (
        <View></View>
      );
}