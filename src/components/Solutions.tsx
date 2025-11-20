import { Wallet, Database, Activity, Cpu, Building2, Code } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Solutions = () => {
  const solutions = [
    {
      icon: Wallet,
      title: "Energy-Fintech Solutions",
      description: "Electricity billing, token generation, vending systems, energy marketplace integration, and virtual accounts for revenue collection.",
      features: ["Billing Systems", "Token Vending", "Payment Integration", "Revenue Collection"],
    },
    {
      icon: Database,
      title: "Billing & Collections Engines",
      description: "Enterprise-grade billing with AI-powered reconciliation, state-wide collection systems, wallet management, and aggregator APIs.",
      features: ["AI Reconciliation", "Multi-tenant Billing", "API Integration", "Wallet Systems"],
    },
    {
      icon: Cpu,
      title: "Sub-Metering & Embedded Systems",
      description: "Multi-user metering, smart meters, IoT gateways, load tracking, and advanced meter-on-chip engineering solutions.",
      features: ["Smart Meters", "IoT Gateways", "Load Management", "Hardware Design"],
    },
    {
      icon: Activity,
      title: "Energy SCADA & Infrastructure",
      description: "Mini-grid control platforms, real-time power analytics, remote monitoring systems, and substation automation dashboards.",
      features: ["SCADA Control", "Real-time Analytics", "Remote Monitoring", "Automation"],
    },
    {
      icon: Building2,
      title: "Facility Management Platforms",
      description: "Digital building management, maintenance scheduling, smart sensor integration, and multi-property dashboards.",
      features: ["Building Management", "Maintenance Systems", "Smart Sensors", "Property Dashboards"],
    },
    {
      icon: Code,
      title: "Platform Development for Companies",
      description: "Custom enterprise software, billing systems, fintech platforms, and comprehensive data management with AI solutions.",
      features: ["Custom Software", "Enterprise Platforms", "AI Solutions", "Data Management"],
    },
  ];

  return (
    <section id="solutions" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:glow-primary">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
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
