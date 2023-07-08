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
