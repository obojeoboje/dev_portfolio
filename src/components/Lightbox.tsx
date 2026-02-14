'use client';

import { useState, useCallback, useEffect } from 'react';

export function useLightbox() {
  const [src, setSrc] = useState('');
  const [alt, setAlt] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback((imgSrc: string, imgAlt: string) => {
    setSrc(imgSrc);
    setAlt(imgAlt);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
    }
    if (isOpen) {
      document.addEventListener('keydown', onKeydown);
      return () => document.removeEventListener('keydown', onKeydown);
    }
  }, [isOpen, close]);

  return { src, alt, isOpen, open, close };
}

export default function Lightbox({
  src,
  alt,
  isOpen,
  onClose,
}: {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="lightbox active" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose}>
        &times;
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
    </div>
  );
}

const ZoomIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
    <path d="M11 8v6" />
    <path d="M8 11h6" />
  </svg>
);

export function LightboxImage({
  src,
  alt,
  className,
  onOpen,
}: {
  src: string;
  alt: string;
  className?: string;
  onOpen: (src: string, alt: string) => void;
}) {
  return (
    <div className={className} onClick={() => onOpen(src, alt)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" />
      <span className="cd-hero__zoom">
        <ZoomIcon />
        Увеличить
      </span>
    </div>
  );
}
