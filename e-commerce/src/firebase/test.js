import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("N7PAvF0ynjqqUP2ftRIG")
  .collection("cartItems")
  .doc("MoWujdm6BUlLxQnpXolF");

firestore.doc("/users/N7PAvF0ynjqqUP2ftRIG/cartItems/MoWujdm6BUlLxQnpXolF");
firestore.collection("/users/N7PAvF0ynjqqUP2ftRIG/cartItems");
