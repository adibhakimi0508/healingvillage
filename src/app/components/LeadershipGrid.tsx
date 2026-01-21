interface LeaderCardProps {
  name: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  badge: string;
  isCenter?: boolean;
}

function LeaderCard({ name, title, subtitle, imageUrl, badge, isCenter = false }: LeaderCardProps) {
  return (
    <div 
      className={`bg-white rounded-[20px] overflow-hidden group transition-all duration-300 ${
        isCenter 
          ? 'scale-100 lg:scale-115 z-10 shadow-2xl border-4 border-[#D4AF37]' 
          : 'shadow-lg hover:shadow-xl hover:scale-105'
      }`}
      style={isCenter ? { 
        boxShadow: '0 20px 60px rgba(212, 175, 55, 0.3), 0 10px 30px rgba(0, 0, 0, 0.1)' 
      } : {}}
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <img 
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Glassmorphism Badge */}
        <div 
          className="absolute bottom-4 right-4 px-4 py-2 rounded-full text-white backdrop-blur-md border border-white/30"
          style={{ 
            background: isCenter ? 'rgba(212, 175, 55, 0.7)' : 'rgba(90, 143, 123, 0.7)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <span className="text-sm font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
            {badge}
          </span>
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
          className={`mb-1 ${isCenter ? 'text-[#D4AF37]' : 'text-[#5A8F7B]'}`}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {title}
        </p>
        <p 
          className="text-gray-600 text-sm"
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
    <section className="py-32 bg-[#F9F9F9]" id="leadership">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 
            className="text-4xl md:text-5xl text-[#2E5D4B] mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Kepimpinan Kami
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Berpengalaman dalam pembangunan insan dan kesihatan holistik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Left Card - WHE/Women & Family */}
          <LeaderCard
            name="Puan Rabiatul"
            title="Ketua WHE"
            subtitle="Women, Health & Empowerment"
            imageUrl="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4ODg4OTM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            badge="WHE"
          />

          {/* Center Card - Founder (Elevated with Gold Border) */}
          <LeaderCard
            name="Hj. Azman"
            title="Pengasas & Pengarah"
            subtitle="Pakar Pernafasan & Mindfulness"
            imageUrl="https://images.unsplash.com/photo-1736939763234-f176517e95ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWxheXNpYW4lMjBidXNpbmVzcyUyMGxlYWRlcnxlbnwxfHx8fDE3Njg5NjM2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            badge="Hv"
            isCenter={true}
          />

          {/* Right Card - WASIAH/Heritage & Estate */}
          <LeaderCard
            name="Cik Sue"
            title="Ketua WASIAH"
            subtitle="Heritage & Estate Planning"
            imageUrl="https://images.unsplash.com/photo-1758600432264-b8d2a0fd7d83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjBhc2lhbiUyMHByb2Zlc3Npb25hbCUyMG1hbnxlbnwxfHx8fDE3Njg5NjM2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            badge="WASIAH"
          />
        </div>
      </div>
    </section>
  );
}