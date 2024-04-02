import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
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
const db = getDatabase();
const dbref = ref(db);

let user_creds = JSON.parse(sessionStorage.getItem('user-creds'))
if (user_creds == null) {
  window.location.href = '../Login_Page/login.html';
}

let user_role = JSON.parse(sessionStorage.getItem("user-role"));

await get(child(dbref, user_role.role + '/' + user_creds.uid))
.then((snapshot) => {
  if (snapshot.exists()) {
    sessionStorage.setItem("user-info", JSON.stringify({
      firstname: snapshot.val().firstname,
      lastname: snapshot.val().lastname,
      birthday: snapshot.val().birthday,
      role: user_role.role
    }))
  }
})

let welcome = document.getElementById("welcome-header");
let user_info = document.getElementById("user-info");

let info = JSON.parse(sessionStorage.getItem("user-info"));

if (user_creds.uid == "DfNhQpL0rKPZ1ZOvNQ5gLM14jGd2") {
  let dashboard = document.getElementById("admin-dashboard");
  dashboard.style.display = "initial";
  welcome.textContent = `Welcome ${info.firstname} ${info.lastname}`;
  user_info.textContent = `You born in ${info.birthday} and your role is admin`;
} else {
  welcome.textContent = `Welcome ${info.firstname} ${info.lastname}`;
  user_info.textContent = `You born in ${info.birthday} and your role is ${info.role}`;
}

let logout = (event) => {
  event.preventDefault();

  sessionStorage.clear();
  window.location.href = "../Login_Page/login.html";
};

let logout_button = document.getElementById("logout-button");

logout_button.addEventListener("click", logout);
