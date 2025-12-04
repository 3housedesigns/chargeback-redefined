import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import SavingsCalculator from "@/components/SavingsCalculator";
import Benefits from "@/components/Benefits";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <section id="how-it-works">
          <HowItWorks />
        </section>
        
        <section id="calculator" className="py-24 md:py-32">
          <div className="container px-4">
            <SavingsCalculator />
          </div>
        </section>
        
        <section id="benefits">
          <Benefits />
        </section>
        
        <section id="contact">
          <CTASection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
