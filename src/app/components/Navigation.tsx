import { useState, useEffect } from 'react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span 
              className="text-2xl font-bold tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif', color: '#2E5D4B' }}
            >
              Healing Village
            </span>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-[#2E5D4B] hover:text-[#5A8F7B] transition-colors font-medium"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Laman Utama
            </a>
            <a 
              href="#leadership" 
              className="text-[#2E5D4B] hover:text-[#5A8F7B] transition-colors font-medium"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Kepimpinan
            </a>
            <a 
              href="#programs" 
              className="text-[#2E5D4B] hover:text-[#5A8F7B] transition-colors font-medium"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Program
            </a>
            <a 
              href="#campus" 
              className="text-[#2E5D4B] hover:text-[#5A8F7B] transition-colors font-medium"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Kampus
            </a>
          </div>

          {/* Contact Button */}
          <div className="flex-shrink-0">
            <button 
              className="px-6 py-3 bg-[#D4AF37] text-white rounded-full hover:bg-[#c19d2f] transition-all shadow-md hover:shadow-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
