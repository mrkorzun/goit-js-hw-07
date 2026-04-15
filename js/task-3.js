// Завдання 3

// Напиши скрипт,
// який під час набору тексту в інпуті input#name-input (подія input)
// підставляє його поточне значення в span#name-output
// як ім’я для привітання.
// Обов’язково очищай значення в інпуті по краях від пробілів .
// Якщо інпут порожній або містить лише пробіли,
// то замість імені у спан має підставлятися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};
// console.log(refs);

refs.input.addEventListener("input", onInputText);

function onInputText(event) {
  const value = event.target.value.trim();
  if (value === "") {
    refs.span.textContent = "Anonymous";
  } else {
    refs.span.textContent = value;
  }
}
