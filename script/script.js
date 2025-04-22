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

                // Atualiza o estado ativo da aba
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

    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
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


//Animação
if (window.SimpleAnime) {
    new SimpleAnime();
}