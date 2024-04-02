// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCnW_Ro14CeZh3Azt4IOT7mmQUnvvagNmA",
  authDomain: "fir-login-page-90957.firebaseapp.com",
  databaseURL: "https://fir-login-page-90957-default-rtdb.firebaseio.com",
  projectId: "fir-login-page-90957",
  storageBucket: "fir-login-page-90957.appspot.com",
  messagingSenderId: "376190556670",
  appId: "1:376190556670:web:dab148673eb440d52588af",
  measurementId: "G-BD1D7KXSV6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let mainForm = document.getElementById("main-form");
let user_creds = sessionStorage.getItem("user-creds");
let firstname = document.getElementById("first-name-input");
let lastname = document.getElementById("last-name-input");
let birthday = document.getElementById("birthday-input");
let role = document.getElementById("roles");

let save_user_info = (event) => {
  event.preventDefault();
  set(ref(db, 'UsersAuthList/' + JSON.parse(user_creds).uid), {
    role: role.value
  });
  set(ref(db, role.value + '/' + JSON.parse(user_creds).uid), {
    firstname: firstname.value,
    lastname: lastname.value,
    birthday: birthday.value,
  }) 
  .then(() => {
    sessionStorage.setItem('user-info', JSON.stringify({
      firstname: firstname.value,
      lastname: lastname.value,
      birthday: birthday.value,
      role: role.value
    }))
    sessionStorage.setItem(
      'user-role', 
      JSON.stringify({
        role: role.value
      }) 
    )
    window.location.href = '../Home_Page/home_page.html';
  })
};

mainForm.addEventListener("submit", save_user_info);
