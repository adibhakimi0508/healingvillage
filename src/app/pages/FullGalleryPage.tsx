import { useState, useEffect, useMemo, useCallback } from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Calendar, X, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { galleryData } from '@/data/galleryData';

// --- 1. O(1) IMAGE REGISTRY (Instant Lookup) ---
// This builds ONCE when the app loads. It maps filenames to their dynamic import functions.
const imagesGlob = import.meta.glob('@/assets/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}');
const IMAGE_MAP: Record<string, () => Promise<any>> = {};

for (const path in imagesGlob) {
    const filename = path.split('/').pop();
    if (filename) {
        // Store lowercase keys for Case-Insensitive matching
        IMAGE_MAP[filename.toLowerCase()] = imagesGlob[path] as () => Promise<any>;
    }
}

// Helper: Get the loader function for a filename (No looping, instant access)
const getImageLoader = (filename: string) => {
    return IMAGE_MAP[filename.toLowerCase()] || null;
};

// --- SUB-COMPONENT: LAZY THUMBNAIL ---
// This only fetches the image when it is rendered on screen.
const LazyThumbnail = ({ filename, onClick, alt, className, children }: any) => {
    const [src, setSrc] = useState<string | null>(null);

    useEffect(() => {
        const load = getImageLoader(filename);
        if (load) {
            load().then((mod) => setSrc(mod.default));
        }
    }, [filename]);

    if (!src) {
        return (
            <div className={`bg-gray-100 flex items-center justify-center ${className}`}>
                {/* Lightweight skeleton */}
                <div className="w-full h-full bg-gray-200" />
            </div>
        );
    }

    return (
        <div onClick={onClick} className={className}>
            <ImageWithFallback
                src={src}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={alt}
            />
            {children}
        </div>
    );
};

// --- TYPES ---
interface GroupedEvent {
    id: string;
    title: string;
    date: string;
    category: string;
    images: string[];
}

interface LightboxState {
    isOpen: boolean;
    images: string[];
    currentIndex: number;
}

