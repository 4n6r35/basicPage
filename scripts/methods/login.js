const email = document.getElementById("username");
const pass = document.getElementById("password");
const btn = document.getElementById("button");

const def = "admin";
let e;
let p;

function onChangeE(value) {
  e = value;
  console.log(e);
}

function onChangeP(value) {
  p = value;
  console.log(p);
}

async function login() {
  console.log("AquiDatas ");
  if ("admin" === e && "admin" === p) {
    console.log("Aqui ");
    window.location.href = "table.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}

/*

btn.addEventListener("click", async function () {
    console.log("AquiDatas ")
  if ("admin" === e && "admin" === p) {
    console.log("Aqui ")
    window.location.href = "table.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});
¨*/
