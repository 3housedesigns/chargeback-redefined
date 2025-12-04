const Footer = () => {
  return <footer className="py-12 border-t border-border/50">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center overflow-hidden">
              < img
                src="/Eye.png"
                alt="Eye logo"
                className="w-8 h-6 object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold tracking-wide text-3xl text-destructive">SENTINEL</span>
              <span className="text-xs font-normal text-secondary-foreground">CHARGEBACK SOLUTIONS</span>
              
            </div>
          </div>
          
    
          
          <p className="text-sm text-muted-foreground">
            © 2025 Sentinel CS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
