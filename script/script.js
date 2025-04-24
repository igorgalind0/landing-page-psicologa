function initTabNav() {
    const tabMenu = document.querySelectorAll('.sobre-lista li');
    const tabContent = document.querySelectorAll('.sobre-descricao section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');
        function activeTab(index) {
            tabContent.forEach((content) => {
                content.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);

                tabMenu.forEach((li) => li.classList.remove('ativo'));
                itemMenu.classList.add('ativo');
            });
        });
    }
}
initTabNav();

function MenuMobile(){
    const menuMobile = document.querySelector("[data-menu='button'");
    const ulMenu = document.querySelector(".menu-list");
    menuMobile.addEventListener('click', () => {
        ulMenu.classList.toggle('ativo');
    });
}

MenuMobile();

function initScrollSuave() {
const linksInternos = document.querySelectorAll('a[href^="#"]');
function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    if (section) {
    const topo = section.offsetTop - 100;
    window.scrollTo({
        top: topo,
        behavior: 'smooth',
    });
}
}
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}
initScrollSuave();

function initAnimacaoScroll() {
    const sections = document.querySelectorAll('[data-anima="scroll"]');
    if(sections.length) {
        const windowMetade = window.innerHeight * 0.6;
        function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowMetade) < 0;
            if(isSectionVisible)
            section.classList.add('ativo');
            else if(section.classList.contains('ativo')) {
            section.classList.remove('ativo');
            }
        })
        }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
}
}

initAnimacaoScroll();

if (window.SimpleAnime) {
    new SimpleAnime();
}

function initAnimaNumeros() {
    function animaNumero(numero) {
      let start = 0;
      const total = +numero.innerText;
      const duracao = 1500;
      let startTime = null;
  
      function animar(timestamp) {
        if (!startTime) startTime = timestamp;
        const progresso = timestamp - startTime;
        const progressoRelativo = Math.min(progresso / duracao, 1);
        numero.innerText = Math.floor(progressoRelativo * total);
  
        if (progresso < duracao) {
          requestAnimationFrame(animar);
        } else {
          numero.innerText = total;
        }
      }
  
      requestAnimationFrame(animar);
    }
  
    function animaNumeros() {
      const numeros = document.querySelectorAll('[data-numero]');
      numeros.forEach((numero) => {
        numero.classList.remove('animado');
        animaNumero(numero);
        numero.classList.add('animado');
      });
    }
  
    const observerTargetSections = document.querySelectorAll('.sobre-descricao section');
  
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.attributeName === 'class' &&
          mutation.target.classList.contains('ativo') &&
          mutation.target.querySelector('.numeros')
        ) {
          animaNumeros();
        }
      });
    });
  
    observerTargetSections.forEach((section) => {
      observer.observe(section, { attributes: true });
    });
  }
  
  initAnimaNumeros();
  
  
  
  