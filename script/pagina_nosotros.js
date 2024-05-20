function showFounder(index) {
    if (index==1) {
        console.log('aa')
        document.querySelector("#founder1").style.display = 'none';
        document.querySelector("#founder2").style.display = 'flex';
    }
    if (index==2) {
        document.querySelector("#founder1").style.display = 'flex';
        document.querySelector("#founder2").style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var navbarNosotros = document.getElementById("navbar_nosotros");
    if (navbarNosotros) {
        window.addEventListener("scroll", function() {
            if (window.pageYOffset > 1) {
                navbarNosotros.classList.add("sticky");
            } else {
                navbarNosotros.classList.remove("sticky");
            }
        });
    }
  });