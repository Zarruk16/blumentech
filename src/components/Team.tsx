import { Linkedin, Mail, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollAnimation from "@/components/ScrollAnimation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import drImage from "@/assets/team/dr.jpg";
import drabdulImage from "@/assets/team/drabdul.png";
import nainiImage from "@/assets/team/naini.jpeg";
import aliyuImage from "@/assets/team/aliyu.jpg";
import abdulkadirImage from "@/assets/team/abdulkadir.png";
import kambaImage from "@/assets/team/kamba.jpeg";

interface TeamMember {
  name: string;
  role: string;
  department: string;
  bio: string;
  email: string;
  linkedin: string;
  image?: string;
}

const Team = () => {
  const [expandedBios, setExpandedBios] = useState<number[]>([]);

  const toggleBio = (index: number) => {
    setExpandedBios(prev => {
      // Only toggle the specific card at this index
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const truncateBio = (bio: string, maxLength: number = 100) => {
    if (bio.length <= maxLength) return bio;
    return bio.substring(0, maxLength) + "...";
  };
  
  const teamMembers: TeamMember[] = [
    {
      name: "Yunusa Garba Muhammed Ph.D.",
      role: "Chief Executive Officer",
      department: "Executive Leadership",
      bio: "Distinguished technology leader and researcher with a Ph.D. in Neuroscience from the Max-Planck Institute, University of Konstanz, Germany. Founder and visionary driving innovation in energy technology, fintech solutions, and digital infrastructure across Africa. Expert in AI-driven systems, big data analytics, and enterprise platform development with a strong commitment to advancing technology capacity and research in Africa.",
      email: "yunusa@blumentechnologies.com",
      linkedin: "https://www.linkedin.com/in/yunusa-garba-muhammed-phd",
      image: drImage,
    },
    {
      name: "Abdullahi Kamba",
      role: "Head Compliance, Planning, and Intelligence Mapping",
      department: "Compliance & Planning",
      bio: "Strategic compliance and intelligence leader specializing in regulatory compliance, strategic planning, and data intelligence mapping. Expert in developing comprehensive compliance frameworks, risk assessment methodologies, and intelligence systems for technology operations. Drives organizational planning initiatives, regulatory adherence, and data-driven decision-making processes. Committed to ensuring operational excellence through effective compliance management and strategic intelligence mapping across all business units.",
      email: "abdullahi@blumentechnologies.com",
      linkedin: "#",
      image: kambaImage,
    },
    {
      name: "Dr. Abdurahman Chikaire",
      role: "Chief Operating Officer (COO)",
      department: "Operations",
      bio: "Distinguished technology leader and researcher with expertise in information and communication technologies. Affiliated with the Federal University of Technology, Owerri, Nigeria, with extensive research experience in ICT applications and technology solutions. Team Lead for Medical Sciences at Blumen Technologies, driving operational excellence and strategic implementation of technology platforms across multiple sectors. Expert in SCADA systems, IoT infrastructure, and enterprise platform architecture with a focus on operational efficiency and scalable technology deployment.",
      email: "abdurahman@blumentechnologies.com",
      linkedin: "#",
      image: drabdulImage,
    },
    {
      name: "Zulkarnaini Musa",
      role: "Chief Strategist",
      department: "Strategy",
      bio: "Strategist, engineer and social impact builder who works at the intersection of technology, business and community development. Trained in Electrical and Electronics Engineering with experience in the telecommunications sector, he brings strong systems thinking and operational discipline into how Blumen designs and deploys its solutions. Across his work in Northern Nigeria, he has helped SMEs, social enterprises and development programmes use data, structure and simple tools to grow sustainably—an approach he now channels into shaping Blumen's products, partnerships and long-term strategy.",
      email: "zulkarnaini@blumentechnologies.com",
      linkedin: "#",
      image: nainiImage,
    },
    {
      name: "Emmanuel Chijioke",
      role: "CTO Payment Systems",
      department: "Payment Systems",
      bio: "Technology leader specializing in payment systems and financial technology solutions. Expert in designing and implementing secure, scalable payment infrastructure for enterprise clients. Drives innovation in payment processing, transaction security, and fintech platform development. Committed to building robust payment ecosystems that enable seamless financial transactions across Africa.",
      email: "emmanuel@blumentechnologies.com",
      linkedin: "https://www.linkedin.com/in/emmanuel-chijioke-20a975151/",
    },
    {
      name: "Aliyu Usman",
      role: "CTO Energy Systems",
      department: "Energy Systems",
      bio: "Technology leader specializing in energy systems, SCADA platforms, and smart grid infrastructure. Expert in designing and implementing advanced energy management solutions, real-time monitoring systems, and grid automation technologies. Drives innovation in energy trading platforms, power analytics, and sustainable energy infrastructure across Africa. Committed to building resilient and efficient energy systems that power communities and businesses.",
      email: "aliyu@blumentechnologies.com",
      linkedin: "#",
      image: aliyuImage,
    },
    {
      name: "Abdulkadir Abubakar",
      role: "Chief Logistics",
      department: "Logistics",
      bio: "Operations and logistics leader specializing in supply chain management, distribution networks, and operational efficiency. Expert in coordinating complex logistics operations, managing vendor relationships, and optimizing delivery systems across multiple regions. Drives strategic planning for resource allocation, inventory management, and logistics infrastructure to ensure seamless operations and timely delivery of technology solutions and services.",
      email: "abdulkadir@blumentechnologies.com",
      linkedin: "#",
      image: abdulkadirImage,
    },
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_24%,rgba(56,189,248,.05)_25%,rgba(56,189,248,.05)_26%,transparent_27%,transparent_74%,rgba(56,189,248,.05)_75%,rgba(56,189,248,.05)_76%,transparent_77%,transparent),linear-gradient(60deg,transparent_24%,rgba(56,189,248,.05)_25%,rgba(56,189,248,.05)_26%,transparent_27%,transparent_74%,rgba(56,189,248,.05)_75%,rgba(56,189,248,.05)_76%,transparent_77%,transparent)] bg-[length:55px_95px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation direction="fade" delay={0.2}>
          <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Meet Our <span className="text-gradient">Leadership Team</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experienced professionals driving innovation across Africa's technology landscape
          </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
          {/* First Row - 3 members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {teamMembers.slice(0, 3).map((member, index) => {
              const isExpanded = expandedBios.includes(index);
              const shouldTruncate = member.bio.length > 100;
              const displayBio = isExpanded || !shouldTruncate ? member.bio : truncateBio(member.bio, 100);
              
              return (
                <ScrollAnimation key={index} delay={index * 0.1} direction="up">
                  <Card
                    className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur overflow-hidden h-full flex flex-col"
                  >
                  <CardContent className="p-6 flex flex-col flex-grow">
                    {/* Avatar */}
                    <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:glow-primary transition-all overflow-hidden flex-shrink-0">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full object-[center_35%]"
                        />
                      ) : (
                        <span className="text-4xl font-bold text-primary">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      )}
                    </div>

                    {/* Info */}
                    <div className="text-center mb-4 flex-shrink-0">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-1">{member.role}</p>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary/80 rounded-full border border-primary/20">
                        {member.department}
                      </span>
                    </div>

                    {/* Biography with Expand/Collapse */}
                    <div className="mb-6 flex-grow">
                      <p className="text-sm text-muted-foreground text-center leading-relaxed">
                        {displayBio}
                      </p>
                      {shouldTruncate && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleBio(index)}
                          className="w-full mt-2 text-primary hover:text-primary/80 hover:bg-primary/10"
                        >
                          {isExpanded ? (
                            <>
                              Show Less
                              <ChevronDown className="ml-1 w-4 h-4 rotate-180 transition-transform" />
                            </>
                          ) : (
                            <>
                              Read More
                              <ChevronDown className="ml-1 w-4 h-4 transition-transform" />
                            </>
                          )}
                        </Button>
                      )}
                    </div>

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
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors group/btn"
                      >
                        <Linkedin className="w-4 h-4 text-primary group-hover/btn:scale-110 transition-transform" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
                </ScrollAnimation>
              );
            })}
          </div>

          {/* Second Row - 4 members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.slice(3).map((member, index) => {
              const actualIndex = index + 3;
              const isExpanded = expandedBios.includes(actualIndex);
              const shouldTruncate = member.bio.length > 100;
              const displayBio = isExpanded || !shouldTruncate ? member.bio : truncateBio(member.bio, 100);
              
              return (
                <ScrollAnimation key={actualIndex} delay={(index + 3) * 0.1} direction="up">
                  <Card
                    className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur overflow-hidden h-full flex flex-col"
                  >
                  <CardContent className="p-6 flex flex-col flex-grow">
                    {/* Avatar */}
                    <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:glow-primary transition-all overflow-hidden flex-shrink-0">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full object-[center_35%]"
                        />
                      ) : (
                        <span className="text-4xl font-bold text-primary">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      )}
                    </div>

                    {/* Info */}
                    <div className="text-center mb-4 flex-shrink-0">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-1">{member.role}</p>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary/80 rounded-full border border-primary/20">
                        {member.department}
                      </span>
                    </div>

                    {/* Biography with Expand/Collapse */}
                    <div className="mb-6 flex-grow">
                      <p className="text-sm text-muted-foreground text-center leading-relaxed">
                        {displayBio}
                      </p>
                      {shouldTruncate && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleBio(actualIndex)}
                          className="w-full mt-2 text-primary hover:text-primary/80 hover:bg-primary/10"
                        >
                          {isExpanded ? (
                            <>
                              Show Less
                              <ChevronDown className="ml-1 w-4 h-4 rotate-180 transition-transform" />
                            </>
                          ) : (
                            <>
                              Read More
                              <ChevronDown className="ml-1 w-4 h-4 transition-transform" />
                            </>
                          )}
                        </Button>
                      )}
                    </div>

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
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors group/btn"
                      >
                        <Linkedin className="w-4 h-4 text-primary group-hover/btn:scale-110 transition-transform" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
