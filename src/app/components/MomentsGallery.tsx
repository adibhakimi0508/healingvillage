import Masonry from 'react-responsive-masonry';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function MomentsGallery() {
  const socialGallery = [
    {
      src: "https://images.unsplash.com/photo-1565281923295-fafb75ca754d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZyaWVuZHMlMjBsYXVnaGluZyUyMHRvZ2V0aGVyJTIwY2FuZGlkfGVufDF8fHx8MTc2OTQxNTQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Friends laughing together",
      caption: "Tawa & Kegembiraan"
    },
    {
      src: "https://images.unsplash.com/photo-1760258920947-70e6a6a6c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBlYXRpbmclMjBjb21tdW5pdHklMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzY5NDE1NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Community eating together",
      caption: "Berkongsi Rezeki"
    },
    {
      src: "https://images.unsplash.com/photo-1768459721553-778d91b98828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYWN0aXZpdHklMjBncm91cCUyMGhpa2luZ3xlbnwxfHx8fDE3Njk0MTU0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Outdoor hiking activity",
      caption: "Meneroka Alam"
    },
    {
      src: "https://images.unsplash.com/photo-1767452985369-d24b2b4cb0cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHJldHJlYXQlMjB5b2dhJTIwbmF0dXJlfGVufDF8fHx8MTc2OTQxNTQ0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Wellness retreat yoga",
      caption: "Sesi Yoga Pagi"
    },
    {
      src: "https://images.unsplash.com/photo-1761814746114-6b1f626472ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZ3JvdXAlMjBtZWRpdGF0aW9uJTIwZm9yZXN0JTIwbmF0dXJlfGVufDF8fHx8MTc2OTQxNTQ0NXww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Meditation in nature",
      caption: "Meditasi Hutan"
    },
    {
      src: "https://images.unsplash.com/photo-1565281923295-fafb75ca754d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZyaWVuZHMlMjBsYXVnaGluZyUyMHRvZ2V0aGVyJTIwY2FuZGlkfGVufDF8fHx8MTc2OTQxNTQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Group activities",
      caption: "Aktiviti Berkumpulan"
    }
  ];

  const corporateGallery = [
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      alt: "Corporate team meeting",
      caption: "Sesi Pembinaan Pasukan"
    },
    {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      alt: "Business workshop",
      caption: "Workshop Kesejahteraan"
    },
    {
      src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      alt: "Corporate wellness program",
      caption: "Program Korporat"
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      alt: "Team collaboration",
      caption: "Kolaborasi Strategik"
    },
    {
      src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      alt: "Leadership training",
      caption: "Latihan Kepimpinan"
    }
  ];

  return (
    <section className="py-24 px-6" style={{ background: 'linear-gradient(to bottom, #D1F2FF, #E8F8FF)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 
            className="text-4xl md:text-5xl text-[#2E5D4B] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Galeri Kami
          </h2>
          <p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Detik-detik bermakna dalam perjalanan kesejahteraan bersama komuniti dan korporat
          </p>
        </div>

        {/* GALERI SOSIAL Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 
              className="text-3xl md:text-4xl text-[#2E5D4B] mb-2"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Galeri Sosial
            </h3>
            <div className="w-24 h-1 bg-[#5A8F7B] mx-auto rounded-full"></div>
          </div>

          <Masonry columnsCount={3} gutter="20px">
            {socialGallery.map((moment, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden"
                style={{ borderRadius: '20px' }}
              >
                <ImageWithFallback
                  src={moment.src}
                  alt={moment.alt}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay on Hover */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
                >
                  <p 
                    className="text-white text-lg font-semibold"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {moment.caption}
                  </p>
                </div>
              </div>
            ))}
          </Masonry>
        </div>

        {/* GALERI KORPORAT Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 
              className="text-3xl md:text-4xl text-[#2E5D4B] mb-2"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Galeri Korporat
            </h3>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
          </div>

          <Masonry columnsCount={3} gutter="20px">
            {corporateGallery.map((moment, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden"
                style={{ borderRadius: '20px' }}
              >
                <ImageWithFallback
                  src={moment.src}
                  alt={moment.alt}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay on Hover */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
                >
                  <p 
                    className="text-white text-lg font-semibold"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {moment.caption}
                  </p>
                </div>
              </div>
            ))}
          </Masonry>
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button 
            className="px-8 py-3 rounded-full border-2 border-[#2E5D4B] text-[#2E5D4B] hover:bg-[#2E5D4B] hover:text-white transition-all duration-300 font-semibold"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Lihat Lebih Banyak
          </button>
        </div>
      </div>
    </section>
  );
}