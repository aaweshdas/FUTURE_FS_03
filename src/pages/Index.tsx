import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import PlansSection from "@/components/PlansSection";
import TrainersSection from "@/components/TrainersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <PlansSection />
      <TrainersSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
