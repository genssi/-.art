import modals from "./modules/modals";
import slider from "./modules/slider";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    modals(); // Запускаем модальные окна.
    slider(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn"); //горизонтальный слайдер.
    slider(".main-slider-item", "vertical"); //вертикальный сладер.
});