import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "VLSI Engineer at Intel",
    text: "ECE gave me the perfect blend of hardware and software skills. The semiconductor industry is booming and I'm grateful I chose this path.",
    rating: 5,
    year: "Batch of 2021",
  },
  {
    name: "Rahul Mehta",
    role: "Embedded Systems Lead at Bosch",
    text: "From microcontrollers in college to leading IoT product development — ECE opened doors I never imagined. The hands-on labs were invaluable.",
    rating: 5,
    year: "Batch of 2019",
  },
  {
    name: "Ananya Reddy",
    role: "5G Research Engineer at Qualcomm",
    text: "The communication systems courses laid a rock-solid foundation for my career in wireless technology. ECE is the future of connectivity.",
    rating: 5,
    year: "Batch of 2020",
  },
  {
    name: "Vikram Singh",
    role: "AI/ML Engineer at NVIDIA",
    text: "ECE's signal processing background gave me a unique edge in machine learning. Companies love engineers who understand both hardware and algorithms.",
    rating: 5,
    year: "Batch of 2022",
  },
  {
    name: "Sneha Patel",
    role: "Product Manager at Samsung",
    text: "ECE taught me to think systematically. Whether it's circuit design or product strategy, the analytical skills I gained are irreplaceable.",
    rating: 5,
    year: "Batch of 2018",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Student Stories
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              What <span className="gradient-text">ECE Graduates</span> Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real experiences from students who chose ECE and built successful careers.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative max-w-3xl mx-auto">
            <div className="card-glass rounded-2xl p-8 md:p-10 relative overflow-hidden">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10" />
              
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed italic">
                  "{testimonials[current].text}"
                </p>
                <div>
                  <p className="font-display font-semibold text-foreground">{testimonials[current].name}</p>
                  <p className="text-sm text-primary">{testimonials[current].role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonials[current].year}</p>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <motion.button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <motion.button
                onClick={next}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
