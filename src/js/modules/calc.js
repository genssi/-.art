const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size);
    const materialBlock = document.querySelector(material);
    const optionsblock = document.querySelector(options);
    const promocodeBlock = document.querySelector(promocode);
    const resultBlock = document.querySelector(result);

    let sum = 0;

    const calcfFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsblock.value));

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

export default calc;