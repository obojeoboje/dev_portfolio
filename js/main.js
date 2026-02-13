/**
 * Lead Finder Portfolio — Main JS
 * 
 * - Scroll reveal animations (IntersectionObserver)
 * - Sticky nav on scroll
 * - Mobile burger menu
 * - Smooth scroll for anchor links
 */

(function () {
  'use strict';

  // ==============================
  // Scroll Reveal (IntersectionObserver)
  // ==============================

  function initScrollReveal() {
    const elements = document.querySelectorAll('.fade-up');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));
  }

  // ==============================
  // Sticky Navigation
  // ==============================

  function initStickyNav() {
    const nav = document.getElementById('nav');
    if (!nav) return;

    let lastScrollY = 0;
    const scrollThreshold = 50;

    function onScroll() {
      const scrollY = window.scrollY;

      if (scrollY > scrollThreshold) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }

      lastScrollY = scrollY;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Initial check
  }

  // ==============================
  // Mobile Burger Menu
  // ==============================

  function initBurgerMenu() {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');
    if (!burger || !navLinks) return;

    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        burger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (
        navLinks.classList.contains('active') &&
        !navLinks.contains(e.target) &&
        !burger.contains(e.target)
      ) {
        burger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // ==============================
  // Smooth Scroll for Anchors
  // ==============================

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        const navHeight = document.getElementById('nav')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      });
    });
  }

  // ==============================
  // Active Nav Link Highlight
  // ==============================

  function initActiveNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              link.style.color =
                link.getAttribute('href') === `#${id}` && !link.classList.contains('nav__cta')
                  ? 'var(--text-heading)'
                  : '';
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-80px 0px -50% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  // ==============================
  // Case Card Mouse Glow
  // ==============================

  function initCardGlow() {
    const cases = document.querySelectorAll('.case');
    cases.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
      });
    });
  }

  // ==============================
  // Init
  // ==============================

  document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initStickyNav();
    initBurgerMenu();
    initSmoothScroll();
    initActiveNavHighlight();
    initCardGlow();
  });
})();
