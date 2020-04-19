import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import Header from './Header'

export default class Levels extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header nav={this.props.nav} headerTitle="LEVELS" />
                <View style={styles.listContainer}>
                    <Text style={styles.text}>Mário</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    listContainer: {
        width: Dimensions.get('screen').width / 1.1,
        borderColor: 'red',
        borderWidth: 1,
    },
    text: {
        fontSize: 18,
        color: '#555555',
    },
})
