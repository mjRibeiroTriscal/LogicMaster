import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import MenuList from '../components/MenuList'

export default function MenuScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={[{flex: 2}, styles.align]}>
                <Text style={ styles.brand }>Logo</Text>
            </View>
            <View style={[{flex: 3}, styles.align]}>
                <MenuList nav={navigation} />
            </View>
            <View style={[{flex: 1}, styles.align]}>
                <Text style={ styles.brand }>Developed By TargetCode</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111',
        alignItems: 'center',
    },
    align: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    brand: {
        fontSize: 14,
        color: '#77777788',
    },
})
