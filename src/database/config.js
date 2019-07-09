import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCA6PhcOOsD02YoxQCSu1Znrc9IjPlOXJQ",
    authDomain: "photowall-98b36.firebaseapp.com",
    databaseURL: "https://photowall-98b36.firebaseio.com",
    projectId: "photowall-98b36",
    storageBucket: "",
    messagingSenderId: "814019724754"
  }

  

  firebase.initializeApp(config)

  const database = firebase.database()

  export {database}