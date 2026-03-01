import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Code, Trophy, BookOpen } from "lucide-react";

const profiles = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/mohit-kumar-781649308",
    desc: "Professional network & career journey",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/kumamohit66448",
    desc: "Building and pushing real projects",
  },
  {
    name: "LeetCode",
    icon: Code,
    url: "https://leetcode.com/u/Mohitkumar66448/",
    desc: "Consistent DSA problem solving",
  },
  {
    name: "HackerRank",
    icon: Trophy,
    url: "#",
    desc: "Competitive coding challenges",
  },
  {
    name: "NeetCode",
    icon: BookOpen,
    url: "#",
    desc: "Structured DSA practice platform",
  },
];

const CodingProfiles = () => (
  <section id="profiles" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 gradient-text inline-block">
          Coding Profiles
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-8" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {profiles.map((profile, i) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card hover-card-glow p-6 flex flex-col gap-4 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center justify-between">
                <profile.icon className="text-primary group-hover:text-secondary transition-colors" size={28} />
                <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={16} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{profile.name}</h3>
                <p className="text-sm text-muted-foreground">{profile.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default CodingProfiles;
