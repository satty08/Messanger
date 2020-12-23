import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    // your Firebase credentials go here
    apiKey: "AIzaSyA2lorsKxYKBjW2EQIsJh2OdzBRNt8plOo",
    authDomain: "messanger-ffaa5.firebaseapp.com",
    projectId: "messanger-ffaa5",
    storageBucket: "messanger-ffaa5.appspot.com",
    messagingSenderId: "829877313701",
    appId: "1:829877313701:web:f7b6a8f90f58dc03a0ad4c",
    measurementId: "G-K958PLT2H3"
})

const db = firebaseApp.firestore()

export default db