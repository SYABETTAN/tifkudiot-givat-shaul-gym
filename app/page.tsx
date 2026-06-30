import { Hero } from "@/components/sections/Hero";
import { WhyTifkudiot } from "@/components/sections/WhyTifkudiot";
import { FunctionalMethod } from "@/components/sections/FunctionalMethod";
import { MovementExperience } from "@/components/sections/MovementExperience";
import { ForWho } from "@/components/sections/ForWho";
import { Reviews } from "@/components/sections/Reviews";
import { PracticalInfo } from "@/components/sections/PracticalInfo";
import { Location } from "@/components/sections/Location";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { businessData } from "@/lib/business-data";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyTifkudiot />
      <FunctionalMethod />
      <MovementExperience />
      <ForWho />
      <Reviews />
      <PracticalInfo />
      <Location />
      <FAQ />
      <FinalCTA />
      <footer className="border-t border-white/10 bg-navy px-5 py-10 text-center text-sm text-concrete/50 md:px-8">
        <p>
          © {new Date().getFullYear()} {businessData.name} — {businessData.demo.bannerText}
        </p>
        <p className="mt-2">{businessData.demo.preparedBy}</p>
      </footer>
    </>
  );
}
