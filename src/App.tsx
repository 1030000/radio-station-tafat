import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/sections/HeroSection';
import { ScheduleSection } from '@/sections/ScheduleSection';
import { NewsSection } from '@/sections/NewsSection';
import { ProgramsSection } from '@/sections/ProgramsSection';
import { CommunitySection } from '@/sections/CommunitySection';
import { EventsSection } from '@/sections/EventsSection';
import { PodcastsSection } from '@/sections/PodcastsSection';
import { NewsletterSection } from '@/sections/NewsletterSection';
import { FooterSection } from '@/sections/FooterSection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-sky-50">
      <Navigation />
      <main>
        <HeroSection />
        <ScheduleSection />
        <NewsSection />
        <ProgramsSection />
        <CommunitySection />
        <EventsSection />
        <PodcastsSection />
        <NewsletterSection />
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
