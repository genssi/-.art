import modals from "./modules/modals";
import slider from "./modules/slider";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextinputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    modals(); // Запускаем модальные окна.
    slider(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn"); //горизонтальный слайдер.
    slider(".main-slider-item", "vertical"); //вертикальный сладер.
    forms(); // Запускаем формы обратной связи.
    mask("[name='phone']"); // маска для номера телефона.
    checkTextinputs("[name='name']"); // валидация для инпута с именем.
    checkTextinputs("[name='message']"); // валидация для инпута с коментарием.
    showMoreStyles(".button-styles", "#styles .row"); // при нажатии на кнопку, показываем скрытые карточки.
});