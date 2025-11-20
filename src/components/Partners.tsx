import { Building } from "lucide-react";

const Partners = () => {
  const partners = [
    "Wema Bank",
    "Payrep Microfinance",
    "STS Association",
    "SwitchBox Limited",
    "BraveRock Limited",
    "Seentrad Coating",
    "Gitmatrix Power & Infrastructure",
    "Gitmatrix Group",
    "BlumenPay",
    "Bluremit",
    "Blumen Energies Ltd",
    "Quaint Energy",
  ];

  const clients = [
    "Kaduna Electric",
    "AMD Facility Management Company",
    "Braverock Residence",
    "Eleven Keys Limited",
  ];

  return (
    <section id="partners" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partners Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Our <span className="text-gradient">Partners</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Collaborating with industry leaders to deliver excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Clients Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Our <span className="text-gradient">Clients</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading organizations across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:glow-primary">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
