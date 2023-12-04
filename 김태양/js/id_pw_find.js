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
} = firebase;

// Global variable

const idSearchNameInput = document.querySelector(".id-search #user-name");
const idSearchEmailInput = document.querySelector(".id-search #user-email");
const idSearchTelInput = document.querySelector(".id-search #user-tel");
const idSearchForEmailBtn = document.querySelector(".id-search-for-email-btn");
const idSearchForTelBtn = document.querySelector("id-search-for-tel-btn");

const pwSearchIdInput = document.querySelector(".pw-serch #user-id");
const pwSearchEmailInput = document.querySelector(".pw-serch #user-email");
const pwSearchtelInput = document.querySelector(".pw-serch #user-tel");
const pwSearchBtn = document.querySelector("pw-search-btn");

//
idSearchForEmailBtn.addEventListener("click", () => {
  // isVaildIdAndEmail(idSearchNameInput, idSearchEmailInput);
  showName(idSearchNameInput, idSearchEmailInput);
});

// async function isVaildIdAndEmail(Name, Email) {
//   const snapshot = await getDatas("user");
//   const arr = [];
//   snapshot.forEach((doc) => {
//     const { email, id, password, name, tel } = doc.data();
//     arr.push({ id: id, pw: password, name: name, tel: tel, email: email });
//   });
//   console.log(arr);
//   console.log(arr.find((obj) => obj.name === Name.value));
//   console.log(arr.find((obj) => obj.email === Email.value));

//   return (
//     arr.find((obj) => obj.name === Name.value) ==
//     arr.find((obj) => obj.email === Email.value)
//   );
// }

async function showName(Name, Email) {
  const snapshot = await getDatas("user");
  const arr = [];
  snapshot.forEach((doc) => {
    const { email, id, password, name, tel } = doc.data();
    arr.push({ id: id, pw: password, name: name, tel: tel, email: email });
  });
  console.log(arr);
  console.log(arr.find((obj) => obj.name === Name.value));
  console.log(arr.find((obj) => obj.email === Email.value));
  console.log(arr.find((obj) => obj.email === Email.value).id);

  if (
    (arr.find((obj) => obj.name === Name.value) ==
      arr.find((obj) => obj.email === Email.value)) ===
    true
  ) {
    console.log(arr.find((obj) => obj.name === Name.value).id);
  } else {
    alert("틀린 이름 혹은 이메일입니다.");
  }
}
