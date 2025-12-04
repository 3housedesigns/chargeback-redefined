import { FileSearch, Scale, Banknote } from "lucide-react";
const steps = [{
  icon: FileSearch,
  step: "01",
  title: "We Audit Your Chargebacks",
  description: "Our team analyzes your operational chargeback history with major retailers to identify recoverable disputes and patterns."
}, {
  icon: Scale,
  step: "02",
  title: "We Fight Your Disputes",
  description: "Leveraging deep retailer relationships and proven processes, we negotiate and dispute illegitimate chargebacks on your behalf."
}, {
  icon: Banknote,
  step: "03",
  title: "You Collect Your Money",
  description: "When we recover funds, you keep 85%. If we don't recover anything, you pay nothing. Zero risk to you."
}];
const HowItWorks = () => {
  return <section className="py-24 md:py-32 relative">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How <span className="text-gradient-primary">It Works</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A simple, risk-free process designed to maximize your recovery
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((item, index) => <div key={item.step} className="relative group" style={{
          animationDelay: `${index * 0.15}s`
        }}>
              {/* Connector line */}
              {index < steps.length - 1 && <div className="hidden md:block absolute top-16 left-[60%] w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />}
              
              <div className="glass-card p-8 h-full transition-all duration-300 hover:-translate-y-2 hover:border-primary/30">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                
                <span className="text-xs font-bold text-primary tracking-wider">STEP {item.step}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-center">{item.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default HowItWorks;