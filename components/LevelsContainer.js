import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import Header from './Header'
import LevelsList from './LevelsList'

export default class Levels extends Component {

    state = {
        questions: ['Questão 1', 'Questão 2', 'Questão 3', 'Questão 4']
    }

    render() {
        return (
            <View style={styles.container}>
                <Header nav={this.props.nav} headerTitle="LEVELS" />
                <LevelsList levelListSize={this.state.questions} nav={this.props.nav} />
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
