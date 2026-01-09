import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 hero-glow opacity-50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <div className="glass-card max-w-4xl mx-auto p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Recover Your{' '}
            <span className="text-gradient-primary">Lost Revenue?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Get a free assessment of your chargeback exposure. No commitment required—just actionable insights.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
          
        </div>
      </div>
    </section>;
};
export default CTASection;
