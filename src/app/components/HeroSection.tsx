import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { MapPin } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1761814746114-6b1f626472ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZ3JvdXAlMjBtZWRpdGF0aW9uJTIwZm9yZXN0JTIwbmF0dXJlfGVufDF8fHx8MTc2OTQxNTQ0NXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Diverse group meditating in forest"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight max-w-5xl"
          style={{ 
            fontFamily: 'Playfair Display, serif',
            textShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
          }}
        >
          Transformasi Minda<br />Melalui Pernafasan
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          {/* Primary Button */}
          <button 
            className="px-8 py-4 bg-[#2E5D4B] text-white rounded-full hover:bg-[#234a3a] active:bg-[#1a3529] transition-all duration-300 text-lg font-semibold"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 6px 24px rgba(46, 93, 75, 0.4)'
            }}
          >
            Lihat Program
          </button>

          {/* Glass Button with Map Pin - Linked */}
          <a 
            href="https://interactivemap.healingvillage.com.my"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full text-white text-lg font-semibold flex items-center gap-2 hover:bg-white/20 active:bg-white/30 transition-all duration-300"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}
          >
            <MapPin className="w-5 h-5" />
            Jelajah Peta Maya
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div 
            className="w-1.5 h-3 bg-white rounded-full animate-bounce"
            style={{ animationDuration: '2s' }}
          ></div>
        </div>
      </div>
    </section>
  );
}