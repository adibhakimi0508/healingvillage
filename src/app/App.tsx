import { Navigation } from '@/app/components/Navigation';
import { HeroSection } from '@/app/components/HeroSection';
import { LeadershipGrid } from '@/app/components/LeadershipGrid';
import { MapTeaser } from '@/app/components/MapTeaser';
import { ProgramHighlights } from '@/app/components/ProgramHighlights';
import { FloatingBar } from '@/app/components/FloatingBar';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <LeadershipGrid />
        <MapTeaser />
        <ProgramHighlights />
      </main>
      <FloatingBar />
      <Footer />
    </div>
  );
}
