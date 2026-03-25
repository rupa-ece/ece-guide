import { motion } from "framer-motion";
import { BookOpen, Cpu, Radio, Wifi, BrainCircuit, Rocket, GraduationCap, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const semesters = [
  {
    sem: "Semester 1-2",
    title: "Foundation",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
    subjects: ["Mathematics", "Physics", "Basic Electronics", "Programming (C/Python)", "Engineering Drawing"],
    tip: "Build strong math & physics fundamentals",
  },
  {
    sem: "Semester 3-4",
    title: "Core Electronics",
    icon: Cpu,
    color: "from-purple-500 to-pink-500",
    subjects: ["Analog Circuits", "Digital Electronics", "Signals & Systems", "Network Theory", "Microprocessors"],
    tip: "Start building circuits and mini projects",
  },
  {
    sem: "Semester 5-6",
    title: "Specialization",
    icon: Radio,
    color: "from-orange-500 to-red-500",
    subjects: ["Communication Systems", "Control Systems", "VLSI Design", "Electromagnetics", "DSP"],
    tip: "Choose your specialization & do internships",
  },
  {
    sem: "Semester 7-8",
    title: "Advanced & Project",
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
    subjects: ["IoT & Embedded", "Wireless Networks", "Antenna Design", "Major Project", "Electives"],
    tip: "Focus on placement prep & capstone project",
  },
];

const StudyRoadmapSection = () => {
  return (
    <section className="section-padding" id="roadmap">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Learning Path
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              ECE <span className="gradient-text">Study Roadmap</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A semester-wise guide to help you navigate your ECE journey from basics to advanced topics.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />

          <div className="space-y-8 lg:space-y-12">
            {semesters.map((sem, index) => {
              const Icon = sem.icon;
              const isLeft = index % 2 === 0;
              return (
                <ScrollReveal key={index} delay={index * 0.15}>
                  <div className={`flex flex-col lg:flex-row items-center gap-6 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    <div className={`flex-1 ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
                      <div className="card-glass rounded-2xl p-6">
                        <div className={`flex items-center gap-3 mb-3 ${isLeft ? "lg:justify-end" : ""}`}>
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${sem.color} flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground font-medium">{sem.sem}</p>
                            <h3 className="font-display font-bold text-lg text-foreground">{sem.title}</h3>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {sem.subjects.map((subj, i) => (
                            <span key={i} className="px-2.5 py-1 rounded-lg bg-muted text-xs font-medium text-muted-foreground">
                              {subj}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-primary flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5" />
                          {sem.tip}
                        </p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden lg:flex w-4 h-4 rounded-full gradient-bg border-4 border-background z-10 shrink-0" />

                    <div className="flex-1 hidden lg:block" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyRoadmapSection;
