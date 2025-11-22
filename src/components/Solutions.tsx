import { Wallet, Database, Activity, Cpu, Building2, Code, ChevronDown, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState, useRef } from "react";
import infrastructureBg from "@/assets/infrastructure-bg.jpg";
import energyFintechImg from "@/assets/solutions/energy-fintech.jpg";
import billingCollectionsImg from "@/assets/solutions/billing-collections.jpg";
import subMeteringImg from "@/assets/solutions/sub-metering.jpg";
import scadaInfrastructureImg from "@/assets/solutions/scada-infrastructure.jpg";
import facilityManagementImg from "@/assets/solutions/facility-management.jpg";
import platformDevelopmentImg from "@/assets/solutions/platform-development.jpg";
import ScrollAnimation from "@/components/ScrollAnimation";
import { motion, useScroll, useTransform } from "framer-motion";

const Solutions = () => {
  const [openCards, setOpenCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const toggleCard = (index: number) => {
    setOpenCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const solutions = [
    {
      icon: Wallet,
      title: "Energy-Fintech Solutions",
      description: "Electricity billing, token generation, vending systems, energy marketplace integration, and virtual accounts for revenue collection.",
      features: ["Billing Systems", "Token Vending", "Payment Integration", "Revenue Collection"],
      image: energyFintechImg,
      details: {
        overview: "Complete energy fintech ecosystem enabling seamless electricity transactions, digital token vending, and integrated payment solutions for utilities and energy providers.",
        capabilities: [
          "Real-time billing and invoicing systems",
          "Multi-channel token vending platforms",
          "Wallet and virtual account management",
          "Payment gateway integrations (Paystack, Flutterwave, etc.)",
          "Revenue reconciliation and reporting",
          "Mobile-first consumer interfaces"
        ],
        techStack: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
        timeline: "3-6 months typical deployment"
      }
    },
    {
      icon: Database,
      title: "Billing & Collections Engines",
      description: "Enterprise-grade billing with AI-powered reconciliation, state-wide collection systems, wallet management, and aggregator APIs.",
      features: ["AI Reconciliation", "Multi-tenant Billing", "API Integration", "Wallet Systems"],
      image: billingCollectionsImg,
      details: {
        overview: "Robust billing infrastructure with intelligent automation, supporting multi-tenant operations and complex revenue collection workflows at enterprise scale.",
        capabilities: [
          "AI-powered payment reconciliation",
          "Multi-tenant billing architecture",
          "Automated collection workflows",
          "Custom aggregator API development",
          "Real-time payment tracking",
          "Advanced reporting and analytics"
        ],
        techStack: ["Python", "FastAPI", "PostgreSQL", "TensorFlow", "Docker"],
        timeline: "4-8 months typical deployment"
      }
    },
    {
      icon: Cpu,
      title: "Sub-Metering & Embedded Systems",
      description: "Multi-user metering, smart meters, IoT gateways, load tracking, and advanced meter-on-chip engineering solutions.",
      features: ["Smart Meters", "IoT Gateways", "Load Management", "Hardware Design"],
      image: subMeteringImg,
      details: {
        overview: "End-to-end smart metering solutions combining hardware design, embedded firmware, and cloud connectivity for precise energy monitoring and management.",
        capabilities: [
          "Custom smart meter hardware design",
          "IoT gateway development and deployment",
          "Real-time load monitoring systems",
          "Multi-tenant sub-metering platforms",
          "Wireless communication protocols (LoRa, NB-IoT)",
          "Edge computing and data processing"
        ],
        techStack: ["C/C++", "Python", "MQTT", "InfluxDB", "Grafana"],
        timeline: "6-12 months typical deployment"
      }
    },
    {
      icon: Activity,
      title: "Energy SCADA & Infrastructure",
      description: "Mini-grid control platforms, real-time power analytics, remote monitoring systems, and substation automation dashboards.",
      features: ["SCADA Control", "Real-time Analytics", "Remote Monitoring", "Automation"],
      image: scadaInfrastructureImg,
      details: {
        overview: "Industrial-grade SCADA systems for energy infrastructure monitoring, control, and optimization with real-time data acquisition and visualization.",
        capabilities: [
          "Mini-grid control and automation",
          "Real-time power quality monitoring",
          "Substation automation systems",
          "Predictive maintenance analytics",
          "Remote control and diagnostics",
          "Alarm management and reporting"
        ],
        techStack: ["Python", "Node.js", "TimescaleDB", "Modbus", "OPC UA"],
        timeline: "5-10 months typical deployment"
      }
    },
    {
      icon: Building2,
      title: "Facility Management Platforms",
      description: "Digital building management, maintenance scheduling, smart sensor integration, and multi-property dashboards.",
      features: ["Building Management", "Maintenance Systems", "Smart Sensors", "Property Dashboards"],
      image: facilityManagementImg,
      details: {
        overview: "Comprehensive facility management software integrating IoT sensors, maintenance workflows, and analytics for efficient building operations.",
        capabilities: [
          "Digital twin building models",
          "Preventive maintenance scheduling",
          "Smart sensor integration (HVAC, lighting, security)",
          "Multi-property portfolio management",
          "Work order and asset tracking",
          "Energy optimization recommendations"
        ],
        techStack: ["React", "Node.js", "MongoDB", "GraphQL", "WebSockets"],
        timeline: "4-7 months typical deployment"
      }
    },
    {
      icon: Code,
      title: "Platform Development for Companies",
      description: "Custom enterprise software, billing systems, fintech platforms, and comprehensive data management with AI solutions.",
      features: ["Custom Software", "Enterprise Platforms", "AI Solutions", "Data Management"],
      image: platformDevelopmentImg,
      details: {
        overview: "Full-stack custom platform development tailored to your business needs, from concept to deployment with ongoing support and scaling.",
        capabilities: [
          "Custom enterprise software development",
          "Fintech platform architecture",
          "AI/ML integration and automation",
          "Data pipeline and ETL systems",
          "Cloud infrastructure setup",
          "API design and microservices"
        ],
        techStack: ["React/Next.js", "Python/Node.js", "AWS/Azure", "PostgreSQL", "Docker/K8s"],
        timeline: "3-12 months depending on scope"
      }
    },
  ];

  return (
    <section ref={sectionRef} id="solutions" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ 
            backgroundImage: `url(${infrastructureBg})`,
            y,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation direction="fade" delay={0.2}>
          <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Core <span className="text-gradient">Business Domains</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions across multiple sectors
          </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isOpen = openCards.includes(index);
            return (
              <ScrollAnimation key={index} delay={index * 0.1} direction="up">
                <Collapsible open={isOpen} onOpenChange={() => toggleCard(index)}>
                  <Card
                    className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur overflow-hidden"
                  >
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${solution.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-14 h-14 bg-primary/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors border border-primary/30">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{solution.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button 
                        onClick={scrollToContact}
                        className="flex-1"
                        size="sm"
                      >
                        Request Demo
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                      <CollapsibleTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          size="sm"
                        >
                          Learn More
                          <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                        </Button>
                      </CollapsibleTrigger>
                    </div>

                    {/* Expandable Content */}
                    <CollapsibleContent className="space-y-4 pt-4 border-t border-border/50">
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-foreground">Overview</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {solution.details.overview}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-foreground">Key Capabilities</h4>
                        <ul className="space-y-1">
                          {solution.details.capabilities.map((capability, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>{capability}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div>
                          <h4 className="font-semibold text-sm mb-2 text-foreground">Tech Stack</h4>
                          <div className="flex flex-wrap gap-1">
                            {solution.details.techStack.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 text-xs bg-secondary/50 text-secondary-foreground rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-2 text-foreground">Timeline</h4>
                          <p className="text-sm text-muted-foreground">
                            {solution.details.timeline}
                          </p>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </CardContent>
                </Card>
              </Collapsible>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
