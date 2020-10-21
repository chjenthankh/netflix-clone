import FireBase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

//Nedd something seed the databse

//Config Here

const config = {
  apiKey: "AIzaSyCDz-MJt02KORCRoXzLOuDMGwqlsxqtl48",
  authDomain: "netflix-b0ca9.firebaseapp.com",
  databaseURL: "https://netflix-b0ca9.firebaseio.com",
  projectId: "netflix-b0ca9",
  storageBucket: "netflix-b0ca9.appspot.com",
  messagingSenderId: "993348756823",
  appId: "1:993348756823:web:872547df86c54288a80a12",
};

const firebase = FireBase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
