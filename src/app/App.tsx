import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/app/components/Navigation';
import { HeroSection } from '@/app/components/HeroSection';
import { LeadershipBento } from '@/app/components/LeadershipBento';
import { MapTeaser } from '@/app/components/MapTeaser';
import { CommunityBulletin } from '@/app/components/CommunityBulletin';
import { ProgramHighlights } from '@/app/components/ProgramHighlights';
import { MomentsGallery } from '@/app/components/MomentsGallery';
import { FooterCTA } from '@/app/components/FooterCTA';
import { FloatingBar } from '@/app/components/FloatingBar';
import { Footer } from '@/app/components/Footer';
import { ContactPage } from '@/app/pages/ContactPage';

function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <main>
                {/* 1. Hero Section */}
                <div id="home">
                    <HeroSection />
                </div>

                {/* 2. Leadership */}
                <div id="leadership">
                    <LeadershipBento />
                </div>

                {/* 3. Map Teaser */}
                <div id="campus">
                    <MapTeaser />
                </div>

                {/* 4. Bulletin - ADDED ID HERE */}
                <div id="bulletin">
                    <CommunityBulletin />
                </div>

                {/* 5. Program Highlights */}
                <div id="programs">
                    <ProgramHighlights />
                </div>

                {/* 6. Gallery - ADDED ID HERE */}
                <div id="gallery">
                    <MomentsGallery />
                </div>

                {/* 7. Footer CTA */}
                <FooterCTA />
            </main>
            <FloatingBar />
            <Footer />
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/hubungi-kami" element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    );
}