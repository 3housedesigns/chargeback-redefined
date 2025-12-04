import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
            <span className="text-sm font-medium text-primary">No Recovery, No Fee</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-up" style={{
          animationDelay: '0.1s'
        }}>
            Stop Losing Money to{' '}
            <span className="text-gradient-primary">Operational Chargebacks</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{
          animationDelay: '0.2s'
        }}>We process and recover funds from major retailers on your behalf. Our personalized and success-based model means you only pay when we deliver results.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{
          animationDelay: '0.3s'
        }}>
            <Button variant="hero" size="xl">
               <a href="mailto:compliance@sentinelcbs.com">
                  Get Free Assessment
              <ArrowRight className="w-5 h-5" />
                </a>
            </Button>
            <Button variant="hero-outline" size="xl">
              See How It Works
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto animate-fade-up" style={{
          animationDelay: '0.4s'
        }}>
            <div className="text-center">
              <p className="stat-number text-foreground">$47M+</p>
              <p className="text-sm text-muted-foreground mt-1">Recovered</p>
            </div>
            <div className="text-center">
              <p className="stat-number text-foreground">94%</p>
              <p className="text-sm text-muted-foreground mt-1">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="stat-number text-foreground">200+</p>
              <p className="text-sm text-muted-foreground mt-1">Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
