import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]" />
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-glow-pulse">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Enterprise Technology Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            Powering Africa's <br />
            <span className="text-gradient">Digital & Energy Infrastructure</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Tech, Energy, Fintech & Infrastructure Solutions for a Connected Future
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group text-base px-8 glow-primary" asChild>
              <a href="#solutions">
                Explore Our Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 border-primary/50 hover:bg-primary/10" asChild>
              <a href="#contact">Partner With Us</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border/50">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Subsidiaries</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Enterprise Clients</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">6</div>
              <div className="text-sm text-muted-foreground">Core Solutions</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
