// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const ref = {
    input: document.querySelector('#name-input'),
    textSpan: document.querySelector('#name-output'),
};

ref.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    return event.currentTarget.value === ''
        ? (ref.textSpan.textContent = 'незнакомец')
        : (ref.textSpan.textContent = event.currentTarget.value);
}