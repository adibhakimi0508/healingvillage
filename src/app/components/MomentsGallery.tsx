import Masonry from 'react-responsive-masonry';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

// 👇 IMPORT YOUR NEW LOCAL IMAGES HERE
import hvImage from '../../assets/hv.jpg';
import training1 from '../../assets/training1.jpg';
import training5 from '../../assets/training5.jpg';

export function MomentsGallery() {

  // Updated Social Gallery with 'hv.jpg'
  const socialGallery = [
    {
      src: hvImage, // ✅ Using your local image
      alt: "Healing Village Atmosphere",
      caption: "Suasana Healing Village"
    },
    {
      src: "https://images.unsplash.com/photo-1760258920947-70e6a6a6c9f1?q=80&w=1080",
      alt: "Community eating together",
      caption: "Berkongsi Rezeki"
    },
    {
      src: "https://images.unsplash.com/photo-1768459721553-778d91b98828?q=80&w=1080",
      alt: "Outdoor hiking activity",
      caption: "Meneroka Alam"
    }
  ];

  // Updated Corporate Gallery with 'training1' and 'training5'
  const corporateGallery = [
    {
      src: training1, // ✅ Using your local image
      alt: "Corporate Training Session",
      caption: "Sesi Latihan Korporat"
    },
    {
      src: training5, // ✅ Using your local image
      alt: "Team Workshop",
      caption: "Bengkel Pasukan"
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1080",
      alt: "Strategic Meeting",
      caption: "Perbincangan Strategik"
    }
  ];

  return (
      <section className="py-24 px-6" style={{ background: 'linear-gradient(to bottom, #D1F2FF, #E8F8FF)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2
                className="text-4xl md:text-5xl text-[#0E6175] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Galeri Kami
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Detik-detik bermakna dalam perjalanan kesejahteraan bersama komuniti dan korporat.
            </p>
          </div>

          {/* GALERI SOSIAL */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl text-[#0E6175] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Galeri Sosial
              </h3>
              <div className="w-24 h-1 bg-[#4297AA] mx-auto rounded-full"></div>
            </div>
            <Masonry columnsCount={3} gutter="20px">
              {socialGallery.map((moment, index) => (
                  <div key={index} className="relative group cursor-pointer overflow-hidden rounded-[20px]">
                    <ImageWithFallback
                        src={moment.src}
                        alt={moment.alt}
                        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white text-lg font-semibold">{moment.caption}</p>
                    </div>
                  </div>
              ))}
            </Masonry>
          </div>

          {/* GALERI KORPORAT */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl text-[#0E6175] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Galeri Korporat
              </h3>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
            </div>
            <Masonry columnsCount={3} gutter="20px">
              {corporateGallery.map((moment, index) => (
                  <div key={index} className="relative group cursor-pointer overflow-hidden rounded-[20px]">
                    <ImageWithFallback
                        src={moment.src}
                        alt={moment.alt}
                        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white text-lg font-semibold">{moment.caption}</p>
                    </div>
                  </div>
              ))}
            </Masonry>
          </div>

        </div>
      </section>
  );
}