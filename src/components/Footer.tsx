import blumenLogo from "@/assets/blumen-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-2">
            <img src={blumenLogo} alt="Blumen Technologies" className="h-8 w-auto" />
            <span className="text-lg font-display font-bold">
              BLUMEN <span className="text-primary">TECHNOLOGIES</span>
            </span>
          </div>
          
          <p className="text-muted-foreground text-center max-w-md">
            Powering Africa's Digital & Energy Infrastructure
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors">
              Solutions
            </a>
            <a href="#ecosystem" className="text-muted-foreground hover:text-foreground transition-colors">
              Ecosystem
            </a>
            <a href="#partners" className="text-muted-foreground hover:text-foreground transition-colors">
              Partners
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          <div className="pt-6 border-t border-border w-full text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Blumen Technologies Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
