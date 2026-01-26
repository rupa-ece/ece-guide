import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Microchip, Cpu, Radio, Bot, Zap, FlaskConical, 
  Building2, GraduationCap, X, Building, Briefcase
} from "lucide-react";

const careers = [
  { 
    icon: Microchip, 
    title: "VLSI Design Engineer", 
    desc: "Design chips powering devices",
    companies: ["Intel", "NVIDIA", "Qualcomm", "AMD", "Broadcom", "Samsung Semiconductor", "MediaTek", "Synopsys", "Cadence", "ARM"],
    skills: ["Verilog/VHDL", "Physical Design", "SoC Architecture", "Timing Analysis"]
  },
  { 
    icon: Cpu, 
    title: "Embedded Systems Engineer", 
    desc: "Program smart hardware",
    companies: ["Bosch", "Continental", "Texas Instruments", "STMicroelectronics", "NXP", "Infineon", "Harman", "Honeywell", "Denso", "Valeo"],
    skills: ["C/C++", "RTOS", "Microcontrollers", "Firmware Development"]
  },
  { 
    icon: Radio, 
    title: "Communication Engineer", 
    desc: "Build wireless networks",
    companies: ["Ericsson", "Nokia", "Cisco", "Huawei", "Jio", "Airtel", "Qualcomm", "Samsung Networks", "ZTE", "Motorola Solutions"],
    skills: ["RF Design", "5G/LTE", "Signal Processing", "Antenna Design"]
  },
  { 
    icon: Bot, 
    title: "IoT / Robotics Engineer", 
    desc: "Create connected solutions",
    companies: ["Tesla", "Boston Dynamics", "ABB Robotics", "FANUC", "Amazon Robotics", "iRobot", "Universal Robots", "Siemens", "Rockwell", "Schneider Electric"],
    skills: ["Sensor Integration", "ROS", "Edge Computing", "Machine Learning"]
  },
  { 
    icon: Zap, 
    title: "Electronics Engineer", 
    desc: "Design electronic systems",
    companies: ["Apple", "Samsung", "Sony", "LG Electronics", "Philips", "Panasonic", "Dell", "HP", "Lenovo", "Xiaomi"],
    skills: ["PCB Design", "Power Electronics", "Circuit Analysis", "EMC Testing"]
  },
  { 
    icon: FlaskConical, 
    title: "Research Scientist", 
    desc: "Innovate in R&D labs",
    companies: ["Google Research", "Microsoft Research", "IBM Research", "Bell Labs", "MIT Lincoln Lab", "CERN", "NASA JPL", "Max Planck Institutes", "IMEC", "Applied Materials"],
    skills: ["Academic Writing", "Prototyping", "Data Analysis", "Patent Filing"]
  },
  { 
    icon: Building2, 
    title: "ISRO, DRDO, BEL, PSUs", 
    desc: "Government sector jobs",
    companies: ["ISRO", "DRDO", "BEL", "BHEL", "HAL", "ECIL", "BSNL", "MTNL", "Power Grid", "NTPC"],
    skills: ["GATE Qualification", "Defense Systems", "Space Technology", "Power Systems"]
  },
  { 
    icon: GraduationCap, 
    title: "Higher Studies", 
    desc: "M.Tech / MS / PhD paths",
    companies: ["IITs", "IISc", "NITs", "MIT", "Stanford", "UC Berkeley", "CMU", "ETH Zurich", "TU Munich", "NUS Singapore"],
    exams: [
      { name: "GATE", desc: "For M.Tech in IITs, NITs, IISc" },
      { name: "GRE", desc: "For MS/PhD in USA, Canada" },
      { name: "TOEFL/IELTS", desc: "English proficiency for abroad" },
      { name: "CAT/GMAT", desc: "For MBA after engineering" },
      { name: "CSIR-NET", desc: "For research fellowships" },
      { name: "ESE/IES", desc: "For Engineering Services" }
    ]
  },
];

const CareerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCareer, setActiveCareer] = useState<string | null>(null);

  const activeData = careers.find(c => c.title === activeCareer);

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
            Your Future
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Career <span className="gradient-text">Opportunities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on any career to explore companies and requirements
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {careers.map((career, index) => (
            <motion.div
              key={career.title}
              className="card-glass rounded-2xl p-6 text-center group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              onClick={() => setActiveCareer(career.title)}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                <career.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">
                {career.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {career.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Career Details Modal */}
        <AnimatePresence>
          {activeCareer && activeData && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCareer(null)}
            >
              <motion.div
                className="relative w-full max-w-2xl bg-card rounded-2xl overflow-hidden shadow-2xl max-h-[80vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 gradient-bg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-primary-foreground">
                      <activeData.icon className="w-10 h-10" />
                      <div>
                        <h3 className="font-display font-bold text-2xl">
                          {activeData.title}
                        </h3>
                        <p className="opacity-90">{activeData.desc}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveCareer(null)}
                      className="p-2 hover:bg-primary-foreground/20 rounded-lg transition-colors text-primary-foreground"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  {/* Companies */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Building className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-lg">
                        {activeData.title === "Higher Studies" ? "Top Institutions" : "Top Companies"}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeData.companies.map((company) => (
                        <span
                          key={company}
                          className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Skills or Exams */}
                  {'exams' in activeData && activeData.exams ? (
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <GraduationCap className="w-5 h-5 text-secondary" />
                        <h4 className="font-semibold text-lg">Important Exams</h4>
                      </div>
                      <div className="grid gap-3">
                        {activeData.exams.map((exam) => (
                          <div key={exam.name} className="card-glass rounded-xl p-4">
                            <h5 className="font-bold text-foreground">{exam.name}</h5>
                            <p className="text-sm text-muted-foreground">{exam.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Briefcase className="w-5 h-5 text-secondary" />
                        <h4 className="font-semibold text-lg">Key Skills Required</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activeData.skills?.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CareerSection;
