import { About } from "@/components/About";
import { CommunityGrowth } from "@/components/CommunityGrowth";
import { CompaniesEcosystem } from "@/components/CompaniesEcosystem";
import { Contact } from "@/components/Contact";
import { EsportsAthlete } from "@/components/EsportsAthlete";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Freelance } from "@/components/Freelance";
import { GamepadCursor } from "@/components/GamepadCursor";
import { Hero } from "@/components/Hero";
import { KeyStats } from "@/components/KeyStats";
import { Nav } from "@/components/Nav";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { Web3Experience } from "@/components/Web3Experience";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-background font-body">
      <GamepadCursor />
      <Nav />
      <main>
        <Hero />
        <KeyStats />
        <CompaniesEcosystem />
        <About />
        <Services />
        <Experience />
        <Freelance />
        <CommunityGrowth />
        <Web3Experience />
        <TechStack />
        <EsportsAthlete />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
