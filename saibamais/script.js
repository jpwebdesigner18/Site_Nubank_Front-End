const img = document.querySelector('.img_segurança');

if (img) {
    window.addEventListener('scroll', () => {
        const posicao = img.getBoundingClientRect().top;

        if (posicao < window.innerHeight) {
            img.classList.add('active');
        }
    });
}