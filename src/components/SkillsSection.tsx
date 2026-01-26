import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Activity, Binary, Code, Microchip, Lightbulb } from "lucide-react";

const skills = [
  { icon: Zap, title: "Circuit Design & Analysis", color: "from-blue-500 to-cyan-500" },
  { icon: Activity, title: "Signal Processing", color: "from-purple-500 to-pink-500" },
  { icon: Binary, title: "Analog & Digital Systems", color: "from-green-500 to-emerald-500" },
  { icon: Code, title: "Embedded Programming", color: "from-orange-500 to-red-500" },
  { icon: Microchip, title: "VLSI & Chip Design", color: "from-indigo-500 to-violet-500" },
  { icon: Lightbulb, title: "Problem-Solving & Logic", color: "from-yellow-500 to-amber-500" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Master these essential skills that will make you industry-ready
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="group relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card-glass rounded-2xl p-8 h-full relative overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <skill.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="font-display text-xl font-bold text-foreground">
                  {skill.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;