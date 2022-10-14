const myHeader = document.querySelector(".Darkmode__Link");
const myLightBack = document.querySelector(".Darkmode__Back");
const maindiv = document.querySelector("main");
const myHeader2 = document.querySelector(".header__title");
const myFooter = document.querySelector("footer");
const myName = document.querySelector(".Name");
myHeader.addEventListener("click", function () {
  maindiv.style.backgroundColor = "#151E3D";
  myHeader2.style.backgroundColor = "#1c2e4a";
  myFooter.style.backgroundColor = "#1c2e4a";
  myName.style.color = "slategrey";
});
myLightBack.addEventListener("click", function () {
  maindiv.style.backgroundColor = "wheat";
  myHeader2.style.backgroundColor = "cornflowerblue";
  myFooter.style.backgroundColor = "cornflowerblue";
  myName.style.color = "black";
});
