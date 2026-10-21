/**
 * ============================================================================
 * PERSONAL PORTFOLIO JAVASCRIPT
 * ============================================================================
 * Author: Alex Morgan (Frontend Developer)
 * Technologies: Pure Vanilla JavaScript (No libraries or frameworks required!)
 * 
 * Features Included:
 * 1. Dark / Light Theme Toggle with LocalStorage memory
 * 2. Mobile Hamburger Navigation Menu (Open, Close, Click-outside, Escape key)
 * 3. Active Nav Link on Scroll (ScrollSpy effect)
 * 4. Back to Top Button (Fade-in on scroll & smooth scrolling)
 * 5. Interactive Contact Form Validation (Regex validation, inline errors, feedback)
 * 6. Dynamic Copyright Year
 * ============================================================================
 */

// Wait until the entire HTML document is loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNav();
  initScrollSpy();
  initBackToTop();
  initContactForm();
  initCurrentYear();
});

/* ============================================================================
   1. THEME TOGGLE (LIGHT / DARK MODE)
   ============================================================================
   Allows users to switch between light and dark themes.
   Saves user preference in the browser's localStorage so it remembers the choice!
*/
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const rootElement = document.documentElement; // <html> tag

  // Check if a saved theme exists in localStorage
  const savedTheme = localStorage.getItem('portfolio-theme');
  
  // Check if user's operating system prefers dark mode
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Determine starting theme: Saved preference -> OS preference -> Default 'light'
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  applyTheme(initialTheme);

  // When user clicks the theme toggle button
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = rootElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
      // Save choice to localStorage
      localStorage.setItem('portfolio-theme', newTheme);
    });
  }

  // Helper function to set the attribute and accessible title
  function applyTheme(theme) {
    rootElement.setAttribute('data-theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} theme`);
      themeToggleBtn.setAttribute('title', `Switch to ${theme === 'light' ? 'dark' : 'light'} theme`);
    }
  }
}

/* ============================================================================
   2. MOBILE NAVIGATION MENU (HAMBURGER)
   ============================================================================
   Controls opening and closing the mobile menu on small screens.
*/
function initMobileNav() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!navToggle || !navMenu) return;

  // Toggle mobile menu open/close on button click
  navToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = navMenu.classList.contains('is-active');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close the menu when any navigation link is clicked
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close the menu when clicking anywhere outside of it
  document.addEventListener('click', (event) => {
    const isClickInside = navMenu.contains(event.target) || navToggle.contains(event.target);
    if (!isClickInside && navMenu.classList.contains('is-active')) {
      closeMenu();
    }
  });

  // Close the menu when user presses the Escape key on their keyboard
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navMenu.classList.contains('is-active')) {
      closeMenu();
    }
  });

  function openMenu() {
    navMenu.classList.add('is-active');
    navToggle.classList.add('is-active');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Close mobile navigation menu');
  }

  function closeMenu() {
    navMenu.classList.remove('is-active');
    navToggle.classList.remove('is-active');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open mobile navigation menu');
  }
}

/* ============================================================================
   3. SCROLLSPY (HIGHLIGHT ACTIVE NAV LINK ON SCROLL)
   ============================================================================
   As the user scrolls down the page, this automatically updates the active link
   in the navigation bar to highlight the section currently on screen.
*/
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavOnScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120; // 120px offset for header height & buffer
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // Listen to scroll events
  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });
}

/* ============================================================================
   4. BACK TO TOP BUTTON
   ============================================================================
   Shows a floating arrow button when scrolled down > 350px.
   Clicking it scrolls smoothly to the top of the page.
*/
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  const footerTopBtn = document.getElementById('footer-top-btn');

  // Show or hide the floating button based on scroll distance
  function toggleBackToTopVisibility() {
    const scrollDistance = window.pageYOffset || document.documentElement.scrollTop;
    if (backToTopBtn) {
      if (scrollDistance > 350) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    }
  }

  window.addEventListener('scroll', toggleBackToTopVisibility, { passive: true });

  // Function to smoothly scroll to the top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', scrollToTop);
  }

  if (footerTopBtn) {
    footerTopBtn.addEventListener('click', scrollToTop);
  }
}

