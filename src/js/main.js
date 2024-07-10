import modals from "./modules/modals";
import slider from "./modules/slider";
import forms from "./modules/forms";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    modals(); // Запускаем модальные окна.
    slider(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn"); //горизонтальный слайдер.
    slider(".main-slider-item", "vertical"); //вертикальный сладер.
    forms(); // Запускаем формы обратной связи.
});