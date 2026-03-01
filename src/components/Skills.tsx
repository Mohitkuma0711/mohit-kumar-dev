import { motion } from "framer-motion";
import { Binary, GitBranch, Globe, Layout, Server, Target, Zap } from "lucide-react";

const skills = [
  { icon: Binary, name: "Data Structures & Algorithms" },
  { icon: Target, name: "Competitive Programming" },
  { icon: Zap, name: "Problem Solving" },
  { icon: GitBranch, name: "Git & GitHub" },
  { icon: Layout, name: "Frontend Development" },
  { icon: Server, name: "Backend Basics" },
  { icon: Globe, name: "System Design (Learning)" },
];

const Skills = () => (
  <section id="skills" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 gradient-text inline-block">
          Technical Skills
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-8" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="glass-card hover-card-glow p-5 flex flex-col items-center text-center gap-3 group cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -4 }}
            >
              <skill.icon
                className="text-primary group-hover:text-secondary transition-colors duration-300"
                size={28}
              />
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Skills;
