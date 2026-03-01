import { motion } from "framer-motion";
import { Send, Github, Linkedin, Code } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — could integrate with backend
    alert("Thanks for reaching out! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 gradient-text inline-block">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-8" />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full glass-card px-4 py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full glass-card px-4 py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full glass-card px-4 py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
              />
              <button
                type="submit"
                className="glass-card hover-card-glow px-6 py-3 font-medium flex items-center gap-2 text-primary hover:bg-primary/10 transition-all"
              >
                <Send size={18} /> Send Message
              </button>
            </form>

            <div className="flex flex-col justify-center gap-4">
              <p className="text-muted-foreground">
                Feel free to reach out for collaborations, opportunities, or just to say hi!
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/kumamohit66448" target="_blank" rel="noopener noreferrer" className="glass-card hover-card-glow p-3 text-muted-foreground hover:text-primary transition-colors">
                  <Github size={22} />
                </a>
                <a href="https://www.linkedin.com/in/mohit-kumar-781649308" target="_blank" rel="noopener noreferrer" className="glass-card hover-card-glow p-3 text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={22} />
                </a>
                <a href="https://leetcode.com/u/Mohitkumar66448/" target="_blank" rel="noopener noreferrer" className="glass-card hover-card-glow p-3 text-muted-foreground hover:text-primary transition-colors">
                  <Code size={22} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
