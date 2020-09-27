let totalSlides = document.querySelectorAll('.slider--item').length;
let atual = 0;

let sliderWidth = document.querySelector('.slider').clientWidth;

document.querySelector('.slider--width').style.width = `${sliderWidth * totalSlides}px`;
document.querySelector('.slider--controls').style.width =
  `${sliderWidth}px`;
document.querySelector('.slider--controls').style.height =
  `${document.querySelector('.slider').clientHeight}px`;


function anterior() {
  atual--;
  if (atual < 0) {
    atual = totalSlides - 1;
  }
  updateMargin()
}
function proximo() {
  atual++;
  if (atual > (totalSlides - 1)) {
    atual = 0;
  }
  updateMargin()
}
function updateMargin() {
  let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
  let newMargin = (atual * sliderItemWidth);
  document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}
// slide passando automático
setInterval(proximo, 4000)