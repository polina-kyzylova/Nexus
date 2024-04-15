

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBUvgcIPVDO20L_CYhwKwWreGbgt7OxTEY",
  authDomain: "rctn-9de70.firebaseapp.com",
  projectId: "rctn-9de70",
  storageBucket: "rctn-9de70.appspot.com",
  messagingSenderId: "337474582939",
  appId: "1:337474582939:web:ad87336285d37f8a17493e",
  databaseURL: "https://rctn-9de70-default-rtdb.firebaseio.com/"
};


// initialize firebase SDK
const app = initializeApp(firebaseConfig);

// initialize and export authentification
export const auth = getAuth(app);


// initialize and export realtime database
export const database = getDatabase(app);


export const storage = getStorage(app, "gs://rctn-9de70.appspot.com");




