import { useState, useCallback, useEffect } from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

// LOCAL IMAGES - SOCIAL
import hvImage from '../../assets/hv.jpg';
import sosial2 from '../../assets/sosial2.jpg';
import sosial3 from '../../assets/sosial3.jpg';
import sosial4 from '../../assets/sosial4.jpg';
import sosial5 from '../../assets/sosial5.jpg';
import sosial6 from '../../assets/sosial6.jpg';
import sosial7 from '../../assets/sosial7.jpg';
import sosial8 from '../../assets/sosial8.jpg';
import sosial9 from '../../assets/sosial9.jpg';

// LOCAL IMAGES - CORPORATE
import training1 from '../../assets/training1.jpg';
import korporat1 from '../../assets/korporat1.jpg';
import korporat2 from '../../assets/korporat2.jpg';
import korporat3 from '../../assets/korporat3.jpg';

interface GalleryItem {
  src: string;
}

export function MomentsGallery() {
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    currentIndex: number;
    currentGroup: GalleryItem[];
  }>({
    isOpen: false,
    currentIndex: 0,
    currentGroup: []
  });

  const socialImages: GalleryItem[] = [
    { src: hvImage }, { src: sosial2 }, { src: sosial3 },
    { src: sosial4 }, { src: sosial5 }, { src: sosial6 },
    { src: sosial7 }, { src: sosial8 }, { src: sosial9 },
  ];

  const corporateImages: GalleryItem[] = [
    { src: training1 }, { src: korporat1 },
    { src: korporat2 }, { src: korporat3 },
  ];

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

  const activeImage = lightboxState.isOpen
      ? lightboxState.currentGroup[lightboxState.currentIndex]
      : null;

  return (
      <section className="py-24 px-6 bg-gradient-to-b from-[#D1F2FF] to-[#E8F8FF]" id="gallery">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#0E6175] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Lensa Komuniti Kami
            </h2>
            <p className="text-[#0E6175]/80 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Koleksi momen indah dari program komuniti dan korporat di Healing Village.
            </p>
          </div>

          {/* LIGHTBOX */}
          {lightboxState.isOpen && activeImage && (
              <div
                  className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
                  onClick={closeLightbox}
              >
                <button onClick={closeLightbox} className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-50">
                  <X className="w-8 h-8" />
                </button>
                <button onClick={showPrev} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-50 hover:scale-110">
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button onClick={showNext} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-50 hover:scale-110">
                  <ChevronRight className="w-8 h-8" />
                </button>
                <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
                  <ImageWithFallback src={activeImage.src} alt="Gallery Preview" className="max-h-[90vh] max-w-full object-contain shadow-2xl rounded-sm" />
                </div>
              </div>
          )}

          {/* CONTENT */}
          <div className="space-y-20">
            {/* SOCIAL */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-white/50 rounded-xl backdrop-blur-sm shadow-sm">
                  <Camera className="w-6 h-6 text-[#0E6175]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0E6175]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Galeri Sosial
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {socialImages.map((item, index) => (
                    <div
                        key={index}
                        // MOBILE OPTIMIZATION: Removed 'will-change', added 'backface-hidden'
                        className="group relative h-[540px] w-full overflow-hidden rounded-xl cursor-pointer bg-gray-200"
                        onClick={() => openLightbox(socialImages, index)}
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                      <ImageWithFallback
                          src={item.src}
                          alt="Gallery Thumbnail"
                          // MOBILE OPTIMIZATION: Slower transition (700ms) feels smoother on 60hz screens
                          className="w-full h-full object-cover transition-transform duration-700 ease-out transform-gpu group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                ))}
              </div>
            </div>

            {/* CORPORATE */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-white/50 rounded-xl backdrop-blur-sm shadow-sm">
                  <Camera className="w-6 h-6 text-[#0E6175]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0E6175]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Galeri Korporat
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {corporateImages.map((item, index) => (
                    <div
                        key={index}
                        className="group relative h-[540px] w-full overflow-hidden rounded-xl cursor-pointer bg-gray-200"
                        onClick={() => openLightbox(corporateImages, index)}
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                      <ImageWithFallback
                          src={item.src}
                          alt="Gallery Thumbnail"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out transform-gpu group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
  );
}