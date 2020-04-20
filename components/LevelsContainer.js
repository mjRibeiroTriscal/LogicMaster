import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import Header from './Header'
import LevelsList from './LevelsList'
import { db } from '../constants/Fire'

let docRef = db.collection('game')
let docRef2 = db.collection('game2')

export default class Levels extends Component {

    state = {
        listQuestions: [],
        listAnswers: [],
        questions: [],
    }

    setDada = level => docRef2.doc("pGhRnSbqjy18sL1Trcsz").set({ level: level })

    componentDidMount() {
        let listQuestions = []
        let listAnswers = []
        docRef.get().then((snapshot) => {
            snapshot.forEach(doc => {
                listQuestions.push(doc.data().questions)
                listAnswers.push(doc.data().answers)
            })
            console.log('listQuestions ==>> ', listQuestions)
            console.log('listAnswers ==>> ', listAnswers)
            this.setState({ listQuestions, listAnswers, questions: listQuestions[0] })
        }).catch((err) => {
            console.log('Error getting documents', err);
        })
    }

    // getAlgo = () =>{
    //     let dataMap1 = []
    //     this.state.listQuestions.map(cont => {
    //         cont.map((c, i) => {
    //             // console.log("ind: " + i + " - cont: "+ c)
    //             dataMap1.push(c)
    //         })
    //     })
    //     let retorno = dataMap1.map((item, indice) => [
    //         <Text style={{color: "#FFF"}}>{indice} - {item}</Text>,
    //         <Text style={{color: "#FFF", marginVertical: 20}}>- - - - - - - - - - - - - -</Text>
    //     ])
        
    //     return retorno
    // }

    render() {
        return (
            <View style={styles.container}>
                <Header nav={this.props.nav} headerTitle="LEVELS" backTitle="BACK" />
                <LevelsList levelListSize={this.state.questions} setDada={this.setDada} nav={this.props.nav} />
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
