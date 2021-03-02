import Card from "./Card.js";
import initialCards from "./initialCards.js";

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, ".templ");

  let cardEl = card.generateCard();
  document.querySelector(".elements").append(cardEl);
});

function addPhotoPopup() {
  //открывает попап добавления фото
  document.querySelector(".add__photo").style.visibility = "visible";
  document.querySelector(".add__photo").style.opacity = "1";
}
document.querySelector(".add__button").addEventListener("click", () => {
  addPhotoPopup();
});

function removePhotoPopup() {
  //закрывает попап добавления фото
  document.querySelector(".add__photo").style.visibility = "hidden";
  document.querySelector(".add__photo").style.opacity = "0";
}
document.querySelector(".form_add_exit").addEventListener("click", () => {
  removePhotoPopup();
});

function addPhoto() {
  //добавляет фото на страницу
  let link = document.querySelector(".add_file").value;
  let name = document.querySelector(".add__photo__title").value;

  const card = new Card(name, link, ".templ");

  let cardEl = card.generateCard();
  document.querySelector(".elements").prepend(cardEl);
}
document.querySelector(".form__sohr_photo").addEventListener("click", () => {
  addPhoto();

  removePhotoPopup();
});

function addProfilePopup() {
  document.querySelector(".from-section").style.visibility = "visible";
  document.querySelector(".from-section").style.opacity = "1";
}
document.querySelector(".profile_button").addEventListener("click", () => {
  addProfilePopup();
});
function removeProfilePopup() {
  document.querySelector(".from-section").style.visibility = "hidden";
  document.querySelector(".from-section").style.opacity = "0";
}

document.querySelector(".form__exit").addEventListener("click", () => {
  removeProfilePopup();
});
function addProfilePopupSave() {
  document.querySelector(
    ".profile_author"
  ).textContent = document.querySelector(".form__author-name").value;
  document.querySelector(
    ".profile_author_pro"
  ).textContent = document.querySelector(".form__author-profess").value;
}
document.querySelector(".form__sohr").addEventListener("click", () => {
  addProfilePopupSave();
  removeProfilePopup();
});


