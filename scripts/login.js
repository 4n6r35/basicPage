const email = document.getElementById("username");
const pass = document.getElementById("password");
const btn = document.getElementById("button");
const alertInfo = document.getElementById("alert-fail");
alertInfo.hidden = true;

const def = "admin";
let e;
let p;

function onChangeE(value) {
  e = value;
}

function onChangeP(value) {
  p = value;
}

function showAlert() {
  alertInfo.hidden = false;
}

async function login() {
  alertInfo.hidden = true;
  if (def === e && def === p) {
    window.location.href = "table.html";
  } else {
    showAlert();
  }
}
