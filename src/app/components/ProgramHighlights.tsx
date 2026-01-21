import { Wind, Brain, Leaf, Heart } from 'lucide-react';

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

function ProgramCard({ icon, title, description, color }: ProgramCardProps) {
  return (
    <div 
      className="bg-white rounded-[20px] p-8 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
    >
      <div 
        className="w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <h3 
        className="text-2xl text-[#2E5D4B] mb-3"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        {title}
      </h3>
      <p 
        className="text-gray-600 leading-relaxed"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {description}
      </p>
    </div>
  );
}

export function ProgramHighlights() {
  return (
    <section className="py-24 bg-white" id="programs">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl text-[#2E5D4B] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Program Utama Kami
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Pendekatan holistik untuk kesihatan mental dan fizikal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProgramCard
            icon={<Wind className="w-12 h-12 text-white" />}
            title="Teknik Pernafasan"
            description="Kaedah pernafasan terapeutik untuk mengurangkan stress dan meningkatkan kesedaran diri"
            color="#5A8F7B"
          />
          <ProgramCard
            icon={<Brain className="w-12 h-12 text-white" />}
            title="Transformasi Minda"
            description="Program pembangunan mental untuk pemikiran positif dan kesihatan emosi yang seimbang"
            color="#2E5D4B"
          />
          <ProgramCard
            icon={<Leaf className="w-12 h-12 text-white" />}
            title="Terapi Alam"
            description="Penyembuhan melalui hubungan dengan alam semula jadi di persekitaran hutan"
            color="#D4AF37"
          />
          <ProgramCard
            icon={<Heart className="w-12 h-12 text-white" />}
            title="Wellness Korporat"
            description="Program khas untuk organisasi yang mengutamakan kesejahteraan pekerja"
            color="#5A8F7B"
          />
        </div>
      </div>
    </section>
  );
}
