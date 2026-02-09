import { useState, useEffect, useCallback, useRef } from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { MapPin, Globe, ArrowRight, ChevronLeft, ChevronRight, Hand } from 'lucide-react'; // 👈 Added Hand Icon

// IMPORT LOCAL IMAGES
import heroBg from '../../assets/hero-bg.webp';
import ktAcademyBg from '../../assets/DSC09805.png';
import klassiqueTouchBg from '../../assets/ballroom2e.jpg';

// DATA
const slides = [
    {
        id: 1,
        image: heroBg,
        title: (
            <>
                Transformasi Minda<br />Melalui Pernafasan
            </>
        ),
        description: "Pusat kecemerlangan minda dan kesihatan holistik.",
        primaryButton: {
            text: "Lihat Program",
            action: () => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })
        },
        secondaryButton: {
            text: "Jelajah Peta Maya",
            link: "https://interactivemap.healingvillage.com.my",
            icon: MapPin
        }
    },
    {
        id: 2,
        image: ktAcademyBg,
        title: <>KT Academy</>,
        description: "Latihan profesional dan pembangunan modal insan yang komprehensif.",
        primaryButton: {
            text: "Layari Website",
            link: "https://ktacademy.my",
            icon: Globe
        },
        secondaryButton: null
    },
    {
        id: 3,
        image: klassiqueTouchBg,
        title: <>Klassique Touch</>,
        description: "Pengurusan acara korporat dan majlis eksklusif bertaraf dunia.",
        primaryButton: {
            text: "Layari Website",
            link: "https://klassiquetouch.com.my",
            icon: Globe
        },
        secondaryButton: null
    }
];

export function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [hasInteracted, setHasInteracted] = useState(false); // 👈 Track interaction to hide hint

    // SWIPE STATE
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }, []);

    // SWIPE HANDLERS
    const handleTouchStart = (e: React.TouchEvent) => {
        setHasInteracted(true); // Hide hint on first touch
        if (e.targetTouches && e.targetTouches.length > 0) {
            touchStartX.current = e.targetTouches[0].clientX;
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (e.targetTouches && e.targetTouches.length > 0) {
            touchEndX.current = e.targetTouches[0].clientX;
        }
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const distance = touchStartX.current - touchEndX.current;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) nextSlide();
        else if (isRightSwipe) prevSlide();

        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    // AUTOSLIDE TIMER
    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval);
    }, [currentSlide, nextSlide]);

    return (
        <section
            className="relative h-screen w-full overflow-hidden bg-black group select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* SLIDES RENDERER */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                >
                    <div className="absolute inset-0 pointer-events-none">
                        <ImageWithFallback
                            src={slide.image}
                            alt="Hero Background"
                            className="w-full h-full object-cover scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#0EA5E9]/20 to-black/70"></div>
                    </div>

                    <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 4px 30px rgba(0, 0, 0, 0.5)' }}>
                            {slide.title}
                        </h1>
                        <p className="text-white/90 text-xl md:text-2xl mb-10 max-w-2xl font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {slide.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
                            {slide.primaryButton.action ? (
                                <button onClick={slide.primaryButton.action} className="px-8 py-4 bg-[#0EA5E9] text-white rounded-full hover:bg-[#0284C7] transition-all duration-300 text-lg font-semibold flex items-center justify-center gap-2" style={{ boxShadow: '0 6px 24px rgba(14, 165, 233, 0.4)' }}>
                                    {slide.primaryButton.text}
                                </button>
                            ) : (
                                <a href={slide.primaryButton.link} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#0EA5E9] text-white rounded-full hover:bg-[#0284C7] transition-all duration-300 text-lg font-semibold flex items-center justify-center gap-2" style={{ boxShadow: '0 6px 24px rgba(14, 165, 233, 0.4)' }}>
                                    {slide.primaryButton.icon && <slide.primaryButton.icon className="w-5 h-5" />}
                                    {slide.primaryButton.text}
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            )}
                            {slide.secondaryButton && (
                                <a href={slide.secondaryButton.link} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full text-white text-lg font-semibold flex items-center justify-center gap-2 hover:bg-white/20 active:bg-white/30 transition-all duration-300" style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '2px solid rgba(255, 255, 255, 0.3)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}>
                                    {slide.secondaryButton.icon && <slide.secondaryButton.icon className="w-5 h-5" />}
                                    {slide.secondaryButton.text}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            {/* 👇 MOBILE SWIPE HINT (Visible only on mobile + if not interacted yet) */}
            {!hasInteracted && (
                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 md:hidden animate-pulse pointer-events-none">
                    <Hand className="w-6 h-6 text-white/80 animate-bounce" />
                    <span className="text-white/60 text-xs tracking-widest uppercase">Swipe</span>
                </div>
            )}

            {/* NAVIGATION UI (Arrows & Dots) */}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:scale-110 pointer-events-auto hidden md:block">
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:scale-110 pointer-events-auto hidden md:block">
                <ChevronRight className="w-8 h-8" />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3 pointer-events-auto">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-10 bg-[#0EA5E9]' : 'w-3 bg-white/50 hover:bg-white'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}