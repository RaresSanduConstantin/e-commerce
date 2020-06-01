import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD9XjTJoZmpOFw3xY_qRcMGRJmM-YUijKs",
  authDomain: "bestclothes-a5ed3.firebaseapp.com",
  databaseURL: "https://bestclothes-a5ed3.firebaseio.com",
  projectId: "bestclothes-a5ed3",
  storageBucket: "bestclothes-a5ed3.appspot.com",
  messagingSenderId: "139937189039",
  appId: "1:139937189039:web:2ac17a82604df78dc6d85a",
  measurementId: "G-JE8G2N1FKW",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
