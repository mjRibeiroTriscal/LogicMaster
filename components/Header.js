import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import BackHeader from './BackHeader'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <BackHeader title="BACK" nav={this.props.nav} place="MenuScreen" />
                <Text style={styles.text}>{this.props.headerTitle}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: "2%",
        paddingRight: "10%",
        paddingVertical: 5,
    },
    text: {
        fontSize: 18,
        color: '#555555',
    },
})
