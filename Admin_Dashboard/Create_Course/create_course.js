// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

let teachers = JSON.parse(sessionStorage.getItem("teacher"));

let selection = document.getElementById("select-teacher");
Object.entries(teachers).forEach((entry) => {
  const opt = document.createElement("option");
  opt.value = entry[0];
  opt.text = `${entry[0]} - ${entry[1].firstname} ${entry[1].lastname} - ${entry[1].birthday}`;
  selection.add(opt, null);
});

let course_id = document.getElementById('id');
let course_name = document.getElementById('name');
let course_class = document.getElementById('class');
let num_of_student = document.getElementById('number-of-student');
let assigned_teacher = document.getElementById('select-teacher');
let course_length_week = document.getElementById('course-length');
let course_begin_date = document.getElementById('course-begin-date');
let course_weekday = document.getElementById('weekday');
let course_begin_time = document.getElementById('time-begin'); 
let course_end_time = document.getElementById('time-end');

let create_course = (event) => {
  event.preventDefault();

  set(ref(db, 'courses/' + course_id.value + '/' + course_class.value), {
    name: course_name.value, 
    max_num_student: num_of_student.value, 
    teacher: assigned_teacher.value, 
    week_length: course_length_week.value, 
    begin_date: course_begin_date.value, 
    weekday: course_weekday.value, 
    begin_time: course_begin_time.value, 
    end_time: course_end_time.value
  })
  .then(() => {
    window.location.reload();
  })
}

let mainForm = document.getElementById('main-form');
mainForm.addEventListener('submit', create_course);