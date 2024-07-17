/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const accordion = triggersSelector => {
  const btns = document.querySelectorAll(triggersSelector);
  btns.forEach(btn => {
    btn.addEventListener("click", function () {
      this.classList.toggle("active-style");
      this.nextElementSibling.classList.toggle("active-content");
      if (this.classList.contains("active-style")) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
      } else {
        this.nextElementSibling.style.maxHeight = "0px";
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const burger = (menuSelector, burgerSelector) => {
  const menuElem = document.querySelector(menuSelector);
  const burgerElem = document.querySelector(burgerSelector);
  menuElem.style.display = "none";
  burgerElem.addEventListener("click", () => {
    if (menuElem.style.display == "none" && window.screen.availWidth < 993) {
      //если размер экрана < 993px
      menuElem.style.display = "block";
    } else {
      menuElem.style.display = "none";
    }
  });
  window.screen.addEventListener("resize", () => {
    if (window.screen.availWidth > 992) {
      menuElem.style.display = "none";
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const calc = (size, material, options, promocode, result) => {
  const sizeBlock = document.querySelector(size);
  const materialBlock = document.querySelector(material);
  const optionsblock = document.querySelector(options);
  const promocodeBlock = document.querySelector(promocode);
  const resultBlock = document.querySelector(result);
  let sum = 0;
  const calcfFunc = () => {
    sum = Math.round(+sizeBlock.value * +materialBlock.value + +optionsblock.value);
    if (sizeBlock.value == "" || materialBlock.value == "") {
      resultBlock.textContent = "Пожалуйста, выберите размер и материал картины!";
    } else if (promocodeBlock.value == "IWANTPOPART") {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
    }
  };
  sizeBlock.addEventListener("change", calcfFunc);
  materialBlock.addEventListener("change", calcfFunc);
  optionsblock.addEventListener("change", calcfFunc);
  promocodeBlock.addEventListener("input", calcfFunc);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkTextinputs = selector => {
  const textInputs = document.querySelectorAll(selector);
  textInputs.forEach(input => {
    input.addEventListener("keypress", function (e) {
      if (e.key.match(/[^а-яё 0-9]/ig)) {
        e.preventDefault();
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTextinputs);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const filter = () => {
  const menu = document.querySelector(".portfolio-menu");
  const items = menu.querySelectorAll("li");
  const btnAll = menu.querySelector(".all");
  const btnLovers = menu.querySelector(".lovers");
  const btnChef = menu.querySelector(".chef");
  const btnGirl = menu.querySelector(".girl");
  const btnGuy = menu.querySelector(".guy");
  const btnGrandmother = menu.querySelector(".grandmother");
  const btnGranddad = menu.querySelector(".granddad");
  const wrapper = document.querySelector(".portfolio-wrapper");
  const markAll = wrapper.querySelectorAll(".all");
  const markGirl = wrapper.querySelectorAll(".girl");
  const markLovers = wrapper.querySelectorAll(".lovers");
  const markChef = wrapper.querySelectorAll(".chef");
  const markGuy = wrapper.querySelectorAll(".guy");
  const no = document.querySelector(".portfolio-no");
  const typeFilter = markType => {
    markAll.forEach(mark => {
      mark.style.display = "none";
      mark.classList.remove("animated", "fadeIn");
    });
    no.style.display = "none";
    no.classList.remove('animated', 'fadeIn');
    if (markType) {
      markType.forEach(mark => {
        mark.style.display = "block";
        mark.classList.add("animated", "fadeIn");
      });
    } else {
      no.style.display = "block";
      no.classList.add("animated", "fadeIn");
    }
  };
  btnAll.addEventListener("click", () => {
    typeFilter(markAll);
  });
  btnLovers.addEventListener("click", () => {
    typeFilter(markLovers);
  });
  btnChef.addEventListener("click", () => {
    typeFilter(markChef);
  });
  btnGirl.addEventListener("click", () => {
    typeFilter(markGirl);
  });
  btnGuy.addEventListener("click", () => {
    typeFilter(markGuy);
  });
  btnGrandmother.addEventListener("click", () => {
    typeFilter();
  });
  btnGranddad.addEventListener("click", () => {
    typeFilter();
  });
  menu.addEventListener("click", e => {
    let target = e.target;
    if (target && target.tagName == "LI") {
      items.forEach(btn => btn.classList.remove("active"));
      target.classList.add("active");
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/request */ "./src/js/services/request.js");

const forms = () => {
  const form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    upload = document.querySelectorAll('[name="upload"]');
  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  };
  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php'
  };
  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
    upload.forEach(item => {
      item.previousElementSibling.textContent = "Файл не выбран";
    });
  };
  upload.forEach(item => {
    item.addEventListener('input', () => {
      console.log(item.files[0]);
      let dots;
      const arr = item.files[0].name.split('.');
      arr[0].length > 6 ? dots = "..." : dots = '.';
      const name = arr[0].substring(0, 6) + dots + arr[1];
      item.previousElementSibling.textContent = name;
    });
  });
  form.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.parentNode.appendChild(statusMessage);
      item.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        item.style.display = 'none';
      }, 400);
      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);
      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);
      const formData = new FormData(item);
      let api;
      item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
      console.log(api);
      (0,_services_request__WEBPACK_IMPORTED_MODULE_0__.postData)(api, formData).then(res => {
        console.log(res);
        statusImg.setAttribute('src', message.ok);
        textMessage.textContent = message.success;
      }).catch(() => {
        statusImg.setAttribute('src', message.fail);
        textMessage.textContent = message.failure;
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
          item.style.display = 'block';
          item.classList.remove('fadeOutUp');
          item.classList.add('fadeInUp');
        }, 5000);
      });
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mask = selector => {
  let setCursorPosition = (pos, elem) => {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  };
  function createMask(event) {
    let matrix = "+7 (___) ___ __ __";
    let i = 0;
    let def = matrix.replace(/\D/g, "");
    let val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
    });
    if (event.type === "blur") {
      if (this.value.length == 2) {
        this.value = "";
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }
  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener("input", createMask);
    input.addEventListener("focus", createMask);
    input.addEventListener("blur", createMask);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mask);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modals = () => {
  let btnPressed = false; // проверка что пользователь кликнул хотя бы одну кнопку.

  function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll("[data-modal]");
    const scroll = calcScroll();
    trigger.forEach(item => {
      item.addEventListener("click", e => {
        if (e.target) {
          e.preventDefault();
        }
        btnPressed = true; // проверка что пользователь кликнул хотя бы одну кнопку.

        if (destroy) {
          item.remove();
        }
        windows.forEach(item => {
          item.style.display = "none";
          item.classList.add("animated", "fadeIn"); // добавляем анимацию.
        });
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      });
    });
    close.addEventListener("click", () => {
      windows.forEach(item => {
        item.style.display = "none";
      });
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = "0px";
    });
    modal.addEventListener("click", e => {
      if (e.target === modal) {
        windows.forEach(item => {
          item.style.display = "none";
        });
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = "0px";
      }
    });
  }
  function showModalByTime(selector, time) {
    setTimeout(function () {
      let display;
      document.querySelectorAll("[data-modal]").forEach(item => {
        if (getComputedStyle(item).display !== "none") {
          display = "block";
        }
        if (!display) {
          document.querySelector(selector).style.display = "block";
          document.body.style.overflow = "hidden";
          const scroll = calcScroll();
          document.body.style.marginRight = `${scroll}px`;
        }
      });
    }, time);
  }
  function calcScroll() {
    let div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }
  function openByScroll(selector) {
    window.addEventListener("scroll", () => {
      if (!btnPressed && window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        document.querySelector(selector).click();
      }
    });
  }
  bindModal(".button-design", ".popup-design", ".popup-design .popup-close");
  bindModal(".button-consultation", ".popup-consultation", ".popup-consultation .popup-close");
  bindModal(".fixed-gift", ".popup-gift", ".popup-gift .popup-close", true);
  openByScroll(".fixed-gift");
  showModalByTime(".popup-consultation", 60000);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

/***/ }),

/***/ "./src/js/modules/pictureSize.js":
/*!***************************************!*\
  !*** ./src/js/modules/pictureSize.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pictureSize = imgSelector => {
  const blocks = document.querySelectorAll(imgSelector);
  function showImg(block) {
    const img = block.querySelector("img");
    img.src = img.src.slice(0, -4) + "-1.png";
    block.querySelectorAll("p:not(.sizes-hit)").forEach(p => {
      img.classList.add("animated", "fadeIn");
      p.style.display = "none";
    });
  }
  function hideImg(block) {
    const img = block.querySelector("img");
    img.src = img.src.slice(0, -6) + ".png";
    block.querySelectorAll("p").forEach(p => {
      img.classList.remove("animated", "fadeIn");
      p.style.display = "block";
    });
  }
  blocks.forEach(block => {
    block.addEventListener("mouseover", () => {
      showImg(block);
    });
    block.addEventListener("mouseout", () => {
      hideImg(block);
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pictureSize);

/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const scrolling = upSelector => {
  const upElem = document.querySelector(upSelector);
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.add("animated", "fadeIn");
      upElem.classList.remove("fadeOut");
    } else {
      upElem.classList.add("fadeOut");
      upElem.classList.remove("fadeIn");
    }
  });

  //Scrolling with raf
  let links = document.querySelectorAll("[href^='#']");
  let speed = 0.3;
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      let widthTop = document.documentElement.scrollTop;
      let hash = this.hash;
      let toBlock = document.querySelector(hash).getBoundingClientRect().top;
      let start = null;
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) {
          start = time;
        }
        let progress = time - start;
        let r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
        document.documentElement.scrollTo(0, r);
        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });

  //Pure js scrolling
  // const element = document.documentElement;
  // const body = document.body;

  // const calcScroll = () => {
  //     upElem.addEventListener("click", function(event) {
  //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

  //         if (this.hash !== "") {
  //             event.preventDefault();
  //             let hashElement = document.querySelector(this.hash);
  //             let hashelementTop = 0;

  //             while (hashElement.offsetParent) {
  //                 hashelementTop += hashElement.offsetTop;
  //                 hashElement = hashElement.offsetParent;
  //             }

  //             hashelementTop = Math.round(hashelementTop);
  //             smoothScroll(scrollTop, hashelementTop, this.hash);
  //         }
  //     });
  // };

  // const smoothScroll = (from, to, hash) => {
  //     let timeInterval = 1;
  //     let prevScrollTop;
  //     let speed;

  //     if (to > from) {
  //         speed = 30;
  //     } else {
  //         speed = -30;
  //     }

  //     let move = setInterval(function() {
  //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

  //         if(prevScrollTop === scrollTop || (to > from && scrollTop >= to)
  //              || (to < from && scrollTop <= to)) {
  //                 clearInterval(move);
  //                 history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, "") + hash);
  //         } else {
  //             body.scrollTop += speed;
  //             element.scrollTop += speed;
  //             prevScrollTop = scrollTop;
  //         }
  //     }, timeInterval);
  // };

  // calcScroll();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrolling);

/***/ }),

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/request */ "./src/js/services/request.js");

const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);

  // cards.forEach(card => { // ( это 1 вариант) полчуение карточка из верстки.
  //     card.classList.add("animated", "fadeInUp");
  // });

  // btn.addEventListener("click", () => {
  //     cards.forEach(card => {
  //         card.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
  //         card.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
  //     });

  //     btn.remove();
  // });

  btn.addEventListener("click", function () {
    // ( это 2 вариант) получение карточек из сервера.
    (0,_services_request__WEBPACK_IMPORTED_MODULE_0__.getResource)("assets/db.json").then(res => creaeteCards(res.styles)).catch(error => console.log(error));
    this.remove(); // удаляем кнопку "показать еще".
  });
  function creaeteCards(response) {
    response.forEach(item => {
      let card = document.createElement("div");
      card.classList.add("animated", "fadeInUp", "col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
      card.innerHTML = `
                 <div class=styles-block>
                    <img src=${item.src} alt="style">
                    <h4>${item.title}</h4>
                    <a href="${item.link}">Подробнее</a>
                </div>
            `;
      document.querySelector(wrapper).appendChild(card);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMoreStyles);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  try {
    //если на слайдах есть кнопки, сработает этот участок кода.
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
    if (dir === "vertical") {
      // если слайд вертикальный то выполняем этот код.
      paused = setInterval(() => {
        //автоматичекская прокрутка слайда.
        plusSlide(1);
        items[slideIndex - 1].classList.add("slideInDown");
      }, 3000);
    } else {
      //если слайд не вертикальный то этот.
      paused = setInterval(() => {
        //автоматичекская прокрутка слайда.
        plusSlide(1);
        items[slideIndex - 1].classList.remove("slideInRight");
        items[slideIndex - 1].classList.add("slideInLeft");
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./src/js/services/request.js":
/*!************************************!*\
  !*** ./src/js/services/request.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResource: () => (/* binding */ getResource),
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
  //отправка данных на сервер.
  let res = await fetch(url, {
    method: "POST",
    body: data
  });
  return await res.text();
};
const getResource = async url => {
  // получение данных с сервера.
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  return await res.json();
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyles */ "./src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pictureSize */ "./src/js/modules/pictureSize.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js");












window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Запускаем модальные окна.
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn"); //горизонтальный слайдер.
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])(".main-slider-item", "vertical"); //вертикальный слайдер.
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])(); // Запускаем формы обратной связи.
  (0,_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])("[name='phone']"); // маска для номера телефона.
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])("[name='name']"); // валидация для инпута с именем.
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])("[name='message']"); // валидация для инпута с коментарием.
  (0,_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(".button-styles", "#styles .row"); // при нажатии на кнопку, показываем скрытые карточки.
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])('#size', '#material', '#options', '.promocode', '.calc-price'); // калькулятор для формы.
  (0,_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])(); // фильтрация портретов.
  (0,_modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__["default"])(".sizes-block"); // показывает изображения на блоках при наведении мышью на определенный блок.
  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_9__["default"])(".accordion-heading"); // аккардион (секция с вопросами пользователя).
  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_10__["default"])(".burger-menu", ".burger"); // бургер меню.
  (0,_modules_scrolling__WEBPACK_IMPORTED_MODULE_11__["default"])(".pageup"); // скролл до определенной части страницы.
});
/******/ })()
;
//# sourceMappingURL=script.js.map