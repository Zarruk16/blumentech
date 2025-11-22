import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import blumenLogo from "@/assets/blumen-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Solutions", href: "#solutions" },
    { name: "Ecosystem", href: "#ecosystem" },
    { name: "Team", href: "#team" },
    { name: "Partners", href: "#partners" },
    { name: "Case Studies", href: "#cases" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
          <div className="flex items-center space-x-1 sm:space-x-2 min-w-0 flex-shrink">
            <img src={blumenLogo} alt="Blumen Technologies" className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto flex-shrink-0" />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-display font-bold text-foreground whitespace-nowrap">
              <span>BLUMEN </span><span className="text-primary">TECHNOLOGIES</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 flex-shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" size="sm" className="ml-2 xl:ml-4 glow-primary text-xs xl:text-sm px-3 xl:px-4">
              Partner With Us
            </Button>
          </div>

          {/* Tablet Navigation - Compact */}
          <div className="hidden md:flex lg:hidden items-center space-x-1 flex-shrink-0">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-1.5 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" size="sm" className="ml-2 glow-primary text-xs px-2">
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground flex-shrink-0"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" size="sm" className="w-full mt-4 glow-primary">
              Partner With Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
