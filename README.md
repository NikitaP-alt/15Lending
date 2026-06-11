# 30Lending — коллекция лендингов

Набор одностраничных лендингов по разным нишам: **5 категорий × 3 лендинга = 15 готовых страниц**. Каждый лендинг — отдельная ниша и **отдельный дизайн**: своя палитра, типографика, структура и фирменный интерактив. Контент на русском, изображения-заглушки — [picsum.photos](https://picsum.photos).

🌐 **Живая версия:** https://nikitap-alt.github.io/30Lending/

---

## 🧱 Стек

Все лендинги статические и самодостаточные — никакой сборки, всё работает из коробки:

- **HTML5** + **Tailwind CSS** (Play CDN с инлайн-конфигом)
- **Vanilla JS** — без фреймворков
- **GSAP 3.12.5 + ScrollTrigger** — анимации появления, count-up, word-reveal
- **Phosphor Icons** — иконки
- **picsum.photos** — изображения-заглушки

Каждая папка лендинга содержит ровно три файла: `index.html`, `styles.css`, `script.js`.

### Общий «flourish»-набор (на всех 15 лендингах)
Прогресс-бар прокрутки · магнитные кнопки · tilt-карточки с подъёмом · count-up статистика · дрейфующие блобы · пословное появление заголовка · бегущие строки · поп-анимация успеха формы. Всё уважает `prefers-reduced-motion` и оптимизировано (пауза оффскрин-анимаций, ленивые изображения, `will-change` только на ховере).

---

## 📂 Каталог лендингов

### 01 · Строительство и ремонт
| Лендинг | Ниша | Дизайн | Ссылка |
|---|---|---|---|
| **Метраж** | Ремонт квартир под ключ | Терракота, Editorial Luxury | [открыть](https://nikitap-alt.github.io/30Lending/01-construction-renovation/01-remont-kvartir-pod-klyuch/) |
| **Светло** | Натяжные потолки | Лазурь, Onest · калькулятор цены | [открыть](https://nikitap-alt.github.io/30Lending/01-construction-renovation/02-natyazhnye-potolki/) |
| **Контур** | Дизайн интерьера | Холодный камень + охра, Cormorant · портфолио | [открыть](https://nikitap-alt.github.io/30Lending/01-construction-renovation/03-dizajn-interera/) |

### 02 · Медицина и стоматология
| Лендинг | Ниша | Дизайн | Ссылка |
|---|---|---|---|
| **Эмаль** | Стоматологическая клиника | Бирюза, Space Grotesk · слайдер «до/после» | [открыть](https://nikitap-alt.github.io/30Lending/02-medical-dental/01-stomatologicheskaya-klinika/) |
| **Визит** | Онлайн-консультация врача | Индиго, Sora · бенто + мокап телефона | [открыть](https://nikitap-alt.github.io/30Lending/02-medical-dental/02-onlayn-konsultaciya-vracha/) |
| **Тишина** | Массаж и спа | Шалфей, Fraunces · прайс-меню | [открыть](https://nikitap-alt.github.io/30Lending/02-medical-dental/03-massazh-i-spa/) |

### 03 · Онлайн-курсы
| Лендинг | Ниша | Дизайн | Ссылка |
|---|---|---|---|
| **Формула** | Курсы Excel и Google Sheets | Зелёный, Bricolage Grotesque · мотив таблиц | [открыть](https://nikitap-alt.github.io/30Lending/03-online-courses/01-kursy-excel-google-sheets/) |
| **Бегло** | Школа английского | Коралл + янтарь, Fredoka · речевые пузыри | [открыть](https://nikitap-alt.github.io/30Lending/03-online-courses/02-shkola-anglijskogo/) |
| **Охват** | Онлайн-курс SMM | Тёмный + фуксия/фиолет градиент, Unbounded | [открыть](https://nikitap-alt.github.io/30Lending/03-online-courses/03-onlajn-kurs-smm/) |

### 04 · Финансы и право
| Лендинг | Ниша | Дизайн | Ссылка |
|---|---|---|---|
| **Сальдо** | Бухгалтерское сопровождение | Navy, Schibsted Grotesk · калькулятор экономии | [открыть](https://nikitap-alt.github.io/30Lending/04-finance-legal/01-buhgalterskoe-soprovozhdenie/) |
| **Корпус** | Юридическая фирма | Графит + бордо, Playfair Display · престиж | [открыть](https://nikitap-alt.github.io/30Lending/04-finance-legal/02-yuridicheskaya-firma/) |
| **Опора** | Банкротство физлиц | Кремовый + изумруд, Hanken Grotesk · квалификатор долга | [открыть](https://nikitap-alt.github.io/30Lending/04-finance-legal/03-bankrotstvo-fizlic/) |

### 05 · Красота и уход
| Лендинг | Ниша | Дизайн | Ссылка |
|---|---|---|---|
| **Глянец** | Маникюр и педикюр | Магента, Gabarito · выбор оттенка лака | [открыть](https://nikitap-alt.github.io/30Lending/05-beauty-care/01-manikyur-pedikyur/) |
| **Взмах** | Наращивание ресниц | Тёмный glam + шампань, Bodoni Moda · слайдер «до/после» | [открыть](https://nikitap-alt.github.io/30Lending/05-beauty-care/02-naraschivanie-resnic/) |
| **Гладь** | Косметолог / уход за кожей | Фарфор + коралл-нюд, Familjen Grotesk · подбор процедуры | [открыть](https://nikitap-alt.github.io/30Lending/05-beauty-care/03-kosmetolog-uhod-za-kozhej/) |

---

## 🚀 Как открыть локально

Лендинги статические — достаточно открыть `index.html` в браузере:

```
05-beauty-care/01-manikyur-pedikyur/index.html
```

Все ссылки на ресурсы локальные/CDN, поэтому страницы работают и из файловой системы, и с любого статического хостинга.

## 📁 Структура репозитория

```
30Lending/
├── 01-construction-renovation/
│   ├── 01-remont-kvartir-pod-klyuch/   (index.html · styles.css · script.js)
│   ├── 02-natyazhnye-potolki/
│   └── 03-dizajn-interera/
├── 02-medical-dental/        · · ·
├── 03-online-courses/        · · ·
├── 04-finance-legal/         · · ·
└── 05-beauty-care/           · · ·
```

---

**Статус:** ✅ 15 / 15 лендингов готовы. Категории 06–10 в текущий объём не входят.
