import { Link } from 'react-router-dom';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ArrowRight, Camera } from 'lucide-react';

// --- EXISTING ASSETS (Using what you have in the repo) ---
import hvImage from '../../assets/hv.jpg';
import sosial2 from '../../assets/sosial2.jpg'; // Ensure this exists or use a fallback
import training1 from '../../assets/training1.jpg';
import korporat1 from '../../assets/korporat1.jpg'; // Ensure this exists or use a fallback

export function MomentsGallery() {

    // DATA: The top 2 'highlight' images for each category
    const socialHighlights = [hvImage, sosial2];
    const corporateHighlights = [training1, korporat1];

    // REUSABLE SECTION COMPONENT
    const GallerySection = ({ title, images, link }: { title: string, images: string[], link: string }) => (
        <div className="mb-20 last:mb-0">
            {/* SECTION TITLE */}
            <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-white/50 rounded-xl backdrop-blur-sm shadow-sm border border-white/60">
                    <Camera className="w-6 h-6 text-[#0E6175]" />
                </div>
                <h3 className="text-3xl font-bold text-[#0E6175]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {title}
                </h3>
            </div>

            {/* GRID: 2 IMAGES + 1 LINK CARD */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* IMAGES */}
                {images.map((src, idx) => (
                    <div key={idx} className="relative h-[350px] w-full overflow-hidden rounded-2xl shadow-sm group border border-blue-50">
                        <ImageWithFallback
                            src={src}
                            alt={`${title} Highlight ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    </div>
                ))}

                {/* "VIEW MORE" CARD */}
                <Link to={link} className="group relative h-[350px] w-full overflow-hidden rounded-2xl shadow-sm flex flex-col items-center justify-center bg-[#0E6175] text-white hover:bg-[#094656] transition-all duration-300 cursor-pointer ring-1 ring-offset-2 ring-[#0E6175] ring-offset-[#F8FDFF]">
                    <div className="p-5 rounded-full bg-white/10 group-hover:bg-white/20 transition-all mb-6 group-hover:scale-110 duration-300">
                        <ArrowRight className="w-10 h-10 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <span className="text-2xl font-medium font-serif">Lihat Galeri Penuh</span>
                    <span className="text-sm opacity-70 mt-2 font-sans tracking-wide uppercase">View Full Collection</span>

                    {/* Decorative Pattern */}
                    <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
                </Link>
            </div>
        </div>
    );

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-[#EBF9FF] to-[#F5FAFF]" id="gallery">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
          <span className="text-[#0E6175] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Our Moments
          </span>
                    <h2 className="text-4xl md:text-5xl text-[#0E6175] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Lensa Komuniti Kami
                    </h2>
                    <p className="text-[#0E6175]/80 text-lg max-w-2xl mx-auto">
                        Imbasan momen indah dan kenangan manis dari program-program terkini di Healing Village.
                    </p>
                </div>

                <GallerySection
                    title="Galeri Sosial & Komuniti"
                    images={socialHighlights}
                    link="/gallery"
                />

                <GallerySection
                    title="Galeri Korporat & Latihan"
                    images={corporateHighlights}
                    link="/gallery"
                />
            </div>
        </section>
    );
}