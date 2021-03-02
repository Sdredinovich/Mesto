export default class Card {
    constructor(name, img, selector) {
      (this.name = name), (this.img = img), (this.selector = selector);
    }
  
    getSelect() {
      let cardTemp = document
        .querySelector(".templ")
        .content.cloneNode(true)
        .querySelector(".elements__element");
      return cardTemp;
    }
  
    imagePopup() {
      let imgPopup = document
        .querySelector(".image-popup")
        .querySelector(".image-popup__content");
      imgPopup.querySelector(".image-popup_image").src = this.img;
      imgPopup.querySelector(".image-popup_text").textContent = this.name;
      document.querySelector(".image-popup").style.visibility = 'visible'
      document.querySelector(".image-popup").style.opacity = '1'
    }
  
    setEventListenet() {
      this.element
        .querySelector(".element__remove_div")
        .addEventListener("click", () => {
          this.element.remove();
        });
  
      let likeEl = this.element
        .querySelector(".elements_title_like")
        .querySelector(".elements__like-div")
        .querySelector(".elements__like-image");
      likeEl.addEventListener("click", () => {
        likeEl.classList.toggle(".like-active");
        likeEl.classList.contains(".like-active")
          ? (likeEl.src = "./image/Vectorlikeblack.svg")
          : (likeEl.src = "./image/Vectorlike.svg");
      });
  
      this.element
        .querySelector(".elements__image")
        .addEventListener("click", () => {
          this.imagePopup();
        });
  
        document.querySelector('.popup__photo_exit').addEventListener('click', ()=>{
          document.querySelector('.image-popup').style.visibility = 'hidden'
          document.querySelector(".image-popup").style.opacity = '0'
        })
    }
  
    generateCard() {
      this.element = this.getSelect();
      this.setEventListenet();
  
      this.element.querySelector(".elements__image").src = this.img;
      this.element
        .querySelector(".elements_title_like")
        .querySelector(".elements__title").textContent = this.name;
      return this.element;
    }
  }
  
  