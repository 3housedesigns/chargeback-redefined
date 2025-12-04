import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
const SavingsCalculator = () => {
  const [chargebackAmount, setChargebackAmount] = useState([250000]);
  const [displayedSavings, setDisplayedSavings] = useState(0);
  const [displayedFee, setDisplayedFee] = useState(0);
  const amount = chargebackAmount[0];
  const recoveryRate = 0.70; // 70% average recovery rate
  const feePercentage = 0.15; // 15% fee

  const potentialRecovery = amount * recoveryRate;
  const fee = potentialRecovery * feePercentage;
  const netSavings = potentialRecovery - fee;
  useEffect(() => {
    const duration = 500;
    const steps = 30;
    const stepDuration = duration / steps;
    const savingsIncrement = (netSavings - displayedSavings) / steps;
    const feeIncrement = (fee - displayedFee) / steps;
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setDisplayedSavings(prev => prev + savingsIncrement);
      setDisplayedFee(prev => prev + feeIncrement);
      if (currentStep >= steps) {
        clearInterval(interval);
        setDisplayedSavings(netSavings);
        setDisplayedFee(fee);
      }
    }, stepDuration);
    return () => clearInterval(interval);
  }, [amount]);
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };
  const formatCompact = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    }
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`;
    }
    return formatCurrency(value);
  };
  return <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          Calculate Your <span className="text-gradient-primary">Potential Savings</span>
        </h3>
        <p className="text-muted-foreground">
          Estimate how much you could recover from operational chargebacks
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-muted-foreground">Estimated Chargeback Amount</span>
            <span className="text-2xl font-bold text-foreground">{formatCurrency(amount)}</span>
          </div>
          <Slider value={chargebackAmount} onValueChange={setChargebackAmount} max={2000000} min={10000} step={10000} className="w-full" />
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>$10K</span>
            <span>$2M</span>
          </div>
        </div>

        <div className="h-px bg-border" />

        <div className="grid grid-cols-2 gap-6">
          <div className="text-center p-6 rounded-xl bg-muted/50">
            <p className="text-sm text-muted-foreground mb-2">Potential Recovery</p>
            <p className="stat-number text-gradient-primary">
              {formatCompact(potentialRecovery)}
            </p>
            <p className="text-xs text-muted-foreground mt-1">~70% recovery rate</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-muted/50">
            <p className="text-sm text-muted-foreground mb-2">Your Net Savings</p>
            <p className="stat-number text-foreground">
              {formatCompact(displayedSavings)}
            </p>
            <p className="text-xs text-muted-foreground mt-1">After our 15% fee</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Our Fee (Only If We Recover)</p>
              <p className="text-xs text-muted-foreground">No recovery = No payment</p>
            </div>
            <p className="text-xl font-bold text-primary">{formatCurrency(displayedFee)}</p>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground">* Estimates based on average recovery rates. Actual results and fees may vary.</p>
      </div>
    </div>;
};
export default SavingsCalculator;