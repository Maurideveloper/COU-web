document.addEventListener("DOMContentLoaded", function() {
    var navbarIndustria = document.getElementById("navbar_industria");
    if (navbarIndustria) {
        window.addEventListener("scroll", function() {
            if (window.pageYOffset > 1) {
                navbarIndustria.classList.add("sticky");
            } else {
                navbarIndustria.classList.remove("sticky");
            }
        });
    }
  });