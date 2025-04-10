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
