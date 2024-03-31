import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import {
  getDatabase,
  get,
  ref,
  child,
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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();
const dbRef = ref(db);

let email = document.getElementById("email-input");
let password = document.getElementById("password-input");
let mainForm = document.getElementById("main-form");

let signInUser = (event) => {
  event.preventDefault();

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      sessionStorage.setItem("user-creds", JSON.stringify(userCredential.user));
      window.location.href = "../Home_Page/home_page.html";
    })
    .catch((error) => {
      alert(error.message);
      console.log(error.code);
      console.log(error.message);
    });
};

mainForm.addEventListener("submit", signInUser);
