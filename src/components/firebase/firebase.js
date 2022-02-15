import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBYybmgxONDwFe-hdhVaa51F4d1o4mFhos",
    authDomain: "amaozn-clone-571c0.firebaseapp.com",
    projectId: "amaozn-clone-571c0",
    storageBucket: "amaozn-clone-571c0.appspot.com",
    messagingSenderId: "748757028926",
    appId: "1:748757028926:web:249b522cde668be7ba016f",
    measurementId: "G-3Q2RF39ETE"
});

const auth = firebase.auth();

export {auth};