import { Calendar, Sparkles, Briefcase, ChevronRight } from 'lucide-react';

export function CommunityBulletin() {
  const notices = [
    {
      badge: 'EVENT',
      title: 'Hiking Weekend',
      date: '12 Oct 2026',
      description: 'Join us for a mindful forest hike',
      color: '#5A8F7B',
      icon: Calendar
    },
    {
      badge: 'FREE',
      title: 'Free Breathwork Intro',
      date: 'Every Monday',
      description: 'Learn basic breathing techniques',
      color: '#D4AF37',
      icon: Sparkles
    },
    {
      badge: 'LIMITED',
      title: 'Executive Bootcamp',
      date: 'Slot Terhad',
      description: 'Leadership resilience program',
      color: '#2E5D4B',
      icon: Briefcase
    },
    {
      badge: 'NEW',
      title: 'ESG Workshop',
      date: '20 Oct 2026',
      description: 'Corporate sustainability training',
      color: '#5A8F7B',
      icon: Sparkles
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 
            className="text-4xl md:text-5xl text-[#2E5D4B] mb-3"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Terkini di Healing Village
          </h2>
          <p 
            className="text-gray-600 text-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Acara, program, dan peluang terkini untuk komuniti kami
          </p>
        </div>

        {/* Horizontal Scrolling Rail */}
        <div className="overflow-x-auto pb-4 -mx-6 px-6">
          <div className="flex gap-6 min-w-max">
            {notices.map((notice, index) => {
              const Icon = notice.icon;
              return (
                <div 
                  key={index}
                  className="w-80 flex-shrink-0 group cursor-pointer"
                  style={{
                    borderRadius: '20px',
                    background: 'white',
                    border: '1px solid #E8EDE9',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
                  }}
                >
                  {/* Card Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${notice.color}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: notice.color }} />
                      </div>
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-bold text-white"
                        style={{ 
                          fontFamily: 'Inter, sans-serif',
                          backgroundColor: notice.color
                        }}
                      >
                        {notice.badge}
                      </span>
                    </div>
                    <h3 
                      className="text-xl font-bold text-[#2E5D4B] mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {notice.title}
                    </h3>
                    <p 
                      className="text-sm text-gray-600"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {notice.description}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 flex items-center justify-between">
                    <div>
                      <p 
                        className="text-xs text-gray-500 mb-1"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Tarikh
                      </p>
                      <p 
                        className="text-sm font-semibold text-[#2E5D4B]"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {notice.date}
                      </p>
                    </div>
                    <div 
                      className="w-10 h-10 rounded-full bg-[#F4F7F6] flex items-center justify-center group-hover:bg-[#2E5D4B] transition-colors duration-300"
                    >
                      <ChevronRight className="w-5 h-5 text-[#2E5D4B] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="text-center mt-6">
          <p 
            className="text-sm text-gray-400"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            ← Scroll untuk lebih banyak →
          </p>
        </div>
      </div>
    </section>
  );
}
