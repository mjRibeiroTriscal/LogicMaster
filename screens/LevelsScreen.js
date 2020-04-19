import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, FlatList } from 'react-native'
import LevelsContainer from '../components/LevelsContainer'

export default function LevelsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <LevelsContainer nav={navigation} />
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
