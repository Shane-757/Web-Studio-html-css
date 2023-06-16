const featuresList = document.querySelector('.features__list');
const featuresItems = featuresList.querySelectorAll('.features__item');
let slideIndex = 0;
let slideInterval;

// Define a function to show the slide
function showSlide(n) {
  // Hide all the features__items
  for (let i = 0; i < featuresItems.length; i++) {
    featuresItems[i].style.display = 'none';
  }

  // Show the nth features__item
  featuresItems[n].style.display = 'block';
}

// Define a function to start the slideshow
function startSlideShow() {
  slideInterval = setInterval(() => {
    slideIndex++;
    if (slideIndex >= featuresItems.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  }, 5000);
}

// Add a click event listener to each SVG
const svgImages = featuresList.querySelectorAll('.features__image');
for (let i = 0; i < svgImages.length; i++) {
  svgImages[i].addEventListener('click', () => {
    clearInterval(slideInterval); // Stop the auto-slideshow
    slideIndex = i; // Set the slideIndex to the clicked index
    showSlide(slideIndex); // Show the slide
    startSlideShow(); // Start the auto-slideshow again
  });
}

// Start the slideshow
startSlideShow();