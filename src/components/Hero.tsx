import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download, Eye, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const roles = ["Java Developer", "Problem Solver", "DSA Enthusiast", "Future App Builder"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="font-mono text-secondary text-sm md:text-base tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {"< Hello World />"}
          </motion.p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-foreground">Mohit</span>{" "}
            <span className="gradient-text">Kumar</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            Software Developer · Competitive Programmer · Future Tech Founder
          </p>

          <div className="h-8 md:h-10 flex items-center justify-center mb-6">
            <span className="font-mono text-primary text-lg md:text-2xl">
              {displayed}
              <span className="animate-pulse-glow text-secondary">|</span>
            </span>
          </div>

          <p className="text-muted-foreground italic max-w-xl mx-auto mb-10 text-sm md:text-base">
            "Building code today. Creating digital territories tomorrow."
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="glass-card hover-card-glow px-6 py-3 font-medium flex items-center gap-2 text-primary hover:text-primary-foreground hover:bg-primary/20 transition-all"
            >
              <Eye size={18} /> View Projects
            </a>
            <a
              href="#contact"
              className="glass-card hover-card-glow px-6 py-3 font-medium flex items-center gap-2 text-secondary hover:bg-secondary/10 transition-all"
            >
              <Mail size={18} /> Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-muted-foreground" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
