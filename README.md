# JavaScript DOM Manipulation & Event Handling

**🌐 Language:** **English** · [Українська](./README.ua.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [العربية](./README.ar.md)

![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Vanilla JS](https://img.shields.io/badge/No_Frameworks-Vanilla_JS-success?style=flat-square)
![Prettier](https://img.shields.io/badge/Prettier-formatted-F7B93E?style=flat-square&logo=prettier&logoColor=black)

> A practical demonstration of core front-end skills: **DOM traversal, dynamic rendering, event-driven UI, form handling, and validation** — built entirely with vanilla JavaScript.

🔗 **Live demo:** [mrkorzun.github.io/js-dom-events-playground/](https://mrkorzun.github.io/js-dom-events-playground/)

![Preview](./preview.png)

---

## 🎯 What This Project Demonstrates

This repository is a hands-on showcase of front-end fundamentals that every junior developer is expected to own confidently — without leaning on frameworks. Each of the five mini-applications targets a specific real-world skill:

| #   | Mini-App               | Skill Demonstrated                          |
| --- | ---------------------- | ------------------------------------------- |
| 1   | Category Inspector     | DOM traversal & introspection               |
| 2   | Dynamic Image Gallery  | Data-driven rendering & DOM performance     |
| 3   | Live Greeting Input    | Real-time event handling & two-way UI sync  |
| 4   | Login Form             | Form validation, structured data collection |
| 5   | Random Color Generator | Inline styling & user-driven UI updates     |

---

## 💡 Skills & Competencies

### 🔹 Vanilla JavaScript (ES6+)

Arrow functions, template literals, destructuring, ternary operators, `const`/`let` scoping, `String.prototype.trim`, array methods (`map`, `forEach`, `join`).

### 🔹 DOM API Mastery

- **Selection:** `querySelector`, `querySelectorAll`, `children`
- **Reading:** `textContent`, `value`, `event.target`
- **Writing:** `insertAdjacentHTML`, inline `style` manipulation
- **Performance:** single-insertion DOM updates over loop-based appends

### 🔹 Event-Driven Programming

- `addEventListener` with `input`, `submit`, and `click` events
- Preventing default browser behavior via `event.preventDefault()`
- Reading dynamic input through `event.target`

### 🔹 Form Handling

- Accessing fields with `form.elements` (vs. per-field selectors)
- Manual validation logic without relying on the `required` attribute
- Structured data collection into objects
- Resetting form state via `form.reset()`

### 🔹 Code Quality & Workflow

- **Modular architecture** — each task is isolated in its own HTML/CSS/JS triplet
- **Prettier** for consistent formatting
- **Git** with descriptive, atomic commits
- **GitHub Pages** for continuous deployment

---

## 🧩 Feature Walkthrough

### 1. Category Inspector

Traverses a nested unordered list and reports its structure to the console — total category count, name of each category, and how many items each one contains. Demonstrates DOM tree navigation using `children` and collection iteration with `forEach`.

```
Number of categories: 3
Category: Animals      → Elements: 4
Category: Products     → Elements: 3
Category: Technologies → Elements: 5
```

---

### 2. Dynamic Image Gallery

Builds a complete image gallery from a JavaScript data array. Highlights a **performance-aware approach**: the entire markup is composed in memory and inserted into the DOM in **a single operation** rather than appending elements one by one in a loop.

```js
const markup = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery-item"><img src="${url}" alt="${alt}" /></li>`,
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);
```

---

### 3. Live Greeting Input

Reflects user input into the page in real time as they type. Implements a defensive UX pattern: when the field is empty or contains only whitespace, the output gracefully falls back to `"Anonymous"` instead of staying blank.

---

### 4. Login Form

A custom-validated login form. The submit handler intercepts the default form submission, manually checks both fields, and either alerts the user about empty fields or collects the trimmed values into a clean data object. Demonstrates working with `form.elements` — the idiomatic way to read multiple fields at once.

```js
{
  email: "user@example.com",
  password: "secret123"
}
```

---

### 5. Random Color Generator

On every button click, generates a random HEX color, applies it as the `<body>` background via inline styling, and displays the color value to the user. Showcases inline style manipulation and a clean utility-function pattern.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
```

---

## 🚀 Running Locally

No build pipeline, no package manager, no dependencies — just open it.

```bash
git clone https://github.com/mrkorzun/js-dom-events-playground.git
cd js-dom-events-playground
# Open index.html directly, or use any static server:
npx serve .
```

For an auto-reloading dev experience, the **Live Server** extension for VS Code is recommended.

---

## 📁 Project Structure

```
js-dom-events-playground/
├── css/                    # Per-task styles
├── js/                     # Per-task scripts
├── 01-categories.html      # Mini-app 1
├── 02-gallery.html         # Mini-app 2
├── 03-input.html           # Mini-app 3
├── 04-form.html            # Mini-app 4
├── 05-color.html           # Mini-app 5
├── index.html              # Navigation hub
└── README.md
```

<p align="center">
  <img src="./preview.png" alt="Preview" width="900">
</p>

---

## 👤 Author

**Romario Korzun** — Front-End Developer

- GitHub: [@mrkorzun](https://github.com/mrkorzun)
- Live portfolio: [mrkorzun.github.io](https://mrkorzun.github.io/js-dom-events-playground/)

---

<sub>Originally built as a practical exercise within the **GoIT JavaScript** curriculum to consolidate DOM and event-handling fundamentals.</sub>
