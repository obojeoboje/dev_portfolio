'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  // Scroll to top on route change (but not when navigating to a hash/anchor)
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  useEffect(() => {
    // Scroll reveal — re-run on every route change
    // Small delay to let React render new DOM elements
    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll('.fade-up:not(.visible)');
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
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );

      elements.forEach((el) => observer.observe(el));

      // Cleanup both observer and timeout
      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  // Card glow effect
  useEffect(() => {
    const cases = document.querySelectorAll('.case');
    const handlers: Array<[Element, (e: Event) => void]> = [];

    cases.forEach((card) => {
      const handler = (e: Event) => {
        const me = e as MouseEvent;
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = ((me.clientX - rect.left) / rect.width) * 100;
        const y = ((me.clientY - rect.top) / rect.height) * 100;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
      };
      card.addEventListener('mousemove', handler);
      handlers.push([card, handler]);
    });

    return () => {
      handlers.forEach(([card, handler]) => {
        card.removeEventListener('mousemove', handler);
      });
    };
  }, [pathname]);

  // Section tracking (GA)
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length || typeof window === 'undefined') return;

    const tracked = new Set<string>();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id && !tracked.has(id) && typeof win.gtag === 'function') {
              tracked.add(id);
              win.gtag('event', 'section_view', { section_name: id });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  // CTA click tracking (GA)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gtag = (window as any).gtag;
    if (typeof gtag !== 'function') return;

    const handlers: Array<[Element, () => void]> = [];

    // Telegram links
    document.querySelectorAll('a[href*="t.me"]').forEach((link) => {
      const handler = () => {
        gtag('event', 'cta_click', {
          cta_type: 'telegram',
          cta_location: link.closest('section')?.id || 'nav',
        });
      };
      link.addEventListener('click', handler);
      handlers.push([link, handler]);
    });

    // Email links
    document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
      const handler = () => {
        gtag('event', 'cta_click', {
          cta_type: 'email',
          cta_location: link.closest('section')?.id || 'unknown',
        });
      };
      link.addEventListener('click', handler);
      handlers.push([link, handler]);
    });

    // Hero CTA buttons
    document.querySelectorAll('.hero__actions .btn').forEach((btn) => {
      const handler = () => {
        gtag('event', 'cta_click', {
          cta_type: 'hero_button',
          cta_label: btn.textContent?.trim(),
        });
      };
      btn.addEventListener('click', handler);
      handlers.push([btn, handler]);
    });

    // Nav CTA
    const navCta = document.querySelector('.nav__cta');
    if (navCta) {
      const handler = () => {
        gtag('event', 'cta_click', {
          cta_type: 'nav_button',
          cta_label: 'Написать',
        });
      };
      navCta.addEventListener('click', handler);
      handlers.push([navCta, handler]);
    }

    return () => {
      handlers.forEach(([el, handler]) => {
        el.removeEventListener('click', handler);
      });
    };
  }, [pathname]);

  // Active nav link highlight
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              (link as HTMLElement).style.color =
                link.getAttribute('href') === `#${id}` && !link.classList.contains('nav__cta')
                  ? 'var(--text-heading)'
                  : '';
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
