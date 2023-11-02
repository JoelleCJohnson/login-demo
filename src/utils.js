import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBih1RGOKaGs5KGPb7Tuh5hmVLM0olXtfs",
  authDomain: "fir-auth-jj.firebaseapp.com",
  projectId: "fir-auth-jj",
  storageBucket: "fir-auth-jj.appspot.com",
  messagingSenderId: "243413760493",
  appId: "1:243413760493:web:b5e92647c28fcbf80c0fe4"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)