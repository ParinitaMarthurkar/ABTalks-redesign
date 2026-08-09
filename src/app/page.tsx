import Hero from "./components/landing/Hero";
import HeroStats from "./components/landing/HeroStats";
import HowItWorks from "./components/landing/HowItWorks";
import WhyChooseSection from "./components/landing/WhyChooseSection";
import ChallengePreviewSection from "./components/landing/ChallengePreviewSection";
import FinalCTA from "./components/landing/FinalCTA";
export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <HeroStats />
      <HowItWorks />
      <WhyChooseSection />
      <ChallengePreviewSection />
      <FinalCTA />
    </main>
  );
}