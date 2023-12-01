// import 부분
import * as firebase from "./firebass.js";
const {
  db,
  getDocs,
  collection,
  getDatas,
  setDoc,
  addDoc,
  doc,
  addDatas,
  deletedatas,
  updateDoc,
  deleteField,
  updatedatas,
  where,
  getDatasLogin,
} = firebase;

// Global variable
const idInput = document.querySelector("#id-input");
const pwInput = document.querySelector("#password-input");
const searchBtn = document.querySelector(".search-id-password");
const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");

loginBtn.addEventListener("click", function () {
  isVaildId(idInput.value);
});

async function isVaildId(e) {
  const snapshot = await getDatasLogin(e);

  console.log(snapshot);
}
