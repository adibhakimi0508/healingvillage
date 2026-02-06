import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
      <footer className="bg-[#0284C7] text-white py-20"> {/* Updated to Dark Sky Blue */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* About */}
            <div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Healing Village
              </h3>
              <p className="text-white/80 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Tempat transformasi minda dan kesihatan holistik di Malaysia.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Pautan Pantas
              </h4>
              <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li><a href="#home" className="text-white/80 hover:text-[#D4AF37] transition-colors">Laman Utama</a></li>
                <li><a href="#leadership" className="text-white/80 hover:text-[#D4AF37] transition-colors">Kepimpinan</a></li>
                <li><a href="#programs" className="text-white/80 hover:text-[#D4AF37] transition-colors">Program</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Hubungi Kami
              </h4>
              <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <p className="text-white/80">
                    2, Jalan Pudina 24/39A, Seksyen 24, 40300, Shah Alam, Selangor<br />Malaysia
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div className="flex flex-col space-y-1">
                    <p className="text-white/80">+60 16-426 3233 (Zaim)</p>
                    <p className="text-white/80">+60 16-323 3401 (Hanif)</p>
                    <p className="text-white/80">+60 19-409 0982 (Azman)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <p className="text-white/80">training@ktacademy.my</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 text-center text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p>&copy; 2026 Healing Village. Hak Cipta Terpelihara.</p>
          </div>
        </div>
      </footer>
  );
}