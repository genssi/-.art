import modals from "./modules/modals";
import slider from "./modules/slider";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextinputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scrolling from "./modules/scrolling";
import drop from "./modules/drop";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    modals(); // Запускаем модальные окна.
    slider(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn"); //горизонтальный слайдер.
    slider(".main-slider-item", "vertical"); //вертикальный слайдер.
    forms(); // Запускаем формы обратной связи.
    mask("[name='phone']"); // маска для номера телефона.
    checkTextinputs("[name='name']"); // валидация для инпута с именем.
    checkTextinputs("[name='message']"); // валидация для инпута с коментарием.
    showMoreStyles(".button-styles", "#styles .row"); // при нажатии на кнопку, показываем скрытые карточки.
    calc('#size', '#material', '#options', '.promocode', '.calc-price'); // калькулятор для формы.
    filter(); // фильтрация портретов.
    pictureSize(".sizes-block"); // показывает изображения на блоках при наведении мышью на определенный блок.
    accordion(".accordion-heading"); // аккардион (секция с вопросами пользователя).
    burger(".burger-menu", ".burger"); // бургер меню.
    scrolling(".pageup"); // скролл до определенной части страницы.
    drop(); // поддержка перетаскивания файла.
});