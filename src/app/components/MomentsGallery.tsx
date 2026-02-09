import { useState } from 'react'; // 👈 Import useState
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Camera, X } from 'lucide-react'; // 👈 Import X icon

// LOCAL IMAGES
import hvImage from '../../assets/hv.jpg';
import training1 from '../../assets/training1.jpg';
import training5 from '../../assets/training5.jpg';

export function MomentsGallery() {
  // STATE: Track which image is currently open (null = closed)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // DATA: Social Gallery
  const socialImages = [
    {
      src: hvImage,
      caption: "Suasana Healing Village"
    },
    {
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
      caption: "Makan Malam Komuniti"
    },
    {
      src: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
      caption: "Aktiviti Riadah & Kopi"
    }
  ];

  // DATA: Corporate Gallery
  const corporateImages = [
    {
      src: training1,
      caption: "Sesi Latihan Korporat"
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      caption: "Mesyuarat Strategik"
    },
    {
      src: training5,
      caption: "Bengkel Kepimpinan"
    }
  ];

  return (
      <section className="py-24 px-6 bg-gradient-to-b from-[#D1F2FF] to-[#E8F8FF]" id="gallery">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
                className="text-4xl md:text-5xl text-[#0E6175] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Lensa Komuniti Kami
            </h2>
            <p className="text-[#0E6175]/80 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Koleksi momen indah dari program komuniti dan korporat di Healing Village.
            </p>
          </div>

          {/* --- LIGHTBOX MODAL (Only shows when selectedImage is not null) --- */}
          {selectedImage && (
              <div
                  className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
                  onClick={() => setSelectedImage(null)} // Close when clicking background
              >
                {/* Close Button */}
                <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
                >
                  <X className="w-8 h-8" />
                </button>

                {/* Full Image */}
                <div
                    className="relative max-w-5xl w-full h-full flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image itself
                >
                  <ImageWithFallback
                      src={selectedImage}
                      alt="Full Preview"
                      className="max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl"
                  />
                </div>
              </div>
          )}

          {/* --- GALLERY CONTENT --- */}
          <div className="space-y-16">

            {/* 1. Galeri Sosial */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-white/50 rounded-xl backdrop-blur-sm shadow-sm">
                  <Camera className="w-6 h-6 text-[#0E6175]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0E6175]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Galeri Sosial
                </h3>
              </div>

              <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                <Masonry gutter="20px">
                  {socialImages.map((item, index) => (
                      <div
                          key={index}
                          className="relative group overflow-hidden rounded-2xl cursor-pointer" // 👈 Added cursor-pointer
                          onClick={() => setSelectedImage(item.src)} // 👈 Open Lightbox
                      >
                        <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
                          <ImageWithFallback
                              src={item.src}
                              alt={item.caption}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {item.caption}
                            </p>
                          </div>
                        </div>
                      </div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>

            {/* 2. Galeri Korporat */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-white/50 rounded-xl backdrop-blur-sm shadow-sm">
                  <Camera className="w-6 h-6 text-[#0E6175]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0E6175]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Galeri Korporat
                </h3>
              </div>

              <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                <Masonry gutter="20px">
                  {corporateImages.map((item, index) => (
                      <div
                          key={index}
                          className="relative group overflow-hidden rounded-2xl cursor-pointer" // 👈 Added cursor-pointer
                          onClick={() => setSelectedImage(item.src)} // 👈 Open Lightbox
                      >
                        <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                          <ImageWithFallback
                              src={item.src}
                              alt={item.caption}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {item.caption}
                            </p>
                          </div>
                        </div>
                      </div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>

          </div>
        </div>
      </section>
  );
}