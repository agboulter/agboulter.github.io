
/* Array of images */
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

/* Default montage image set as first image in array */
let currentIndex = 0;

/* Change image function */
  function changeSlide(direction) {
      currentIndex += direction;
      /* If the index goes below 0, display last image in array */
      if (currentIndex < 0) currentIndex = images.length - 1;
      /* If the index goes over the total amount of images in the array, display the first image in thee array */
      if (currentIndex >= images.length) currentIndex = 0;
      document.getElementById("montageContainer").src = images[currentIndex];
    }

    /* When the left button is clicked, display previous image in array */
document.getElementById('left').onclick = function() {
  changeSlide(-1);
}
  /* When the right button is pressed, display the next image in array */
document.getElementById('right').onclick = function() {
  changeSlide(1);
}