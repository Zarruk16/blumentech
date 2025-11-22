import { Building } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import wemaBankLogo from "@/assets/partners/ng-wemaba-logo.png";
import payrepLogo from "@/assets/partners/payrep-logo.webp";
import stsLogo from "@/assets/partners/STSA-Logo-Trans-scaled.gif";
import switchboxLogo from "@/assets/partners/switchbox.jpg";
import braverockLogo from "@/assets/partners/BraveRock-Logo-01.png";
import seentradLogo from "@/assets/partners/seentrad.webp";
import gitmatrixLogo from "@/assets/partners/gitmetrics.jpg";
import quaintEnergyLogo from "@/assets/partners/quaint_energy_cover.jpeg";
import blumenPayLogo from "@/assets/partners/blumenpay.svg";
import bluremitLogo from "@/assets/partners/bluremit.svg";
import blumenEnergiesLogo from "@/assets/partners/blumenenergies.png";
import kadunaElectricLogo from "@/assets/clients/kd.png";
import amdLogo from "@/assets/clients/amd.png";
import braverockClientLogo from "@/assets/clients/braverock.png";
import elevenKeysLogo from "@/assets/clients/elevenkey.png";

const Partners = () => {
  const partners = [
    { name: "Wema Bank", logo: wemaBankLogo },
    { name: "Payrep Microfinance", logo: payrepLogo },
    { name: "STS Association", logo: stsLogo },
    { name: "SwitchBox Limited", logo: switchboxLogo },
    { name: "BraveRock Limited", logo: braverockLogo },
    { name: "Seentrad Coating", logo: seentradLogo },
    { name: "Gitmatrix Power & Infrastructure", logo: gitmatrixLogo },
    { name: "Gitmatrix Group", logo: gitmatrixLogo },
    { name: "BlumenPay", logo: blumenPayLogo },
    { name: "Bluremit", logo: bluremitLogo },
    { name: "Blumen Energies Ltd", logo: blumenEnergiesLogo },
    { name: "Quaint Energy", logo: quaintEnergyLogo },
  ];

  const clients = [
    { name: "Kaduna Electric", logo: kadunaElectricLogo },
    { name: "AMD Facility Management Company", logo: amdLogo },
    { name: "Braverock Residence", logo: braverockClientLogo },
    { name: "Eleven Keys Limited", logo: elevenKeysLogo },
  ];

  return (
    <section id="partners" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partners Section */}
        <div className="mb-20">
          <ScrollAnimation direction="fade" delay={0.2}>
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Our <span className="text-gradient">Partners</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Collaborating with industry leaders to deliver excellence
            </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
            {partners.map((partner, index) => {
              const isLargeLogo = partner.name === "Payrep Microfinance" || 
                                   partner.name === "BraveRock Limited" || 
                                   partner.name === "Quaint Energy";
              
              return (
                <ScrollAnimation key={index} delay={index * 0.05} direction="up">
                  <div
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center text-center group h-full min-h-[140px]"
                  >
                  <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors overflow-hidden">
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className={`w-full h-full object-contain ${isLargeLogo ? 'p-1 scale-110' : 'p-2'}`}
                      />
                    ) : (
                      <Building className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors">
                    {partner.name}
                  </span>
                </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>

        {/* Clients Section */}
        <div>
          <ScrollAnimation direction="fade" delay={0.2}>
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Our <span className="text-gradient">Clients</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading organizations across Africa
            </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <ScrollAnimation key={index} delay={index * 0.1} direction="up">
                <div
                  className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center text-center group h-full min-h-[180px]"
                >
                <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:glow-primary overflow-hidden">
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="w-full h-full object-contain p-2"
                    />
                  ) : (
                    <Building className="w-8 h-8 text-primary" />
                  )}
                </div>
                <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {client.name}
                </span>
              </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
