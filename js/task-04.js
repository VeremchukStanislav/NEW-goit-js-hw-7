// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//     Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//     Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//     Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0

const ref = {
    buttonDecrement: document.querySelector('[data-action="decrement"]'),
    buttonIncrement: document.querySelector('[data-action="increment"]'),
    htmlValue: document.querySelector('#value'),
}

ref.buttonDecrement.addEventListener('click', decrementValue);
ref.buttonIncrement.addEventListener('click', incrementValue);

function decrementValue() {
    counterValue -= 1;
    newValue();
}

function incrementValue() {
    counterValue += 1;
    newValue();
}

function newValue() {
    ref.htmlValue.textContent = counterValue;
}