import * as firebase from 'firebase'
import '@firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyD6V7dOMVHfhD5TG_MuoJNMpX7t-1amrZE",
	authDomain: "targetcode-3fd07.firebaseapp.com",
	databaseURL: "https://targetcode-3fd07.firebaseio.com",
	projectId: "targetcode-3fd07",
	storageBucket: "targetcode-3fd07.appspot.com",
	messagingSenderId: "147079787442",
	appId: "1:147079787442:web:9075a7bc94db2befd1aaab",
	measurementId: "G-FZ0HBDWDBE"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export { db }