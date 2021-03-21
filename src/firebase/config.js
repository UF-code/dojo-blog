import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD7OvHrZznx695Gn6j3m9fT5fVpiMrx_zQ',
  authDomain: 'udemy-vue-firebase-sites-70910.firebaseapp.com',
  projectId: 'udemy-vue-firebase-sites-70910',
  storageBucket: 'udemy-vue-firebase-sites-70910.appspot.com',
  messagingSenderId: '679903118906',
  appId: '1:679903118906:web:5d51337b65696629a89703',
}

// init firebase
firebase.initializeApp(firebaseConfig)

//init firestore service
const projectFirestore = firebase.firestore()

export { projectFirestore }
