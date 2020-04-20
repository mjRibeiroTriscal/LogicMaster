import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TouchableWithoutFeedback } from 'react-native'
import { Feather, SimpleLineIcons, AntDesign } from '@expo/vector-icons'

export default class MenuList extends Component {

    state = {
        isSoundOn: true,
        soundIcon: "volume-2",
        currentLevel: 1,
    }

    toggleSound = () => {
        this.state.isSoundOn ?
            this.setState({ isSoundOn: false, soundIcon: 'volume-x' }) :
            this.setState({ isSoundOn: true, soundIcon: 'volume-2' })
    }

    render() {
        return (
            <View style={styles.container}>

                <TouchableWithoutFeedback
                    onPress={() => this.props.nav.navigate("GameScreen")}>
                    <View style={styles.button}>
                        <View style={styles.contBtn}>
                            <Text style={styles.text}>PLAY </Text>
                            <SimpleLineIcons style={styles.icon} name="control-play" size={32} />
                        </View>
                        <View style={styles.hr}></View>
                    </View>
                </TouchableWithoutFeedback >

                <TouchableWithoutFeedback
                    onPress={() => this.props.nav.navigate("LevelsScreen")}>
                    <View style={styles.button}>
                        <View style={styles.contBtn}>
                            <Text style={styles.text}>LEVELS </Text>
                            <AntDesign style={styles.icon} name="appstore-o" size={32} />
                        </View>
                        <View style={styles.hr}></View>
                    </View>
                </TouchableWithoutFeedback >

                <TouchableWithoutFeedback
                    onPress={() => this.toggleSound()}>
                    <View style={styles.button}>
                        <View style={styles.contBtn}>
                            <Text style={styles.text}>SOUNDS </Text>
                            <Feather style={styles.icon} name={this.state.soundIcon} size={32} />
                        </View>
                        <View style={styles.hr}></View>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: "60%",
        padding: 15,

    },
    contBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
    },
    hr: {
        width: "100%",
        height: 1,
        marginTop: 5,
        backgroundColor: '#333333',

    },
    text: {
        fontSize: 28,
        color: '#555555',
    },
    icon: {
        alignSelf: 'center',
        color: "#444444",
    },
})
