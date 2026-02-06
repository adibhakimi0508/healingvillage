import { Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';

export function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Header Section */}
            <div className="pt-32 pb-12 px-6 bg-[#0E6175] text-center">
                <h1 className="text-4xl md:text-5xl text-white font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Hubungi Kami
                </h1>
                <p className="text-white/80 text-lg max-w-2xl mx-auto font-sans">
                    Kami sedia membantu perjalanan kesejahteraan anda.
                </p>
            </div>

            {/* Content Container */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Left Column: Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-3xl text-[#0E6175] font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Maklumat Perhubungan
                        </h2>

                        {/* Address */}
                        <div className="flex items-start gap-4 p-6 bg-[#F0F8FA] rounded-2xl border border-[#4297AA]/20">
                            <div className="w-12 h-12 bg-[#0E6175] rounded-full flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#0E6175] text-lg mb-1">Alamat</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    2, Jalan Pudina 24/39A,<br />
                                    Seksyen 24, 40300,<br />
                                    Shah Alam, Selangor
                                </p>
                            </div>
                        </div>

                        {/* Contact Channels */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Email */}
                            <a href="mailto:healingvillage.bdm@gmail.com" className="flex items-center gap-4 p-6 bg-[#F0F8FA] rounded-2xl border border-[#4297AA]/20 hover:shadow-lg transition-all">
                                <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#0E6175]">Email</h3>
                                    <p className="text-sm text-gray-600 break-all">healingvillage.bdm@gmail.com</p>
                                </div>
                            </a>

                            {/* Phone */}
                            <a href="tel:+60194090982" className="flex items-center gap-4 p-6 bg-[#F0F8FA] rounded-2xl border border-[#4297AA]/20 hover:shadow-lg transition-all">
                                <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#0E6175]">Telefon</h3>
                                    <p className="text-sm text-gray-600">+60 19-409 0982</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Social Media */}
                    <div className="space-y-8">
                        <h2 className="text-3xl text-[#0E6175] font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Media Sosial
                        </h2>
                        <p className="text-gray-600 mb-8">Ikuti perkembangan terkini kami di platform berikut:</p>

                        <div className="space-y-4">
                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/60194090982"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-6 rounded-2xl bg-[#25D366] text-white hover:opacity-90 transition-all shadow-md group"
                            >
                                <div className="flex items-center gap-4">
                                    {/* WhatsApp SVG Icon */}
                                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                    <span className="font-bold text-xl">WhatsApp</span>
                                </div>
                                <ArrowLeft className="w-6 h-6 rotate-180 group-hover:translate-x-2 transition-transform" />
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://instagram.com/healingvillage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white hover:opacity-90 transition-all shadow-md group"
                            >
                                <div className="flex items-center gap-4">
                                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current stroke-2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    <span className="font-bold text-xl">Instagram</span>
                                </div>
                                <ArrowLeft className="w-6 h-6 rotate-180 group-hover:translate-x-2 transition-transform" />
                            </a>

                            {/* TikTok */}
                            <a
                                href="https://tiktok.com/@healingvillage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-6 rounded-2xl bg-black text-white hover:opacity-90 transition-all shadow-md group"
                            >
                                <div className="flex items-center gap-4">
                                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.62-1.1-.02 1.48-.02 2.96-.02 4.44v.66c0 2.95-2.28 5.48-5.23 5.6-2.95.12-5.59-2.07-5.91-5.02-.34-2.91 1.65-5.74 4.54-6.18 1.1-.17 2.22-.05 3.25.32v4.06c-.22-.16-.45-.29-.7-.38-.98-.36-2.14-.07-2.85.73-.72.8-1.01 2.06-.52 3.07.48.99 1.63 1.51 2.68 1.3 1.25-.26 2.16-1.41 2.16-2.69V.02Z"/></svg>
                                    <span className="font-bold text-xl">TikTok</span>
                                </div>
                                <ArrowLeft className="w-6 h-6 rotate-180 group-hover:translate-x-2 transition-transform" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}