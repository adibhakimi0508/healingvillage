import { Sparkles, ChevronRight } from 'lucide-react';

export function CommunityBulletin() {
  const notices = [
    {
      badge: 'RASMI',
      title: 'Grand Launching',
      date: '30 Januari 2026',
      description: 'Majlis pelancaran rasmi Healing Village bersama komuniti dan rakan strategik.',
      color: '#D4AF37', // Gold for the "Grand" feel
      icon: Sparkles
    }
  ];

  return (
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2
                className="text-4xl md:text-5xl text-[#0284C7] mb-3"
                style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Terkini di Healing Village
            </h2>
            <p className="text-gray-600 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
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
                          border: '1px solid #E0F2FE',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-4px)';
                          e.currentTarget.style.boxShadow = '0 12px 35px rgba(14, 165, 233, 0.15)';
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
                              style={{ fontFamily: 'Inter, sans-serif', backgroundColor: notice.color }}
                          >
                        {notice.badge}
                      </span>
                        </div>
                        {/* Updated Title Color to Black/Dark per your last snippet or Theme Blue */}
                        <h3 className="text-xl font-bold text-[#0284C7] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {notice.title}
                        </h3>
                        <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {notice.description}
                        </p>
                      </div>

                      {/* Card Footer */}
                      <div className="p-6 flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-500 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Tarikh</p>
                          <p className="text-sm font-semibold text-[#0284C7]" style={{ fontFamily: 'Inter, sans-serif' }}>{notice.date}</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[#F0F9FF] flex items-center justify-center group-hover:bg-[#0EA5E9] transition-colors duration-300">
                          <ChevronRight className="w-5 h-5 text-[#0EA5E9] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
  );
}