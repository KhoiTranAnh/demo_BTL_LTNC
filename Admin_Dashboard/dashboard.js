// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getDatabase,
  set,
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbref = ref(db);

let course_form = document.getElementById('create-course-form')
let course_id = document.getElementById('course-id');
let course_name = document.getElementById('course-name');
let course_size = document.getElementById('course-size');

let create_new_course = (event) => {
  event.preventDefault();
  set(ref(db, "courses/" + course_id.value + '/' + course_name.value), {
    name: course_name.value,
    size: course_size.value
  })
  .then(() => {
    console.log("create successfully");
    sessionStorage.setItem("course-item", JSON.stringify({
      course_id: course_id.value,
      course_name: course_name.value,
      course_size: course_size.value
    }))
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  })
};

course_form.addEventListener("submit", create_new_course);
