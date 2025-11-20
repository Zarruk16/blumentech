import { Building2 } from "lucide-react";

const Ecosystem = () => {
  const subsidiaries = [
    {
      name: "BlumenPay",
      description: "Payments, revenue collection & energy vending",
      category: "Fintech",
    },
    {
      name: "Bluremit",
      description: "Financial services, remittance & value transfer",
      category: "Fintech",
    },
    {
      name: "Blumen Energies Ltd",
      description: "Energy trading & metering infrastructure",
      category: "Energy",
    },
    {
      name: "Gitmatrix Power & Infrastructure",
      description: "Pipelines, fibre-optic monitoring & engineering",
      category: "Infrastructure",
    },
    {
      name: "Gitmatrix Group",
      description: "Infrastructure investment & technology",
      category: "Investment",
    },
    {
      name: "STS Association",
      description: "Metering consortium & standards",
      category: "Standards",
    },
    {
      name: "SwitchBox Limited",
      description: "Hardware manufacturing & solutions",
      category: "Hardware",
    },
    {
      name: "BraveRock Limited",
      description: "Property & facility solutions",
      category: "Property",
    },
    {
      name: "Seentrad Coating",
      description: "Industrial finishing & coating",
      category: "Industrial",
    },
    {
      name: "Quaint Energy",
      description: "Energy project collaborations",
      category: "Energy",
    },
  ];

  const categoryColors: Record<string, string> = {
    Fintech: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    Energy: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    Infrastructure: "bg-green-500/10 text-green-400 border-green-500/20",
    Investment: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    Standards: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    Hardware: "bg-red-500/10 text-red-400 border-red-500/20",
    Property: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    Industrial: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  };

  return (
    <section id="ecosystem" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            The Blumen <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A network of specialized subsidiaries delivering comprehensive solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
          {subsidiaries.map((subsidiary, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold mb-2">{subsidiary.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{subsidiary.description}</p>
              <span className={`inline-block px-2 py-1 text-xs font-medium rounded border ${categoryColors[subsidiary.category]}`}>
                {subsidiary.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
