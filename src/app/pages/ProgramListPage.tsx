import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import {
    Users, ShieldCheck, TrendingUp, Heart, Briefcase, Plane, Leaf, CheckCircle2
} from 'lucide-react';

export function ProgramListPage() {
    const categories = [
        {
            title: "Soft Skills & Leadership",
            icon: Users,
            color: "#0EA5E9",
            courses: [
                "Conflict Management and Customer Service Excellence",
                "Performance Management and Effective Communication Skills",
                "Basic AI for Leadership",
                "Social Media for Marketing"
            ]
        },
        {
            title: "ISO & Compliance",
            icon: ShieldCheck,
            color: "#D4AF37",
            courses: [
                "Basic Awareness and Understanding of ISO 45001:2018",
                "Risk Management of ISO Standards",
                "Awareness of ISO 9001:2015 (QMS)",
                "Awareness of ISO 14001:2015"
            ]
        },
        {
            title: "Financial & Accounting",
            icon: TrendingUp,
            color: "#10B981",
            courses: [
                "E-Invoice Implementation",
                "Company Tax Planning Workshop",
                "Accounting for Non-Accountants"
            ]
        },
        {
            title: "Team Building & Wellness",
            icon: Heart,
            color: "#F43F5E",
            courses: [
                "Employee Wellness Program",
                "High-Impact Team Building Workshop"
            ]
        },
        {
            title: "Entrepreneurship",
            icon: Briefcase,
            color: "#8B5CF6",
            courses: [
                "Kursus Keusahawanan Pengurusan Perkahwinan",
                "Canva untuk Keusahawanan",
                "Who Want to be a Professional Waiter"
            ]
        },
        {
            title: "Airlines Training Module",
            icon: Plane,
            color: "#0284C7",
            courses: [
                "Managing Complaints and Critical Queries",
                "Enrich Awareness Training",
                "Advanced Enrich Handling",
                "Airport Operations",
                "RIT Training Program"
            ]
        },
        {
            title: "ESG Awareness",
            icon: Leaf,
            color: "#22C55E",
            courses: [
                "Carbon Accounting and ESG Reporting",
                "Carbon Neutral 2030: Strategy, Action and Accountability",
                "Carbon Net Zero 2050: Long Term Strategies",
                "Digital Data Management for Carbon Emissions"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Header */}
            <div className="pt-32 pb-12 px-6 bg-[#0E6175] text-center">
                <h1 className="text-4xl md:text-5xl text-white font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Senarai Program & Latihan
                </h1>
                <p className="text-white/80 text-lg max-w-2xl mx-auto font-sans">
                    Modul latihan komprehensif untuk pembangunan profesional dan organisasi.
                </p>
            </div>

            {/* Main Content */}
            <section className="py-16 px-6 bg-gradient-to-b from-white to-[#F0F9FF]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-[20px] p-8 border border-gray-100 hover:border-[#0EA5E9]/30 transition-all duration-300 group"
                                    style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.05)' }}
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: `${category.color}15` }}
                                        >
                                            <Icon className="w-6 h-6" style={{ color: category.color }} />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                                            {category.title}
                                        </h3>
                                    </div>

                                    <ul className="space-y-3">
                                        {category.courses.map((course, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm group-hover:text-gray-900 transition-colors">
                                                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: category.color }} />
                                                <span style={{ fontFamily: 'Inter, sans-serif' }}>{course}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}