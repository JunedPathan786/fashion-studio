import React, { useState, useEffect } from 'react';
import { Instagram, Menu, X } from 'lucide-react';
import { STORE_INFO } from '../data/fashionData';
import { images } from '../assets/imageImports';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'collection', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'COLLECTION', href: '#collection', id: 'collection' },
    { name: 'SERVICES', href: '#services', id: 'services' },
    { name: 'ABOUT US', href: '#about', id: 'about' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md shadow-md py-4' : 'bg-black/80 backdrop-blur-sm py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">

          {/* Logo on Left */}
          <a
            id="brand-logo-link"
            href="#home"
            className="flex items-center gap-3 text-left group select-none"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-amber-400/40 shadow-md group-hover:border-amber-400/80 transition-all shrink-0 bg-neutral-900">
              <img
                src={images.logo}
                alt="Fashion Studio 47 Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-[0.22em] text-white leading-tight">
                FASHION
              </span>
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-neutral-300 leading-tight mt-0.5">
                STUDIO 47
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  className={`text-xs font-semibold tracking-wider transition-colors duration-200 relative py-1 uppercase ${isActive ? 'text-white' : 'text-neutral-300 hover:text-white'
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Icons on Right */}
          <div className="hidden sm:flex items-center space-x-5 text-white">
            <a
              id="instagram-nav-link"
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neutral-300 transition-colors"
              aria-label="Instagram"
              title="Instagram @fashion_studio_47_"
            >
              <Instagram className="w-4 h-4 stroke-[1.75]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              id="btn-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-neutral-300 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-neutral-800 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wider text-neutral-300 hover:text-white uppercase py-1"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
            <span>Nearby Jhenda Chowk, Belapur (BK)</span>
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="text-white font-semibold"
            >
              {STORE_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
