import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClk3gFAVb9CBlkvzL_hyb3zBiddfeZoZ8",
  authDomain: "trabajofinalreact-8dcbe.firebaseapp.com",
  projectId: "trabajofinalreact-8dcbe",
  storageBucket: "trabajofinalreact-8dcbe.appspot.com",
  messagingSenderId: "327745685032",
  appId: "1:327745685032:web:5be2e8615bf6c5e13cd71d"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);