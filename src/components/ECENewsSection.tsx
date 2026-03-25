import { motion } from "framer-motion";
import { Newspaper, ExternalLink, TrendingUp, Cpu, Wifi, Zap, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const newsItems = [
  {
    icon: Cpu,
    category: "Semiconductors",
    title: "India's Semiconductor Mission: ₹76,000 Crore Push",
    description: "Government approves massive investment to set up chip fabrication plants across India, creating 100,000+ ECE jobs.",
    date: "Trending",
    tag: "Hot",
  },
  {
    icon: Wifi,
    category: "5G & Beyond",
    title: "6G Research Begins in India — ECE Engineers in Demand",
    description: "IITs and telecom giants start 6G R&D programs. Communication systems expertise is more valuable than ever.",
    date: "Industry Update",
    tag: "New",
  },
  {
    icon: Zap,
    category: "IoT & Embedded",
    title: "IoT Market to Reach $1.5 Trillion by 2030",
    description: "Smart cities, connected healthcare, and industrial IoT are driving unprecedented demand for embedded systems engineers.",
    date: "Market Insight",
    tag: "Growth",
  },
  {
    icon: TrendingUp,
    category: "Career Trends",
    title: "ECE Freshers Salary Up 40% in Last 3 Years",
    description: "With the chip shortage and tech boom, ECE graduates are commanding higher starting salaries than ever before.",
    date: "Salary Trends",
    tag: "Trending",
  },
];

const ECENewsSection = () => {
  return (
    <section className="section-padding bg-muted/30" id="news">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Stay Informed
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              ECE <span className="gradient-text">Industry Updates</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Latest trends, market insights, and career updates in the ECE world.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  className="card-glass rounded-2xl p-6 h-full group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="text-xs font-medium text-primary">{item.category}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {item.date}
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ECENewsSection;
