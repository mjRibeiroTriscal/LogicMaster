import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function GameScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MenuScreen")}>
                <View style={styles.contBtn}>
                    <Text style={styles.text}>Back</Text>
                </View>
            </TouchableOpacity >
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#111111',
		alignItems: 'center',
	},
    text: {
        fontSize: 22,
        color: '#777777',
    },
})
