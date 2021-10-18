// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD598YK3KtCNw8ADXSnHTGqTx-qRcKuwYQ",
  authDomain: "eciciencia-posters.firebaseapp.com",
  databaseURL: "https://eciciencia-posters-default-rtdb.firebaseio.com",
  projectId: "eciciencia-posters",
  storageBucket: "eciciencia-posters.appspot.com",
  messagingSenderId: "1098853679403",
  appId: "1:1098853679403:web:f7091b23fe61945300056e",
  measurementId: "G-46BHD3CFYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);