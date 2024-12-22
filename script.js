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
   
  // Carrega projetos do arquivo JSON
  fetch('projetos.json')
    .then(response => response.json())
    .then(projetos => {
      const projetosGrid = document.querySelector('.projetos-grid');

      projetos.forEach(projeto => {
        const card = document.createElement('div');
        card.classList.add('projeto-card');

        card.innerHTML = `
          <a href="${projeto.link}" target="_blank">
            <img src="${projeto.image}" alt="${projeto.title}">
            <h3>${projeto.title}</h3>
            <p>${projeto.description}</p>
            <div class="tech-icons">
              ${projeto.technologies.map(tech => `<i class="fa-brands fa-${tech.toLowerCase()}"></i>`).join('')}
            </div>
            ${projeto.tags ? `<p>${projeto.tags.join(', ')}</p>` : ''}
          </a>
        `;

        projetosGrid.appendChild(card);
      });
    })
    .catch(error => console.error('Erro ao carregar projetos:', error));

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

  // Mostrar o botão ao rolar
window.addEventListener("scroll", () => {
  const backToTop = document.getElementById("backToTop");
  if (window.scrollY > 200) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// Função para rolar ao topo
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


  document.getElementById('darkmode-toggle').addEventListener('change', alterarCor);

  function alterarCor() {
    var body = document.querySelector('body');
    var elementosTextoGenerico = document.querySelectorAll('p');
    var navbar = document.querySelector('.navbar');
    var navLinks = document.querySelectorAll('.navbar a');
    var menuIcon = document.getElementById('menu-toggle');
    var quemSou = document.querySelector('#quem-sou p');

    if (body.style.backgroundColor === 'white' || body.style.backgroundColor === '') {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        navbar.style.backgroundColor = 'black';
        menuIcon.style.color = 'white';
        quemSou.style.color = 'white';
        

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
        quemSou.style.color = 'black';

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
