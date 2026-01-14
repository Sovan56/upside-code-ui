import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RegisterSection from "@/components/RegisterSection";
import EventDetailsSection from "@/components/EventDetailsSection";
import Footer from "@/components/Footer";
import Overlays from "@/components/Overlays";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Visual Overlays */}
      <Overlays />
      
      {/* Navigation */}
      <Header />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <RegisterSection />
        <EventDetailsSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
