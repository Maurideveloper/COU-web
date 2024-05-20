document.addEventListener("DOMContentLoaded", function() {
    var navbar_servicios = document.getElementById("navbar_servicios");
    if (navbar_servicios) {
        window.addEventListener("scroll", function() {
            if (window.pageYOffset > 1) {
                navbar_servicios.classList.add("sticky");
            } else {
                navbar_servicios.classList.remove("sticky");
            }
        });
    }
});

