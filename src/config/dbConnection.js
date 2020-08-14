require("dotenv").config();
const firebase = require("firebase-admin");

var serviceAccount = require(process.env.FIREBASE_SERVICE_ACOUNT);

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
});

const db = firebase.firestore();

module.exports = db;
