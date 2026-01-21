import { Play } from 'lucide-react';
import './custom-animations.css';

export function MapTeaser() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden" id="campus">
      {/* Parallax Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1597026405082-eda9beae7513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBkcm9uZSUyMG5hdHVyZSUyMGNhbXB1c3xlbnwxfHx8fDE3Njg5NjM2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Aerial view of campus"
          className="w-full h-full object-cover"
          style={{ transform: 'translateZ(-1px) scale(1.1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E5D4B]/80 via-[#2E5D4B]/40 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-white">
            <h2 
              className="text-4xl md:text-5xl mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Jelajah Kampus Kami
            </h2>
            <p 
              className="text-lg mb-8 max-w-xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Terletak di tengah hutan hujan Malaysia, kampus kami menawarkan persekitaran yang sempurna untuk pemulihan dan transformasi.
            </p>
          </div>

          {/* Right Glassmorphism Card - Floating Window */}
          <div 
            className="w-full lg:w-96 bg-white/10 backdrop-blur-md rounded-[20px] p-8 border border-white/20 shadow-2xl hover:shadow-[0_25px_70px_rgba(212,175,55,0.4)] transition-all duration-500 hover:-translate-y-2"
            style={{ 
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Play className="w-10 h-10 text-white" fill="currentColor" />
              </div>
              <h3 
                className="text-2xl text-white mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Tour Maya 360°
              </h3>
              <p 
                className="text-white/90 mb-6"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Rasai pengalaman kampus kami melalui lawatan maya interaktif
              </p>
              {/* Button with Pulse Animation */}
              <div className="relative inline-block w-full">
                {/* Pulse rings */}
                <div className="absolute inset-0 rounded-full bg-[#D4AF37] pulse-button-ring-1"></div>
                <div className="absolute inset-0 rounded-full bg-[#D4AF37] pulse-button-ring-2"></div>
                <button 
                  className="relative w-full px-6 py-4 bg-white text-[#2E5D4B] rounded-full hover:bg-[#D4AF37] hover:text-white transition-all shadow-lg"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Mulakan Tour Maya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}