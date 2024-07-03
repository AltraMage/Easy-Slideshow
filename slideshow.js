container = document.getElementById("Slideshow");
slides = document.getElementsByClassName("slide");
leftbutton = document.getElementById("left")
rightbutton = document.getElementById("right")
// count of slides
slidesCount = slides.length;
// current slide
currentSlide = 0;
// document.getElementsByTagName("button")



leftbutton.innerHTML = "<";
rightbutton.innerHTML = ">";

// set left and right button to be half the image height
leftbutton.style.top = (slides[currentSlide].height / 2)  + "px";
rightbutton.style.top = (slides[currentSlide].height / 2) + "px";

//set all slides to hidden
for (var i = 0; i < slidesCount; i++) {
    slides[i].style.display = "none";
}

//show first slide
slides[0].style.display = "block";

function next() {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % slidesCount;
    slides[currentSlide].style.display = "block";
}

function prev() {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide - 1 + slidesCount) % slidesCount;
    slides[currentSlide].style.display = "block";
}