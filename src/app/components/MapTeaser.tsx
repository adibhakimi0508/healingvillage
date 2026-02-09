import { MapPin, Navigation as NavigationIcon } from 'lucide-react';
import mapTeaserBg from '../../assets/mapteaser.jpg';

export function MapTeaser() {
    return (
        <section className="relative h-[600px] overflow-hidden">
            {/* Parallax Background */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${mapTeaserBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Blue Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0284C7]/80 to-[#0EA5E9]/60"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center justify-end">

                {/* Glass Card Widget */}
                <div
                    className="w-full max-w-md p-8"
                    style={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '24px',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                    }}
                >
                    {/* LIVE Badge */}
                    <div className="flex items-center gap-2 mb-6">
                        <div className="relative">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                            <div className="absolute inset-0 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                        </div>
                        <span className="text-white text-xs font-bold tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
              LIVE PREVIEW
            </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl text-white mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Jelajah Peta<br />Healing Village
                    </h3>

                    <p className="text-white/90 mb-8 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Terokai fasiliti kami melalui tour maya 360° yang interaktif
                    </p>

                    {/* CTA Button - REVERTED TO GOLD */}
                    <a
                        href="https://earth.google.com/web/search/KT+Ballroom+%e2%80%a2+KWE+Shah+Alam,+Jalan+Pudina+24%2f39A,+Section+24,+Shah+Alam,+Selangor/@3.03569355,101.52218034,11.67407669a,203.29649521d,35y,0h,0t,0r/data=CsQBGpUBEo4BCiUweDMxY2M1MmFhZDE0M2M4Njk6MHhiMTgzNTlhMzM5MTQ4MjdiGe5FD9fFSAhAIUbFSatrYVlAKlNLVCBCYWxscm9vbSDigKIgS1dFIFNoYWggQWxhbSwgSmFsYW4gUHVkaW5hIDI0LzM5QSwgU2VjdGlvbiAyNCwgU2hhaCBBbGFtLCBTZWxhbmdvchgCIAEiJgokCR_9530eOjRAER39530eOjTAGY0tTHkOP0lAIePWEwecn0nAQgIIAToDCgEwQgIIAEoNCP___________wEQAQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-6 py-4 bg-[#D4AF37] text-white rounded-full hover:bg-[#c19d2f] active:bg-[#b08e28] transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-lg group"
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            boxShadow: '0 6px 24px rgba(212, 175, 55, 0.4)'
                        }}
                    >
                        <NavigationIcon className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                        Mulakan Tour Maya 360°
                    </a>

                    {/* Info Pills */}
                    <div className="flex flex-wrap gap-2 mt-6">
                        <div className="px-4 py-2 rounded-full text-white text-xs font-semibold" style={{ background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)', fontFamily: 'Inter, sans-serif' }}>
                            📍 KT Ballroom
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}