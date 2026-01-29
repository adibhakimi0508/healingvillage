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

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* 1. Hero Section */}
        <HeroSection />
        
        {/* 2. Leadership & Visi (Bento Grid) */}
        <LeadershipBento />
        
        {/* 3. Interactive Map Teaser */}
        <MapTeaser />
        
        {/* 4. Community Bulletin Board */}
        <CommunityBulletin />
        
        {/* 5. Program Highlights */}
        <ProgramHighlights />
        
        {/* 6. Moments Gallery */}
        <MomentsGallery />
        
        {/* 7. Footer CTA */}
        <FooterCTA />
      </main>
      <FloatingBar />
      <Footer />
    </div>
  );
}