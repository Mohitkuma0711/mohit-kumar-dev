import { motion } from "framer-motion";

const languages = [
  { name: "Java", level: 85, desc: "Primary language — strong DSA & problem solving", color: "from-primary to-neon-pink" },
  { name: "C", level: 70, desc: "Core programming fundamentals", color: "from-secondary to-primary" },
  { name: "Python", level: 75, desc: "Versatile scripting & problem solving", color: "from-neon-cyan to-primary" },
];

const Languages = () => (
  <section id="languages" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 gradient-text inline-block">
          Languages
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-8" />

        <div className="grid gap-6 max-w-2xl">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              className="glass-card hover-card-glow p-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-display text-lg font-bold text-foreground">{lang.name}</h3>
                <span className="font-mono text-sm text-primary">{lang.level}%</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{lang.desc}</p>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${lang.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Languages;
