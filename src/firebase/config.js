// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAgDvEtPD1Xq8pem2oVAdVnOa7UlI2DxRE",
  authDomain: "loja-cupcake-55028.firebaseapp.com",
  projectId: "loja-cupcake-55028",
  storageBucket: "loja-cupcake-55028.appspot.com",
  messagingSenderId: "96741011659",
  appId: "1:96741011659:web:2bf7d8c2c92250f8b06b4e",
  measurementId: "G-PTXJ0LPX44"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app)

export {db};