import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/cropped-logo_healingvillage.png';

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
              isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-transparent'
          }`}
          style={isScrolled ? {
            boxShadow: '0 4px 20px rgba(14, 165, 233, 0.1), 0 2px 8px rgba(0, 0, 0, 0.03)'
          } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                    src={logoImage}
                    alt="Healing Village"
                    className="h-16 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Navigation Links - Updated to LIGHT BLUE Theme */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <a
                  href="/#home"
                  className="text-[#000000] hover:text-[#0284C7] transition-colors font-medium text-sm xl:text-base"
                  style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Laman Utama
              </a>
              <a
                  href="/#leadership"
                  className="text-[#000000] hover:text-[#0284C7] transition-colors font-medium text-sm xl:text-base"
                  style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Kepimpinan
              </a>
              <a
                  href="/#programs"
                  className="text-[#000000] hover:text-[#0284C7] transition-colors font-medium text-sm xl:text-base"
                  style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Program
              </a>
              <a
                  href="/#campus"
                  className="text-[#000000] hover:text-[#0284C7] transition-colors font-medium text-sm xl:text-base"
                  style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Peta
              </a>
              <a
                  href="/#bulletin"
                  className="text-[#000000] hover:text-[#0284C7] transition-colors font-medium text-sm xl:text-base"
                  style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Buletin
              </a>
              <a
                  href="/#gallery"
                  className="text-[#000000] hover:text-[#0284C7] transition-colors font-medium text-sm xl:text-base"
                  style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Galeri
              </a>
            </div>

            {/* Contact Button */}
            <div className="flex-shrink-0">
              <Link
                  to="/hubungi-kami"
                  className="px-6 py-3 bg-[#D4AF37] text-white rounded-full hover:bg-[#c19d2f] active:bg-[#b08e28] transition-all font-semibold inline-block text-sm xl:text-base"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    boxShadow: '0 4px 16px rgba(212, 175, 55, 0.25)'
                  }}
              >
                Hubungi Kami
              </Link>
            </div>

          </div>
        </div>
      </nav>
  );
}