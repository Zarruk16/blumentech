import { Network, Shield, Zap, Globe } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

const About = () => {
  const features = [
    {
      icon: Zap,
      title: "Cutting-edge",
      description: "Latest technology and innovation",
    },
    {
      icon: Shield,
      title: "Enterprise-ready",
      description: "Scalable and secure solutions",
    },
    {
      icon: Network,
      title: "Reliable",
      description: "99.9% uptime guarantee",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "World-class quality",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation direction="fade" delay={0.2}>
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Building Africa's <span className="text-gradient">Tech Infrastructure</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Blumen Technologies is a multi-sector innovation company building scalable systems for Energy, 
              Fintech, Billing, SCADA, Sub-metering, Facility Management, and custom platform development 
              for enterprises and governments.
            </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ScrollAnimation key={index} delay={index * 0.1} direction="up">
                  <div
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
                  >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
