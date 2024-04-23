// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAs_CTxfpfILNNqJYLTDNPLACal-CE-d40",
    authDomain: "coffee-store-97a51.firebaseapp.com",
    projectId: "coffee-store-97a51",
    storageBucket: "coffee-store-97a51.appspot.com",
    messagingSenderId: "744906425040",
    appId: "1:744906425040:web:486dcba65158d92b8f54d5",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default app