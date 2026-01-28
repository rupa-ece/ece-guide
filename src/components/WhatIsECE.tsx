import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Cpu, Radio, Microchip, Bot, Wifi, CircuitBoard, X, Zap, Cable, CircleDot, Triangle } from "lucide-react";

interface TopicDetails {
  icon: any;
  label: string;
  description: string;
  keyTopics: string[];
  applications: string[];
}

const topics: TopicDetails[] = [
  { 
    icon: CircuitBoard, 
    label: "Electronics",
    description: "The foundation of ECE, covering the study of electronic components, circuits, and their behavior in various applications.",
    keyTopics: ["Diodes & Rectifiers", "BJT & FET Transistors", "Operational Amplifiers", "Power Electronics", "Analog Circuit Design"],
    applications: ["Consumer electronics", "Medical devices", "Automotive systems", "Power supplies"]
  },
  { 
    icon: Radio, 
    label: "Communication Systems",
    description: "Study of how information is transmitted across distances using electromagnetic waves and various modulation techniques.",
    keyTopics: ["Analog & Digital Modulation", "Antenna Design", "RF Engineering", "Optical Communication", "Satellite Communication"],
    applications: ["Mobile networks", "Broadcasting", "Internet infrastructure", "Space communication"]
  },
  { 
    icon: Cpu, 
    label: "Signals & Systems",
    description: "Mathematical analysis of signals and the systems that process them, forming the backbone of modern communication.",
    keyTopics: ["Fourier Transform", "Laplace Transform", "Z-Transform", "Convolution", "Filter Design"],
    applications: ["Audio processing", "Image processing", "Control systems", "Biomedical signals"]
  },
  { 
    icon: Microchip, 
    label: "VLSI Design",
    description: "Very Large Scale Integration - the art of designing integrated circuits with millions of transistors on a single chip.",
    keyTopics: ["Digital Logic Design", "CMOS Technology", "HDL (Verilog/VHDL)", "Physical Design", "Low Power Design"],
    applications: ["Microprocessors", "Memory chips", "ASICs", "FPGAs", "SoCs"]
  },
  { 
    icon: Bot, 
    label: "Embedded Systems",
    description: "Computer systems designed for specific functions within larger systems, combining hardware and software.",
    keyTopics: ["Microcontrollers (8051, ARM)", "Real-Time OS", "Firmware Development", "Peripheral Interfacing", "Debugging Techniques"],
    applications: ["Automotive ECUs", "Smart appliances", "Industrial automation", "Wearable devices"]
  },
  { 
    icon: Wifi, 
    label: "IoT & Robotics",
    description: "The future of connected devices and intelligent machines that can sense, process, and act on their environment.",
    keyTopics: ["Sensor Networks", "Wireless Protocols", "Cloud Integration", "Motion Control", "Computer Vision"],
    applications: ["Smart homes", "Healthcare monitoring", "Autonomous vehicles", "Industrial robots"]
  },
];

