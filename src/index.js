import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import * as firebase from 'firebase';
// import 'firebase/firestore';

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore'; {]above syntax is deprecated}

import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";







const firebaseConfig = {
    apiKey: "AIzaSyAiPS3xNgbWeo86fEZVkaO4kZPpfQsbRIw",
    authDomain: "cart-767ec.firebaseapp.com",
    projectId: "cart-767ec",
    storageBucket: "cart-767ec.appspot.com",
    messagingSenderId: "99081671291",
    appId: "1:99081671291:web:421086b16e979854cc48de"
  };
  
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig); these syntaxes are deprecated



  const app=initializeApp(firebaseConfig);
  const db = getFirestore(app);
  // const auth = firebase.auth();needed only in case of using authentication

  export { db };


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <React.StrictMode >
    
    < App />
    
    </React.StrictMode>
);