# 15Lending

**Коллекция из 15 лендингов в 5 нишах — у каждого свой дизайн.**
**A collection of 15 landing pages across 5 niches — each with its own design.**

🌐 **Live / Живая версия:** **https://nikitap-alt.github.io/15Lending/**

> 🇷🇺 [Русский](#-русский) · 🇬🇧 [English](#-english)

---

## 🇷🇺 Русский

Набор одностраничных лендингов: **5 категорий × 3 лендинга = 15 готовых страниц**. Каждый лендинг — отдельная ниша и **отдельный дизайн**: своя палитра, типографика, структура и фирменный интерактив. Контент на русском, изображения-заглушки — [picsum.photos](https://picsum.photos).

Главная страница (`index.html` в корне) — витрина-хаб со ссылками на все 15 лендингов и переключателем RU/EN.

### 🧱 Стек
Всё статическое и самодостаточное — никакой сборки:
- **HTML5** + **Tailwind CSS** (Play CDN с инлайн-конфигом)
- **Vanilla JS** — без фреймворков
- **GSAP 3.12.5 + ScrollTrigger** — появление, count-up, пословный заголовок
- **Phosphor Icons** · изображения-заглушки **picsum.photos**

Каждая папка лендинга содержит ровно три файла: `index.html`, `styles.css`, `script.js`.

**Общий «flourish»-набор** (на всех 15): прогресс-бар прокрутки · магнитные кнопки · tilt-карточки с подъёмом · count-up статистика · дрейфующие блобы · пословное появление заголовка · бегущие строки · поп-анимация успеха формы. Всё уважает `prefers-reduced-motion` и оптимизировано (пауза оффскрин-анимаций, ленивые изображения).

### 📂 Каталог
| № | Категория | Лендинги |
|---|---|---|
| 01 | **Строительство и ремонт** | [Метраж](https://nikitap-alt.github.io/15Lending/01-construction-renovation/01-remont-kvartir-pod-klyuch/) · [Светло](https://nikitap-alt.github.io/15Lending/01-construction-renovation/02-natyazhnye-potolki/) · [Контур](https://nikitap-alt.github.io/15Lending/01-construction-renovation/03-dizajn-interera/) |
| 02 | **Медицина и стоматология** | [Эмаль](https://nikitap-alt.github.io/15Lending/02-medical-dental/01-stomatologicheskaya-klinika/) · [Визит](https://nikitap-alt.github.io/15Lending/02-medical-dental/02-onlayn-konsultaciya-vracha/) · [Тишина](https://nikitap-alt.github.io/15Lending/02-medical-dental/03-massazh-i-spa/) |
| 03 | **Онлайн-курсы** | [Формула](https://nikitap-alt.github.io/15Lending/03-online-courses/01-kursy-excel-google-sheets/) · [Бегло](https://nikitap-alt.github.io/15Lending/03-online-courses/02-shkola-anglijskogo/) · [Охват](https://nikitap-alt.github.io/15Lending/03-online-courses/03-onlajn-kurs-smm/) |
| 04 | **Финансы и право** | [Сальдо](https://nikitap-alt.github.io/15Lending/04-finance-legal/01-buhgalterskoe-soprovozhdenie/) · [Корпус](https://nikitap-alt.github.io/15Lending/04-finance-legal/02-yuridicheskaya-firma/) · [Опора](https://nikitap-alt.github.io/15Lending/04-finance-legal/03-bankrotstvo-fizlic/) |
| 05 | **Красота и уход** | [Глянец](https://nikitap-alt.github.io/15Lending/05-beauty-care/01-manikyur-pedikyur/) · [Взмах](https://nikitap-alt.github.io/15Lending/05-beauty-care/02-naraschivanie-resnic/) · [Гладь](https://nikitap-alt.github.io/15Lending/05-beauty-care/03-kosmetolog-uhod-za-kozhej/) |

<details>
<summary>Подробнее о каждом лендинге</summary>

**01 · Строительство и ремонт**
- **Метраж** — ремонт квартир под ключ · терракота, Editorial Luxury
- **Светло** — натяжные потолки · лазурь, Onest · калькулятор цены
- **Контур** — дизайн интерьера · холодный камень + охра, Cormorant · портфолио

**02 · Медицина и стоматология**
- **Эмаль** — стоматологическая клиника · бирюза, Space Grotesk · слайдер «до/после»
- **Визит** — онлайн-консультация врача · индиго, Sora · бенто + мокап телефона
- **Тишина** — массаж и спа · шалфей, Fraunces · прайс-меню

**03 · Онлайн-курсы**
- **Формула** — курсы Excel и Google Sheets · зелёный, Bricolage Grotesque · мотив таблиц
- **Бегло** — школа английского · коралл + янтарь, Fredoka · речевые пузыри
- **Охват** — онлайн-курс SMM · тёмный + фуксия/фиолет градиент, Unbounded

**04 · Финансы и право**
- **Сальдо** — бухгалтерское сопровождение · navy, Schibsted Grotesk · калькулятор экономии
- **Корпус** — юридическая фирма · графит + бордо, Playfair Display · престиж
- **Опора** — банкротство физлиц · кремовый + изумруд, Hanken Grotesk · квалификатор долга

**05 · Красота и уход**
- **Глянец** — маникюр и педикюр · магента, Gabarito · выбор оттенка лака
- **Взмах** — наращивание ресниц · тёмный glam + шампань, Bodoni Moda · слайдер «до/после»
- **Гладь** — косметолог / уход за кожей · фарфор + коралл-нюд, Familjen Grotesk · подбор процедуры

</details>

### 🚀 Локально
Лендинги статические — достаточно открыть `index.html` в браузере. Все ресурсы локальные или с CDN, поэтому страницы работают из файловой системы и с любого статического хостинга.

### 📁 Структура
```
15Lending/
├── index.html                          ← витрина-хаб (главная)
├── 01-construction-renovation/
│   ├── 01-remont-kvartir-pod-klyuch/    (index.html · styles.css · script.js)
│   ├── 02-natyazhnye-potolki/
│   └── 03-dizajn-interera/
├── 02-medical-dental/        · · ·
├── 03-online-courses/        · · ·
├── 04-finance-legal/         · · ·
└── 05-beauty-care/           · · ·
```

**Статус:** ✅ 15 / 15 лендингов готовы. Категории 06–10 в текущий объём не входят.

---

## 🇬🇧 English

A set of one-page landing sites: **5 categories × 3 landings = 15 ready-made pages**. Every landing is a distinct niche with a **distinct design** — its own palette, typography, structure and signature interaction. Copy is in Russian; placeholder images from [picsum.photos](https://picsum.photos).

The home page (root `index.html`) is a showcase hub linking to all 15 landings, with an RU/EN toggle.

### 🧱 Stack
Everything is static and self-contained — no build step:
- **HTML5** + **Tailwind CSS** (Play CDN with inline config)
- **Vanilla JS** — no frameworks
- **GSAP 3.12.5 + ScrollTrigger** — reveals, count-up, word-by-word headline
- **Phosphor Icons** · placeholder images from **picsum.photos**

Each landing folder holds exactly three files: `index.html`, `styles.css`, `script.js`.

**Shared "flourish" toolkit** (on all 15): scroll-progress bar · magnetic buttons · lifting tilt cards · count-up stats · drifting blobs · word-by-word headline reveal · marquee strips · form-success pop. All respect `prefers-reduced-motion` and are performance-tuned (offscreen animations paused, lazy images).

### 📂 Catalog
| # | Category | Landings |
|---|---|---|
| 01 | **Construction & renovation** | [Метраж](https://nikitap-alt.github.io/15Lending/01-construction-renovation/01-remont-kvartir-pod-klyuch/) (turnkey renovation) · [Светло](https://nikitap-alt.github.io/15Lending/01-construction-renovation/02-natyazhnye-potolki/) (stretch ceilings) · [Контур](https://nikitap-alt.github.io/15Lending/01-construction-renovation/03-dizajn-interera/) (interior design) |
| 02 | **Medical & dental** | [Эмаль](https://nikitap-alt.github.io/15Lending/02-medical-dental/01-stomatologicheskaya-klinika/) (dental clinic) · [Визит](https://nikitap-alt.github.io/15Lending/02-medical-dental/02-onlayn-konsultaciya-vracha/) (online consultation) · [Тишина](https://nikitap-alt.github.io/15Lending/02-medical-dental/03-massazh-i-spa/) (massage & spa) |
| 03 | **Online courses** | [Формула](https://nikitap-alt.github.io/15Lending/03-online-courses/01-kursy-excel-google-sheets/) (Excel/Sheets) · [Бегло](https://nikitap-alt.github.io/15Lending/03-online-courses/02-shkola-anglijskogo/) (English school) · [Охват](https://nikitap-alt.github.io/15Lending/03-online-courses/03-onlajn-kurs-smm/) (SMM course) |
| 04 | **Finance & legal** | [Сальдо](https://nikitap-alt.github.io/15Lending/04-finance-legal/01-buhgalterskoe-soprovozhdenie/) (accounting) · [Корпус](https://nikitap-alt.github.io/15Lending/04-finance-legal/02-yuridicheskaya-firma/) (law firm) · [Опора](https://nikitap-alt.github.io/15Lending/04-finance-legal/03-bankrotstvo-fizlic/) (bankruptcy) |
| 05 | **Beauty & care** | [Глянец](https://nikitap-alt.github.io/15Lending/05-beauty-care/01-manikyur-pedikyur/) (manicure) · [Взмах](https://nikitap-alt.github.io/15Lending/05-beauty-care/02-naraschivanie-resnic/) (lash extensions) · [Гладь](https://nikitap-alt.github.io/15Lending/05-beauty-care/03-kosmetolog-uhod-za-kozhej/) (skincare) |

<details>
<summary>Per-landing details</summary>

**01 · Construction & renovation**
- **Метраж** — turnkey apartment renovation · terracotta, Editorial Luxury
- **Светло** — stretch ceilings · azure, Onest · price calculator
- **Контур** — interior design · cool stone + ochre, Cormorant · portfolio

**02 · Medical & dental**
- **Эмаль** — dental clinic · teal, Space Grotesk · before/after slider
- **Визит** — online doctor consultation · indigo, Sora · bento + phone mockup
- **Тишина** — massage & spa · sage, Fraunces · price menu

**03 · Online courses**
- **Формула** — Excel & Google Sheets courses · green, Bricolage Grotesque · spreadsheet motif
- **Бегло** — English school · coral + amber, Fredoka · speech bubbles
- **Охват** — SMM online course · dark + fuchsia/violet gradient, Unbounded

**04 · Finance & legal**
- **Сальдо** — accounting services · navy, Schibsted Grotesk · savings calculator
- **Корпус** — law firm · graphite + burgundy, Playfair Display · prestige
- **Опора** — personal bankruptcy · cream + emerald, Hanken Grotesk · debt qualifier

**05 · Beauty & care**
- **Глянец** — manicure & pedicure · magenta, Gabarito · nail-shade picker
- **Взмах** — eyelash extensions · dark glam + champagne, Bodoni Moda · before/after slider
- **Гладь** — cosmetology / skincare · porcelain + coral-nude, Familjen Grotesk · skin-concern picker

</details>

### 🚀 Run locally
The landings are static — just open `index.html` in a browser. All assets are local or CDN-hosted, so pages work from the filesystem and on any static host.

### 📁 Structure
```
15Lending/
├── index.html                          ← showcase hub (home)
├── 01-construction-renovation/
│   ├── 01-remont-kvartir-pod-klyuch/    (index.html · styles.css · script.js)
│   ├── 02-natyazhnye-potolki/
│   └── 03-dizajn-interera/
├── 02-medical-dental/        · · ·
├── 03-online-courses/        · · ·
├── 04-finance-legal/         · · ·
└── 05-beauty-care/           · · ·
```

**Status:** ✅ 15 / 15 landings shipped. Categories 06–10 are out of the current scope.
