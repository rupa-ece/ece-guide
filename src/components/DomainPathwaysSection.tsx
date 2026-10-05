import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  Code2, Microchip, Cpu, X, CheckCircle2, ArrowRight, Map, Zap,
} from "lucide-react";

interface Pathway {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  color: string;
  gradient: string;
  overview: string;
  skills: string[];
  courses: string[];
  companies: string[];
  roles: { level: string; title: string; salary: string }[];
  exams: string[];
  projects: string[];
}

const pathways: Pathway[] = [
  {
    id: "cse-pathway",
    icon: Code2,
    title: "CSE Pathway",
    subtitle: "Software • AI/ML • Web & Cloud",
    color: "text-blue-500",
    gradient: "from-blue-500 to-cyan-500",
    overview:
      "The Computer Science pathway focuses on software development, algorithms, data structures, AI/ML, and cloud technologies. ECE students can pivot into software roles easily — your hardware knowledge is a unique differentiator for systems-level and embedded-software careers.",
    skills: [
      "Programming: C, C++, Java, Python",
      "Data Structures & Algorithms (DSA)",
      "Web Development (React, Node.js)",
      "AI/ML & Data Science fundamentals",
      "Cloud (AWS, Azure, GCP)",
      "Databases (SQL, MongoDB)",
      "Version Control (Git) & Linux",
    ],
    courses: [
      "DSA — Striver / NeetCode (YouTube)",
      "Python for Everybody — NPTEL",
      "Machine Learning — Andrew Ng (Coursera)",
      "Full Stack Web Dev — freeCodeCamp",
      "Cloud Practitioner — AWS Skill Builder",
    ],
    companies: ["Google", "Microsoft", "Amazon", "Meta", "TCS", "Infosys", "Zoho", "Freshworks"],
    roles: [
      { level: "Fresher", title: "Software Developer / SDE-1", salary: "₹4–12 LPA" },
      { level: "Mid", title: "Senior Engineer / Tech Lead", salary: "₹15–30 LPA" },
      { level: "Senior", title: "Architect / Engineering Manager", salary: "₹40 LPA+" },
    ],
    exams: ["GATE CS", "GRE (MS abroad)", "Company coding rounds (LeetCode)"],
    projects: [
      "Portfolio website with live demos",
      "ML model: spam classifier / price predictor",
      "Full-stack task manager app",
      "Chat application with WebSockets",
    ],
  },
  {
    id: "vlsi-pathway",
    icon: Microchip,
    title: "VLSI Pathway",
    subtitle: "Chip Design • Verification • Physical Design",
    color: "text-purple-500",
    gradient: "from-purple-500 to-violet-500",
    overview:
      "The VLSI pathway takes you into semiconductor design — the industry behind every chip in every device. India's Semiconductor Mission is creating massive demand. This path rewards strong digital logic fundamentals and hardware description language mastery.",
    skills: [
      "Digital Logic & CMOS fundamentals",
      "Verilog / VHDL (HDL coding)",
      "SystemVerilog for verification (UVM)",
      "RTL Design & Synthesis",
      "Physical Design (Place & Route)",
      "Timing analysis (STA)",
      "EDA tools: Synopsys, Cadence, Mentor",
    ],
    courses: [
      "Digital Circuits — NPTEL IIT",
      "VLSI Design — NPTEL IIT Kharagpur",
      "CMOS VLSI Design — coursera/UT Austin",
      "Verilog HDL — YouTube tutorials",
      "UVM Verification — Maven Silicon",
    ],
    companies: ["Intel", "NVIDIA", "Qualcomm", "AMD", "Broadcom", "Synopsys", "Cadence", "ARM", "MediaTek", "Micron"],
    roles: [
      { level: "Fresher", title: "RTL/Design Verification Engineer", salary: "₹5–10 LPA" },
      { level: "Mid", title: "Senior Design/Verification Engineer", salary: "₹15–30 LPA" },
      { level: "Senior", title: "Principal/Staff Engineer, Architect", salary: "₹50 LPA+" },
    ],
    exams: ["GATE ECE", "M.Tech VLSI (IISc, IITs)", "Maven Silicon/Sandhips certifications"],
    projects: [
      "Design a simple RISC processor in Verilog",
      "FIFO/ALU/Fixed-point MAC unit design",
      "FPGA-based counter & display controller",
      "UVM testbench for a memory controller",
    ],
  },
  {
    id: "embedded-pathway",
    icon: Cpu,
    title: "Embedded Systems Pathway",
    subtitle: "Firmware • IoT • Automotive",
    color: "text-green-500",
    gradient: "from-green-500 to-emerald-500",
    overview:
      "The Embedded Systems pathway bridges hardware and software — programming microcontrollers and processors that power cars, drones, medical devices, and smart appliances. It's the sweet spot for ECE students who enjoy both circuits and coding.",
    skills: [
      "Embedded C & C++",
      "Microcontrollers: STM32, ARM Cortex-M, ESP32",
      "RTOS: FreeRTOS, Zephyr",
      "Communication protocols: UART, SPI, I2C, CAN",
      "Linux for embedded (device drivers, Yocto)",
      "Sensors & actuator interfacing",
      "Debugging: JTAG, oscilloscope, logic analyzer",
    ],
    courses: [
      "Embedded Systems — NPTEL",
      "STM32 mastery — Udemy / YouTube",
      "FreeRTOS — Neso Academy",
      "IoT with ESP32 — Coursera",
      "Linux device drivers — NPTEL / LFD courses",
    ],
    companies: ["Bosch", "Continental", "Texas Instruments", "Qualcomm", "NXP", "STMicroelectronics", "Harman", "Tesla", "Honeywell", "Dassault"],
    roles: [
      { level: "Fresher", title: "Embedded Software Engineer", salary: "₹4–8 LPA" },
      { level: "Mid", title: "Firmware/IoT Lead", salary: "₹12–22 LPA" },
      { level: "Senior", title: "Embedded Architect / CTO-track", salary: "₹35 LPA+" },
    ],
    exams: ["GATE ECE", "ARM certifications", "Linux Foundation certs (LFCS)"],
    projects: [
      "Home automation with ESP32 + MQTT",
      "Obstacle-avoiding robot with ultrasonic sensors",
      "Heart-rate monitor with cloud dashboard",
      "CAN bus data logger for vehicles",
    ],
  },
];

const DomainPathwaysSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activePathway, setActivePathway] = useState<Pathway | null>(null);
  const [tab, setTab] = useState<"skills" | "courses" | "roles" | "projects">("skills");

  return (
    <section className="section-padding bg-muted/30" id="pathways" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            <Map className="w-4 h-4 inline mr-2" />
            Choose Your Direction
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Domain <span className="gradient-text">Pathways</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the three most rewarding career paths for ECE students — compare skills, courses, companies, and salaries.
          </p>
        </motion.div>

        {/* Pathway cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {pathways.map((pw, index) => {
            const Icon = pw.icon;
            return (
              <motion.button
                key={pw.id}
                className="card-glass rounded-2xl p-7 text-left group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setActivePathway(pw);
                  setTab("skills");
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${pw.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <div className={`w-14 h-14 mb-5 rounded-2xl bg-gradient-to-br ${pw.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">{pw.title}</h3>
                <p className={`text-sm font-medium ${pw.color} mb-3`}>{pw.subtitle}</p>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{pw.overview}</p>
                <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium">
                  Explore Pathway <ArrowRight className="w-4 h-4" />
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Pathway detail modal */}
        <AnimatePresence>
          {activePathway && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePathway(null)}
            >
              <motion.div
                className="relative w-full max-w-3xl bg-card rounded-2xl overflow-hidden shadow-2xl max-h-[85vh] overflow-y-auto"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${activePathway.gradient}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-white">
                      <activePathway.icon className="w-10 h-10" />
                      <div>
                        <h3 className="font-display font-bold text-2xl">{activePathway.title}</h3>
                        <p className="opacity-90 text-sm">{activePathway.subtitle}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setActivePathway(null)}
                      className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <p className="text-white/90 text-sm mt-4 leading-relaxed">{activePathway.overview}</p>
                </div>

                {/* Tabs */}
                <div className="flex gap-1 px-6 pt-4 border-b border-border overflow-x-auto">
                  {([
                    { key: "skills", label: "Skills" },
                    { key: "courses", label: "Courses" },
                    { key: "roles", label: "Careers & Salary" },
                    { key: "projects", label: "Projects" },
                  ] as const).map((t) => (
                    <button
                      key={t.key}
                      onClick={() => setTab(t.key)}
                      className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                        tab === t.key
                          ? "text-primary border-primary"
                          : "text-muted-foreground border-transparent hover:text-foreground"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={tab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      {tab === "skills" && (
                        <div className="space-y-5">
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <Zap className="w-4 h-4 text-primary" /> Core Skills to Master
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {activePathway.skills.map((s) => (
                                <span key={s} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <GraduationCap className="w-4 h-4 text-secondary" /> Exams & Certifications
                            </h4>
                            <div className="grid gap-2">
                              {activePathway.exams.map((e) => (
                                <div key={e} className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-lg p-3">
                                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> {e}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {tab === "courses" && (
                        <div className="space-y-3">
                          {activePathway.courses.map((c, i) => (
                            <motion.div
                              key={c}
                              className="flex items-center gap-3 card-glass rounded-xl p-4"
                              initial={{ opacity: 0, x: -15 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.07 }}
                            >
                              <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${activePathway.gradient} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                                {i + 1}
                              </span>
                              <span className="text-foreground font-medium">{c}</span>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {tab === "roles" && (
                        <div className="space-y-5">
                          <div className="grid gap-3">
                            {activePathway.roles.map((r, i) => (
                              <motion.div
                                key={r.title}
                                className="card-glass rounded-xl p-4 flex items-center justify-between gap-4"
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.07 }}
                              >
                                <div>
                                  <p className="text-xs font-medium text-muted-foreground">{r.level}</p>
                                  <p className="font-semibold text-foreground">{r.title}</p>
                                </div>
                                <span className="font-display font-bold gradient-text whitespace-nowrap">{r.salary}</span>
                              </motion.div>
                            ))}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <Briefcase className="w-4 h-4 text-primary" /> Top Companies Hiring
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {activePathway.companies.map((c) => (
                                <span key={c} className="px-3 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                                  {c}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {tab === "projects" && (
                        <div className="grid gap-3">
                          {activePathway.projects.map((p, i) => (
                            <motion.div
                              key={p}
                              className="flex items-center gap-3 bg-muted/50 rounded-xl p-4"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.07 }}
                            >
                              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                              <span className="text-foreground">{p}</span>
                            </motion.div>
                          ))}
                          <p className="text-xs text-muted-foreground text-center mt-2">
                            Build 2–3 of these for a strong resume portfolio.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

import { Briefcase, GraduationCap } from "lucide-react";

export default DomainPathwaysSection;
