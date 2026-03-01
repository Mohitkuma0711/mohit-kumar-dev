import { motion } from "framer-motion";
import { Code2, Brain, Rocket, Music } from "lucide-react";

const highlights = [
  { icon: Code2, text: "Strong foundations in Java, C, and Python" },
  { icon: Brain, text: "Active DSA practice on LeetCode & competitive platforms" },
  { icon: Rocket, text: "Building toward scalable, impactful applications" },
  { icon: Music, text: "Fueled by logic, ambition, and phonk beats" },
];

const About = () => (
  <section id="about" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 gradient-text inline-block">
          About Me
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-8" />

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a dedicated software developer passionate about problem-solving and building
              things that matter. With foundations in <span className="text-primary font-medium">Java</span>,{' '}
              <span className="text-secondary font-medium">C</span>, and{' '}
              <span className="text-primary font-medium">Python</span>, I continuously sharpen my
              skills through competitive coding and real-world projects — powered by AI companions
              like <strong>Claude</strong>, <strong>GitHub Copilot</strong>, <strong>Cursor</strong>,
              and <strong>Lovable</strong> that keep me coding smarter and faster.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My vision extends beyond writing code — I'm preparing to create innovative tech
              products that combine real-world interaction with digital experiences. Every line of
              code, every AI-assisted insight, is a step toward that future.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card hover-card-glow p-4 flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <item.icon className="text-primary shrink-0 mt-0.5" size={20} />
                <span className="text-sm text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
