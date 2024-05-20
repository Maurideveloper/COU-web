document.addEventListener("DOMContentLoaded", function() {
    var navbar_retail = document.getElementById("navbar_retail");
    if (navbar_retail) {
        window.addEventListener("scroll", function() {
            if (window.pageYOffset > 1) {
                navbar_retail.classList.add("sticky");
            } else {
                navbar_retail.classList.remove("sticky");
            }
        });
    }
});

