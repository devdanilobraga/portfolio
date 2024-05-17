document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var menu = document.querySelector('.menu');
    var menuIcon = document.querySelector('.menu-icon');
  
    menuIcon.addEventListener('click', function() {
      if (menu.style.display === 'flex') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'flex';
      }
    });
  });
   

  function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";
  }

   $(document).ready(function(){
    if ($(window).width() < 768) {
      $('#logos-carousel').slick({
        dots: false,
        arrows: false,
        autoplay: true, 
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }
  });

  document.getElementById('darkmode-toggle').addEventListener('change', alterarCor);

  function alterarCor() {
    var body = document.querySelector('body');
    var elementosTextoContato = document.querySelectorAll('#contato p, #contato a, #contato form label');
    var elementosTextoGenerico = document.querySelectorAll('h1, p');
    var navbar = document.querySelector('.navbar');
    var navLinks = document.querySelectorAll('.navbar a');
    var menuIcon = document.getElementById('menu-toggle');

    if (body.style.backgroundColor === 'white' || body.style.backgroundColor === '') {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        navbar.style.backgroundColor = 'black';
        menuIcon.style.color = 'white';

        navLinks.forEach(function(link) {
            link.style.color = 'white';
        });

        elementosTextoContato.forEach(function(elemento) {
            elemento.style.color = 'white';
        });

        elementosTextoGenerico.forEach(function(elemento) {
            elemento.style.color = 'white';
        });
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        navbar.style.backgroundColor = 'white';
        menuIcon.style.color = 'black';

        navLinks.forEach(function(link) {
            link.style.color = 'black';
        });

        elementosTextoContato.forEach(function(elemento) {
            elemento.style.color = 'black';
        });

        elementosTextoGenerico.forEach(function(elemento) {
            elemento.style.color = 'black';
        });
    }
}
