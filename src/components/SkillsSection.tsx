import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Zap, Activity, Binary, Code, Microchip, Lightbulb, X, BookOpen } from "lucide-react";

const skills = [
  { 
    icon: Zap, 
    title: "Circuit Design & Analysis", 
    color: "from-blue-500 to-cyan-500",
    topics: [
      "Ohm's Law & Kirchhoff's Laws",
      "RLC Circuits & Resonance",
      "Transient & Steady-State Analysis",
      "Network Theorems (Thevenin, Norton)",
      "AC/DC Circuit Analysis",
      "Power Calculations"
    ]
  },
  { 
    icon: Activity, 
    title: "Signal Processing", 
    color: "from-purple-500 to-pink-500",
    topics: [
      "Fourier Series & Transform",
      "Laplace Transform",
      "Z-Transform",
      "Sampling Theorem (Nyquist)",
      "Convolution & Correlation",
      "FIR/IIR Filters",
      "DSP Fundamentals"
    ]
  },
  { 
    icon: Binary, 
    title: "Analog & Digital Systems", 
    color: "from-green-500 to-emerald-500",
    topics: [
      "Diodes & Transistors (BJT, FET)",
      "Operational Amplifiers",
      "Logic Gates & Boolean Algebra",
      "Combinational Circuits",
      "Sequential Circuits & Flip-Flops",
      "Number Systems & Conversions",
      "ADC/DAC Converters"
    ]
  },
  { 
    icon: Code, 
    title: "Embedded Programming", 
    color: "from-orange-500 to-red-500",
    topics: [
      "C/C++ for Embedded Systems",
      "Microcontrollers (ARM, PIC, AVR)",
      "Real-Time Operating Systems",
      "Device Drivers Development",
      "Memory Management",
      "Serial Communication (UART, SPI, I2C)",
      "Interrupt Handling"
    ]
  },
  { 
    icon: Microchip, 
    title: "VLSI & Chip Design", 
    color: "from-indigo-500 to-violet-500",
    topics: [
      "CMOS Technology",
      "Digital Logic Design",
      "Verilog/VHDL HDL",
      "Synthesis & Optimization",
      "Place & Route",
      "Timing Analysis (STA)",
      "DFT & Testing"
    ]
  },
  { 
    icon: Lightbulb, 
    title: "Problem-Solving & Logic", 
    color: "from-yellow-500 to-amber-500",
    topics: [
      "Mathematical Modeling",
      "Algorithm Design",
      "Debugging Techniques",
      "System-Level Thinking",
      "Root Cause Analysis",
      "Optimization Methods",
      "Critical Thinking"
    ]
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const activeData = skills.find(s => s.title === activeSkill);

  return (
    <section className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Your Toolkit
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Skills You Will <span className="gradient-text">Gain</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on any skill to explore important topics
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveSkill(skill.title)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="card-glass rounded-2xl p-8 h-full relative overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <skill.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Click to see {skill.topics.length} key topics
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Topics Modal */}
        <AnimatePresence>
          {activeSkill && activeData && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveSkill(null)}
            >
              <motion.div
                className="relative w-full max-w-lg bg-card rounded-2xl overflow-hidden shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={`p-6 bg-gradient-to-br ${activeData.color}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-primary-foreground">
                      <activeData.icon className="w-10 h-10" />
                      <h3 className="font-display font-bold text-2xl">
                        {activeData.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setActiveSkill(null)}
                      className="p-2 hover:bg-primary-foreground/20 rounded-lg transition-colors text-primary-foreground"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-lg">Important Topics to Master</h4>
                  </div>
                  <div className="grid gap-2">
                    {activeData.topics.map((topic, idx) => (
                      <div
                        key={topic}
                        className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <span className={`w-6 h-6 rounded-full bg-gradient-to-br ${activeData.color} flex items-center justify-center text-xs font-bold text-primary-foreground`}>
                          {idx + 1}
                        </span>
                        <span className="text-foreground font-medium">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;
