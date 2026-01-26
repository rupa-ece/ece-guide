import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Brain, Globe, GraduationCap, Lightbulb, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Core Engineering Branch",
    description: "ECE is one of the most fundamental and versatile engineering disciplines with wide applications."
  },
  {
    icon: Brain,
    title: "Foundation for AI & IoT",
    description: "Build a strong base for emerging technologies like Artificial Intelligence, Machine Learning, and Internet of Things."
  },
  {
    icon: Globe,
    title: "Global Demand",
    description: "ECE professionals are in high demand worldwide, from Silicon Valley to Bangalore's tech corridors."
  },
  {
    icon: GraduationCap,
    title: "Research Friendly",
    description: "Excellent opportunities for higher studies (M.Tech, MS, PhD) and cutting-edge research."
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    description: "Be at the forefront of innovation, creating solutions that impact millions of lives."
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Multiple career paths with excellent growth potential in both technical and management roles."
  }
];

const WhyChooseECE = () => {
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
            Why ECE?
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">ECE</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes Electronics and Communication Engineering one of the most rewarding career paths
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="card-glass rounded-2xl p-8 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseECE;