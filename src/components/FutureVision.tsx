import { motion } from "framer-motion";
import { MapPin, Users, Trophy, Footprints, Globe, Gamepad2 } from "lucide-react";
import territoryMockup from "@/assets/territory-mockup.jpg";

const features = [
  { icon: MapPin, text: "Real-time GPS route tracking" },
  { icon: Footprints, text: "Territory drawn from running paths" },
  { icon: Users, text: "Competitive area reclaiming" },
  { icon: Trophy, text: "Regional & global leaderboards" },
  { icon: Globe, text: "Real-world map integration" },
  { icon: Gamepad2, text: "Gamified fitness mechanics" },
];

const FutureVision = () => (
  <section id="projects" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text">
            Future Vision
          </h2>
          <span className="glass-card px-3 py-1 text-xs font-mono text-secondary border-secondary/30 neon-glow-cyan">
            COMING SOON
          </span>
        </div>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-8" />

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">
              Real-World Territory Gaming App
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A competitive mobile gaming app where users physically run to claim real-world
              territory. GPS tracks your route, draws the outline of the area you've covered,
              and assigns it to your profile. Other players can reclaim your territory by
              running through it — blending fitness, strategy, and real-world mapping.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 text-sm text-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <f.icon className="text-primary shrink-0" size={16} />
                  {f.text}
                </motion.div>
              ))}
            </div>

            <p className="font-mono text-xs text-muted-foreground italic">
              "Gamify reality. Own your territory."
            </p>
          </div>

          <motion.div
            className="glass-card neon-glow-purple p-2 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={territoryMockup}
              alt="Territory Gaming App concept mockup"
              className="rounded-xl w-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FutureVision;
