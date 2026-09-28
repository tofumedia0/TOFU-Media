// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

// Firebase Authentication
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMyGVwUSeJyFwmbLL6VF_Oo6eeRucjmmg",
    authDomain: "tofu-media0.firebaseapp.com",
    projectId: "tofu-media0",
    storageBucket: "tofu-media0.firebasestorage.app",
    messagingSenderId: "113587941904",
    appId: "1:113587941904:web:02db50aef11542e1c1d095"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);

export { app, auth };