/* ============================================================================
   5. CONTACT FORM VALIDATION
   ============================================================================
   Validates:
   - Full Name: At least 2 characters, no empty string
   - Email: Matches valid email format regex (user@domain.ext)
   - Subject: At least 3 characters
   - Message: At least 10 characters
   Displays helpful inline error messages and handles valid form submission.
*/
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('user-name');
  const emailInput = document.getElementById('user-email');
  const subjectInput = document.getElementById('user-subject');
  const messageInput = document.getElementById('user-message');
  const alertBox = document.getElementById('form-alert');
  const submitBtn = document.getElementById('submit-btn');

  // Input event listeners to clear error messages as soon as user starts typing
  [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
    if (!input) return;
    input.addEventListener('input', () => {
      clearFieldError(input);
      hideAlert();
    });
  });

  // Handle Form Submission
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Stop the browser from refreshing the page

    // Run validation on all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();

    // Check if all fields passed validation
    const isFormValid = isNameValid && isEmailValid && isSubjectValid && isMessageValid;

    if (!isFormValid) {
      showAlert('error', '⚠️ Please fix the highlighted errors before submitting.');
      return;
    }

    // If valid: simulate submission feedback
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Validating...</span>`;

    setTimeout(() => {
      // Show success message
      showAlert(
        'success',
        `🎉 <strong>Success!</strong> Thank you, <strong>${escapeHtml(nameInput.value.trim())}</strong>. Your message was validated successfully!<br/>
        <span style="display:inline-block; margin-top:6px; font-size:0.85em; opacity:0.9;">
          <em>Note: Because this is a client-side portfolio demo, your input is verified locally. In production, connect Formspree, EmailJS, or a backend to deliver messages to your email inbox!</em>
        </span>`
      );

      // Reset form fields
      form.reset();

      // Reset submit button
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }, 600);
  });

  // --- Field Validation Functions ---

  function validateName() {
    const val = nameInput.value.trim();
    if (!val) {
      showFieldError(nameInput, 'name-error', 'Please enter your full name.');
      return false;
    }
    if (val.length < 2) {
      showFieldError(nameInput, 'name-error', 'Name must be at least 2 characters long.');
      return false;
    }
    clearFieldError(nameInput);
    return true;
  }

  function validateEmail() {
    const val = emailInput.value.trim();
    // Regular expression for standard email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!val) {
      showFieldError(emailInput, 'email-error', 'Please enter your email address.');
      return false;
    }
    if (!emailRegex.test(val)) {
      showFieldError(emailInput, 'email-error', 'Please enter a valid email address (e.g., name@example.com).');
      return false;
    }
    clearFieldError(emailInput);
    return true;
  }

  function validateSubject() {
    const val = subjectInput.value.trim();
    if (!val) {
      showFieldError(subjectInput, 'subject-error', 'Please enter a subject.');
      return false;
    }
    if (val.length < 3) {
      showFieldError(subjectInput, 'subject-error', 'Subject must be at least 3 characters long.');
      return false;
    }
    clearFieldError(subjectInput);
    return true;
  }

  function validateMessage() {
    const val = messageInput.value.trim();
    if (!val) {
      showFieldError(messageInput, 'message-error', 'Please write a message.');
      return false;
    }
    if (val.length < 10) {
      showFieldError(messageInput, 'message-error', 'Your message should be at least 10 characters long.');
      return false;
    }
    clearFieldError(messageInput);
    return true;
  }

  // --- Helper UI Functions ---

  function showFieldError(inputElement, errorElementId, message) {
    inputElement.classList.add('is-invalid');
    const errorEl = document.getElementById(errorElementId);
    if (errorEl) {
      errorEl.textContent = message;
    }
  }

  function clearFieldError(inputElement) {
    inputElement.classList.remove('is-invalid');
    // Map input element ID to its error container
    const idMap = {
      'user-name': 'name-error',
      'user-email': 'email-error',
      'user-subject': 'subject-error',
      'user-message': 'message-error'
    };
    const errorElId = idMap[inputElement.id];
    if (errorElId) {
      const errorEl = document.getElementById(errorElId);
      if (errorEl) {
        errorEl.textContent = '';
      }
    }
  }

  function showAlert(type, message) {
    if (!alertBox) return;
    alertBox.className = `form-alert alert-${type}`;
    alertBox.innerHTML = message;
    alertBox.style.display = 'block';
  }

  function hideAlert() {
    if (!alertBox) return;
    alertBox.style.display = 'none';
  }

  // Simple HTML escaping helper to prevent XSS in feedback
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

/* ============================================================================
   6. DYNAMIC CURRENT YEAR
   ============================================================================
   Keeps the copyright year in the footer up to date automatically.
*/
function initCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

