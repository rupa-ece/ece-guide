import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Microchip, Cpu, Radio, Bot, Zap, FlaskConical, 
  Building2, GraduationCap 
} from "lucide-react";

const careers = [
  { icon: Microchip, title: "VLSI Design Engineer", desc: "Design chips powering devices" },
  { icon: Cpu, title: "Embedded Systems Engineer", desc: "Program smart hardware" },
  { icon: Radio, title: "Communication Engineer", desc: "Build wireless networks" },
  { icon: Bot, title: "IoT / Robotics Engineer", desc: "Create connected solutions" },
  { icon: Zap, title: "Electronics Engineer", desc: "Design electronic systems" },
  { icon: FlaskConical, title: "Research Scientist", desc: "Innovate in R&D labs" },
  { icon: Building2, title: "ISRO, DRDO, BEL, PSUs", desc: "Government sector jobs" },
  { icon: GraduationCap, title: "Higher Studies", desc: "M.Tech / MS / PhD paths" },
];

const CareerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Explore the diverse and rewarding career paths available to ECE graduates
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
      </div>
    </section>
  );
};

export default CareerSection;