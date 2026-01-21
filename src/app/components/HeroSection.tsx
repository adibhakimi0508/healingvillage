import { MapPin } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1570808303764-557b87f6a5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZ3JvdXAlMjB3ZWxsbmVzcyUyMG5hdHVyZSUyMG1hbGF5c2lhfGVufDF8fHx8MTc2ODk2MzY3OHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Diverse group in nature"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 
          className="text-5xl md:text-7xl text-white mb-6 leading-tight"
          style={{ 
            fontFamily: 'Playfair Display, serif',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
          }}
        >
          Transformasi Minda<br />Melalui Pernafasan
        </h1>
        <p 
          className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
          style={{ 
            fontFamily: 'Inter, sans-serif',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
          }}
        >
          Tempat bertenang di hutan Malaysia untuk kesihatan korporat dan pembangunan insan
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            className="px-8 py-4 bg-[#2E5D4B] text-white rounded-full hover:bg-[#234a3a] transition-all shadow-lg hover:shadow-xl"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Lihat Program
          </button>
          <button 
            className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/60 text-white rounded-full hover:bg-white/20 hover:border-white transition-all shadow-lg flex items-center gap-2"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              backdropFilter: 'blur(10px)',
            }}
          >
            <MapPin className="w-5 h-5" />
            Jelajah Kampus Maya
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}