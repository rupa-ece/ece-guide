import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Microchip, Cpu, Radio, Bot, Zap, FlaskConical, 
  Building2, GraduationCap, X, Building, Briefcase, ArrowLeft, MapPin, Users, Rocket
} from "lucide-react";

interface CompanyInfo {
  name: string;
  focus: string;
  technologies: string[];
  locations: string[];
  whyJoin: string;
}

interface CareerItem {
  icon: typeof Microchip;
  title: string;
  desc: string;
  companies: CompanyInfo[];
  skills: string[];
  exams?: { name: string; desc: string }[];
}

const careers: CareerItem[] = [
  { 
    icon: Microchip, 
    title: "VLSI Design Engineer", 
    desc: "Design chips powering devices",
    companies: [
      { name: "Intel", focus: "Microprocessors & SoCs", technologies: ["Verilog", "Physical Design", "FinFET"], locations: ["Bangalore", "Hyderabad", "USA"], whyJoin: "Industry pioneer in chip design with cutting-edge fabs" },
      { name: "NVIDIA", focus: "GPUs & AI Accelerators", technologies: ["CUDA", "RTL Design", "ML Hardware"], locations: ["Bangalore", "Pune", "California"], whyJoin: "Leading AI hardware revolution with massive R&D investment" },
      { name: "Qualcomm", focus: "Mobile SoCs & 5G", technologies: ["ARM Architecture", "RF Integration", "Low Power"], locations: ["Hyderabad", "Bangalore", "San Diego"], whyJoin: "Powers 40% of world's smartphones with Snapdragon chips" },
      { name: "AMD", focus: "CPUs & GPUs", technologies: ["Zen Architecture", "RDNA", "Chiplets"], locations: ["Hyderabad", "Bangalore", "Austin"], whyJoin: "Competing with Intel/NVIDIA with innovative architectures" },
      { name: "Broadcom", focus: "Networking & Storage Chips", technologies: ["SerDes", "Mixed Signal", "ASIC"], locations: ["Bangalore", "Singapore", "San Jose"], whyJoin: "Diverse portfolio from WiFi to enterprise storage" },
      { name: "Samsung Semiconductor", focus: "Memory & Foundry", technologies: ["DRAM", "NAND", "GAA FET"], locations: ["Bangalore", "Noida", "Korea"], whyJoin: "World's largest memory manufacturer with foundry services" },
      { name: "MediaTek", focus: "Mobile & IoT SoCs", technologies: ["5G Modems", "AI Processing", "TV SoCs"], locations: ["Bangalore", "Noida", "Taiwan"], whyJoin: "Major player in affordable smartphone chipsets" },
      { name: "Synopsys", focus: "EDA Tools & IP", technologies: ["Synthesis", "DFT", "Verification"], locations: ["Bangalore", "Hyderabad", "Mountain View"], whyJoin: "Makes tools that every chip designer uses daily" },
      { name: "Cadence", focus: "EDA & System Design", technologies: ["Virtuoso", "Innovus", "Xcelium"], locations: ["Bangalore", "Noida", "San Jose"], whyJoin: "Industry-leading analog and digital design tools" },
      { name: "ARM", focus: "Processor IP Cores", technologies: ["ARM ISA", "Cortex Cores", "Mali GPU"], locations: ["Bangalore", "Cambridge UK", "Austin"], whyJoin: "Designs cores used in 95% of smartphones worldwide" }
    ],
    skills: ["Verilog/VHDL", "Physical Design", "SoC Architecture", "Timing Analysis"]
  },
  { 
    icon: Cpu, 
    title: "Embedded Systems Engineer", 
    desc: "Program smart hardware",
    companies: [
      { name: "Bosch", focus: "Automotive Electronics", technologies: ["AUTOSAR", "CAN/LIN", "Functional Safety"], locations: ["Bangalore", "Coimbatore", "Germany"], whyJoin: "World's largest automotive supplier with ECU expertise" },
      { name: "Continental", focus: "ADAS & Vehicle Systems", technologies: ["Embedded Linux", "RADAR", "Camera Systems"], locations: ["Bangalore", "Gurgaon", "Germany"], whyJoin: "Leading autonomous driving technology development" },
      { name: "Texas Instruments", focus: "MCUs & Analog ICs", technologies: ["TI-RTOS", "DSP", "Analog Design"], locations: ["Bangalore", "Dallas", "Shanghai"], whyJoin: "Extensive learning with 100,000+ product portfolio" },
      { name: "STMicroelectronics", focus: "MCUs & Sensors", technologies: ["STM32", "MEMS", "Power Electronics"], locations: ["Noida", "Geneva", "Singapore"], whyJoin: "Strong in automotive and industrial embedded solutions" },
      { name: "NXP Semiconductors", focus: "Automotive & Security", technologies: ["i.MX Processors", "NFC", "Secure Elements"], locations: ["Bangalore", "Noida", "Netherlands"], whyJoin: "Leader in automotive radar and secure authentication" },
      { name: "Infineon", focus: "Power & Security", technologies: ["Power MOSFETs", "TPM", "Sensors"], locations: ["Bangalore", "Munich", "Singapore"], whyJoin: "Top supplier for EV power electronics components" },
      { name: "Harman", focus: "Connected Car & Audio", technologies: ["Android Automotive", "Audio DSP", "Connectivity"], locations: ["Bangalore", "Pune", "Detroit"], whyJoin: "Premium audio and connected car solutions (Samsung subsidiary)" },
      { name: "Honeywell", focus: "Aerospace & Industrial", technologies: ["Avionics", "Building Automation", "Safety Systems"], locations: ["Bangalore", "Hyderabad", "Phoenix"], whyJoin: "Diverse domains from aircraft to smart buildings" },
      { name: "Denso", focus: "Automotive Components", technologies: ["ECU Development", "HMI", "EV Systems"], locations: ["Bangalore", "Gurgaon", "Japan"], whyJoin: "Toyota group company with strong quality culture" },
      { name: "Valeo", focus: "ADAS & Electrification", technologies: ["LiDAR", "Battery Management", "Thermal Systems"], locations: ["Chennai", "Paris", "Germany"], whyJoin: "Innovation leader in vehicle electrification" }
    ],
    skills: ["C/C++", "RTOS", "Microcontrollers", "Firmware Development"]
  },
  { 
    icon: Radio, 
    title: "Communication Engineer", 
    desc: "Build wireless networks",
    companies: [
      { name: "Ericsson", focus: "5G Infrastructure", technologies: ["5G NR", "Cloud RAN", "Network Slicing"], locations: ["Bangalore", "Chennai", "Stockholm"], whyJoin: "Pioneer in 5G with largest global network deployments" },
      { name: "Nokia", focus: "Network Equipment", technologies: ["5G", "IP Routing", "Optical Networks"], locations: ["Bangalore", "Chennai", "Finland"], whyJoin: "End-to-end telecom solutions from RAN to core" },
      { name: "Cisco", focus: "Enterprise Networking", technologies: ["Routers", "SD-WAN", "Network Security"], locations: ["Bangalore", "Chennai", "San Jose"], whyJoin: "Dominant in enterprise networking with strong R&D" },
      { name: "Huawei", focus: "Telecom Equipment", technologies: ["5G RAN", "Core Networks", "Microwave"], locations: ["Bangalore", "Delhi", "Shenzhen"], whyJoin: "Massive R&D investment in next-gen telecom" },
      { name: "Jio", focus: "Telecom Services", technologies: ["4G/5G", "VoLTE", "FTTH"], locations: ["Mumbai", "Hyderabad", "Bangalore"], whyJoin: "India's largest telecom with aggressive 5G rollout" },
      { name: "Airtel", focus: "Telecom Services", technologies: ["Network Operations", "VAS", "Enterprise Solutions"], locations: ["Gurgaon", "Bangalore", "Delhi"], whyJoin: "Leading private telecom with pan-India presence" },
      { name: "Qualcomm", focus: "5G Modems & RF", technologies: ["5G Modem", "mmWave", "RF Front-End"], locations: ["Hyderabad", "Bangalore", "San Diego"], whyJoin: "Defines mobile communication standards globally" },
      { name: "Samsung Networks", focus: "5G Solutions", technologies: ["5G RAN", "vRAN", "Network Analytics"], locations: ["Bangalore", "Noida", "Korea"], whyJoin: "Growing 5G infrastructure business with innovation" },
      { name: "ZTE", focus: "Telecom Equipment", technologies: ["5G Systems", "Optical Transport", "Terminals"], locations: ["Bangalore", "Shenzhen", "Nanjing"], whyJoin: "Cost-effective 5G solutions with R&D focus" },
      { name: "Motorola Solutions", focus: "Critical Communications", technologies: ["P25", "TETRA", "LTE for Public Safety"], locations: ["Bangalore", "Chicago", "UK"], whyJoin: "Mission-critical communications for public safety" }
    ],
    skills: ["RF Design", "5G/LTE", "Signal Processing", "Antenna Design"]
  },
  { 
    icon: Bot, 
    title: "IoT / Robotics Engineer", 
    desc: "Create connected solutions",
    companies: [
      { name: "Tesla", focus: "EV & Autonomous Systems", technologies: ["Neural Networks", "Battery Systems", "FSD"], locations: ["Bangalore", "Palo Alto", "Austin"], whyJoin: "Cutting-edge EV technology with vertical integration" },
      { name: "Boston Dynamics", focus: "Advanced Robotics", technologies: ["Robot Locomotion", "Computer Vision", "Control Systems"], locations: ["Boston", "Remote"], whyJoin: "World's most advanced humanoid and quadruped robots" },
      { name: "ABB Robotics", focus: "Industrial Automation", technologies: ["Robot Arms", "PLCs", "Machine Vision"], locations: ["Bangalore", "Zurich", "Shanghai"], whyJoin: "Industrial robotics leader with global presence" },
      { name: "FANUC", focus: "Factory Automation", technologies: ["CNC", "Robot Controllers", "IoT Platform"], locations: ["Bangalore", "Japan", "USA"], whyJoin: "World's largest industrial robot manufacturer" },
      { name: "Amazon Robotics", focus: "Warehouse Automation", technologies: ["AGVs", "Pick & Place", "Fleet Management"], locations: ["Bangalore", "Boston", "Seattle"], whyJoin: "Massive scale robotics deployment in fulfillment centers" },
      { name: "iRobot", focus: "Consumer Robotics", technologies: ["SLAM", "Robot Navigation", "Smart Home"], locations: ["Remote", "Bedford MA"], whyJoin: "Creator of Roomba with home robotics expertise" },
      { name: "Universal Robots", focus: "Cobots", technologies: ["Collaborative Robots", "Force Sensing", "Easy Programming"], locations: ["Bangalore", "Denmark", "USA"], whyJoin: "Pioneer in safe human-robot collaboration" },
      { name: "Siemens", focus: "Industrial IoT", technologies: ["MindSphere", "Digital Twin", "PLCs"], locations: ["Bangalore", "Munich", "USA"], whyJoin: "Industry 4.0 leader with comprehensive IoT platform" },
      { name: "Rockwell Automation", focus: "Industrial Control", technologies: ["Allen-Bradley", "FactoryTalk", "Motion Control"], locations: ["Bangalore", "Milwaukee", "Shanghai"], whyJoin: "America's largest industrial automation company" },
      { name: "Schneider Electric", focus: "Energy & Automation", technologies: ["IoT Platforms", "PLCs", "Energy Management"], locations: ["Bangalore", "Paris", "Hong Kong"], whyJoin: "Sustainability-focused industrial automation" }
    ],
    skills: ["Sensor Integration", "ROS", "Edge Computing", "Machine Learning"]
  },
  { 
    icon: Zap, 
    title: "Electronics Engineer", 
    desc: "Design electronic systems",
    companies: [
      { name: "Apple", focus: "Consumer Electronics", technologies: ["Hardware Design", "Power Management", "Display Tech"], locations: ["Bangalore", "Hyderabad", "Cupertino"], whyJoin: "Design world's most premium consumer electronics" },
      { name: "Samsung Electronics", focus: "Consumer & Components", technologies: ["Display", "Memory", "Mobile Hardware"], locations: ["Bangalore", "Noida", "Korea"], whyJoin: "Vertically integrated electronics giant" },
      { name: "Sony", focus: "Imaging & Entertainment", technologies: ["Image Sensors", "Audio", "Gaming Hardware"], locations: ["Bangalore", "Tokyo", "San Diego"], whyJoin: "Innovation in imaging sensors and entertainment tech" },
      { name: "LG Electronics", focus: "Home Appliances & Displays", technologies: ["OLED", "Smart Home", "EV Components"], locations: ["Noida", "Pune", "Korea"], whyJoin: "Leading display technology and home electronics" },
      { name: "Philips", focus: "Healthcare Electronics", technologies: ["Medical Imaging", "Patient Monitoring", "Diagnostics"], locations: ["Bangalore", "Pune", "Netherlands"], whyJoin: "Healthcare technology with global impact" },
      { name: "Panasonic", focus: "Automotive & Industrial", technologies: ["Batteries", "Avionics", "Factory Solutions"], locations: ["Gurgaon", "Osaka", "USA"], whyJoin: "Tesla battery partner with diverse electronics" },
      { name: "Dell", focus: "Computing Hardware", technologies: ["Laptops", "Servers", "Storage"], locations: ["Bangalore", "Chennai", "Austin"], whyJoin: "End-to-end computing solutions with India R&D" },
      { name: "HP", focus: "Printing & Computing", technologies: ["Printers", "PCs", "3D Printing"], locations: ["Bangalore", "Palo Alto", "Singapore"], whyJoin: "Innovation in printing and personal systems" },
      { name: "Lenovo", focus: "PCs & Data Centers", technologies: ["ThinkPad", "Servers", "Smart Devices"], locations: ["Bangalore", "Beijing", "USA"], whyJoin: "World's largest PC vendor with growing R&D" },
      { name: "Xiaomi", focus: "Smart Devices", technologies: ["IoT Ecosystem", "Smartphones", "AIoT"], locations: ["Bangalore", "Beijing", "Indonesia"], whyJoin: "Fast-growing ecosystem with affordable innovation" }
    ],
    skills: ["PCB Design", "Power Electronics", "Circuit Analysis", "EMC Testing"]
  },
  { 
    icon: FlaskConical, 
    title: "Research Scientist", 
    desc: "Innovate in R&D labs",
    companies: [
      { name: "Google Research", focus: "AI & Quantum Computing", technologies: ["TensorFlow", "Quantum Hardware", "TPUs"], locations: ["Bangalore", "Mountain View", "Zurich"], whyJoin: "Cutting-edge research with real-world applications" },
      { name: "Microsoft Research", focus: "AI & Systems", technologies: ["Azure AI", "HoloLens", "Quantum"], locations: ["Bangalore", "Hyderabad", "Redmond"], whyJoin: "Academic-style research with product impact" },
      { name: "IBM Research", focus: "Quantum & AI", technologies: ["Qiskit", "Watson", "Neuromorphic"], locations: ["Bangalore", "Yorktown Heights", "Zurich"], whyJoin: "Century of innovation from transistors to quantum" },
      { name: "Bell Labs (Nokia)", focus: "Future Networks", technologies: ["6G Research", "Optical", "AI for Networks"], locations: ["Bangalore", "Murray Hill", "Paris"], whyJoin: "Nobel Prize-winning research legacy continues" },
      { name: "MIT Lincoln Lab", focus: "Defense Technology", technologies: ["Radar", "Space Systems", "Cybersecurity"], locations: ["Boston", "USA"], whyJoin: "Advanced R&D for national security applications" },
      { name: "CERN", focus: "Particle Physics", technologies: ["Accelerators", "Detectors", "Computing Grid"], locations: ["Geneva"], whyJoin: "Fundamental physics research with global collaboration" },
      { name: "NASA JPL", focus: "Space Systems", technologies: ["Spacecraft", "Robotics", "Deep Space Comm"], locations: ["Pasadena", "USA"], whyJoin: "Design systems that explore the solar system" },
      { name: "Max Planck Institutes", focus: "Fundamental Research", technologies: ["Various Domains", "Pure Research", "Collaboration"], locations: ["Germany (Various)"], whyJoin: "World-class basic research with academic freedom" },
      { name: "IMEC", focus: "Nanoelectronics", technologies: ["Sub-5nm", "Photonics", "Bio-electronics"], locations: ["Leuven (Belgium)", "Netherlands"], whyJoin: "World's leading semiconductor research center" },
      { name: "Applied Materials", focus: "Semiconductor Equipment", technologies: ["Deposition", "Etch", "Metrology"], locations: ["Bangalore", "Santa Clara", "Singapore"], whyJoin: "Makes machines that make chips at atomic scale" }
    ],
    skills: ["Academic Writing", "Prototyping", "Data Analysis", "Patent Filing"]
  },
  { 
    icon: Building2, 
    title: "ISRO, DRDO, BEL, PSUs", 
    desc: "Government sector jobs",
    companies: [
      { name: "ISRO", focus: "Space Technology", technologies: ["Satellites", "Launch Vehicles", "Deep Space"], locations: ["Bangalore", "Sriharikota", "Ahmedabad"], whyJoin: "Build rockets and satellites for national pride" },
      { name: "DRDO", focus: "Defense R&D", technologies: ["Missiles", "Radars", "Electronic Warfare"], locations: ["Bangalore", "Hyderabad", "Delhi"], whyJoin: "Develop cutting-edge defense technology for India" },
      { name: "BEL", focus: "Defense Electronics", technologies: ["Radar Systems", "Communication", "EW Systems"], locations: ["Bangalore", "Ghaziabad", "Hyderabad"], whyJoin: "India's premier defense electronics manufacturer" },
      { name: "BHEL", focus: "Power Equipment", technologies: ["Turbines", "Transformers", "Solar"], locations: ["Hyderabad", "Bhopal", "Haridwar"], whyJoin: "Build power infrastructure for the nation" },
      { name: "HAL", focus: "Aerospace", technologies: ["Fighter Jets", "Helicopters", "Avionics"], locations: ["Bangalore", "Nashik", "Lucknow"], whyJoin: "Design and manufacture military aircraft" },
      { name: "ECIL", focus: "Electronics & IT", technologies: ["Nuclear Instruments", "Security Systems", "IT"], locations: ["Hyderabad"], whyJoin: "Critical electronics for nuclear and defense sectors" },
      { name: "BSNL", focus: "Telecom Services", technologies: ["Network Infrastructure", "Fiber", "4G/5G"], locations: ["Pan India"], whyJoin: "Government telecom with rural connectivity mission" },
      { name: "MTNL", focus: "Telecom (Metro)", technologies: ["Fixed Line", "Broadband", "Enterprise"], locations: ["Delhi", "Mumbai"], whyJoin: "Metro telecom services with stable career" },
      { name: "Power Grid", focus: "Power Transmission", technologies: ["HVDC", "Smart Grid", "Substations"], locations: ["Gurgaon", "Pan India"], whyJoin: "Backbone of India's power transmission network" },
      { name: "NTPC", focus: "Power Generation", technologies: ["Thermal", "Solar", "Hydro"], locations: ["Noida", "Various Plants"], whyJoin: "India's largest power generation company" }
    ],
    skills: ["GATE Qualification", "Defense Systems", "Space Technology", "Power Systems"]
  },
  { 
    icon: GraduationCap, 
    title: "Higher Studies", 
    desc: "M.Tech / MS / PhD paths",
    companies: [
      { name: "IITs", focus: "Premier Engineering", technologies: ["Research Focus", "Industry Collaboration", "Funded Projects"], locations: ["Pan India"], whyJoin: "India's top engineering institutes with global recognition" },
      { name: "IISc Bangalore", focus: "Science & Research", technologies: ["Pure Research", "Interdisciplinary", "PhD Focus"], locations: ["Bangalore"], whyJoin: "India's premier research institution" },
      { name: "NITs", focus: "Quality Engineering", technologies: ["Applied Research", "Industry Projects", "Good Placements"], locations: ["Pan India"], whyJoin: "Excellent education with affordable fees" },
      { name: "MIT", focus: "World-Class Research", technologies: ["Cutting-edge Labs", "Startup Culture", "Innovation"], locations: ["Boston, USA"], whyJoin: "World's #1 for engineering and technology" },
      { name: "Stanford", focus: "Silicon Valley Hub", technologies: ["AI/ML", "Entrepreneurship", "Industry Connect"], locations: ["California, USA"], whyJoin: "Heart of Silicon Valley with startup ecosystem" },
      { name: "UC Berkeley", focus: "Public Research", technologies: ["EECS Excellence", "Open Source", "Research"], locations: ["California, USA"], whyJoin: "Top public university with EECS heritage" },
      { name: "CMU", focus: "CS & Robotics", technologies: ["Robotics Institute", "AI Research", "ECE"], locations: ["Pittsburgh, USA"], whyJoin: "Best for robotics and computer engineering" },
      { name: "ETH Zurich", focus: "European Excellence", technologies: ["Precision Engineering", "Research", "Innovation"], locations: ["Zurich, Switzerland"], whyJoin: "Europe's leading technical university" },
      { name: "TU Munich", focus: "German Engineering", technologies: ["Automotive", "Industry 4.0", "Research"], locations: ["Munich, Germany"], whyJoin: "Strong industry connections in Germany" },
      { name: "NUS Singapore", focus: "Asian Hub", technologies: ["Electronics", "AI", "Quantum"], locations: ["Singapore"], whyJoin: "Asia's top university with global outlook" }
    ],
    exams: [
      { name: "GATE", desc: "For M.Tech in IITs, NITs, IISc" },
      { name: "GRE", desc: "For MS/PhD in USA, Canada" },
      { name: "TOEFL/IELTS", desc: "English proficiency for abroad" },
      { name: "CAT/GMAT", desc: "For MBA after engineering" },
      { name: "CSIR-NET", desc: "For research fellowships" },
      { name: "ESE/IES", desc: "For Engineering Services" }
    ],
    skills: []
  },
];

const CareerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCareer, setActiveCareer] = useState<string | null>(null);
  const [activeCompany, setActiveCompany] = useState<CompanyInfo | null>(null);

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
              onClick={() => { setActiveCareer(null); setActiveCompany(null); }}
            >
              <motion.div
                className="relative w-full max-w-2xl bg-card rounded-2xl overflow-hidden shadow-2xl max-h-[80vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Company Detail View */}
                {activeCompany ? (
                  <>
                    <div className="p-6 gradient-bg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-primary-foreground">
                          <button
                            onClick={() => setActiveCompany(null)}
                            className="p-2 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                          >
                            <ArrowLeft className="w-5 h-5" />
                          </button>
                          <div>
                            <h3 className="font-display font-bold text-2xl">
                              {activeCompany.name}
                            </h3>
                            <p className="opacity-90">{activeCompany.focus}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => { setActiveCareer(null); setActiveCompany(null); }}
                          className="p-2 hover:bg-primary-foreground/20 rounded-lg transition-colors text-primary-foreground"
                        >
                          <X className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                    <div className="p-6 space-y-6">
                      {/* Technologies */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Rocket className="w-5 h-5 text-primary" />
                          <h4 className="font-semibold text-lg">Key Technologies</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {activeCompany.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Locations */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <MapPin className="w-5 h-5 text-secondary" />
                          <h4 className="font-semibold text-lg">Office Locations</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {activeCompany.locations.map((loc) => (
                            <span
                              key={loc}
                              className="px-3 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                            >
                              {loc}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Why Join */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Users className="w-5 h-5 text-primary" />
                          <h4 className="font-semibold text-lg">Why ECE Students Prefer</h4>
                        </div>
                        <p className="text-muted-foreground leading-relaxed card-glass rounded-xl p-4">
                          {activeCompany.whyJoin}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Career Overview */
                  <>
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
                            <span className="text-sm font-normal text-muted-foreground ml-2">(Click for details)</span>
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {activeData.companies.map((company) => (
                            <button
                              key={company.name}
                              onClick={() => setActiveCompany(company)}
                              className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-pointer"
                            >
                              {company.name}
                            </button>
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
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CareerSection;
