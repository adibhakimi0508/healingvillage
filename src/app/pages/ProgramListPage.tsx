import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import {
    Users, ShieldCheck, TrendingUp, Heart, Briefcase, Plane, Leaf, Wind, Clock, Hash, BookOpen
} from 'lucide-react';

export function ProgramListPage() {

    // --- DATA: TRAINING CALENDAR 2025 ---
    const trainingModules = [
        {
            category: "Breathwork and Mental Health",
            icon: Wind,
            color: "#0EA5E9", // Sky Blue
            items: [
                { name: "Breathwork for Healthier Workspace", no: "10001530368", days: 0.5 },
                { name: "Mental Health Management: Breathwork", no: "10001527912", days: 1 },
                { name: "Breathwork for Hiking", no: "10001529672", days: 1 },
                { name: "Self Awakening for Critical Thinking", no: "10001529578", days: 1 },
            ]
        },
        {
            category: "Leadership and Soft Skill",
            icon: Users,
            color: "#F59E0B", // Amber
            items: [
                { name: "Conflict Management and Customer Service Excellence", no: "10001527222", days: 1 },
                { name: "Performance Management and Effective Communication Skills", no: "10001527425", days: 1 },
                { name: "Basic AI for Leadership", no: "10001529322", days: 2 },
                { name: "Social Media for Marketing", no: "10001529477", days: 1 },
            ]
        },
        {
            category: "ISO Awareness",
            icon: ShieldCheck,
            color: "#D4AF37", // Gold
            items: [
                { name: "Basic Awareness and Understanding of ISO 45001:2018", no: "10001527890", days: 1 },
                { name: "Risk Management of ISO Standards", no: "10001527891", days: 2 },
                { name: "Awareness of ISO 9001:2015 (QMS)", no: "10001527893", days: 1 },
                { name: "Awareness of ISO 14001:2015", no: "10001527896", days: 1 },
            ]
        },
        {
            category: "Financial and Accounting",
            icon: TrendingUp,
            color: "#10B981", // Emerald
            items: [
                { name: "E-Invoice Implementation", no: "10001527881", days: 1 },
                { name: "Company Tax Planning Workshop", no: "10001527898", days: 1 },
                { name: "Accounting for Non-Accountants", no: "10001527877", days: 1 },
            ]
        },
        {
            category: "Team Building & Wellness",
            icon: Heart,
            color: "#F43F5E", // Rose
            items: [
                { name: "Employee Wellness Program", no: "10001538654", days: 1 },
                { name: "High-Impact Team Building Workshop", no: "10001538277", days: 2 },
            ]
        },
        {
            category: "Entrepreneurship",
            icon: Briefcase,
            color: "#8B5CF6", // Violet
            items: [
                { name: "Kursus Keusahawanan Pengurusan Perkahwinan", no: "10001540009", days: 3 },
                { name: "Canva Untuk Keusahawanan", no: "10001548570", days: 1 },
                { name: "Who Want to be a Professional Waiter", no: "10001558149", days: 1 },
            ]
        },
        {
            category: "Airlines Training Module",
            icon: Plane,
            color: "#0284C7", // Sky Dark
            items: [
                { name: "Managing Complaints and Critical Queries", no: "10001549910", days: 1 },
                { name: "Enrich Awareness Training", no: "10001550232", days: 1 },
                { name: "Advanced Enrich Handling", no: "10001549958", days: 1 },
                { name: "Airport Operations", no: "10001550469", days: 2 },
                { name: "RIT Training Program", no: "10001549972", days: 5 },
            ]
        },
        {
            category: "ESG Awareness",
            icon: Leaf,
            color: "#22C55E", // Green
            items: [
                { name: "Carbon Accounting and ESG Reporting", no: "10001555502", days: 2 },
                { name: "Carbon Neutral 2030: Strategy, Action and Accountability", no: "10001558384", days: 2 },
                { name: "Carbon Net Zero 2050: Long Term Strategies", no: "10001556590", days: 2 },
                { name: "Digital Data Management for Carbon Emissions", no: "10001556135", days: 2 },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#F8FDFF]">
            <Navigation />

            {/* Header */}
            <div className="pt-32 pb-16 px-6 bg-gradient-to-r from-[#0E6175] to-[#094656] text-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="relative z-10">
                    <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-semibold tracking-wider uppercase mb-6 border border-white/20">
                        Training Calendar 2025
                    </span>
                    <h1 className="text-4xl md:text-5xl text-white font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Senarai Program & Latihan
                    </h1>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto font-sans leading-relaxed">
                        Modul latihan komprehensif yang direka khusus untuk pembangunan profesional,
                        kepimpinan, dan kesejahteraan organisasi.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto space-y-24">

                    {trainingModules.map((module, index) => {
                        const Icon = module.icon;

                        return (
                            <div key={index} className="scroll-mt-28" id={module.category.toLowerCase().replace(/\s+/g, '-')}>

                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-10 border-b border-[#0E6175]/10 pb-6">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm transform rotate-3"
                                        style={{ backgroundColor: `${module.color}15` }}
                                    >
                                        <Icon className="w-7 h-7" style={{ color: module.color }} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-[#0E6175]" style={{ fontFamily: 'Playfair Display, serif' }}>
                                        {module.category}
                                    </h3>
                                </div>

                                {/* Cards Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {module.items.map((item, itemIndex) => (
                                        <div
                                            key={itemIndex}
                                            className="group bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full relative overflow-hidden"
                                        >
                                            {/* Top accent bar */}
                                            <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: module.color }}></div>

                                            <div>
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="p-2.5 bg-slate-50 rounded-lg group-hover:bg-[#0E6175] group-hover:text-white transition-colors duration-300">
                                                        <BookOpen className="w-5 h-5 text-slate-400 group-hover:text-white" />
                                                    </div>
                                                </div>

                                                <h4 className="text-lg font-bold text-slate-800 mb-2 leading-snug font-serif">
                                                    {item.name}
                                                </h4>
                                            </div>

                                            {/* Meta Data */}
                                            <div className="mt-6 pt-5 border-t border-slate-50 flex items-center justify-between text-sm">
                                                <div className="flex items-center gap-2 text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full font-medium">
                                                    <Clock className="w-4 h-4 text-[#0E6175]" />
                                                    <span>{item.days} {item.days === 1 ? 'Day' : 'Days'}</span>
                                                </div>

                                                <div className="flex items-center gap-1.5 text-slate-400 font-mono text-xs" title="Program Code">
                                                    <Hash className="w-3 h-3" />
                                                    <span>{item.no}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <Footer />
        </div>
    );
}