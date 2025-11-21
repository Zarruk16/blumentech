import { Wallet, Database, Activity, Cpu, Building2, Code } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import infrastructureBg from "@/assets/infrastructure-bg.jpg";
import energyFintechImg from "@/assets/solutions/energy-fintech.jpg";
import billingCollectionsImg from "@/assets/solutions/billing-collections.jpg";
import subMeteringImg from "@/assets/solutions/sub-metering.jpg";
import scadaInfrastructureImg from "@/assets/solutions/scada-infrastructure.jpg";
import facilityManagementImg from "@/assets/solutions/facility-management.jpg";
import platformDevelopmentImg from "@/assets/solutions/platform-development.jpg";

const Solutions = () => {
  const solutions = [
    {
      icon: Wallet,
      title: "Energy-Fintech Solutions",
      description: "Electricity billing, token generation, vending systems, energy marketplace integration, and virtual accounts for revenue collection.",
      features: ["Billing Systems", "Token Vending", "Payment Integration", "Revenue Collection"],
      image: energyFintechImg,
    },
    {
      icon: Database,
      title: "Billing & Collections Engines",
      description: "Enterprise-grade billing with AI-powered reconciliation, state-wide collection systems, wallet management, and aggregator APIs.",
      features: ["AI Reconciliation", "Multi-tenant Billing", "API Integration", "Wallet Systems"],
      image: billingCollectionsImg,
    },
    {
      icon: Cpu,
      title: "Sub-Metering & Embedded Systems",
      description: "Multi-user metering, smart meters, IoT gateways, load tracking, and advanced meter-on-chip engineering solutions.",
      features: ["Smart Meters", "IoT Gateways", "Load Management", "Hardware Design"],
      image: subMeteringImg,
    },
    {
      icon: Activity,
      title: "Energy SCADA & Infrastructure",
      description: "Mini-grid control platforms, real-time power analytics, remote monitoring systems, and substation automation dashboards.",
      features: ["SCADA Control", "Real-time Analytics", "Remote Monitoring", "Automation"],
      image: scadaInfrastructureImg,
    },
    {
      icon: Building2,
      title: "Facility Management Platforms",
      description: "Digital building management, maintenance scheduling, smart sensor integration, and multi-property dashboards.",
      features: ["Building Management", "Maintenance Systems", "Smart Sensors", "Property Dashboards"],
      image: facilityManagementImg,
    },
    {
      icon: Code,
      title: "Platform Development for Companies",
      description: "Custom enterprise software, billing systems, fintech platforms, and comprehensive data management with AI solutions.",
      features: ["Custom Software", "Enterprise Platforms", "AI Solutions", "Data Management"],
      image: platformDevelopmentImg,
    },
  ];

  return (
    <section id="solutions" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${infrastructureBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Core <span className="text-gradient">Business Domains</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions across multiple sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card
                key={index}
                className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                <CardContent>
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
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
