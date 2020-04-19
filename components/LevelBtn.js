import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'

export default class LevelsList extends Component {

    state = {
        bgLevelColor: "#00000077",
    }

    render() {
        return (
            <TouchableOpacity
                style={[styles.levelCont, { backgroundColor: this.state.bgLevelColor }]}
                onPress={() => console.log('Level ' + this.props.index)}>
                <Text style={styles.text}>{this.props.index}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    levelCont: {
        width: Dimensions.get('screen').width / 5,
        height: Dimensions.get('screen').width / 5,
        marginTop: 10,
        borderColor: '#333333',
        borderWidth: 2,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 32,
        color: '#444444',
    },
})
