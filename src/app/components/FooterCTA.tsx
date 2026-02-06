import { Mail, Phone, MapPin } from 'lucide-react';

export function FooterCTA() {
  return (
      <section
          className="py-20 px-6"
          style={{
            background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)', // Blue Gradient
            backgroundImage: `
          linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%),
          repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)
        `
          }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
              className="text-4xl md:text-6xl text-white mb-6 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Sedia untuk Transformasi?
          </h2>

          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Hubungi kami hari ini dan mulakan perjalanan kesejahteraan organisasi anda.
          </p>

          {/* CTA Button */}
          <button
              className="px-12 py-5 bg-[#D4AF37] text-white rounded-full hover:bg-[#c19d2f] active:bg-[#b08e28] transition-all duration-300 text-xl font-semibold inline-flex items-center gap-3 mb-12"
              style={{
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 8px 30px rgba(212, 175, 55, 0.5)'
              }}
          >
            <Mail className="w-6 h-6" />
            Hubungi Kami
          </button>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-white/20">
            <div className="flex items-center gap-3 text-white/80">
              <Phone className="w-5 h-5" />
              <span style={{ fontFamily: 'Inter, sans-serif' }}>+60 19-409 0982</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Mail className="w-5 h-5" />
              <span style={{ fontFamily: 'Inter, sans-serif' }}>healingvillage.bdm@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <MapPin className="w-5 h-5" />
              <span style={{ fontFamily: 'Inter, sans-serif' }}>2, Jalan Pudina 24/39A, Seksyen 24, 40300, Shah Alam</span>
            </div>
          </div>
        </div>
      </section>
  );
}