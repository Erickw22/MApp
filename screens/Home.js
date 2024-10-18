import { FlatList, View, Text, SafeAreaView, ScrollView, StatusBar, Platform} from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../styles/styles';


export default function Home() {
    return (
        <SafeAreaView style={styles.container1}>
            <ScrollView>
                <View style={styles.content}>
                    <Text>Conteudo 01</Text>
                </View>
                <View  style={styles.content}>
                    <Text>Conteudo 02</Text>
                </View >
                <View  style={styles.content}>
                    <Text>Conteudo 03</Text>
                </View>
                <View  style={styles.content}>
                    <Text>Conteudo 04</Text>
                </View>
                <View  style={styles.content}>
                    <Text>Conteudo 05</Text>
                </View>
                <View  style={styles.content}>
                    <Text>Conteudo 06</Text>
                </View>
                <View  style={styles.content}>
                    <Text>Conteudo 07</Text>
                </View>
                <View  style={styles.content}>
                    <Text>Conteudo 08</Text>
                </View>
                <View  style={styles.content}>
                    <Text>Conteudo 09</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
      );
}