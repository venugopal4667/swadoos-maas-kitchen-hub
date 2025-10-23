import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { WhyDifferentSection } from "@/components/WhyDifferentSection";
import { MenuHighlights } from "@/components/MenuHighlights";
import { CoverageSection } from "@/components/CoverageSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Why Different Section */}
      <section id="why-different">
        <WhyDifferentSection />
      </section>

      {/* Menu Highlights */}
      <section id="menu">
        <MenuHighlights />
      </section>

      {/* Coverage Area */}
      <section id="coverage">
        <CoverageSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;