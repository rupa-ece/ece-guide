import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Lightbulb, X, Cpu, Radio, Wifi, Microchip, Bot, CircuitBoard, Star, Clock, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Project {
  title: string;
  description: string;
  domain: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  teamSize: string;
  components: string[];
  skills: string[];
  icon: LucideIcon;
}

const projects: Project[] = [
  {
    title: "Smart Home Automation System",
    description: "Build an IoT-based home automation system to control lights, fans, and appliances via smartphone app or voice commands.",
    domain: "IoT & Embedded",
    difficulty: "Intermediate",
    duration: "4-6 weeks",
    teamSize: "2-3 members",
    components: ["ESP32/NodeMCU", "Relay modules", "Sensors (PIR, temp)", "MQTT broker"],
    skills: ["Arduino/ESP programming", "Mobile app development", "Cloud integration"],
    icon: Wifi,
  },
  {
    title: "Digital Signal Processor (Audio Equalizer)",
    description: "Design a real-time audio equalizer using DSP techniques to filter and enhance audio signals.",
    domain: "Signal Processing",
    difficulty: "Advanced",
    duration: "6-8 weeks",
    teamSize: "2-3 members",
    components: ["DSP board (TMS320)", "ADC/DAC", "Audio amplifier", "LCD display"],
    skills: ["MATLAB", "C programming", "Filter design", "FFT analysis"],
    icon: Radio,
  },
  {
    title: "FPGA-based Traffic Light Controller",
    description: "Implement an intelligent traffic light system on FPGA using Verilog with emergency vehicle detection.",
    domain: "VLSI & Digital",
    difficulty: "Intermediate",
    duration: "3-4 weeks",
    teamSize: "1-2 members",
    components: ["FPGA board (Xilinx)", "LEDs", "7-segment display", "IR sensors"],
    skills: ["Verilog/VHDL", "FSM design", "FPGA synthesis", "Timing analysis"],
    icon: Microchip,
  },
  {
    title: "Line Following Robot",
    description: "Build an autonomous robot that follows a black line on a white surface using IR sensors and PID control.",
    domain: "Robotics",
    difficulty: "Beginner",
    duration: "2-3 weeks",
    teamSize: "2-3 members",
    components: ["Arduino Uno", "IR sensors", "Motor driver (L298N)", "DC motors", "Chassis"],
    skills: ["Arduino programming", "PID control", "Sensor calibration"],
    icon: Bot,
  },
  {
    title: "Wireless Power Transfer System",
    description: "Design a contactless power transfer system using electromagnetic induction for charging small devices.",
    domain: "Power Electronics",
    difficulty: "Advanced",
    duration: "5-6 weeks",
    teamSize: "2-3 members",
    components: ["Copper coils", "MOSFET drivers", "Oscillator circuit", "Rectifier"],
    skills: ["RF design", "Coil optimization", "Power electronics", "PCB design"],
    icon: CircuitBoard,
  },
  {
    title: "Heart Rate Monitor with IoT",
    description: "Create a wearable heart rate monitoring device that sends data to cloud for real-time health tracking.",
    domain: "Biomedical & IoT",
    difficulty: "Intermediate",
    duration: "4-5 weeks",
    teamSize: "2-3 members",
    components: ["Pulse sensor", "ESP8266", "OLED display", "ThingSpeak/Firebase"],
    skills: ["Sensor interfacing", "Cloud platforms", "Data visualization"],
    icon: Cpu,
  },
];

const difficultyColors = {
  Beginner: "bg-green-500/20 text-green-600",
  Intermediate: "bg-yellow-500/20 text-yellow-600",
  Advanced: "bg-red-500/20 text-red-600",
};

const ProjectIdeasSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            <Lightbulb className="w-4 h-4 inline mr-2" />
            Build & Learn
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Project <span className="gradient-text">Ideas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on projects to strengthen your portfolio and practical skills
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                className="card-glass rounded-2xl p-6 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${difficultyColors[project.difficulty]}`}>
                    {project.difficulty}
                  </span>
                </div>
                <h3 className="font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {project.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {project.teamSize}
                  </span>
                </div>
                <p className="text-xs text-primary mt-3 group-hover:underline">
                  View details →
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto card-glass rounded-3xl p-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 shrink-0 rounded-xl gradient-bg flex items-center justify-center">
                <selectedProject.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{selectedProject.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${difficultyColors[selectedProject.difficulty]}`}>
                    {selectedProject.difficulty}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {selectedProject.domain}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              {selectedProject.description}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-muted/30 rounded-xl p-3 text-center">
                <Clock className="w-5 h-5 mx-auto text-primary mb-1" />
                <p className="text-xs text-muted-foreground">Duration</p>
                <p className="text-sm font-medium">{selectedProject.duration}</p>
              </div>
              <div className="bg-muted/30 rounded-xl p-3 text-center">
                <Users className="w-5 h-5 mx-auto text-primary mb-1" />
                <p className="text-xs text-muted-foreground">Team Size</p>
                <p className="text-sm font-medium">{selectedProject.teamSize}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-muted/30 rounded-xl p-4">
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-primary" />
                  Components Required
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.components.map((component, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-lg">
                      {component}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-muted/30 rounded-xl p-4">
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  Skills You'll Learn
                </h4>
                <ul className="space-y-1">
                  {selectedProject.skills.map((skill, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectIdeasSection;
