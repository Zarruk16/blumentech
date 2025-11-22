import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, MoveDirection, OutMode } from "@tsparticles/engine";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const [init, setInit] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#38bdf8", "#22d3ee", "#06b6d4"],
        },
        links: {
          color: "#38bdf8",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none" as MoveDirection,
          enable: true,
          outModes: {
            default: "bounce" as OutMode,
          },
          random: true,
          speed: 1.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: { min: 0.2, max: 0.8 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        shape: {
          type: ["circle", "triangle"],
        },
        size: {
          value: { min: 1, max: 4 },
          animation: {
            enable: true,
            speed: 3,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* TSParticles Layer */}
        {init && (
          <Particles
            id="tsparticles"
            options={particlesOptions}
            className="absolute inset-0 z-10"
          />
        )}
        
        {/* Base Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center opacity-50 animate-pulse-slow"
          style={{ 
            backgroundImage: `url(${heroBg})`,
            y,
          }}
        />
        
        {/* Animated Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/60 to-background" />
        
        {/* Flowing Energy Waves */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 animate-wave" 
               style={{ backgroundSize: '200% 100%' }} />
          <div className="absolute inset-0 bg-gradient-to-l from-secondary/20 via-primary/20 to-secondary/20 animate-wave-reverse" 
               style={{ backgroundSize: '200% 100%', animationDelay: '1s' }} />
        </div>
        
        {/* Radial Glow Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(56,189,248,0.15),transparent_50%)] animate-glow-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(34,211,238,0.15),transparent_50%)] animate-glow-pulse" 
             style={{ animationDelay: '1.5s' }} />
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/25 rounded-full blur-3xl animate-float-slower" 
             style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '2s' }} />
        
        {/* Particle Effect */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-particle-1" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary rounded-full animate-particle-2" />
          <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-primary rounded-full animate-particle-3" />
          <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-secondary rounded-full animate-particle-4" />
          <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-primary rounded-full animate-particle-5" />
        </div>
      </div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ opacity }}
      >
        <div className="text-center max-w-5xl mx-auto">
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
      </motion.div>
    </section>
  );
};

export default Hero;
