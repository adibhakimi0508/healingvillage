interface LeaderCardProps {
  name: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  isCenter?: boolean;
}

function LeaderCard({ name, title, subtitle, imageUrl, isCenter = false }: LeaderCardProps) {
  return (
    <div 
      className={`bg-white rounded-[20px] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
        isCenter ? 'scale-105 lg:scale-110 z-10' : 'hover:scale-105'
      }`}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 text-center">
        <h3 
          className={`text-[#2E5D4B] mb-2 ${isCenter ? 'text-2xl' : 'text-xl'}`}
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {name}
        </h3>
        <p 
          className="text-[#5A8F7B] mb-1"
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
    <section className="py-24 bg-[#F9F9F9]" id="leadership">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl text-[#2E5D4B] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Kepimpinan Kami
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Berpengalaman dalam pembangunan insan dan kesihatan holistik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Card - WHE/Women */}
          <LeaderCard
            name="Puan Siti Nurhaliza"
            title="Ketua WHE"
            subtitle="Women's Health & Empowerment"
            imageUrl="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4ODg4OTM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          />

          {/* Center Card - Founder (Elevated) */}
          <LeaderCard
            name="Hj. Azman bin Ahmad"
            title="Pengasas & Pengarah"
            subtitle="Pakar Pernafasan & Mindfulness"
            imageUrl="https://images.unsplash.com/photo-1736939763234-f176517e95ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWxheXNpYW4lMjBidXNpbmVzcyUyMGxlYWRlcnxlbnwxfHx8fDE3Njg5NjM2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            isCenter={true}
          />

          {/* Right Card - WASIAH/Legacy */}
          <LeaderCard
            name="Datuk Ahmad Ibrahim"
            title="Ketua WASIAH"
            subtitle="Legacy & Corporate Wellness"
            imageUrl="https://images.unsplash.com/photo-1758600432264-b8d2a0fd7d83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjBhc2lhbiUyMHByb2Zlc3Npb25hbCUyMG1hbnxlbnwxfHx8fDE3Njg5NjM2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          />
        </div>
      </div>
    </section>
  );
}
