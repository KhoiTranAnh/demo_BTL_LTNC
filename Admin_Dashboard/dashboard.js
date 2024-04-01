// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  child,
  get
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

function count_user_id(json_obj) {
  let count = 0;
  Object.entries(json_obj).forEach((entry) => {
    count++;
  })
  return count;
}

await get(child(dbref, "courses")).then(
  (snapshot) => {
    if (snapshot.exists()) {
      sessionStorage.setItem("courses", JSON.stringify(snapshot.val()));
    }
  }
)

await get(child(dbref, "teacher")).then(
  (snapshot) => {
    if (snapshot.exists()) {
      sessionStorage.setItem("teacher", JSON.stringify(snapshot.val()));
    }
  }
)

await get(child(dbref, "student")).then(
  (snapshot) => {
    if (snapshot.exists()) {
      sessionStorage.setItem("student", JSON.stringify(snapshot.val()));
    }
  }
)

let num_of_teacher = count_user_id(JSON.parse(sessionStorage.getItem('teacher')));
let num_of_student = count_user_id(JSON.parse(sessionStorage.getItem('student')));
let num_of_course = count_user_id(JSON.parse(sessionStorage.getItem('courses')));

let report_num_teacher = document.getElementById('num_of_teacher');
let report_num_student = document.getElementById('num_of_student');
let report_num_course = document.getElementById('num_of_course');

report_num_course.textContent = `There are currently ${num_of_course} course(s) in our system`;
report_num_teacher.textContent = `There are currently ${num_of_teacher} teacher(s) in our system`;
report_num_student.textContent = `There are currently ${num_of_student} student(s) in our system`;