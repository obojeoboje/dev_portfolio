'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!target.closest('.nav__links') && !target.closest('.nav__burger')) {
        closeMenu();
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [menuOpen, closeMenu]);

  const navLinks = isHome
    ? [
        { href: '#services', label: 'Услуги' },
        { href: '#cases', label: 'Кейсы' },
        { href: '#pricing', label: 'Цены' },
        { href: '#process', label: 'Как работаю' },
      ]
    : [
        { href: '/#services', label: 'Услуги' },
        { href: '/#cases', label: 'Кейсы' },
        { href: '/#pricing', label: 'Цены' },
        { href: '/#process', label: 'Как работаю' },
      ];

  const ctaHref = isHome ? '#contacts' : '/#contacts';

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`} id="nav">
      <div className="nav__container">
        <Link href={isHome ? '#hero' : '/'} className="nav__logo">
          AP<span className="accent">.</span>
        </Link>
        <button
          className={`nav__burger${menuOpen ? ' active' : ''}`}
          onClick={toggleMenu}
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav__links${menuOpen ? ' active' : ''}`} id="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href={ctaHref} className="nav__cta" onClick={closeMenu}>
              Написать
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
