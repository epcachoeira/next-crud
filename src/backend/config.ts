
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey:  process.env.NEXT_PUBLIC_APIKEY,
    authDomain:  process.env.NEXT_PUBLIC_AUTHDOMAIN,
    projectId:  process.env.NEXT_PUBLIC_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_APPID
}

if(!firebase.apps.length) {
    const app = firebase.initializeApp(firebaseConfig);
}

export default firebase