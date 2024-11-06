// JavaScript Document//
let slideIndex = 0;
function moveSlider(n){
  const cards = document.querySelector('.cards-container');
  const cardWidth = document.querySelector('.card').offsetWidth;
  
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = 0;
  }
  if (slideIndex > cards.children.length - 1) {
    slideIndex = cards.children.length - 1;
  }
  
  cards.style.transform = `translateX(${-slideIndex * (cardWidth + 20)}px)`; // 20px is for margin-right of .card
}

 
 
      
     
 









