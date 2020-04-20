import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { db } from '../constants/Fire'

let docRef = db.collection('game')
let docRef2 = db.collection('game2')

export default class GameBoard extends Component {

    state = {
        currentLevel: null,
        listQuestions: [],
        listAnswers: []
    }

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
            this.setState({ listQuestions, listAnswers })
        }).catch((err) => {
            console.log('Error getting documents', err);
        })

        let currentLevel = 0
        docRef2.get().then((snapshot) => {
            snapshot.forEach(doc => {
                currentLevel = doc.data().level
            })
            console.log('currentLevel ==>> ', currentLevel)
            this.setState({ currentLevel })
        }).catch((err) => {
            console.log('Error getting documents', err);
        })

    }

    getQuestion = () => {
        // this.state.listQuestions[this.state.currentLevel-1]
        let data = []
        this.state.listQuestions.map(conteudo => {
            conteudo.map((item, index) => {
                data.push(item)
            })
        })
        return data[this.state.currentLevel - 1]
    }

    getAnswer = () => {
        // this.state.listAnswers[this.state.currentLevel-1]
        let data = []
        this.state.listAnswers.map(conteudo => {
            conteudo.map((item, index) => {
                data.push(item)
            })
        })
        return data[this.state.currentLevel - 1]
    }

    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.text}>{this.state.currentLevel}</Text>
                <Text style={styles.text}>{this.getQuestion()}</Text>
                <Text style={styles.text}>{this.getAnswer()}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111',
        alignItems: 'center',
    },
    text: {
        fontSize: 22,
        color: '#777777',
    },
})
