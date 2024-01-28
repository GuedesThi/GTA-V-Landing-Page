const button = document.querySelector('.btnPlataforma');

// Coloquei assim pois tem duas classes .plataformas no meu HTML
const plataformsCampus = document.querySelector('.btnPlataforma .plataformas');

button.addEventListener('click', () => {
    
    // contains = serve para saber se tem a class .ativo
    if (plataformsCampus.classList.contains('ativo')) {
        plataformsCampus.classList.remove('ativo') 
    } else {
        plataformsCampus.classList.add('ativo')
    }

})