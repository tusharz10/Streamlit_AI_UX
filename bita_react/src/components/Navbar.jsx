import React, { useState, useEffect } from 'react';
import { Search, Menu, X, MessageSquare, ArrowRight, Sun, Moon } from 'lucide-react';

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('bita_theme_user_choice');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme;
  }
  // Fallback to system OS preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  return 'dark';
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync theme with HTML document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Listen to OS system preference changes (if user has not set an explicit override)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      const savedUserChoice = localStorage.getItem('bita_theme_user_choice');
      if (!savedUserChoice) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemThemeChange);
      return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('bita_theme_user_choice', nextTheme);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--border-light)] py-4 shadow-2xl' 
          : 'bg-transparent py-6 border-b border-[var(--border-light)]'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group text-decoration-none">
          <div className="w-10 h-10 rounded-xl theme-bg-secondary border theme-border p-1 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform overflow-hidden">
            <img src="/Bitacloudinfotechtransparent.png" alt="BITA Cloud Info Tech" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl tracking-tight text-[var(--text-primary)]">
              BITA <span className="text-[#a3e635] bg-[var(--bg-secondary)] border border-[var(--border-light)] px-1.5 py-0.5 rounded text-sm ml-1">CLOUD</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#certified-teams" className="text-sm font-semibold text-[var(--text-primary)] hover:text-[#a3e635] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#a3e635] hover:after:w-full after:transition-all">
            Certified Teams
          </a>
          <a href="#industries" className="text-sm font-semibold text-[var(--text-primary)] hover:text-[#a3e635] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#a3e635] hover:after:w-full after:transition-all">
            Industries
          </a>
          <a href="#services" className="text-sm font-semibold text-[var(--text-primary)] hover:text-[#a3e635] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#a3e635] hover:after:w-full after:transition-all">
            Services & Stack
          </a>
          <a href="#about" className="text-sm font-semibold text-[var(--text-primary)] hover:text-[#a3e635] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#a3e635] hover:after:w-full after:transition-all">
            About BITA
          </a>
        </nav>

        {/* Right Action Icons & Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Theme Switcher Toggle Logo Button */}
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-light)] text-[var(--text-primary)] hover:border-[#a3e635] hover:text-[#a3e635] transition-all flex items-center justify-center shadow-sm group"
            title={`Active Theme: ${theme.toUpperCase()} (Click to switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode)`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-[#a3e635] group-hover:rotate-90 transition-transform duration-500" />
            ) : (
              <Moon className="w-5 h-5 text-[#111111] group-hover:-rotate-45 transition-transform duration-500" />
            )}
          </button>

          <button className="p-2 text-[var(--text-primary)] hover:text-[#a3e635] transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>

          <a 
            href="https://wa.me/918982296014" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-whatsapp-master text-xs py-2.5 px-4"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>WhatsApp Direct</span>
          </a>

          <a 
            href="#contact" 
            className="btn-master-primary text-xs py-2.5 px-5"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button & Theme Switcher */}
        <div className="flex items-center gap-2 sm:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-light)] text-[var(--text-primary)]"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-[#a3e635]" /> : <Moon className="w-4 h-4 text-[#111111]" />}
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[var(--text-primary)] bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-md"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--nav-bg)] backdrop-blur-2xl border-b border-[var(--border-light)] px-6 py-6 transition-all">
          <div className="flex flex-col gap-4">
            <a href="#certified-teams" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-[var(--text-primary)] py-2 border-b border-[var(--border-light)]">
              Certified Teams
            </a>
            <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-[var(--text-primary)] py-2 border-b border-[var(--border-light)]">
              Industries
            </a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-[var(--text-primary)] py-2 border-b border-[var(--border-light)]">
              Services & Stack
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-[var(--text-primary)] py-2 border-b border-[var(--border-light)]">
              About BITA
            </a>
            <div className="pt-2 flex flex-col gap-3">
              <a 
                href="https://wa.me/918982296014" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-whatsapp-master w-full justify-center py-3 text-sm"
              >
                <span>WhatsApp Direct (+91 89822 96014)</span>
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="btn-master-primary w-full justify-center py-3 text-sm"
              >
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
