const slider = document.querySelector('.slider');
let currentIndex = 0;

function moveLeft() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slider.children.length - 1;
  }
  updateSlider();
}

function moveRight() {
  if (currentIndex < slider.children.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
}

function updateSlider() {
  const slideWidth = slider.children[0].offsetWidth;
  slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}