export function FullGalleryPage() {
    const [lightbox, setLightbox] = useState<LightboxState>({
        isOpen: false,
        images: [],
        currentIndex: 0
    });

    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
    const [isLightboxLoading, setIsLightboxLoading] = useState(false);

    // 2. DATA GROUPING (Fast)
    const events = useMemo(() => {
        const groups: Record<string, GroupedEvent> = {};

        galleryData.forEach((item) => {
            const key = `${item.title}-${item.date}`;
            if (!groups[key]) {
                groups[key] = {
                    id: key,
                    title: item.title,
                    date: item.date,
                    category: item.category,
                    images: []
                };
            }

            // Only add if file exists in our registry
            if (getImageLoader(item.file)) {
                groups[key].images.push(item.file);
            }
        });

        return Object.values(groups).sort((a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // --- LIGHTBOX: STRICT "LOAD 1 AT A TIME" LOGIC ---
    useEffect(() => {
        if (!lightbox.isOpen) return;

        // 1. Clear previous image IMMEDIATELY to free memory & show loader
        setLightboxSrc(null);
        setIsLightboxLoading(true);

        const loadStrictOne = async () => {
            const currentFilename = lightbox.images[lightbox.currentIndex];
            const load = getImageLoader(currentFilename);

            if (load) {
                try {
                    // 2. Load ONLY the current image
                    const mod = await load();
                    setLightboxSrc(mod.default);
                } catch (err) {
                    console.error("Failed to load image:", currentFilename);
                } finally {
                    setIsLightboxLoading(false);
                }
            } else {
                setIsLightboxLoading(false); // Handle missing file case
            }
        };

        loadStrictOne();
        // NO PRE-FETCHING CODE HERE.

    }, [lightbox.currentIndex, lightbox.isOpen, lightbox.images]);

    // Navigation Handlers
    const openLightbox = (images: string[], index: number) => {
        setLightbox({ isOpen: true, images, currentIndex: index });
    };

    const closeLightbox = () => {
        setLightbox(prev => ({ ...prev, isOpen: false }));
        setLightboxSrc(null); // Clear memory
    };

    const nextImage = useCallback(() => {
        setLightbox(prev => ({
            ...prev,
            currentIndex: (prev.currentIndex + 1) % prev.images.length
        }));
    }, []);

    const prevImage = useCallback(() => {
        setLightbox(prev => ({
            ...prev,
            currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
        }));
    }, []);

    // Keyboard
    useEffect(() => {
        if (!lightbox.isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightbox.isOpen, nextImage, prevImage]);


    return (
        <div className="min-h-screen bg-[#F8FDFF] flex flex-col font-sans">
            <Navigation />

            <main className="flex-grow pt-32 pb-24 px-6">
                <div className="max-w-7xl mx-auto mb-16">
                    <Link to="/" className="inline-flex items-center text-[#0E6175]/70 hover:text-[#0E6175] mb-8 transition-colors">
                        <ChevronLeft className="w-5 h-5 mr-1" />
                        Kembali ke Laman Utama
                    </Link>
                    <h1 className="text-4xl md:text-5xl text-[#0E6175] font-serif font-bold mb-4">
                        Galeri Penuh
                    </h1>
                    <p className="text-[#0E6175]/70 text-lg max-w-2xl font-light">
                        Koleksi lengkap aktiviti, program, dan kenangan di Healing Village.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-[2rem] p-8 shadow-sm border border-blue-50/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 flex flex-col h-full"
                        >
                            <div className="mb-6 pb-6 border-b border-gray-100">
                                <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                            event.category === 'sosial'
                                ? 'bg-rose-50 text-rose-600'
                                : 'bg-blue-50 text-[#0E6175]'
                        }`}>
                            {event.category}
                        </span>
                                    <div className="flex items-center gap-2 text-[#0E6175]/60 text-xs font-medium bg-[#F0F9FF] px-3 py-1.5 rounded-lg">
                                        <Calendar className="w-3 h-3" />
                                        {event.date}
                                    </div>
                                </div>
                                <h2 className="text-xl md:text-2xl font-serif text-[#0E6175] font-bold leading-tight">
                                    {event.title}
                                </h2>
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                                {/* --- STRICTLY RENDER ONLY 6 ITEMS --- */}
                                {/* The browser will NEVER know about the other 100 images until Lightbox opens */}
                                {event.images.slice(0, 6).map((filename, index) => (
                                    <LazyThumbnail
                                        key={index}
                                        filename={filename}
                                        alt={`${event.title} ${index + 1}`}
                                        className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:ring-2 ring-[#0E6175]/20 transition-all duration-300"
                                        onClick={() => openLightbox(event.images, index)}
                                    >
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                                        {/* +N Overlay */}
                                        {index === 5 && event.images.length > 6 && (
                                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold text-lg backdrop-blur-[2px] z-10">
                                                +{event.images.length - 6}
                                            </div>
                                        )}
                                    </LazyThumbnail>
                                ))}

                                {event.images.length === 0 && (
                                    <div className="col-span-3 text-center py-8 text-sm text-gray-400 italic bg-gray-50 rounded-lg">
                                        Tiada imej dijumpai.
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />

            {/* --- LIGHTBOX MODAL --- */}
            {lightbox.isOpen && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-200"
                    onClick={closeLightbox}
                >
                    <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20 z-50">
                        <X className="w-8 h-8" />
                    </button>

                    {lightbox.images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                className="absolute left-4 md:left-8 text-white/70 hover:text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all z-50"
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>

                            <button
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                className="absolute right-4 md:right-8 text-white/70 hover:text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all z-50"
                            >
                                <ChevronRight className="w-8 h-8" />
                            </button>
                        </>
                    )}

                    <div className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center pointer-events-none">

                        {/* LOADER */}
                        {isLightboxLoading && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Loader2 className="w-12 h-12 text-white/50 animate-spin" />
                            </div>
                        )}

                        {/* IMAGE */}
                        {!isLightboxLoading && lightboxSrc && (
                            <img
                                src={lightboxSrc}
                                className="max-h-[85vh] w-auto max-w-full object-contain rounded-lg shadow-2xl pointer-events-auto animate-in fade-in zoom-in-95 duration-300"
                                alt={`View ${lightbox.currentIndex + 1}`}
                                onClick={(e) => e.stopPropagation()}
                            />
                        )}

                        <div className="mt-4 bg-black/50 px-4 py-2 rounded-full text-white/90 text-sm font-medium backdrop-blur-sm pointer-events-auto">
                            {lightbox.currentIndex + 1} / {lightbox.images.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}