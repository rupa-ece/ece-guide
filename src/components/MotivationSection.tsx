import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Heart } from "lucide-react";

const MotivationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 text-primary"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">A Message for You</span>
          </motion.div>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 leading-tight">
            You're Not Just Studying a Subject —
            <br />
            <span className="gradient-text">You're Building the Future</span>
          </h2>

          <div className="card-glass rounded-3xl p-8 md:p-12 mb-8">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
              Every smartphone, every satellite, every medical device, every electric vehicle — 
              they all exist because of engineers like you who dared to dream and had the skills to build.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
              ECE isn't just about circuits and signals. It's about solving problems that matter, 
              creating technology that improves lives, and being part of innovations that shape humanity's tomorrow.
            </p>
            <p className="text-xl md:text-2xl font-semibold gradient-text">
              Your journey starts here. Keep learning. Keep building. Keep innovating.
            </p>
          </div>

          <motion.div
            className="inline-flex items-center gap-2 text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Heart className="w-5 h-5 text-heart" fill="currentColor" />
            <span>The future is in your hands</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MotivationSection;