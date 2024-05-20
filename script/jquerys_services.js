document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".testimonial-carousel");
    const testimonialItems = Array.from(carousel.querySelectorAll(".testimonial-item"));
    const prevButton = carousel.querySelector(".testimonial-prev");
    const nextButton = carousel.querySelector(".testimonial-next");
    let currentTestimonialIndex = 0;

    function showTestimonial(index) {
        testimonialItems.forEach(item => {
            item.classList.remove("active");
        });
        testimonialItems[index].classList.add("active");
    }

    function nextTestimonial() {
        currentTestimonialIndex++;
        if (currentTestimonialIndex >= testimonialItems.length) {
            currentTestimonialIndex = 0;
        }
        showTestimonial(currentTestimonialIndex);
    }

    function prevTestimonial() {
        currentTestimonialIndex--;
        if (currentTestimonialIndex < 0) {
            currentTestimonialIndex = testimonialItems.length - 1;
        }
        showTestimonial(currentTestimonialIndex);
    }

    // Mostrar el primer testimonio al cargar la página
    showTestimonial(currentTestimonialIndex);

    // Asignar eventos a los botones de siguiente y anterior
    nextButton.addEventListener("click", nextTestimonial);
    prevButton.addEventListener("click", prevTestimonial);
});