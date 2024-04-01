let welcome = document.getElementById('welcome-header');
let user_info = document.getElementById('user-info');

let info = JSON.parse(sessionStorage.getItem('user-info'));

welcome.textContent = `Welcome ${info.firstname} ${info.lastname}`;
user_info.textContent = `You born in ${info.birthday} and your role is ${info.role}`;

let logout = (event) => {
  sessionStorage.clear();
  window.location.href = "../Login_Page/login.html";
}

let logout_button = document.getElementById('logout-button');

logout_button.addEventListener('click', logout);