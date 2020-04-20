import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import GameBoard from '../components/GameBoard'
import Header from '../components/Header'

export default function GameScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Header nav={navigation} headerTitle="" backTitle="Menu" />
            <GameBoard nav={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111',
        alignItems: 'center',
    },
})
