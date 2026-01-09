import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Send, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all mandatory fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Construct mailto link with form data
    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Position: ${formData.position || "Not provided"}\n` +
      `Company: ${formData.company || "Not provided"}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    // Open mailto link
    window.location.href = `mailto:compliance@sentinelcbs.com?subject=${subject}&body=${body}`;

    // Show success state after a brief delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container relative z-10 px-4">
          <div className="glass-card max-w-lg mx-auto p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-muted-foreground mb-8">
              Thank you for your message. We will respond to you as quickly as possible.
            </p>
            <Link to="/">
              <Button variant="outline" size="lg">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12">
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        <div className="glass-card max-w-xl mx-auto p-8 md:p-12">
          {/* Logo Header */}
          <div className="text-center mb-10">
            <img 
              src="/Sentinel.png" 
              alt="Sentinel Logo" 
              className="mx-auto w-24 h-auto mb-4"
            />
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold tracking-wider text-foreground">SENTINEL</span>
              <span className="text-sm text-muted-foreground">chargeback</span>
              <span className="text-sm text-muted-foreground">solutions</span>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">Get In Touch</h1>
          <p className="text-muted-foreground text-center mb-8">
            Fill out the form below and we'll get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">
                Name <span className="text-primary">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-secondary/50 border-border/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="position">Position</Label>
              <Input
                id="position"
                name="position"
                type="text"
                placeholder="Your position (optional)"
                value={formData.position}
                onChange={handleChange}
                className="bg-secondary/50 border-border/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Your company (optional)"
                value={formData.company}
                onChange={handleChange}
                className="bg-secondary/50 border-border/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-primary">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-secondary/50 border-border/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">
                Message <span className="text-primary">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-secondary/50 border-border/50 resize-none"
              />
            </div>

            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <div className="mt-8 text-center">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
