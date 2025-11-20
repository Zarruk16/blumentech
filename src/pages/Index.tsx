import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Ecosystem from "@/components/Ecosystem";
import Partners from "@/components/Partners";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Solutions />
      <Ecosystem />
      <Partners />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
