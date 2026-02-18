import { Instagram, Facebook } from 'lucide-react'; // Added Facebook to imports
import { useEffect, useState } from 'react';

// 1. Custom WhatsApp Icon
function WhatsAppIcon() {
    return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
    );
}

// 2. Custom TikTok Icon
function TikTokIcon() {
    return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
    );
}

export function FloatingBar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Logic: Show bar only when user has scrolled past the Hero section (roughly 1 viewport height)
            const heroHeight = window.innerHeight * 0.8;

            if (window.scrollY > heroHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'
            }`}
        >
            {/* WhatsApp */}
            <a
                href="https://api.whatsapp.com/send?phone=60194090982&text=HealingVillage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group active:scale-95"
                style={{ boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)' }}
                aria-label="WhatsApp"
            >
                <WhatsAppIcon />
            </a>

            {/* Facebook (NEW) */}
            <a
                href="https://www.facebook.com/share/1DUDBfLx8U/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group active:scale-95"
                style={{ boxShadow: '0 4px 20px rgba(24, 119, 242, 0.3)' }}
                aria-label="Facebook"
            >
                <Facebook className="w-7 h-7" />
            </a>

            {/* Instagram */}
            <a
                href="https://instagram.com/healingvillage.my"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group active:scale-95"
                style={{ boxShadow: '0 4px 20px rgba(253, 29, 29, 0.3)' }}
                aria-label="Instagram"
            >
                <Instagram className="w-7 h-7" />
            </a>

            {/* TikTok */}
            <a
                href="https://tiktok.com/@healingvillage.my"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group active:scale-95"
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}
                aria-label="Share on TikTok"
            >
                <TikTokIcon />
            </a>
        </div>
    );
}