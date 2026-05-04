<div dir="rtl">

# JavaScript: التعامل مع DOM ومعالجة الأحداث

**🌐 اللغة:** [English](./README.md) · [Українська](./README.ua.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · **العربية**

![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Vanilla JS](https://img.shields.io/badge/بدون_أطر_عمل-Vanilla_JS-success?style=flat-square)
![Prettier](https://img.shields.io/badge/Prettier-formatted-F7B93E?style=flat-square&logo=prettier&logoColor=black)

> عرض عملي لمهارات الواجهة الأمامية الأساسية: **التنقل في DOM، العرض الديناميكي، الواجهات المعتمدة على الأحداث، التعامل مع النماذج والتحقق من صحتها** — مبني بالكامل بـ JavaScript نقي بدون أي أُطر عمل.

🔗 **العرض المباشر:** [mrkorzun.github.io/js-dom-events-playground](https://mrkorzun.github.io/js-dom-events-playground/)

![Preview](./preview.png)

---

## 🎯 ما الذي يُظهره هذا المشروع

هذا المستودع هو ملف أعمال عملي للمهارات الأساسية في تطوير الواجهة الأمامية التي يجب أن يتقنها كل مطوّر مبتدئ بثقة، دون الاعتماد على الأطر. كل تطبيق من التطبيقات المصغّرة الخمسة يُغطّي مهارة فعلية محدّدة:

| #   | التطبيق المصغّر    | المهارة الموضّحة                                      |
| --- | ------------------ | ----------------------------------------------------- |
| 1   | فاحص الفئات        | التنقل في DOM وتحليل بنيته                            |
| 2   | معرض صور ديناميكي  | العرض المعتمد على البيانات وأداء DOM                  |
| 3   | حقل ترحيب مباشر    | معالجة الأحداث في الوقت الفعلي والمزامنة الثنائية     |
| 4   | نموذج تسجيل الدخول | التحقق من النماذج وجمع البيانات بشكل مُهيكل           |
| 5   | مولّد لون عشوائي   | التنسيق المضمّن وتحديث الواجهة بناءً على فعل المستخدم |

---

## 💡 المهارات والكفاءات

### 🔹 JavaScript النقي (ES6+)

الدوال السهمية، القوالب النصية، التفكيك (destructuring)، العامل الثلاثي، نطاق `const`/`let`، `String.prototype.trim`، توابع المصفوفات (`map`, `forEach`, `join`).

### 🔹 إتقان واجهة DOM

- **الاختيار:** `querySelector`، `querySelectorAll`، `children`
- **القراءة:** `textContent`، `value`، `event.target`
- **الكتابة:** `insertAdjacentHTML`، التحكم بـ `style` المضمّن
- **الأداء:** الإدراج الواحد إلى DOM بدلاً من `append` متكرر داخل حلقة

### 🔹 البرمجة المعتمدة على الأحداث

- استخدام `addEventListener` مع أحداث `input` و`submit` و`click`
- منع السلوك الافتراضي للمتصفح عبر `event.preventDefault()`
- قراءة المدخلات الديناميكية من خلال `event.target`

### 🔹 التعامل مع النماذج

- الوصول إلى الحقول عبر `form.elements` (بدلاً من المحدِّدات الفردية)
- منطق تحقق يدوي دون الاعتماد على السمة `required`
- جمع البيانات بشكل مُهيكل في كائن واحد
- إعادة ضبط حالة النموذج عبر `form.reset()`

### 🔹 جودة الكود وسير العمل

- **بنية معيارية** — كل مهمة معزولة في ثلاثيتها الخاصة من HTML/CSS/JS
- **Prettier** للتنسيق الموحّد
- **Git** مع كوميتات وصفية وذرّية
- **GitHub Pages** للنشر المستمر

---

## 🧩 استعراض الوظائف

### 1. فاحص الفئات

يمر على قائمة غير مرتّبة متداخلة ويُسجّل بنيتها في وحدة التحكم — العدد الإجمالي للفئات، اسم كل فئة، وعدد العناصر داخلها. يُظهر التنقل في شجرة DOM عبر `children` والتكرار باستخدام `forEach`.

```
Number of categories: 3
Category: Animals      → Elements: 4
Category: Products     → Elements: 3
Category: Technologies → Elements: 5
```

---

### 2. معرض صور ديناميكي

يبني معرض صور كاملاً انطلاقاً من مصفوفة بيانات في JavaScript. يُسلّط الضوء على **منهج مُراعٍ للأداء**: تُكوَّن كامل البنية في الذاكرة ثم تُدرج إلى DOM في **عملية واحدة** بدل إضافة العناصر واحداً تلو الآخر داخل حلقة.

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

### 3. حقل ترحيب مباشر

يعكس إدخال المستخدم على الصفحة في الوقت الفعلي أثناء الكتابة. يطبّق نمط تجربة مستخدم دفاعي: حين يكون الحقل فارغاً أو يحتوي مسافات فقط، يعرض المخرج بأناقة `"Anonymous"` بدلاً من أن يبقى فارغاً.

---

### 4. نموذج تسجيل الدخول

نموذج بتحقق صحة مخصّص. يعترض معالج `submit` الإرسال الافتراضي، ويفحص الحقلين يدوياً، ثم إما يُنبّه المستخدم بشأن الحقول الفارغة، أو يجمع القيم بعد إزالة المسافات في كائن بيانات نظيف. يُظهر العمل مع `form.elements` — الطريقة الاصطلاحية لقراءة عدة حقول في وقت واحد.

```js
{
  email: "user@example.com",
  password: "secret123"
}
```

---

### 5. مولّد لون عشوائي

عند كل نقرة على الزر، يُولّد لون HEX عشوائياً، يُطبّقه كخلفية لـ `<body>` عبر التنسيق المضمّن، ويعرض القيمة للمستخدم. يُبيّن التحكم بالأنماط المضمّنة ونمطاً نظيفاً للدوال المساعدة.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
```

---

## 🚀 التشغيل محلياً

لا توجد عملية بناء، ولا مدير حزم، ولا اعتماديات — فقط افتحه.

```bash
git clone https://github.com/mrkorzun/js-dom-events-playground.git
cd js-dom-events-playground
# افتح index.html مباشرةً، أو استخدم أي خادم ثابت:
npx serve .
```

للحصول على تحميل تلقائي عند التغيير، يُنصح باستخدام إضافة **Live Server** لمحرر VS Code.

---

## 📁 بنية المشروع

```
js-dom-events-playground/
├── css/                    # أنماط لكل مهمة
├── js/                     # سكربتات لكل مهمة
├── 01-categories.html      # التطبيق المصغّر 1
├── 02-gallery.html         # التطبيق المصغّر 2
├── 03-input.html           # التطبيق المصغّر 3
├── 04-form.html            # التطبيق المصغّر 4
├── 05-color.html           # التطبيق المصغّر 5
├── index.html              # مركز التنقل
└── README.md
```

---

## 👤 المؤلف

**Romario Korzun** — مطوّر واجهات أمامية

- GitHub: [@mrkorzun](https://github.com/mrkorzun)
- الصفحة الشخصية: [mrkorzun.github.io](https://mrkorzun.github.io)

---

<sub>أُنشئ في الأصل كتمرين عملي ضمن منهج **GoIT JavaScript** لترسيخ أساسيات DOM ومعالجة الأحداث.</sub>

</div>
