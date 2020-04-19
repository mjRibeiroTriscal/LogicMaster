import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import LevelBtn from './LevelBtn'

export default class LevelsList extends Component {

    state = {
        bgLevelColor: "#00000077",
    }

    // getLevelList = () => {
    //     let i = 0
    //     let a = []
    //     while (i < this.props.levelListSize) {
    //         a.push(<LevelBtn nav={this.props.nav} index={i} />)
    //         i++
    //     }
    //     return a
    // }

    getLevelList = () => {
        console.log(this.props.levelListSize)
        return this.props.levelListSize.map((cont, index) => (
            <LevelBtn nav={this.props.nav} index={index + 1} />
        ))
    }

    render() {
        return (
            <ScrollView>
                <View style={[styles.container, { marginBottom: 60 }]}>
                    {
                        this.getLevelList()
                    }
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width / 1.1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 2,
        borderColor: '#33333333',
        borderRadius: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
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
