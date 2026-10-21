# 🌟 Modern Personal Portfolio Website

Welcome to your personal portfolio website! This project is crafted using pure **HTML5**, modern **CSS3**, and vanilla **JavaScript** — with **no external frameworks**, no build tools, and no paid services required.

It is designed to be **clean, fast, responsive, and beginner-friendly**, so you can easily understand every line of code and customize it to tell your own story.

---

## 📁 Project Structure

Here is how your project files are organized:

```text
modern-portfolio/
│
├── index.html                  # The foundation: Content and semantic structure of your website
├── style.css                   # The presentation: Colors, fonts, layout, animations, and dark mode
├── script.js                   # The behavior: Mobile navigation, theme toggle, and form validation
├── README.md                   # Beginner guide and step-by-step instructions
│
└── images/                     # Folder containing images and graphics
    ├── profile-placeholder.svg # Modern vector developer avatar
    ├── profile-placeholder.jpg # Standard JPEG placeholder image
    ├── project-1.svg           # Preview graphic for Project 1 (E-Commerce Storefront)
    ├── project-2.svg           # Preview graphic for Project 2 (Weather App)
    └── project-3.svg           # Preview graphic for Project 3 (Task Manager)
```

---

## 💡 What Each File Does (In Simple Terms)

1. **`index.html` (The Skeleton)**
   * Think of HTML as the frame and bricks of a house.
   * It holds your text, headlines, buttons, images, project cards, and forms in semantic tags like `<header>`, `<main>`, `<section>`, and `<footer>`.

2. **`style.css` (The Interior Design & Paint)**
   * Think of CSS as the paint, furniture, lighting, and layout of the house.
   * It styles colors, typography (fonts), margins, padding, rounded cards, hover animations, responsive breakpoints (mobile vs. desktop), and the dark/light color themes.

3. **`script.js` (The Electricity & Interactive Features)**
   * Think of JavaScript as the light switches, automatic doors, and appliances.
   * It makes things happen when users interact: toggling between dark/light mode, sliding the mobile menu open and closed, highlighting active navigation links while scrolling, validating the contact form, and automatically calculating the current year.

---

## 🚀 How to Run the Website (Step-by-Step for Windows)

### Method 1: The Quickest Way (Double-Click in File Explorer)
1. Open Windows File Explorer and navigate to your portfolio folder:
   `c:\Users\srini\OneDrive\modern protofolio`
2. Find the file named **`index.html`**.
3. **Double-click** `index.html`. It will instantly open in your default web browser (such as Google Chrome, Microsoft Edge, or Firefox).
4. *Alternative:* Right-click `index.html` → select **Open with** → choose **Google Chrome**.

---

### Method 2: Recommended Way (Visual Studio Code with Live Server)
Using the **Live Server** extension gives you a live local web server that automatically refreshes your browser every time you edit and save a file!

#### Step 1: Open the Project in VS Code
1. Launch **Visual Studio Code**.
2. Click **File** in the top menu → click **Open Folder...** (or press `Ctrl + K, Ctrl + O`).
3. Select your folder: `modern protofolio` and click **Select Folder**.
4. You will see `index.html`, `style.css`, `script.js`, and the `images/` folder in the left-hand Explorer sidebar.

#### Step 2: Install the Live Server Extension (One-time setup)
1. In VS Code, click the **Extensions** icon on the far left bar (or press `Ctrl + Shift + X`).
2. In the search box at the top, type: `Live Server`.
3. Look for **Live Server** created by *Ritwick Dey*.
4. Click the blue **Install** button.

#### Step 3: Start Live Server
1. In the VS Code file explorer on the left, click on **`index.html`** to open it.
2. In the very bottom-right corner of the VS Code window (the blue/purple status bar), click the button that says **Go Live**.
   *(Or right-click anywhere inside `index.html` in the code editor and choose **Open with Live Server**)*.
3. Your web browser will automatically open with the URL `http://127.0.0.1:5500/index.html`.
4. Now, every time you make a change in `index.html`, `style.css`, or `script.js` and press `Ctrl + S` to save, your browser will update instantly!

---

## 🎨 How to Customize Your Portfolio

All personal information in `index.html` is clearly marked and easy to replace. Here is a guide on what to change:

### 1. Update Your Name and Title
* Open `index.html`.
* **Line 11:** Change the `<title>` tag to your own name:
  ```html
  <title>Your Name | Frontend Developer Portfolio</title>
  ```
* **Line 28 & 397:** Change the navigation and footer logo:
  ```html
  <span class="logo-name">YourName</span>
  ```
* **Line 77:** Change your hero headline:
  ```html
  Hi, I'm <span class="highlight">Your Name</span>
  ```

### 2. Replace the Profile Picture with Your Photo
1. Copy your photo (e.g. `my-photo.jpg`) into the `images/` folder.
2. In `index.html` (around Line 138), change the `src` attribute:
   ```html
   <img 
     src="images/my-photo.jpg" 
     alt="Portrait of Your Name" 
     class="profile-img" 
     width="360" 
     height="360"
   />
   ```

