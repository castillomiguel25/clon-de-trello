import firebase from "firebase";



const config = {
    apiKey: "AIzaSyB3rLr1pZ_8oVADgeedmtXz3gbqopybTWc",

  authDomain: "page-one-one.firebaseapp.com",

  databaseURL: "https://page-one-one-default-rtdb.firebaseio.com",

  projectId: "page-one-one",

  storageBucket: "page-one-one.appspot.com",

  messagingSenderId: "22930157867",

  appId: "1:22930157867:web:75fd4ea7b35fd9f780556e",

  measurementId: "G-RBY3CG2YY4"

}
// eslint-disable-next-line
const firebaseApp = firebase.initializeApp(config)

// eslint-disable-next-line
export const db = firebase.database()
export default firebaseApp