import { Wind, Brain, Heart, Leaf } from 'lucide-react';

export function ProgramHighlights() {
  const programs = [
    {
      icon: Wind,
      title: 'Breathwork Science',
      description: 'Teknik pernafasan berasaskan sains untuk kesejahteraan mental',
      color: '#2E5D4B'
    },
    {
      icon: Brain,
      title: 'Leadership Resilience',
      description: 'Program khas untuk pemimpin korporat dan eksekutif',
      color: '#D4AF37'
    },
    {
      icon: Heart,
      title: 'Caregiver Support',
      description: 'Sokongan kesejahteraan untuk penjaga dan ibu bapa',
      color: '#5A8F7B'
    },
    {
      icon: Leaf,
      title: 'ESG Integration',
      description: 'Menyelaraskan kesejahteraan dengan matlamat kelestarian',
      color: '#2E5D4B'
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl text-[#2E5D4B] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Program Utama
          </h2>
          <p 
            className="text-gray-600 text-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Solusi kesejahteraan yang disesuaikan untuk pelbagai keperluan
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div 
                key={index}
                className="relative group cursor-pointer p-10 flex flex-col items-center text-center"
                style={{
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, #F4F7F6 0%, #ffffff 100%)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 16px 45px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.06)';
                }}
              >
                {/* Large Icon */}
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    backgroundColor: `${program.color}15`,
                    boxShadow: `0 8px 30px ${program.color}30`
                  }}
                >
                  <Icon className="w-12 h-12" style={{ color: program.color }} />
                </div>

                <h3 
                  className="text-2xl font-bold text-[#2E5D4B] mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {program.title}
                </h3>
                
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {program.description}
                </p>

                {/* Learn More Link */}
                <div className="mt-6">
                  <span 
                    className="text-sm font-semibold group-hover:text-[#2E5D4B] transition-colors duration-300"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      color: program.color
                    }}
                  >
                    Ketahui Lebih Lanjut →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}