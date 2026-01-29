import { Baby, Users, Heart, Moon, Leaf, Building2, Microscope, User, UserCheck, Briefcase, TrendingUp, Shield, FileText } from 'lucide-react';

export function WellnessInfographic() {
  return (
    <section className="bg-white" id="infographic">
      <div className="max-w-5xl mx-auto">
        
        {/* 1. HEADER */}
        <div 
          className="relative overflow-hidden py-20 px-8"
          style={{
            background: 'linear-gradient(135deg, #2E5D4B 0%, #1a3529 100%)',
            backgroundImage: `
              linear-gradient(135deg, #2E5D4B 0%, #1a3529 100%),
              repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.02) 10px, rgba(255,255,255,.02) 20px)
            `
          }}
        >
          {/* Decorative leaf pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
          
          <div className="relative z-10 text-center">
            <h1 
              className="text-4xl md:text-6xl text-white mb-4 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Transformasi Minda<br />Melalui Pernafasan
            </h1>
            <p 
              className="text-xl md:text-2xl text-white/90"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Solusi Kesejahteraan Korporat & ESG
            </p>
          </div>
        </div>

        {/* 2. SECTION 1: THE CRISIS */}
        <div className="py-20 px-8 bg-gradient-to-b from-[#F4F7F6] to-white">
          <h2 
            className="text-3xl md:text-4xl text-[#2E5D4B] text-center mb-12"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Realiti Kesihatan Mental Malaysia
          </h2>

          {/* Large 9/10 Typography */}
          <div className="text-center mb-8">
            <div 
              className="text-8xl md:text-9xl font-bold mb-4"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                color: '#DC2626',
                textShadow: '0 4px 20px rgba(220, 38, 38, 0.2)'
              }}
            >
              9/10
            </div>
            <p 
              className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Pekerja mengalami simptom tekanan di tempat kerja.
            </p>
          </div>

          {/* Demographics Icons Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {/* Child */}
            <div className="flex flex-col items-center text-center">
              <div 
                className="w-20 h-20 rounded-full bg-[#2E5D4B] flex items-center justify-center mb-4"
                style={{ boxShadow: '0 4px 16px rgba(46, 93, 75, 0.2)' }}
              >
                <Baby className="w-10 h-10 text-white" />
              </div>
              <p 
                className="text-sm font-semibold text-[#2E5D4B]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Cemas
              </p>
            </div>

            {/* Teen */}
            <div className="flex flex-col items-center text-center">
              <div 
                className="w-20 h-20 rounded-full bg-[#2E5D4B] flex items-center justify-center mb-4"
                style={{ boxShadow: '0 4px 16px rgba(46, 93, 75, 0.2)' }}
              >
                <User className="w-10 h-10 text-white" />
              </div>
              <p 
                className="text-sm font-semibold text-[#2E5D4B]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Tekanan
              </p>
            </div>

            {/* Mother */}
            <div className="flex flex-col items-center text-center">
              <div 
                className="w-20 h-20 rounded-full bg-[#2E5D4B] flex items-center justify-center mb-4"
                style={{ boxShadow: '0 4px 16px rgba(46, 93, 75, 0.2)' }}
              >
                <Heart className="w-10 h-10 text-white" />
              </div>
              <p 
                className="text-sm font-semibold text-[#2E5D4B]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Burnout
              </p>
            </div>

            {/* Elderly */}
            <div className="flex flex-col items-center text-center">
              <div 
                className="w-20 h-20 rounded-full bg-[#2E5D4B] flex items-center justify-center mb-4"
                style={{ boxShadow: '0 4px 16px rgba(46, 93, 75, 0.2)' }}
              >
                <UserCheck className="w-10 h-10 text-white" />
              </div>
              <p 
                className="text-sm font-semibold text-[#2E5D4B]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Sunyi
              </p>
            </div>
          </div>
        </div>

        {/* 3. SECTION 2: THE METHODOLOGY */}
        <div className="py-20 px-8 bg-gradient-to-br from-[#2E5D4B] to-[#1a3529]">
          <h2 
            className="text-3xl md:text-4xl text-white text-center mb-16"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Solusi: Kerangka Nafas Tenang
          </h2>

          {/* Central Diagram with 4 Spokes */}
          <div className="relative flex items-center justify-center min-h-[550px] max-w-3xl mx-auto">
            {/* Center Circle */}
            <div 
              className="absolute z-10 w-44 h-44 rounded-full bg-[#D4AF37] flex items-center justify-center"
              style={{ boxShadow: '0 10px 40px rgba(212, 175, 55, 0.5)' }}
            >
              <div className="text-center px-4">
                <div 
                  className="text-3xl font-bold text-white leading-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Nafas<br />Tenang
                </div>
              </div>
            </div>

            {/* Top Spoke - Sains Pernafasan */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div 
                className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-4"
                style={{ boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)' }}
              >
                <Microscope className="w-12 h-12 text-[#2E5D4B]" />
              </div>
              <div className="w-1 h-28 bg-white/30 mb-4"></div>
              <p 
                className="text-base font-bold text-white text-center max-w-[140px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Sains Pernafasan
              </p>
            </div>

            {/* Right Spoke - Mindfulness Somatik */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
              <div className="h-1 w-28 bg-white/30 mr-4"></div>
              <div className="flex flex-col items-center">
                <div 
                  className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-4"
                  style={{ boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)' }}
                >
                  <User className="w-12 h-12 text-[#2E5D4B]" />
                </div>
                <p 
                  className="text-base font-bold text-white text-center max-w-[140px]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Mindfulness Somatik
                </p>
              </div>
            </div>

            {/* Bottom Spoke - Regulasi Emosi */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <p 
                className="text-base font-bold text-white text-center max-w-[140px] mb-4"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Regulasi Emosi
              </p>
              <div className="w-1 h-28 bg-white/30 mb-4"></div>
              <div 
                className="w-24 h-24 rounded-full bg-white flex items-center justify-center"
                style={{ boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)' }}
              >
                <Heart className="w-12 h-12 text-[#2E5D4B]" />
              </div>
            </div>

            {/* Left Spoke - Elemen Islamik */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center">
              <div className="flex flex-col items-center">
                <div 
                  className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-4"
                  style={{ boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)' }}
                >
                  <Moon className="w-12 h-12 text-[#2E5D4B]" />
                </div>
                <p 
                  className="text-base font-bold text-white text-center max-w-[140px]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Elemen Islamik
                </p>
              </div>
              <div className="h-1 w-28 bg-white/30 ml-4"></div>
            </div>
          </div>
        </div>

        {/* 4. SECTION 3: ESG IMPACT & PROGRAMS */}
        <div className="py-20 px-8 bg-gradient-to-b from-white to-[#F4F7F6]">
          <h2 
            className="text-3xl md:text-4xl text-[#2E5D4B] text-center mb-16"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Impak ESG & Program Utama
          </h2>

          {/* ESG Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            {/* E - Environment */}
            <div className="bg-white rounded-[20px] p-8 text-center" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
              <div 
                className="w-20 h-20 rounded-full bg-[#5A8F7B] flex items-center justify-center mx-auto mb-4"
                style={{ boxShadow: '0 4px 16px rgba(90, 143, 123, 0.3)' }}
              >
                <Leaf className="w-10 h-10 text-white" />
              </div>
              <div 
                className="text-4xl font-bold text-[#D4AF37] mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                E
              </div>
              <h3 
                className="text-lg font-semibold text-[#2E5D4B] mb-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Alam Sekitar
              </h3>
              <p 
                className="text-gray-600 text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Tenaga Tanpa Karbon
              </p>
            </div>

            {/* S - Social */}
            <div className="bg-white rounded-[20px] p-8 text-center" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
              <div 
                className="w-20 h-20 rounded-full bg-[#5A8F7B] flex items-center justify-center mx-auto mb-4"
                style={{ boxShadow: '0 4px 16px rgba(90, 143, 123, 0.3)' }}
              >
                <Users className="w-10 h-10 text-white" />
              </div>
              <div 
                className="text-4xl font-bold text-[#D4AF37] mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                S
              </div>
              <h3 
                className="text-lg font-semibold text-[#2E5D4B] mb-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Sosial
              </h3>
              <p 
                className="text-gray-600 text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Kesejahteraan Berukur
              </p>
            </div>

            {/* G - Governance */}
            <div className="bg-white rounded-[20px] p-8 text-center" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
              <div 
                className="w-20 h-20 rounded-full bg-[#5A8F7B] flex items-center justify-center mx-auto mb-4"
                style={{ boxShadow: '0 4px 16px rgba(90, 143, 123, 0.3)' }}
              >
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <div 
                className="text-4xl font-bold text-[#D4AF37] mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                G
              </div>
              <h3 
                className="text-lg font-semibold text-[#2E5D4B] mb-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Tadbir Urus
              </h3>
              <p 
                className="text-gray-600 text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Diiktiraf HRDC & ROI
              </p>
            </div>
          </div>

          {/* Program Cards - Vertical List */}
          <div className="max-w-3xl mx-auto space-y-4">
            {/* Program 1 */}
            <div 
              className="bg-white rounded-[20px] p-6 flex items-center gap-6 hover:shadow-lg transition-all duration-300"
              style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)' }}
            >
              <div 
                className="w-16 h-16 rounded-full bg-[#2E5D4B] flex items-center justify-center flex-shrink-0"
                style={{ boxShadow: '0 4px 12px rgba(46, 93, 75, 0.2)' }}
              >
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h4 
                  className="text-lg font-semibold text-[#2E5D4B] mb-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Kesejahteraan Emosi di Tempat Kerja
                </h4>
                <p 
                  className="text-sm text-gray-600"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  0.5 Days • Korporat
                </p>
              </div>
              <div className="flex-shrink-0">
                <span 
                  className="inline-block px-4 py-2 rounded-full bg-[#F4F7F6] text-[#2E5D4B] text-xs font-bold"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  POPULAR
                </span>
              </div>
            </div>

            {/* Program 2 */}
            <div 
              className="bg-white rounded-[20px] p-6 flex items-center gap-6 hover:shadow-lg transition-all duration-300"
              style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)' }}
            >
              <div 
                className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0"
                style={{ boxShadow: '0 4px 12px rgba(212, 175, 55, 0.2)' }}
              >
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h4 
                  className="text-lg font-semibold text-[#2E5D4B] mb-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Pernafasan untuk Kepimpinan
                </h4>
                <p 
                  className="text-sm text-gray-600"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Executive • Kepimpinan
                </p>
              </div>
              <div className="flex-shrink-0">
                <span 
                  className="inline-block px-4 py-2 rounded-full bg-[#D4AF37] text-white text-xs font-bold"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  EXECUTIVE
                </span>
              </div>
            </div>

            {/* Program 3 */}
            <div 
              className="bg-white rounded-[20px] p-6 flex items-center gap-6 hover:shadow-lg transition-all duration-300"
              style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)' }}
            >
              <div 
                className="w-16 h-16 rounded-full bg-[#5A8F7B] flex items-center justify-center flex-shrink-0"
                style={{ boxShadow: '0 4px 12px rgba(90, 143, 123, 0.2)' }}
              >
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h4 
                  className="text-lg font-semibold text-[#2E5D4B] mb-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Kelegaan Tekanan Penjaga
                </h4>
                <p 
                  className="text-sm text-gray-600"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Caregivers • Komuniti
                </p>
              </div>
            </div>

            {/* Program 4 */}
            <div 
              className="bg-white rounded-[20px] p-6 flex items-center gap-6 hover:shadow-lg transition-all duration-300"
              style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)' }}
            >
              <div 
                className="w-16 h-16 rounded-full bg-[#2E5D4B] flex items-center justify-center flex-shrink-0"
                style={{ boxShadow: '0 4px 12px rgba(46, 93, 75, 0.2)' }}
              >
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h4 
                  className="text-lg font-semibold text-[#2E5D4B] mb-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  PDPA & Etika Data
                </h4>
                <p 
                  className="text-sm text-gray-600"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Professional • Tadbir Urus
                </p>
              </div>
              <div className="flex-shrink-0">
                <span 
                  className="inline-block px-4 py-2 rounded-full bg-[#F4F7F6] text-[#2E5D4B] text-xs font-bold"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  HRDC
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 5. FOOTER CTA */}
        <div 
          className="py-16 px-8 text-center"
          style={{ background: 'linear-gradient(135deg, #5A8F7B 0%, #4a7a68 100%)' }}
        >
          <h3 
            className="text-3xl md:text-4xl text-white mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Sedia untuk Transformasi Organisasi Anda?
          </h3>
          <button 
            className="px-10 py-4 bg-[#D4AF37] text-white rounded-full hover:bg-[#c19d2f] active:bg-[#b08e28] transition-all duration-300 text-lg font-semibold"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 6px 24px rgba(212, 175, 55, 0.4)'
            }}
          >
            Hubungi Kami
          </button>
        </div>

      </div>
    </section>
  );
}