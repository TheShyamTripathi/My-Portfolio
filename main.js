const sliders = document.querySelectorAll(".row-slider");
const prevBtns = document.querySelectorAll(".prevBtn");
const nextBtns = document.querySelectorAll(".nextBtn");

sliders.forEach((slider, index) => {
    const slides = slider.querySelectorAll(".row");
    let slideIndex = 0;

    // Show initial slide
    showSlide(slideIndex);

    // Next/previous controls
    prevBtns[index].addEventListener("click", () => {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        showSlide(slideIndex);
    });

    nextBtns[index].addEventListener("click", () => {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        showSlide(slideIndex);
    });

    function showSlide(index) {
        const offset = -index * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }
});
