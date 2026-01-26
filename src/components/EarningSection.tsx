import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, IndianRupee, Plane, Award } from "lucide-react";

const salaryData = [
  {
    level: "Freshers",
    salary: "₹4–8 LPA",
    description: "Entry-level positions in product companies and service firms",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500"
  },
  {
    level: "Mid-Level",
    salary: "₹10–20 LPA",
    description: "3-7 years experience in core ECE roles",
    icon: IndianRupee,
    color: "from-blue-500 to-cyan-500"
  },
  {
    level: "Senior / VLSI",
    salary: "₹30+ LPA",
    description: "Top semiconductor & chip design roles",
    icon: Award,
    color: "from-purple-500 to-pink-500"
  },
  {
    level: "International",
    salary: "$100K+",
    description: "Global opportunities in USA, Europe, Singapore",
    icon: Plane,
    color: "from-orange-500 to-red-500"
  }
];

const EarningSection = () => {
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
            Earning Potential
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            What You Can <span className="gradient-text">Earn</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ECE offers competitive salaries with excellent growth potential
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {salaryData.map((item, index) => (
            <motion.div
              key={item.level}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarningSection;