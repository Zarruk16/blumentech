import { Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Adewale Ogunleye",
      role: "Chief Executive Officer",
      department: "Executive Leadership",
      bio: "Visionary leader with 15+ years in energy technology and infrastructure development across Africa.",
      email: "adewale@blumentechnologies.com",
      linkedin: "#",
    },
    {
      name: "Chioma Nwosu",
      role: "Chief Technology Officer",
      department: "Technology",
      bio: "Expert in SCADA systems, IoT infrastructure, and enterprise platform architecture.",
      email: "chioma@blumentechnologies.com",
      linkedin: "#",
    },
    {
      name: "Ibrahim Musa",
      role: "Chief Financial Officer",
      department: "Finance",
      bio: "Fintech specialist leading BlumenPay and financial services innovation.",
      email: "ibrahim@blumentechnologies.com",
      linkedin: "#",
    },
    {
      name: "Amara Okafor",
      role: "VP of Engineering",
      department: "Engineering",
      bio: "Leading development of billing systems, sub-metering solutions, and embedded systems.",
      email: "amara@blumentechnologies.com",
      linkedin: "#",
    },
    {
      name: "Samuel Adeyemi",
      role: "VP of Energy Solutions",
      department: "Energy",
      bio: "Driving innovation in energy trading, SCADA platforms, and infrastructure projects.",
      email: "samuel@blumentechnologies.com",
      linkedin: "#",
    },
    {
      name: "Fatima Hassan",
      role: "VP of Business Development",
      department: "Business Development",
      bio: "Building strategic partnerships across Africa's energy and fintech sectors.",
      email: "fatima@blumentechnologies.com",
      linkedin: "#",
    },
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_24%,rgba(56,189,248,.05)_25%,rgba(56,189,248,.05)_26%,transparent_27%,transparent_74%,rgba(56,189,248,.05)_75%,rgba(56,189,248,.05)_76%,transparent_77%,transparent),linear-gradient(60deg,transparent_24%,rgba(56,189,248,.05)_25%,rgba(56,189,248,.05)_26%,transparent_27%,transparent_74%,rgba(56,189,248,.05)_75%,rgba(56,189,248,.05)_76%,transparent_77%,transparent)] bg-[length:55px_95px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Meet Our <span className="text-gradient">Leadership Team</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experienced professionals driving innovation across Africa's technology landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:glow-primary transition-all">
                  <span className="text-3xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                {/* Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-1">{member.role}</p>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary/80 rounded-full border border-primary/20">
                    {member.department}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground text-center mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* Contact Links */}
                <div className="flex justify-center gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors group/btn"
                  >
                    <Mail className="w-4 h-4 text-primary group-hover/btn:scale-110 transition-transform" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors group/btn"
                  >
                    <Linkedin className="w-4 h-4 text-primary group-hover/btn:scale-110 transition-transform" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
