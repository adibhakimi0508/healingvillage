import { useState, useCallback, useEffect } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

// LOCAL IMAGES
import hvImage from '../../assets/hv.jpg';
import training1 from '../../assets/training1.jpg';
import training5 from '../../assets/training5.jpg';

// Define Interface for Image Items
interface GalleryItem {
  src: string;
  caption: string;
}

export function MomentsGallery() {
  // STATE: Track the *Index* and the *Current Array* being viewed
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    currentIndex: number;
    currentGroup: GalleryItem[];
  }>({
    isOpen: false,
    currentIndex: 0,
    currentGroup: []
  });

  // DATA: Social Gallery
  const socialImages: GalleryItem[] = [
    { src: hvImage, caption: "Suasana Healing Village" },
    { src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop", caption: "Makan Malam Komuniti" },
    { src: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop", caption: "Aktiviti Riadah & Kopi" }
  ];

  // DATA: Corporate Gallery
  const corporateImages: GalleryItem[] = [
    { src: training1, caption: "Sesi Latihan Korporat" },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", caption: "Mesyuarat Strategik" },
    { src: training5, caption: "Bengkel Kepimpinan" }
  ];

  // --- HANDLERS ---
  const openLightbox = (group: GalleryItem[], index: number) => {
    setLightboxState({ isOpen: true, currentGroup: group, currentIndex: index });
  };

  const closeLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  };

  const showNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.currentGroup.length
    }));
  }, []);

  const showPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex === 0 ? prev.currentGroup.length - 1 : prev.currentIndex - 1)
    }));
  }, []);

  // KEYBOARD NAVIGATION SUPPORT
  useEffect(() => {
    if (!lightboxState.isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxState.isOpen, showNext, showPrev]);

  // Current Active Image
  const activeImage = lightboxState.isOpen
      ? lightboxState.currentGroup[lightboxState.currentIndex]
      : null;

  return (
      <section className="py-24 px-6 bg-gradient-to-b from-[#D1F2FF] to-[#E8F8FF]" id="gallery">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#0E6175] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Lensa Komuniti Kami
            </h2>
            <p className="text-[#0E6175]/80 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Koleksi momen indah dari program komuniti dan korporat di Healing Village.
            </p>
          </div>

          {/* --- LIGHTBOX MODAL --- */}
          {lightboxState.isOpen && activeImage && (
              <div
                  className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
                  onClick={closeLightbox}
              >
                {/* Close Button */}
                <button
                    onClick={closeLightbox}
                    className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-50"
                >
                  <X className="w-8 h-8" />
                </button>

                {/* PREV Button (Left) */}
                <button
                    onClick={showPrev}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-50 hover:scale-110"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                {/* NEXT Button (Right) */}
                <button
                    onClick={showNext}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-50 hover:scale-110"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                {/* Full Image */}
                <div
                    className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                >
                  <ImageWithFallback
                      src={activeImage.src}
                      alt="Full Preview"
                      className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
                  />
                  <p className="text-white/90 mt-4 text-lg font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {activeImage.caption} ({lightboxState.currentIndex + 1} / {lightboxState.currentGroup.length})
                  </p>
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
                          className="relative group overflow-hidden rounded-2xl cursor-pointer"
                          onClick={() => openLightbox(socialImages, index)} // Pass Group + Index
                      >
                        <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
                          <ImageWithFallback
                              src={item.src}
                              alt={item.caption}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
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
                          className="relative group overflow-hidden rounded-2xl cursor-pointer"
                          onClick={() => openLightbox(corporateImages, index)} // Pass Group + Index
                      >
                        <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                          <ImageWithFallback
                              src={item.src}
                              alt={item.caption}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
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