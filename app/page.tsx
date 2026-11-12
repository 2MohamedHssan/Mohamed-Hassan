import HeroCinematic from "@/components/sections/HeroCinematic";
import SkillsSection from "@/components/sections/SkillsSection";
import Certifications from "@/components/sections/Certifications";

export default function Home() {
  return (
    <main className="flex-1 w-full bg-[#000000] text-white">
      <HeroCinematic />
      <SkillsSection />
      <Certifications />
    </main>
  );
}
