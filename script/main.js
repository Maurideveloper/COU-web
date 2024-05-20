// https://colorlib.com/preview/theme/seogo/

const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-33.33333333333333%)";
      e.target.classList.add("active");
    } /*else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-66.6666666667%)';
      e.target.classList.add('active');
    }*/
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var navbar = document.getElementById("navbar");
  if (navbar) {
      window.addEventListener("scroll", function() {
          if (window.pageYOffset > 1) {
              navbar.classList.add("sticky");
          } else {
              navbar.classList.remove("sticky");
          }
      });
  }
});


function mostrarMensajeAppOracle() {
  document.querySelector('#imagen-oracle').style.backgroundColor = '#f2f2f2'
  document.querySelector('#imagen-logility').style.backgroundColor = 'transparent'
  document.querySelector('#imagen-infor').style.backgroundColor = 'transparent'


  document.querySelector('#texto-Oracle').style.display = 'flex'
  document.querySelector('#texto-Logility').style.display = 'none'
  document.querySelector('#texto-Infor').style.display = 'none'


}

function mostrarMensajeAppLogility() {
  document.querySelector('#imagen-logility').style.backgroundColor = '#f2f2f2'
  document.querySelector('#imagen-oracle').style.backgroundColor = 'transparent'
  document.querySelector('#imagen-infor').style.backgroundColor = 'transparent'


  document.querySelector('#texto-Oracle').style.display = 'none'
  document.querySelector('#texto-Logility').style.display = 'flex'
  document.querySelector('#texto-Infor').style.display = 'none'
}

function mostrarMensajeAppInfor() {
  document.querySelector('#imagen-infor').style.backgroundColor = '#f2f2f2'
  document.querySelector('#imagen-logility').style.backgroundColor = 'transparent'
  document.querySelector('#imagen-oracle').style.backgroundColor = 'transparent'

  document.querySelector('#texto-Oracle').style.display = 'none'
  document.querySelector('#texto-Logility').style.display = 'none'
  document.querySelector('#texto-Infor').style.display = 'flex'

}

var openToggle = false;
function toggleService(buttonSelected) {


  if (buttonSelected == 1) {
    document.querySelector("#service-procesos").style.display = 'flex';
    document.querySelector("#service-bpaas").style.display = 'none';
    document.querySelector("#service-medida").style.display = 'none';
    document.querySelector("#service-coaching").style.display = 'none';
    document.querySelector("#service-plataformas").style.display = 'none';
    document.querySelector("#service-mod-infor").style.display = 'none';

  }
  if (buttonSelected == 2) {
    document.querySelector("#service-procesos").style.display = 'none';
    document.querySelector("#service-bpaas").style.display = 'flex';
    document.querySelector("#service-medida").style.display = 'none';
    document.querySelector("#service-coaching").style.display = 'none';
    document.querySelector("#service-plataformas").style.display = 'none';
    document.querySelector("#service-mod-infor").style.display = 'none';

  }
  if (buttonSelected == 3) {
    document.querySelector("#service-procesos").style.display = 'none';
    document.querySelector("#service-bpaas").style.display = 'none';
    document.querySelector("#service-medida").style.display = 'flex';
    document.querySelector("#service-coaching").style.display = 'none';
    document.querySelector("#service-plataformas").style.display = 'none';
    document.querySelector("#service-mod-infor").style.display = 'none';

  }
  if (buttonSelected == 4) {
    document.querySelector("#service-procesos").style.display = 'none';
    document.querySelector("#service-bpaas").style.display = 'none';
    document.querySelector("#service-medida").style.display = 'none';
    document.querySelector("#service-coaching").style.display = 'flex';
    document.querySelector("#service-plataformas").style.display = 'none';
    document.querySelector("#service-mod-infor").style.display = 'none';

  }
  if (buttonSelected == 5) {
    document.querySelector("#service-procesos").style.display = 'none';
    document.querySelector("#service-bpaas").style.display = 'none';
    document.querySelector("#service-medida").style.display = 'none';
    document.querySelector("#service-coaching").style.display = 'none';
    document.querySelector("#service-plataformas").style.display = 'flex';
    document.querySelector("#service-mod-infor").style.display = 'none';

    const arrowIcon = document.querySelector("#arrow-plataformas");
  if (openToggle === false) {
    arrowIcon.style.transform = "rotate(180deg)";
    openToggle = true;
  } else {
    arrowIcon.style.transform = "rotate(0deg)";
    openToggle = false;
  }

  }

  if (buttonSelected == 6) {
    document.querySelector("#service-procesos").style.display = 'none';
    document.querySelector("#service-bpaas").style.display = 'none';
    document.querySelector("#service-medida").style.display = 'none';
    document.querySelector("#service-coaching").style.display = 'none';
    document.querySelector("#service-plataformas").style.display = 'none';
    document.querySelector("#service-mod-infor").style.display = 'flex';

  }
}

var checkbox = document.getElementById('flexSwitchCheckDefault')

const tituloIndex_buscaTuIndustria = document.getElementById('tituloIndex_buscaTuIndustria')
const textoIndex_buscaTuIndustria = document.getElementById('textoIndex_buscaTuIndustria')
const buttonIndex_buscaTuIndustria = document.getElementById('buttonIndex_buscaTuIndustria')


function checker(checked) {
  if (checked == true){
    tituloIndex_buscaTuIndustria.innerHTML = "Find your industry"
    textoIndex_buscaTuIndustria.innerHTML = "Our comprehensive and flexible solutions are pre-configured to meet your business needs. With industry-specific capabilities and built-in user roles. Everything is delivered on an extensible platform with top-notch cloud security. That's ERP made simple."
    buttonIndex_buscaTuIndustria.innerHTML = "Find your industry"
  }
  else {
    tituloIndex_buscaTuIndustria.innerHTML = "Busca tu industria"
    textoIndex_buscaTuIndustria.innerHTML = "Nuestras soluciones integrales y flexibles están preconfiguradas para satisfacer las necesidades de su empresa. Con capacidades específicas de la industria y roles de usuario incorporados. Todo se entrega en una plataforma extensible con seguridad en la nube de primer nivel. Eso es ERP simplificado."
    buttonIndex_buscaTuIndustria.innerHTML = "Busca tu industria"
  }
}


checkbox.addEventListener('change', function () {
  checker(this.checked)
})