import { motion } from "framer-motion";
import { Cpu, Radio, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Floating icons */}
      <motion.div
        className="absolute top-1/4 left-[15%] hidden md:block"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="p-4 card-glass rounded-2xl">
          <Cpu className="w-8 h-8 text-primary" />
        </div>
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-[15%] hidden md:block"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <div className="p-4 card-glass rounded-2xl">
          <Radio className="w-8 h-8 text-secondary" />
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-[20%] hidden md:block"
        animate={{ y: [-5, 15, -5] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div className="p-4 card-glass rounded-2xl">
          <Zap className="w-8 h-8 text-primary" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            🎓 Your Gateway to Innovation
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="text-foreground">Electronics &</span>
          <br />
          <span className="gradient-text">Communication Engineering</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Where circuits, signals, and innovation shape the future
        </motion.p>

        <motion.p
          className="text-lg text-primary font-medium mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          "Every device you use today was built by an ECE engineer's vision"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#what-is-ece"
            className="inline-flex items-center gap-2 px-8 py-4 gradient-bg text-primary-foreground rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Explore ECE
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;