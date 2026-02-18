import React from 'react';
import { motion } from 'motion/react';
import {
    Users,
    User,
    Baby,
    Briefcase,
    Heart,
    Wind,
    Brain,
    ShieldCheck,
    Leaf,
    Globe,
    Scale,
    Activity
} from 'lucide-react';

const Card = ({ children, borderColor = "border-gray-200", bgColor = "bg-white", className = "" }: { children: React.ReactNode, borderColor?: string, bgColor?: string, className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`${bgColor} border-2 ${borderColor} rounded-[24px] p-6 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
    >
        {children}
    </motion.div>
);

const SectionHeader = ({ title, subtext }: { title: string, subtext?: string }) => (
    <div className="text-center mb-12">
        <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#0E6175] font-bold mb-4">
            {title}
        </h2>
        {subtext && (
            <p className="font-['Inter'] text-gray-600 max-w-2xl mx-auto">
                {subtext}
            </p>
        )}
    </div>
);

const ConnectorLine = ({ className = "" }: { className?: string }) => (
    <div className={`w-px mx-auto ${className}`} />
);

export const WellnessInfographic = () => {
    return (
        <section className="py-24 px-4 bg-[#F8FDFF] overflow-hidden">
            {/* Reduced space-y-32 to space-y-8 to bring sections closer to the new divider lines */}
            <div className="max-w-6xl mx-auto space-y-8">

                {/* --- MAIN GLOBAL HEADER --- */}
                <div className="text-center pt-8 pb-8">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-['Playfair_Display'] text-4xl md:text-6xl text-[#0284C7] font-medium mb-6 leading-tight"
                    >
                        Memperkasa Manusia, Melestarikan Alam
                    </motion.h1>
                </div>

                {/* Section 1: The Problem Map (Red Theme) */}
                <div className="relative">
                    <SectionHeader
                        title="Realiti Semasa Rakyat Malaysia"
                        subtext="Meneroka krisis kesejahteraan yang melanda pelbagai lapisan masyarakat kita hari ini."
                    />

                    <div className="flex flex-col items-center">
                        {/* Hub */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <div className="w-40 h-40 rounded-full border-4 border-red-500 bg-white flex flex-col items-center justify-center text-center p-4 shadow-xl">
                                <Activity className="text-red-500 mb-2" size={32} />
                                <span className="font-['Inter'] font-bold text-red-600 leading-tight">Cabaran Utama</span>
                            </div>
                        </motion.div>

                        {/* Vertical Connector */}
                        <ConnectorLine className="h-12 bg-red-200" />

                        {/* Horizontal Branch Line */}
                        <div className="w-full max-w-4xl h-px bg-red-200 relative">
                            <div className="absolute left-0 top-0 h-4 w-px bg-red-200" />
                            <div className="absolute left-1/2 top-0 h-4 w-px bg-red-200" />
                            <div className="absolute right-0 top-0 h-4 w-px bg-red-200" />
                        </div>

                        {/* Grid for Groups */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 w-full">
                            {/* Group 1: Kids & Youth */}
                            <div className="space-y-4">
                                <Card borderColor="border-red-200" className="flex items-center gap-4">
                                    <div className="bg-red-50 p-3 rounded-xl">
                                        <Baby className="text-red-500" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-['Playfair_Display'] font-bold text-[#0E6175]">Kanak-kanak</h4>
                                        <p className="font-['Inter'] text-sm text-gray-500">Isu perkembangan & nutrisi</p>
                                    </div>
                                </Card>
                                <Card borderColor="border-red-200" className="flex items-center gap-4">
                                    <div className="bg-red-50 p-3 rounded-xl">
                                        <Users className="text-red-500" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-['Playfair_Display'] font-bold text-[#0E6175]">Remaja</h4>
                                        <p className="font-['Inter'] text-sm text-gray-500">Tekanan mental & sosial</p>
                                    </div>
                                </Card>
                            </div>

                            {/* Group 2: Corporate (Highlighted) */}
                            <div className="flex flex-col justify-center">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-red-600 rounded-[24px] p-8 shadow-xl text-white relative overflow-hidden group"
                                >
                                    <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                                        <Briefcase size={120} />
                                    </div>
                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        <div className="bg-white/20 p-4 rounded-2xl mb-4">
                                            <Briefcase className="text-white" size={32} />
                                        </div>
                                        <h4 className="font-['Playfair_Display'] text-2xl font-bold mb-2">Sektor Korporat</h4>
                                        <p className="font-['Inter'] text-red-50 text-sm">Burnout, stres melampau, dan produktiviti rendah dalam ekosistem kerja moden.</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Group 3: Mothers & Seniors */}
                            <div className="space-y-4">
                                <Card borderColor="border-red-200" className="flex items-center gap-4">
                                    <div className="bg-red-50 p-3 rounded-xl">
                                        <Heart className="text-red-500" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-['Playfair_Display'] font-bold text-[#0E6175]">Ibu-ibu</h4>
                                        <p className="font-['Inter'] text-sm text-gray-500">Keseimbangan kerja & keluarga</p>
                                    </div>
                                </Card>
                                <Card borderColor="border-red-200" className="flex items-center gap-4">
                                    <div className="bg-red-50 p-3 rounded-xl">
                                        <User className="text-red-500" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-['Playfair_Display'] font-bold text-[#0E6175]">Warga Emas</h4>
                                        <p className="font-['Inter'] text-sm text-gray-500">Kesunyian & kesihatan fizikal</p>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- VISUAL DIVIDER 1: Red (Problem) to Blue (Solution) --- */}
                <div className="flex justify-center py-8">
                    <div className="h-32 w-[2px] bg-gradient-to-b from-red-200 to-[#4297AA]/50 rounded-full"></div>
                </div>

                {/* Section 2: The Solution Core (Blue/Teal Theme) */}
                <div className="relative">
                    <SectionHeader
                        title="Solusi: Program Nafas Tenang"
                        subtext="Pendekatan holistik yang menggabungkan sains dan tradisi untuk pemulihan menyeluruh."
                    />

                    <div className="relative min-h-[500px] flex items-center justify-center">
                        {/* SVG Lines for Hub and Spoke */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 800 500">
                            <line x1="400" y1="250" x2="200" y2="150" stroke="#4297AA" strokeWidth="2" strokeDasharray="4 4" />
                            <line x1="400" y1="250" x2="200" y2="350" stroke="#4297AA" strokeWidth="2" strokeDasharray="4 4" />
                            <line x1="400" y1="250" x2="600" y2="150" stroke="#4297AA" strokeWidth="2" strokeDasharray="4 4" />
                            <line x1="400" y1="250" x2="600" y2="350" stroke="#4297AA" strokeWidth="2" strokeDasharray="4 4" />
                        </svg>

                        {/* Mobile Vertical Lines */}
                        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-teal-100 md:hidden" />

                        {/* Hub and Spoke Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center w-full max-w-5xl z-10">
                            {/* Left Column */}
                            <div className="space-y-12 order-2 md:order-1">
                                <Card borderColor="border-[#4297AA]" className="text-center md:text-right">
                                    <div className="bg-cyan-50 p-3 rounded-xl w-fit mb-4 mx-auto md:ml-auto md:mr-0">
                                        <Wind className="text-[#4297AA]" size={24} />
                                    </div>
                                    <h4 className="font-['Playfair_Display'] font-bold text-[#0E6175] text-xl mb-2">Sains Pernafasan</h4>
                                    <p className="font-['Inter'] text-sm text-gray-500">Teknik pernafasan berasaskan bukti klinikal untuk regulasi sistem saraf.</p>
                                </Card>
                                <Card borderColor="border-[#4297AA]" className="text-center md:text-right">
                                    <div className="bg-cyan-50 p-3 rounded-xl w-fit mb-4 mx-auto md:ml-auto md:mr-0">
                                        <Brain className="text-[#4297AA]" size={24} />
                                    </div>
                                    <h4 className="font-['Playfair_Display'] font-bold text-[#0E6175] text-xl mb-2">Mindfulness Somatik</h4>
                                    <p className="font-['Inter'] text-sm text-gray-500">Kesedaran tubuh untuk melepaskan trauma dan ketegangan fizikal terpendam.</p>
                                </Card>
                            </div>

                            {/* Center Hub */}
                            <div className="flex justify-center order-1 md:order-2">
                                <motion.div
                                    animate={{
                                        boxShadow: ["0 0 0 0px rgba(14, 97, 117, 0.4)", "0 0 0 20px rgba(14, 97, 117, 0)"],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="w-56 h-56 rounded-full bg-[#0E6175] flex items-center justify-center text-center p-8 shadow-2xl"
                                >
                                    <div className="text-white">
                                        <Wind className="mx-auto mb-3" size={40} />
                                        <h3 className="font-['Playfair_Display'] text-2xl font-bold leading-tight">Nafas Tenang</h3>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-12 order-3">
                                <Card borderColor="border-[#4297AA]" className="text-center md:text-left">
                                    <div className="bg-cyan-50 p-3 rounded-xl w-fit mb-4 mx-auto md:mr-auto md:ml-0">
                                        <ShieldCheck className="text-[#4297AA]" size={24} />
                                    </div>
                                    <h4 className="font-['Playfair_Display'] font-bold text-[#0E6175] text-xl mb-2">Regulasi Emosi</h4>
                                    <p className="font-['Inter'] text-sm text-gray-500">Strategi menguruskan respon emosi terhadap tekanan kerja dan persekitaran.</p>
                                </Card>
                                <Card borderColor="border-[#4297AA]" className="text-center md:text-left">
                                    <div className="bg-cyan-50 p-3 rounded-xl w-fit mb-4 mx-auto md:mr-auto md:ml-0">
                                        <Activity className="text-[#4297AA]" size={24} />
                                    </div>
                                    <h4 className="font-['Playfair_Display'] font-bold text-[#0E6175] text-xl mb-2">Elemen Holistik</h4>
                                    <p className="font-['Inter'] text-sm text-gray-500">Integrasi pemakanan, pergerakan, dan alam semulajadi untuk pemulihan.</p>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- VISUAL DIVIDER 2: Blue (Solution) to Green (ESG) --- */}
                <div className="flex justify-center py-8">
                    <div className="h-32 w-[2px] bg-gradient-to-b from-[#4297AA]/50 to-emerald-200 rounded-full"></div>
                </div>

                {/* Section 3: ESG Impact Tree (Green/Blue/Purple Theme) */}
                <div>
                    <SectionHeader
                        title="Impak E.S.G"
                        subtext="Komitmen kami terhadap kelestarian alam, kesejahteraan sosial, dan tadbir urus beretika."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Environmental */}
                        <Card borderColor="border-emerald-200" className="group">
                            <div className="mb-6 flex justify-between items-start">
                                <div className="bg-emerald-100 p-4 rounded-2xl group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                                    <Leaf size={32} className="text-emerald-600 group-hover:text-white" />
                                </div>
                                <span className="text-6xl font-black text-emerald-50 opacity-100 group-hover:text-emerald-100 transition-colors">E</span>
                            </div>
                            <h4 className="font-['Playfair_Display'] text-2xl font-bold text-[#0E6175] mb-4">Environmental</h4>
                            <p className="font-['Inter'] text-gray-600 leading-relaxed">
                                Pemuliharaan ekosistem hutan hujan tropika Malaysia dan amalan operasi rendah karbon di setiap premis kami.
                            </p>
                            <ul className="mt-6 space-y-2 font-['Inter'] text-sm text-emerald-700">
                                <li className="flex items-center gap-2">• Sifar Plastik Sekali Guna</li>
                                <li className="flex items-center gap-2">• Pemuliharaan Biodiversiti</li>
                            </ul>
                        </Card>

                        {/* Social */}
                        <Card borderColor="border-blue-200" className="group">
                            <div className="mb-6 flex justify-between items-start">
                                <div className="bg-blue-100 p-4 rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                    <Globe size={32} className="text-blue-600 group-hover:text-white" />
                                </div>
                                <span className="text-6xl font-black text-blue-50 opacity-100 group-hover:text-blue-100 transition-colors">S</span>
                            </div>
                            <h4 className="font-['Playfair_Display'] text-2xl font-bold text-[#0E6175] mb-4">Social</h4>
                            <p className="font-['Inter'] text-gray-600 leading-relaxed">
                                Meningkatkan taraf hidup komuniti tempatan dan memperkasakan kesihatan mental tenaga kerja korporat negara.
                            </p>
                            <ul className="mt-6 space-y-2 font-['Inter'] text-sm text-blue-700">
                                <li className="flex items-center gap-2">• Sokongan Kesihatan Mental</li>
                                <li className="flex items-center gap-2">• Pemerkasaan Komuniti</li>
                            </ul>
                        </Card>

                        {/* Governance */}
                        <Card borderColor="border-purple-200" className="group">
                            <div className="mb-6 flex justify-between items-start">
                                <div className="bg-purple-100 p-4 rounded-2xl group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                                    <Scale size={32} className="text-purple-600 group-hover:text-white" />
                                </div>
                                <span className="text-6xl font-black text-purple-50 opacity-100 group-hover:text-purple-100 transition-colors">G</span>
                            </div>
                            <h4 className="font-['Playfair_Display'] text-2xl font-bold text-[#0E6175] mb-4">Governance</h4>
                            <p className="font-['Inter'] text-gray-600 leading-relaxed">
                                Ketelusan dalam laporan impak dan tadbir urus yang mengutamakan integriti serta akauntabiliti pihak berkepentingan.
                            </p>
                            <ul className="mt-6 space-y-2 font-['Inter'] text-sm text-purple-700">
                                <li className="flex items-center gap-2">• Laporan Impak Telus</li>
                                <li className="flex items-center gap-2">• Etika Perniagaan Tinggi</li>
                            </ul>
                        </Card>
                    </div>
                </div>

            </div>
        </section>
    );
};