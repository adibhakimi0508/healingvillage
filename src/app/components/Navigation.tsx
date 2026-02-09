import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/cropped-logo_healingvillage.png';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const navLinks = [
    { name: 'Laman Utama', href: '/#home', id: 'home' },
    { name: 'Kepimpinan', href: '/#leadership', id: 'leadership' },
    { name: 'Peta', href: '/#campus', id: 'campus' },
    { name: 'Buletin', href: '/#bulletin', id: 'bulletin' },
    { name: 'Program', href: '/#programs', id: 'programs' },
    { name: 'Galeri', href: '/#gallery', id: 'gallery' },
  ];

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') return;
    const observerOptions = { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 };
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navLinks.forEach((link) => {
      if (link.href.startsWith('/#')) {
        const element = document.getElementById(link.id);
        if (element) observer.observe(element);
      }
    });
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* LOGO + BRAND TEXT */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <img src={logo} alt="Healing Village Logo" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
            </div>
            <span
                // 👇 UPDATED: Uses Raleway + font-medium
                className={`text-xl font-medium tracking-tight transition-colors duration-300 ${
                    isScrolled ? 'text-[#0E6175]' : 'text-white'
                }`}
                style={{ fontFamily: 'Raleway, sans-serif' }}
            >
            HEALING VILLAGE
          </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === '/' ? activeSection === link.id : location.pathname === link.href;
              return (
                  <a key={link.name} href={link.href} className={`text-sm font-medium transition-all duration-300 relative group ${isActive ? 'text-[#0EA5E9]' : isScrolled ? 'text-gray-700 hover:text-[#0EA5E9]' : 'text-white/90 hover:text-white'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#0EA5E9] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </a>
              );
            })}
            <Link to="/hubungi-kami" className="px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 text-white" style={{ backgroundColor: '#D4AF37', fontFamily: 'Inter, sans-serif', boxShadow: '0 4px 14px rgba(212, 175, 55, 0.4)' }}>
              Hubungi Kami
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-[#0E6175]' : 'text-white'}`}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl animate-in slide-in-from-top-5 duration-300">
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => {
                  const isActive = location.pathname === '/' ? activeSection === link.id : location.pathname === link.href;
                  return (
                      <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`text-lg font-medium transition-colors ${isActive ? 'text-[#0EA5E9]' : 'text-gray-600'}`} style={{ fontFamily: 'Playfair Display, serif' }}>
                        {link.name}
                      </a>
                  );
                })}
                <Link to="/hubungi-kami" onClick={() => setIsOpen(false)} className="inline-block text-center px-6 py-3 rounded-xl font-semibold text-white shadow-md" style={{ backgroundColor: '#D4AF37', fontFamily: 'Inter, sans-serif' }}>
                  Hubungi Kami
                </Link>
              </div>
            </div>
        )}
      </nav>
  );
}