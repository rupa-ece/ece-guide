import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Wrench, ExternalLink, X, Download, Globe, Monitor } from "lucide-react";

interface Tool {
  name: string;
  description: string;
  category: "simulation" | "design" | "programming" | "analysis";
  website: string;
  features: string[];
  useCases: string[];
  isFree: boolean;
}

const tools: Tool[] = [
  {
    name: "MATLAB & Simulink",
    description: "Industry-standard for signal processing, control systems, and simulations",
    category: "analysis",
    website: "https://www.mathworks.com/products/matlab.html",
    features: ["Signal Processing Toolbox", "Control System Toolbox", "Communications Toolbox", "Deep Learning Toolbox"],
    useCases: ["Signal analysis", "Filter design", "System modeling", "Data visualization"],
    isFree: false,
  },
  {
    name: "LTspice",
    description: "Free high-performance SPICE simulator for analog circuits",
    category: "simulation",
    website: "https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html",
    features: ["Waveform viewer", "Schematic capture", "Component library", "SPICE models"],
    useCases: ["Circuit simulation", "Power supply design", "Op-amp circuits", "Transistor analysis"],
    isFree: true,
  },
  {
    name: "Proteus",
    description: "Complete circuit simulation and PCB design suite with microcontroller support",
    category: "design",
    website: "https://www.labcenter.com/",
    features: ["Arduino/8051 simulation", "PCB layout", "3D visualization", "Virtual instruments"],
    useCases: ["Embedded systems", "IoT prototyping", "PCB design", "Microcontroller projects"],
    isFree: false,
  },
  {
    name: "Keil µVision",
    description: "Professional IDE for ARM and 8051 microcontroller development",
    category: "programming",
    website: "https://www.keil.com/",
    features: ["Debugger", "Simulator", "Code optimization", "RTOS support"],
    useCases: ["Embedded C/C++", "ARM Cortex-M", "8051 programming", "Real-time systems"],
    isFree: false,
  },
  {
    name: "Arduino IDE",
    description: "Beginner-friendly open-source platform for electronics projects",
    category: "programming",
    website: "https://www.arduino.cc/en/software",
    features: ["Simple syntax", "Library manager", "Serial monitor", "Board support"],
    useCases: ["IoT projects", "Sensor interfacing", "Robotics", "Home automation"],
    isFree: true,
  },
  {
    name: "Xilinx Vivado",
    description: "FPGA design suite for Verilog/VHDL synthesis and implementation",
    category: "design",
    website: "https://www.xilinx.com/products/design-tools/vivado.html",
    features: ["RTL synthesis", "Simulation", "IP integrator", "Timing analysis"],
    useCases: ["FPGA design", "Digital logic", "HDL coding", "Hardware acceleration"],
    isFree: true,
  },
  {
    name: "Cadence Virtuoso",
    description: "Industry-leading IC layout and analog design tool",
    category: "design",
    website: "https://www.cadence.com/en_US/home/tools/custom-ic-analog-rf-design/virtuoso-studio.html",
    features: ["Schematic editor", "Layout editor", "DRC/LVS", "Parasitic extraction"],
    useCases: ["VLSI design", "Analog IC", "Mixed-signal", "Custom chip design"],
    isFree: false,
  },
  {
    name: "GNU Radio",
    description: "Free software toolkit for signal processing and SDR",
    category: "analysis",
    website: "https://www.gnuradio.org/",
    features: ["Signal flow graphs", "SDR support", "Python integration", "Block library"],
    useCases: ["RF systems", "Software-defined radio", "Communication systems", "DSP prototyping"],
    isFree: true,
  },
];

const categoryColors = {
  simulation: "from-blue-500 to-cyan-500",
  design: "from-purple-500 to-pink-500",
  programming: "from-green-500 to-emerald-500",
  analysis: "from-orange-500 to-amber-500",
};

const ToolsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-secondary/10 text-secondary">
            <Wrench className="w-4 h-4 inline mr-2" />
            Essential Software
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Tools & <span className="gradient-text">Software</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master these industry-standard tools to excel in ECE
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="card-glass rounded-2xl p-5 cursor-pointer group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedTool(tool)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {tool.isFree && (
                <span className="absolute top-3 right-3 px-2 py-0.5 text-xs font-medium rounded-full bg-green-500/20 text-green-600">
                  Free
                </span>
              )}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${categoryColors[tool.category]} flex items-center justify-center mb-4`}>
                <Monitor className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{tool.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {tool.description}
              </p>
              <p className="text-xs text-primary mt-3 group-hover:underline">
                Click to learn more →
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tool Details Modal */}
      {selectedTool && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedTool(null)}
        >
          <motion.div
            className="relative w-full max-w-lg card-glass rounded-3xl p-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedTool(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-4 mb-6">
              <div className={`w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br ${categoryColors[selectedTool.category]} flex items-center justify-center`}>
                <Monitor className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  {selectedTool.name}
                  {selectedTool.isFree && (
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-green-500/20 text-green-600">
                      Free
                    </span>
                  )}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {selectedTool.description}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-muted/30 rounded-xl p-4">
                <h4 className="font-semibold text-sm mb-2">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedTool.features.map((feature, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-lg">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-muted/30 rounded-xl p-4">
                <h4 className="font-semibold text-sm mb-2">Common Use Cases</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {selectedTool.useCases.map((useCase, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={selectedTool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Globe className="w-4 h-4" />
              Visit Official Website
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ToolsSection;
