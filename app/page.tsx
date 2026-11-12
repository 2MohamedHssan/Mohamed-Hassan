import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import Certifications from "@/components/sections/Certifications";
import HeroCinematic from "@/components/sections/HeroCinematic";
import ScrollHero from "@/components/sections/ImageReveal";
import ShowcaseSection from "@/components/sections/Show";

export default function Home() {
  return (
    <main className="flex-1 w-full bg-[#050508] text-white">
      <HeroCinematic />
      <AboutSection />
      <SkillsSection />
      <ShowcaseSection />
      <Certifications />
      <ScrollHero />
    </main>
  );
}
