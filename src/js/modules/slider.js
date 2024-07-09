const slider = (slides, dir, prev, next) => {
    let slideIndex = 1;
    let paused = false;

    const items = document.querySelectorAll(slides);

    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add("animated");
            item.style.display = "none";
        });

        items[slideIndex - 1].style.display = "block";
    }

    showSlides(slideIndex); // показываем первый слайд. 

    function plusSlide(n) {
        showSlides(slideIndex += n);
    }

    try { //если на слайдах есть кнопки, сработает этот участок кода.
        const prevBtn = document.querySelector(prev);
        const nextBtn = document.querySelector(next);

        prevBtn.addEventListener("click", () => {
            plusSlide(-1);
            items[slideIndex - 1].classList.remove("slideInRight");
            items[slideIndex - 1].classList.add("slideInLeft");
        });
        nextBtn.addEventListener("click", () => {
            plusSlide(1);
            items[slideIndex - 1].classList.remove("slideInLeft");
            items[slideIndex - 1].classList.add("slideInRight");
        });
    } catch (e) {}

    function activateAnimation() {
        if (dir === "vertical") { // если слайд вертикальный то выполняем этот код.
            paused = setInterval(() => { //автоматичекская прокрутка слайда.
                plusSlide(1);
                items[slideIndex - 1].classList.add("slideInDown");
            }, 3000);
        } else { //если слайд не вертикальный то этот.
            paused = setInterval(() => { //автоматичекская прокрутка слайда.
                plusSlide(1);
                items[slideIndex - 1].classList.remove("slideInLeft");
                items[slideIndex - 1].classList.add("slideInRight");
            }, 3000);
        }
    }

    activateAnimation(); // запускаем автоматическую прокрутку слайда.

    items[0].parentNode.addEventListener("mouseenter", () => {
        clearInterval(paused); // если мышка в зоне слайда то слайд останавливается.
    });
    items[0].parentNode.addEventListener("mouseleave", () => {
        activateAnimation(); // если мышка не в зоне слайде то слайд снова работает.
    });
};

export default slider;