// Electronics symbol components
const DiodeSymbol = () => (
  <svg viewBox="0 0 60 30" className="w-12 h-6 text-primary/40">
    <line x1="5" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="2"/>
    <polygon points="20,5 20,25 40,15" fill="none" stroke="currentColor" strokeWidth="2"/>
    <line x1="40" y1="5" x2="40" y2="25" stroke="currentColor" strokeWidth="2"/>
    <line x1="40" y1="15" x2="55" y2="15" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const TransistorSymbol = () => (
  <svg viewBox="0 0 50 50" className="w-10 h-10 text-primary/40">
    <line x1="10" y1="25" x2="20" y2="25" stroke="currentColor" strokeWidth="2"/>
    <line x1="20" y1="10" x2="20" y2="40" stroke="currentColor" strokeWidth="2"/>
    <line x1="20" y1="15" x2="35" y2="5" stroke="currentColor" strokeWidth="2"/>
    <line x1="20" y1="35" x2="35" y2="45" stroke="currentColor" strokeWidth="2"/>
    <polygon points="28,38 35,45 32,35" fill="currentColor"/>
    <line x1="35" y1="5" x2="35" y2="0" stroke="currentColor" strokeWidth="2"/>
    <line x1="35" y1="45" x2="35" y2="50" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const CapacitorSymbol = () => (
  <svg viewBox="0 0 50 30" className="w-10 h-6 text-primary/40">
    <line x1="5" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="2"/>
    <line x1="20" y1="5" x2="20" y2="25" stroke="currentColor" strokeWidth="2"/>
    <line x1="30" y1="5" x2="30" y2="25" stroke="currentColor" strokeWidth="2"/>
    <line x1="30" y1="15" x2="45" y2="15" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const ResistorSymbol = () => (
  <svg viewBox="0 0 60 20" className="w-12 h-5 text-primary/40">
    <line x1="0" y1="10" x2="10" y2="10" stroke="currentColor" strokeWidth="2"/>
    <polyline points="10,10 15,2 20,18 25,2 30,18 35,2 40,18 45,10" fill="none" stroke="currentColor" strokeWidth="2"/>
    <line x1="45" y1="10" x2="60" y2="10" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const WhatIsECE = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedTopic, setSelectedTopic] = useState<TopicDetails | null>(null);

  return (
    <section id="what-is-ece" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Understanding ECE
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            What is <span className="gradient-text">ECE</span>?
          </h2>
        </motion.div>

        <motion.div
          className="card-glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            <span className="font-semibold text-primary">Electronics and Communication Engineering (ECE)</span> is a 
            dynamic branch of engineering that combines the principles of electronics and communication systems. 
            It focuses on designing, developing, and maintaining electronic devices, circuits, and communication 
            systems that power our modern world.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mt-4">
            From the smartphone in your pocket to satellites orbiting Earth, from medical devices saving lives 
            to the internet connecting billions — ECE engineers are the architects of our technological future.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.label}
              className="card-glass rounded-2xl p-6 text-center cursor-pointer hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primary/20"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              onClick={() => setSelectedTopic(topic)}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl gradient-bg flex items-center justify-center">
                <topic.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <p className="font-medium text-sm text-foreground">{topic.label}</p>
              <p className="text-xs text-muted-foreground mt-1">Click to learn more</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Topic Details Modal */}
      <AnimatePresence>
        {selectedTopic && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTopic(null)}
          >
            <motion.div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto card-glass rounded-3xl p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Electronics symbols decoration */}
              <div className="absolute top-4 right-16 opacity-30">
                <DiodeSymbol />
              </div>
              <div className="absolute top-16 right-8 opacity-30">
                <TransistorSymbol />
              </div>
              <div className="absolute bottom-8 left-8 opacity-30">
                <CapacitorSymbol />
              </div>
              <div className="absolute bottom-16 right-12 opacity-30">
                <ResistorSymbol />
              </div>
              
              {/* Circuit traces decoration */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-4 w-8 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
                <div className="absolute top-20 left-4 w-px h-12 bg-gradient-to-b from-primary/30 to-transparent"></div>
                <div className="absolute bottom-20 right-4 w-12 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>
                <div className="absolute bottom-20 right-4 w-px h-16 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>

              <button
                onClick={() => setSelectedTopic(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center">
                  <selectedTopic.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{selectedTopic.label}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Zap className="w-4 h-4 text-primary" />
                    <span>Core ECE Domain</span>
                  </div>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6">
                {selectedTopic.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted/30 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <CircleDot className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">Key Topics</h4>
                  </div>
                  <ul className="space-y-2">
                    {selectedTopic.keyTopics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                        <Triangle className="w-3 h-3 mt-1 text-primary fill-primary" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-muted/30 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Cable className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">Real-World Applications</h4>
                  </div>
                  <ul className="space-y-2">
                    {selectedTopic.applications.map((app, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                        <Zap className="w-3 h-3 mt-1 text-primary" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WhatIsECE;