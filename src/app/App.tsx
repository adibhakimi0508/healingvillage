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
import { WellnessInfographic } from '@/app/components/WellnessInfographic';
import { ContactPage } from '@/app/pages/ContactPage';
import { ProgramListPage } from '@/app/pages/ProgramListPage';
import { FullGalleryPage } from '@/app/pages/FullGalleryPage';
import ScrollToTop from '@/app/components/ScrollToTop';

function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <main>
                <div id="home"><HeroSection /></div>
                <div id="WellnessInfographic"><WellnessInfographic /></div>
                <div id="leadership"><LeadershipBento /></div>
                <div id="campus"><MapTeaser /></div>
                <div id="bulletin"><CommunityBulletin /></div>
                <div id="programs"><ProgramHighlights /></div>
                <div id="gallery"><MomentsGallery /></div>
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
            {/* 👇 PLACE IT HERE (Inside Router, outside Routes) */}
            <ScrollToTop />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/hubungi-kami" element={<ContactPage />} />
                <Route path="/senarai-program" element={<ProgramListPage />} />
                <Route path="/gallery" element={<FullGalleryPage />} />
            </Routes>
        </BrowserRouter>
    );
}