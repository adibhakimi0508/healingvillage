import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import founderImage from 'figma:asset/a58919ca68238c9a420aa92032162422ef3ebd10.png';
import personInChargeImage from 'figma:asset/b5a4bef424ccfb116f269b5a291698a76d768929.png';
import drSharmadasImage from 'figma:asset/0b8d921b3a3a0b6cc33f35e3014a9432c0d69477.png';
import drKuanImage from 'figma:asset/ce1f596dfd5fdc5f1972c049de983a095a9000ee.png';
import ahmedZazleyImage from 'figma:asset/5a71fe087ec79bebed51994fd0a5827d722a0a6b.png';

export function LeadershipBento() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-[#F4F7F6]" id="leadership">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl text-[#2E5D4B] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Kepimpinan & Visi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Struktur organisasi yang berdedikasi untuk transformasi minda dan kesejahteraan komuniti.
          </p>
        </div>

        {/* Organizational Chart Structure */}
        <div className="max-w-6xl mx-auto">
          
          {/* Level 1: FOUNDER - Top Center */}
          <div className="flex justify-center mb-8">
            <div 
              className="relative overflow-hidden group cursor-pointer w-full max-w-[350px] h-[450px]"
              style={{ 
                borderRadius: '20px',
                boxShadow: '0 20px 50px rgba(212, 175, 55, 0.25)',
                border: '3px solid #D4AF37'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E5D4B] to-[#1a3529]">
                <ImageWithFallback
                  src={founderImage}
                  alt="Haji Azman - Pengasas"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <span 
                  className="inline-block px-3 py-1 rounded-full bg-[#D4AF37] text-white text-xs font-bold mb-3 shadow-lg tracking-widest"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  PENGASAS
                </span>
                <h3 
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Encik Zaim
                </h3>
                <p className="text-white/85 text-sm leading-snug">
                  Mewujudkan ekosistem kesejahteraan melalui sains pernafasan dan nilai tradisional.
                </p>
              </div>
            </div>
          </div>

          {/* Connecting Line from Founder to Person in Charge */}
          <div className="flex justify-center mb-8">
            <div className="w-0.5 h-12 bg-gradient-to-b from-[#D4AF37] to-[#5A8F7B]"></div>
          </div>

          {/* Level 2: PERSON IN CHARGE - Middle Center */}
          <div className="flex justify-center mb-8">
            <div 
              className="relative overflow-hidden group cursor-pointer w-full max-w-[320px] h-[400px]"
              style={{ 
                borderRadius: '20px',
                boxShadow: '0 12px 40px rgba(90, 143, 123, 0.2)',
                border: '2px solid #5A8F7B'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5A8F7B] to-[#4a7a68]">
                <ImageWithFallback
                  src={personInChargeImage}
                  alt="Haji Azman - Ketua Operasi"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <span 
                  className="inline-block px-3 py-1 rounded-full bg-[#e8f5e9] text-[#2E5D4B] text-xs font-bold mb-3 shadow-lg tracking-widest"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  KETUA OPERASI
                </span>
                <h3 
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Haji Azman
                </h3>
                <p className="text-white/85 text-sm leading-snug">
                  Mengurus operasi strategik untuk kelestarian program kesejahteraan komuniti.
                </p>
              </div>
            </div>
          </div>

          {/* Connecting Lines - T-Junction from Person in Charge to Teaching Staff */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-[#5A8F7B]"></div>
              <div className="w-full max-w-[800px] h-0.5 bg-[#5A8F7B]"></div>
              <div className="flex justify-between w-full max-w-[800px]">
                <div className="w-0.5 h-8 bg-[#5A8F7B]"></div>
                <div className="w-0.5 h-8 bg-[#5A8F7B]"></div>
                <div className="w-0.5 h-8 bg-[#5A8F7B]"></div>
              </div>
            </div>
          </div>

          {/* Level 3: TEACHING STAFF - Bottom Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            
            {/* Dr. Sharmadas Senasi */}
            <div 
              className="relative overflow-hidden group cursor-pointer w-full h-[380px]"
              style={{ 
                borderRadius: '20px',
                boxShadow: '0 8px 30px rgba(46, 93, 75, 0.1)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5A8F7B] to-[#4a7a68]">
                <ImageWithFallback
                  src={drSharmadasImage}
                  alt="Dr. Sharmadas Senasi"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                <span 
                  className="inline-block px-3 py-1 rounded-full bg-[#e8f5e9] text-[#2E5D4B] text-xs font-bold mb-2 shadow-lg tracking-widest"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  TENAGA PENGAJAR
                </span>
                <h3 
                  className="text-xl font-bold text-white mb-1"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Dr. Sharmadas Senasi
                </h3>
                <p className="text-white/85 text-xs leading-snug">
                  Membimbing transformasi kesejahteraan melalui kaedah pernafasan berasaskan saintifik.
                </p>
              </div>
            </div>

            {/* Dr. Kuan Chi Meng */}
            <div 
              className="relative overflow-hidden group cursor-pointer w-full h-[380px]"
              style={{ 
                borderRadius: '20px',
                boxShadow: '0 8px 30px rgba(46, 93, 75, 0.1)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5A8F7B] to-[#4a7a68]">
                <ImageWithFallback
                  src={drKuanImage}
                  alt="Dr. Kuan Chi Meng"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                <span 
                  className="inline-block px-3 py-1 rounded-full bg-[#e8f5e9] text-[#2E5D4B] text-xs font-bold mb-2 shadow-lg tracking-widest"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  TENAGA PENGAJAR
                </span>
                <h3 
                  className="text-xl font-bold text-white mb-1"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Dr. Kuan Chi Meng
                </h3>
                <p className="text-white/85 text-xs leading-snug">
                  Mengintegrasikan kesihatan mental holistik dengan pendekatan tradisional dan moden.
                </p>
              </div>
            </div>

            {/* Ahmed Zazley */}
            <div 
              className="relative overflow-hidden group cursor-pointer w-full h-[380px]"
              style={{ 
                borderRadius: '20px',
                boxShadow: '0 8px 30px rgba(46, 93, 75, 0.1)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5A8F7B] to-[#4a7a68]">
                <ImageWithFallback
                  src={ahmedZazleyImage}
                  alt="Ahmed Zazley"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                <span 
                  className="inline-block px-3 py-1 rounded-full bg-[#e8f5e9] text-[#2E5D4B] text-xs font-bold mb-2 shadow-lg tracking-widest"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  TENAGA PENGAJAR
                </span>
                <h3 
                  className="text-xl font-bold text-white mb-1"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Ahmed Zazley
                </h3>
                <p className="text-white/85 text-xs leading-snug">
                  Memfasilitasi program kesejahteraan korporat untuk produktiviti dan keseimbangan kerja.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}