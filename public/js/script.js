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

var enterName = document.querySelector("#enterName");
var enterEmail = document.querySelector("#enterEmail");
var enterPassword = document.querySelector("#enterPassword");
var enterName = document.querySelector("#enterName");
var enterAge = document.querySelector("#enterAge");


var findID = document.querySelector("#findID");
var findName = document.querySelector("#findName");
var findAge = document.querySelector("#findAge");


var errorLogin = document.querySelector('.error-notify.login');
var errorRegister = document.querySelector('.error-notify.register');

var loginBtn = document.querySelector("#login");
var registerBtn = document.querySelector("#register");
var insertBtn = document.querySelector("#insert");
var updateBtn = document.querySelector("#update");
var removeBtn = document.querySelector("#remove");
var findBtn = document.querySelector("#find");

loginBtn.addEventListener('click',()=> {
    if (enterPassword.value == '' || enterPassword .value == '') {
        errorLogin.classList.add('active');
        return;
    }
    var Index = enterEmail.value.indexOf('@');
    if (Index == -1) {
        alert('Please enter your email.');
        return;
    }
    //this thing cant handle '.'
    Index = enterEmail.value.indexOf('.');
    if (Index !== -1) {
        enterEmail.value = enterEmail.value.substring(0, periodIndex);
    }

    const dbref = ref(db);

    get(child(dbref, "Users/" + enterEmail.value))
    .then((snapshot)=>{
        if(snapshot.exists()){
            alert(snapshot.exists());
            alert(enterPassword.value);
            alert(snapshot.val().Password);
            if(enterPassword.value == snapshot.val().Password){
            window.location.href = "index.html";
            } else {
            alert("Wrong password!");
            }
        } else {
            alert("There is no account with this email.")
        }
    })
    .catch((error)=>{
        alert(error)
    })
})

registerBtn.addEventListener('click',()=> {
    if (enterPassword.value == '' || enterPassword .value == '' || enterName.value == '') {
        errorRegister.classList.add('active');
        return;
    }
    var Index = enterEmail.value.indexOf('@');
    if (Index == -1) {
        alert('Please enter your email.');
        return;
    }
    //this thing cant handle '.'
    Index = enterEmail.value.indexOf('.');
    if (Index !== -1) {
        enterEmail.value = enterEmail.value.substring(0, Index);
        alert(enterEmail.value);
    }
    const dbref = ref(db);
    get(child(dbref, "Users/" + enterEmail.value))
    .then((snapshot)=>{
        if(snapshot.exists()){
            alert("There already exist an account with this email");
        } else {
            set(ref(db, "Users/"+ enterEmail.value),{
                Email: enterEmail.value,
                Password: enterPassword.value,
                Name: enterName.value,
            })
            .then(()=>{
                alert("Data added successfully");
                window.location.href = "login.html";
            })
            .catch((error)=>{
                alert(error);
            });
        }
    })
    .catch((error)=>{
        alert(error)
    })
})


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

//   loginBtn.addEventListener('click', LogIn);
//   insertBtn.addEventListener('click', InsertData);
//   updateBtn.addEventListener('click', UpdateData);
//   removeBtn.addEventListener('click', RemoveData);
//   findBtn.addEventListener('click', FindData);
var wrapper = document.querySelector('.wrapper');
var loginLink = document.querySelector('.login-link');
var registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click',()=> {
    wrapper.classList.add('active');
    errorLogin.classList.remove('active');
})
loginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
    errorRegister.classList.remove('active');
})