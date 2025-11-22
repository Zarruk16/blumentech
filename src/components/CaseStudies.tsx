import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ScrollAnimation";

const CaseStudies = () => {
  const cases = [
    {
      client: "Kaduna Electric",
      title: "Electricity Vending Integration",
      description: "Implemented end-to-end electricity vending system with real-time token generation and payment integration.",
      results: [
        "99.9% system uptime",
        "50% faster token generation",
        "Seamless payment integration",
      ],
      category: "Energy-Fintech",
    },
    {
      client: "AMD Facility Management",
      title: "Facility Management Automation",
      description: "Deployed comprehensive facility management platform with smart sensors and automated maintenance scheduling.",
      results: [
        "40% reduction in maintenance costs",
        "Real-time facility monitoring",
        "Automated workflow management",
      ],
      category: "Facility Management",
    },
    {
      client: "Braverock Residence",
      title: "Smart Residence Metering",
      description: "Installed multi-user smart metering system with IoT integration and real-time consumption tracking.",
      results: [
        "100% billing accuracy",
        "Real-time consumption data",
        "Reduced revenue leakage",
      ],
      category: "Sub-Metering",
    },
    {
      client: "Eleven Keys Limited",
      title: "Custom Billing System",
      description: "Built enterprise-grade billing engine with AI-powered reconciliation and multi-tenant support.",
      results: [
        "Automated reconciliation",
        "Multi-tenant architecture",
        "Scalable infrastructure",
      ],
      category: "Billing Systems",
    },
  ];

  return (
    <section id="cases" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation direction="fade" delay={0.2}>
          <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from our enterprise clients
          </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cases.map((caseStudy, index) => (
            <ScrollAnimation key={index} delay={index * 0.1} direction="up">
              <Card
                className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur"
              >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                    {caseStudy.category}
                  </span>
                </div>
                <CardTitle className="text-2xl mb-2">{caseStudy.title}</CardTitle>
                <p className="text-sm font-semibold text-secondary mb-2">{caseStudy.client}</p>
                <CardDescription className="text-base leading-relaxed">
                  {caseStudy.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  {caseStudy.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{result}</span>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary/80">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