### 3. Update the "About Me" Section
* Around **Line 160**, edit the paragraphs inside `<div class="about-bio-card">`:
  * Share where you are from.
  * What inspired you to learn web development.
  * Your current learning goals.

### 4. Adjust Your Skills & Proficiency Bars
* In `index.html` (around **Line 220**), you can change skill names, descriptions, and progress percentages:
  ```html
  <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-fill html-fill" style="width: 95%;"></div>
  </div>
  ```
  Change `width: 95%;` and `95%` to whatever number reflects your confidence!

### 5. Add or Edit Projects
* Around **Line 330**, you will find three `<article class="project-card">` elements.
* For each project:
  1. Change the `<h3 class="project-title">` to your project name.
  2. Update the `<p class="project-description">` with what your project does.
  3. Update the `<span class="tag">` badges to list the languages or tools you used.
  4. Replace `href="https://example.com/project-1-demo"` with your actual live project demo URL.
  5. Replace `href="https://github.com/..."` with your actual GitHub repository URL.

### 6. Connect Real Email Receiving (Formspree)
Because this website is built with static HTML/CSS/JS, it runs in the browser without a backend server. To receive real emails from visitors for free:
1. Go to [https://formspree.io](https://formspree.io) and sign up for a free account.
2. Click **Create Form** and enter your email address. Formspree will give you a special URL like `https://formspree.io/f/mqkvywzy`.
3. In `index.html` (around **Line 460**), find `<form id="contact-form" ...>`.
4. Add the `action` and `method` attributes:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. Done! When visitors submit the form, Formspree will forward the message directly to your personal email inbox.

---

## 🛠️ Key Technical Concepts Explained for Beginners

### HTML Concepts
* **Semantic Tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)**: Tell search engines and screen readers what each part of the document means instead of just using generic `<div>` tags everywhere.
* **`id="..."` attributes**: Provide unique anchors so clicking `<a href="#projects">` automatically scrolls down to `<section id="projects">`.
* **Form Accessibility**: Every `<input>` has an `id` that matches the `<label for="...">`, which allows users to click the label text to focus the input field.

### CSS Concepts
* **CSS Custom Properties (Variables)**: Defined inside `:root` (e.g. `--primary: #4f46e5;`). These let us define colors once and reuse them across the entire stylesheet. Switching themes is as simple as changing these variables!
* **Flexbox (`display: flex`)**: Arranges items in a row or column with flexible spacing (used in the navbar, buttons, and skill cards).
* **CSS Grid (`display: grid`)**: Creates responsive 2D layouts (used in the project cards and about section).
* **Media Queries (`@media (max-width: 768px)`)**: Styles that only activate when the screen is narrower than 768px (tablets and mobile phones).

### JavaScript Concepts
* **`document.addEventListener('DOMContentLoaded', ...)`**: Ensures the browser has loaded the HTML structure before running our code, preventing "null element" errors.
* **`localStorage.getItem()` and `localStorage.setItem()`**: Browser memory that remembers whether the visitor selected light or dark mode even after they refresh the page.
* **Regular Expressions (Regex)**: `^[^\s@]+@[^\s@]+\.[^\s@]+$` checks that an email contains text, an `@` sign, a domain, and a dot.

---

## 🔍 Troubleshooting Common Beginner Errors

| Problem | Cause | How to Fix |
| :--- | :--- | :--- |
| **No colors or styles appear** | `style.css` is misnamed or in a different folder. | Verify that `style.css` is in the exact same folder as `index.html`. Check line 18 in `index.html`: `<link rel="stylesheet" href="style.css" />`. |
| **Buttons or Theme Toggle don't do anything** | `script.js` is not loaded. | Open Chrome DevTools (`F12`), go to the **Console** tab, and check for red errors. Verify `<script src="script.js"></script>` is right before `</body>`. |
| **Profile image shows broken icon** | File name or extension mismatch. | Remember that filenames are case-sensitive on web servers (`myPhoto.jpg` is not `myphoto.jpg`). Keep your files in the `images/` subfolder. |
| **Live Server doesn't show "Go Live"** | A single file was opened rather than the folder. | In VS Code, go to **File → Open Folder...** and select `modern protofolio`. The folder must be open in the workspace. |

---

## ✅ Quality & Verification Checklist

Before publishing your portfolio to GitHub Pages or Netlify, test this checklist:

- [x] **Desktop View**: Header is sticky, navigation links scroll smoothly to each section.
- [x] **Theme Switcher**: Clicking the Sun/Moon button toggles between light and dark themes smoothly.
- [x] **Mobile Responsive**: Resize your browser window to mobile width — the hamburger menu appears and toggles open/close properly.
- [x] **Project Cards**: Hovering over cards lifts them up smoothly with shadow effects.
- [x] **Form Validation**:
  - Submitting an empty form shows red error highlights.
  - Typing an invalid email (e.g., `test@`) shows an email format error.
  - Submitting valid details displays the green success message.
- [x] **Back-to-Top**: Scroll down past the Hero section — the round arrow button appears in the bottom right and scrolls smoothly to the top when clicked.
- [x] **Footer Year**: Displays the current year automatically.

---

🎉 **Congratulations!** You now have a complete, responsive, modern portfolio website ready to showcase your work to the world!

