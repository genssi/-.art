import { getResource } from "../services/request";

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

    btn.addEventListener("click", function() { // ( это 2 вариант) получение карточек из сервера.
        getResource("assets/db.json")
            .then(res  => creaeteCards(res.styles))
            .catch(error => console.log(error));
        
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

export default showMoreStyles;