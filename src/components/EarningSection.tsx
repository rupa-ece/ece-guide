import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp, IndianRupee, Plane, Award, ChevronDown, X } from "lucide-react";

const salaryData = [
  {
    level: "Freshers",
    salary: "₹4–8 LPA",
    description: "Entry-level positions in product companies and service firms",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
    roles: [
      { title: "Junior Electronics Engineer", salary: "₹4-6 LPA", companies: "Samsung, LG, Philips" },
      { title: "Graduate Engineer Trainee (GET)", salary: "₹3.5-5 LPA", companies: "TCS, Wipro, Infosys" },
      { title: "Associate VLSI Engineer", salary: "₹5-8 LPA", companies: "Intel, Qualcomm, AMD" },
      { title: "Embedded Software Trainee", salary: "₹4-6 LPA", companies: "Bosch, Continental, Harman" },
      { title: "RF Engineer Trainee", salary: "₹4-7 LPA", companies: "Nokia, Ericsson, Jio" },
      { title: "PCB Design Engineer", salary: "₹3.5-5 LPA", companies: "Flex, Jabil, Sanmina" }
    ]
  },
  {
    level: "Mid-Level",
    salary: "₹10–20 LPA",
    description: "3-7 years experience in core ECE roles",
    icon: IndianRupee,
    color: "from-blue-500 to-cyan-500",
    roles: [
      { title: "Senior VLSI Design Engineer", salary: "₹15-25 LPA", companies: "Intel, NVIDIA, Qualcomm" },
      { title: "Embedded Systems Lead", salary: "₹12-20 LPA", companies: "Bosch, Continental, Tesla" },
      { title: "RF/Communication Engineer", salary: "₹12-18 LPA", companies: "Ericsson, Nokia, Samsung" },
      { title: "IoT Solutions Architect", salary: "₹14-22 LPA", companies: "AWS, Microsoft, Google" },
      { title: "Signal Processing Engineer", salary: "₹12-18 LPA", companies: "TI, Analog Devices, NXP" },
      { title: "Hardware Design Engineer", salary: "₹10-16 LPA", companies: "Apple, Dell, HP" }
    ]
  },
  {
    level: "Senior / VLSI",
    salary: "₹30+ LPA",
    description: "Top semiconductor & chip design roles",
    icon: Award,
    color: "from-purple-500 to-pink-500",
    roles: [
      { title: "Principal VLSI Architect", salary: "₹40-70 LPA", companies: "Apple, NVIDIA, Qualcomm" },
      { title: "Staff Engineer - Chip Design", salary: "₹50-80 LPA", companies: "Intel, AMD, Broadcom" },
      { title: "Director of Engineering", salary: "₹60-1 Cr+", companies: "Samsung, MediaTek, Marvell" },
      { title: "Physical Design Manager", salary: "₹35-55 LPA", companies: "Synopsys, Cadence, Mentor" },
      { title: "SoC Verification Lead", salary: "₹40-60 LPA", companies: "ARM, Imagination, SiFive" },
      { title: "Analog IC Design Manager", salary: "₹45-70 LPA", companies: "TI, Analog Devices, Maxim" }
    ]
  },
  {
    level: "International",
    salary: "$100K+",
    description: "Global opportunities in USA, Europe, Singapore",
    icon: Plane,
    color: "from-orange-500 to-red-500",
    roles: [
      { title: "VLSI Engineer (USA)", salary: "$120-180K", companies: "Apple, Intel, NVIDIA (California)" },
      { title: "Embedded Systems Engineer (Germany)", salary: "€60-90K", companies: "Bosch, BMW, Siemens" },
      { title: "RF Engineer (Singapore)", salary: "S$80-120K", companies: "Qualcomm, Broadcom, MediaTek" },
      { title: "Chip Design Engineer (Taiwan)", salary: "NT$2-4M", companies: "TSMC, MediaTek, Realtek" },
      { title: "Hardware Engineer (UK)", salary: "£50-80K", companies: "ARM, Imagination, Graphcore" },
      { title: "IoT Architect (Canada)", salary: "C$100-150K", companies: "BlackBerry, AMD, Huawei" }
    ]
  }
];

const EarningSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeLevel, setActiveLevel] = useState<string | null>(null);

  const activeData = salaryData.find(s => s.level === activeLevel);

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
            Earning Potential
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            What You Can <span className="gradient-text">Earn</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on any level to explore roles and salaries
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {salaryData.map((item, index) => (
            <motion.div
              key={item.level}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveLevel(item.level)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="card-glass rounded-2xl p-8 h-full text-center relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  {item.level}
                </p>
                <p className="font-display text-3xl font-bold gradient-text mb-3">
                  {item.salary}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-center gap-1 text-primary text-sm font-medium">
                  <span>View Roles</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Roles Modal */}
        <AnimatePresence>
          {activeLevel && activeData && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLevel(null)}
            >
              <motion.div
                className="relative w-full max-w-2xl bg-card rounded-2xl overflow-hidden shadow-2xl max-h-[80vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={`p-6 bg-gradient-to-r ${activeData.color}`}>
                  <div className="flex items-center justify-between">
                    <div className="text-primary-foreground">
                      <h3 className="font-display font-bold text-2xl">
                        {activeData.level} Roles
                      </h3>
                      <p className="opacity-90">{activeData.salary}</p>
                    </div>
                    <button
                      onClick={() => setActiveLevel(null)}
                      className="p-2 hover:bg-primary-foreground/20 rounded-lg transition-colors text-primary-foreground"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {activeData.roles.map((role, idx) => (
                    <motion.div
                      key={role.title}
                      className="card-glass rounded-xl p-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <h4 className="font-semibold text-foreground mb-1">{role.title}</h4>
                      <p className="text-lg font-bold gradient-text mb-2">{role.salary}</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Companies:</span> {role.companies}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EarningSection;
