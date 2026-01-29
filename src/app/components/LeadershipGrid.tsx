import { User, Heart, Shield } from 'lucide-react';

interface LeaderCardProps {
  name: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  isCenter?: boolean;
  roleType: 'WHE' | 'Hv' | 'WASIAH';
}

function LeaderCard({ name, title, subtitle, imageUrl, isCenter = false, roleType }: LeaderCardProps) {
  return (
    <div 
      className={`bg-white rounded-[20px] overflow-hidden group transition-all duration-300 ${
        isCenter 
          ? 'scale-100 lg:scale-110 z-10' 
          : 'hover:scale-105'
      }`}
      style={isCenter ? { 
        boxShadow: '0 10px 40px rgba(212, 175, 55, 0.25), 0 4px 12px rgba(0, 0, 0, 0.08)',
        border: '2px solid #D4AF37'
      } : {
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
      }}
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <img 
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Pill-shaped Badge - Bottom Right */}
        <div 
          className={`absolute bottom-4 right-4 px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm ${
            isCenter 
              ? 'bg-[#D4AF37] text-white' 
              : 'bg-white/95 text-[#2E5D4B]'
          }`}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {roleType}
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 
          className={`text-[#2E5D4B] mb-2 ${isCenter ? 'text-2xl' : 'text-xl'}`}
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {name}
        </h3>
        <p 
          className={`mb-1 uppercase tracking-wider text-xs font-semibold ${
            isCenter ? 'text-[#D4AF37]' : 'text-[#5A8F7B]'
          }`}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {title}
        </p>
        <p 
          className="text-gray-600 text-sm leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export function LeadershipGrid() {
  return (
    <section className="py-24 bg-[#F4F7F6]" id="leadership">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl text-[#2E5D4B] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Kepimpinan & Visi
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Menerajui transformasi minda dan legasi melalui pernafasan dan pengurusan warisan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Card - WHE (Puan Rabiatul) */}
          <LeaderCard
            name="Puan Rabiatul"
            title="Ketua WHE"
            subtitle="Kesejahteraan Wanita & Keluarga. Membina komuniti yang penyayang dan harmoni."
            roleType="WHE"
            // REPLACE THIS URL with your local image path later: "/assets/img/puan-rabiatul.jpg"
            imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
          />

          {/* Center Card - Hv (Hj. Azman) */}
          <LeaderCard
            name="Hj. Azman"
            title="Pengasas (Hv)"
            subtitle="Visi & Hala Tuju Healing Village. Pakar transformasi minda melalui pernafasan."
            roleType="Hv"
            isCenter={true}
            // REPLACE THIS URL with your local image path later: "/assets/img/hj-azman.jpg"
            imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
          />

          {/* Right Card - WASIAH (Cik Sue) */}
          <LeaderCard
            name="Cik Sue"
            title="Ketua WASIAH"
            subtitle="Pengurusan Warisan & Harta. Memastikan kelestarian legasi untuk masa depan."
            roleType="WASIAH"
            // REPLACE THIS URL with your local image path later: "/assets/img/cik-sue.jpg"
            imageUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
          />

        </div>
      </div>
    </section>
  );
}