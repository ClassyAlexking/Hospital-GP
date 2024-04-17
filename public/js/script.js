
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxrykB_Le9TLubsrRSVC8uC4esw8nKzvU",
  authDomain: "test-8a15e.firebaseapp.com",
  databaseURL: "https://test-8a15e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-8a15e",
  storageBucket: "test-8a15e.appspot.com",
  messagingSenderId: "380993524193",
  appId: "1:380993524193:web:5f16f5be4d1091087842a0"
};

const app = initializeApp(firebaseConfig);

import {getDatabase, ref, get, set, child, update, remove}
from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";



const db = getDatabase();

var enterID = document.querySelector("#enterID");
var enterName = document.querySelector("#enterName");
var enterAge = document.querySelector("#enterAge");
var findID = document.querySelector("#findID");
var findName = document.querySelector("#findName");
var findAge = document.querySelector("#findAge");


var insertBtn = document.querySelector("#insert");
var updateBtn = document.querySelector("#update");
var removeBtn = document.querySelector("#remove");
var findBtn = document.querySelector("#find");

function InsertData() {
    set(ref(db, "People/"+ enterID.value),{
        Name: enterName.value,
        ID: enterID.value,
        Age: enterAge.value
    })
    .then(()=>{
        alert("Data added successfully");
    })
    .catch((error)=>{
        alert(error);
    });
}

function FindData() {
    const dbref = ref(db);

    get(child(dbref, "People/" + findID.value))
    .then((snapshot)=>{
        if(snapshot.exists()){
            findName.innerHTML = "Name: " + snapshot.val().Name;
            findAge.innerHTML = "Age: " + snapshot.val().Age;
        } else {
            alert("No data found");
        }
    })
    .catch((error)=>{
        alert(error)
    })
    
}

function UpdateData(){
    update(ref(db, "People/"+ enterID.value),{
        Name: enterName.value,
        Age: enterAge.value
    })
    .then(()=>{
        alert("Data updated successfully");
    })
    .catch((error)=>{
        alert(error);
    });
}

function RemoveData(){
    remove(ref(db, "People/"+ enterID.value))
    .then(()=>{
        alert("Data deleted successfully");
    })
    .catch((error)=>{
        alert(error);
    });
}

insertBtn.addEventListener('click', InsertData);
updateBtn.addEventListener('click', UpdateData);
removeBtn.addEventListener('click', RemoveData);
findBtn.addEventListener('click', FindData);
