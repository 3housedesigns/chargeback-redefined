import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <img
                src="/Eye.png"
                alt="Eye logo"
                className="w-8 h-7 object-contain" 
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold tracking-wide text-3xl text-destructive">SENTINEL</span>
              <span className="text-xs font-normal text-center text-secondary-foreground">CHARGEBACK SOLUTIONS </span>
              
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#calculator" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Calculator
            </a>
            <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Benefits
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Link to="/contact">
              <Button variant="default" size="default">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <nav className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </a>
              <a href="#calculator" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Calculator
              </a>
              <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Benefits
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <Link to="/contact">
                <Button variant="default" size="default" className="w-full mt-2">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Navbar;
