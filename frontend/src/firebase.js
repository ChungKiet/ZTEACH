import firebase from "firebase/compat/app";
import "firebase/compat/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDXHkibD-nqsg2CH_ulYNIQLh_CjD4ubt4",
    authDomain: "zteach-images.firebaseapp.com",
    projectId: "zteach-images",
    storageBucket: "zteach-images.appspot.com",
    messagingSenderId: "947015758520",
    appId: "1:947015758520:web:3f1d027a152e38e05f3a4d",
    measurementId: "G-308MXE0R2T"
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export { storage, firebase as default };
