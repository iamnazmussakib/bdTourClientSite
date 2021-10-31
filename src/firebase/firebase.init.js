import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.cofig";

const firebaseInitialize = () => {
    initializeApp(firebaseConfig);
}
export default firebaseInitialize;