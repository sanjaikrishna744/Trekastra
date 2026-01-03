import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { AIExplanationSection } from "@/components/landing/AIExplanationSection";
import { FutureScopeSection } from "@/components/landing/FutureScopeSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AIExplanationSection />
      <FutureScopeSection />
      <Footer />
    </div>
  );
};

export default Index;
