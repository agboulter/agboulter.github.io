const images = [
    'images/montage/montage1.jpg',
    'images/montage/montage2.png',
    'images/montage/montage3.jpg',
    'images/montage/montage4.jpg',
    'images/montage/montage5.jpg',
    'images/montage/montage6.jpg',
    'images/montage/montage7.jpg',
    'images/montage/montage8.jpg',
    'images/montage/montage9.jpg',
    'images/montage/montage10.jpg',
    'images/montage/montage11.jpg',
    'images/montage/montage12.jpg',
    'images/montage/montage13.jpg',
    'images/montage/montage14.jpg',
    'images/montage/montage15.jpg',
    'images/montage/montage16.jpg',
    'images/montage/montage17.jpg',
]

let currentIndex = 0;

  function changeSlide(direction) {
      currentIndex += direction;
      if (currentIndex < 0) currentIndex = images.length - 1;
      if (currentIndex >= images.length) currentIndex = 0;
      document.getElementById("montageContainer").src = images[currentIndex];
    }

document.getElementById('left').onclick = function() {
  changeSlide(-1);
}

document.getElementById('right').onclick = function() {
  changeSlide(1);
}