import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class BackHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => this.props.nav.navigate(this.props.place)}>
                    <View style={styles.backBtn}>
                        <Ionicons name="ios-arrow-back" size={28} color="#555555" />
                        {
                            this.props.title ?
                                <Text style={[styles.text, styles.title]}>{this.props.title}</Text> : null
                        }
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    backBtn: {
        flexDirection: 'row',
		alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: '#555555',
    },
    title: {
        marginLeft: 10,
    },
})
