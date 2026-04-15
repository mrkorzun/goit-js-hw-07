// Завдання 4

// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Log in</button>
// </form>

// відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля,
// виводь alert з попередженням про те, що 'All form fields must be filled in'.
// Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму,
// збери значення полів в об'єкт з двома властивостями,
// де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів,
// очищені від пробілів по краях.
// Для доступу до елементів форми використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль
// і очисти значення полів форми методом reset.

const refs = {
  loginForm: document.querySelector(".login-form"),
};
console.dir(refs.loginForm);

const onLoginFormSubmit = (event) => {
  event.preventDefault();
  const formData = {
    email: refs.loginForm.elements.email.value.trim(),
    pwd: refs.loginForm.elements.password.value.trim(),
  };
  console.log(formData);
  const formDataValues = Object.value(formData);
  if (formDataValues.includes(" ")) {
    alert("All form fields must be filled in");
    return;
  }
};
refs.loginForm.reset();
refs.loginForm.addEventListener("submit", onLoginFormSubmit);
