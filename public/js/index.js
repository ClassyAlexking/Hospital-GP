import { initializeApp } from "firebase/app";
import {getDatabase, ref, child, get, set, update, remove} from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd2ugMbf5y8Xyp_yOHusRUFwB0e_sCynQ",
  authDomain: "hospital-gprojekt.firebaseapp.com",
  databaseURL: "https://hospital-gprojekt-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hospital-gprojekt",
  storageBucket: "hospital-gprojekt.appspot.com",
  messagingSenderId: "195852882182",
  appId: "1:195852882182:web:803d496230956b3dab4e87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

function yoo(){
  alert('yooo')
}

function signup(){
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  var username = document.getElementById('username').value

  set(ref(db, 'users/' + username), {
    email: email,
    password: password,
    username: username
  });

  alert('Saved')
}

function writeEquipmentData(equipID,name,imageURL){
    const db = getDatabase();
    const reference = ref(db, "eqpmt", equipID);

    set(reference,{
        name : name,
        equipmentIMG : imageURL,
    });
}