import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Radio, Microchip, Bot, Wifi, CircuitBoard } from "lucide-react";

const topics = [
  { icon: CircuitBoard, label: "Electronics" },
  { icon: Radio, label: "Communication Systems" },
  { icon: Cpu, label: "Signals & Systems" },
  { icon: Microchip, label: "VLSI Design" },
  { icon: Bot, label: "Embedded Systems" },
  { icon: Wifi, label: "IoT & Robotics" },
];

const WhatIsECE = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="what-is-ece" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Understanding ECE
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            What is <span className="gradient-text">ECE</span>?
          </h2>
        </motion.div>

        <motion.div
          className="card-glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            <span className="font-semibold text-primary">Electronics and Communication Engineering (ECE)</span> is a 
            dynamic branch of engineering that combines the principles of electronics and communication systems. 
            It focuses on designing, developing, and maintaining electronic devices, circuits, and communication 
            systems that power our modern world.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mt-4">
            From the smartphone in your pocket to satellites orbiting Earth, from medical devices saving lives 
            to the internet connecting billions — ECE engineers are the architects of our technological future.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.label}
              className="card-glass rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl gradient-bg flex items-center justify-center">
                <topic.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <p className="font-medium text-sm text-foreground">{topic.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsECE;