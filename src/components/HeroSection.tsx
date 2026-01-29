import { motion } from "framer-motion";
import { Cpu, Radio, Zap, ChevronDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2], 
            opacity: [0.3, 0.5, 0.3],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1], 
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating icons with enhanced animations */}
      <motion.div
        className="absolute top-1/4 left-[15%] hidden md:block"
        animate={{ 
          y: [-10, 10, -10],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div 
          className="p-4 card-glass rounded-2xl glow-effect"
          whileHover={{ scale: 1.1, rotate: 10 }}
        >
          <Cpu className="w-8 h-8 text-primary" />
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-[15%] hidden md:block"
        animate={{ 
          y: [10, -10, 10],
          rotate: [0, -5, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div 
          className="p-4 card-glass rounded-2xl glow-effect"
          whileHover={{ scale: 1.1, rotate: -10 }}
        >
          <Radio className="w-8 h-8 text-secondary" />
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-[20%] hidden md:block"
        animate={{ 
          y: [-5, 15, -5],
          x: [-5, 5, -5]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div 
          className="p-4 card-glass rounded-2xl glow-effect"
          whileHover={{ scale: 1.1 }}
        >
          <Zap className="w-8 h-8 text-primary" />
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-[20%] hidden md:block"
        animate={{ 
          y: [5, -15, 5],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div 
          className="p-4 card-glass rounded-2xl glow-effect"
          whileHover={{ scale: 1.1 }}
        >
          <Sparkles className="w-8 h-8 text-secondary" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4" />
            Your Gateway to Innovation
          </motion.span>
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="text-foreground">Electronics &</span>
          <br />
          <motion.span 
            className="gradient-text inline-block"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            Communication Engineering
          </motion.span>
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
          className="text-lg text-primary font-medium mb-10 italic"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          "Every device you use today was built by an ECE engineer's vision"
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="#what-is-ece"
            className="inline-flex items-center gap-2 px-8 py-4 gradient-bg text-primary-foreground rounded-xl font-semibold text-lg shadow-lg transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px hsl(var(--primary) / 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#what-is-ece")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore ECE
            <ChevronDown className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#careers"
            className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-border rounded-xl font-semibold text-lg shadow-sm transition-all text-foreground"
            whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--muted))" }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#careers")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Careers
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { value: "₹50L+", label: "Top Package" },
            { value: "100+", label: "Career Paths" },
            { value: "500+", label: "Companies Hiring" },
            { value: "95%", label: "Placement Rate" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="card-glass p-4 rounded-xl text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div 
            className="w-1.5 h-3 bg-primary rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;