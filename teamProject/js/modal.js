const badge = document.querySelector(".qr-icon");
const open = document.querySelector(".qr-img");
const overlay = document.querySelector(".overlay");

const exit = document.querySelector(".exit-box");

// badge.addEventListener("click", function () {
//   open.classList.toggle("modal");
//   overlay.classList.toggle("modal");
// });

// let isModalOpen = false;
// function onClick() {
//   if (isModalOpen) {
//     isModalOpen = false;
//     open.classList.remove("modalMain");
//     overlay.classList.remove("modalMain");
//   } else {
//     isModalOpen = true;
//     open.classList.add("modalMain");
//     overlay.classList.add("modalMain");
//   }
// }

exit.addEventListener("click", () => {
  sessionStorage.clear();
  location.replace("main.html");
});

if (sessionStorage.getItem("login")) {
  let isModalOpen = false;
  exit.classList.add("active");
  function onClick() {
    if (isModalOpen) {
      isModalOpen = false;
      open.classList.remove("modalMain");
      overlay.classList.remove("modalMain");
    } else {
      isModalOpen = true;
      open.classList.add("modalMain");
      overlay.classList.add("modalMain");
    }
  }
} else {
  badge.addEventListener("click", () => {
    alert("로그인해주세요!");
  });
}
