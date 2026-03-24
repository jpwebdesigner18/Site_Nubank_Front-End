const scrollElements = document.querySelectorAll(".scroll-animation");

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("active");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        }
    })
}

window.addEventListener("scroll", () => { 
    handleScrollAnimation();
});

window.addEventListener("wheel", (e) => {
    e.preventDefault(); // bloqueia o scroll normal
    window.scrollBy({
        top: e.deltaY / 2, // scroll mais suave
        left: 0,
        behavior: "smooth"
    });
}, { passive: false });

const img = document.querySelector('.img_segurança');

if (img) {
window.addEventListener('scroll', () => {
    const posicao = img.getBoundingClientRect().top;

    if (posicao < window.innerHeight) {
        img.classList.add('active');
    }
 });
}


