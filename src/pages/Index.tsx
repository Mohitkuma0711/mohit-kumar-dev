import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Languages from "@/components/Languages";
import Skills from "@/components/Skills";
import CodingProfiles from "@/components/CodingProfiles";
import FutureVision from "@/components/FutureVision";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <About />
    <Languages />
    <Skills />
    <Stats />
    <CodingProfiles />
    <FutureVision />
    <Contact />
    <Footer />
  </div>
);

export default Index;
