import { ShieldCheck, TrendingUp, Clock, Users, Lock, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Zero Risk Model",
    description: "Pay only when we successfully recover your funds. No hidden fees, no retainers.",
  },
  {
    icon: TrendingUp,
    title: "Industry-Leading Recovery",
    description: "Our 94% success rate means more money back in your pocket, faster.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Average recovery time of 45 days. We move fast to get your money back.",
  },
  {
    icon: Users,
    title: "Retailer Expertise",
    description: "Deep relationships with Walmart, Amazon, Target, Costco, and more.",
  },
  {
    icon: Lock,
    title: "Full Transparency",
    description: "Receive real results of payback once they occur.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Actionable analytics to prevent future chargebacks and protect margins.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient-primary">Sentinel</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The trusted partner for operational chargeback recovery
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
