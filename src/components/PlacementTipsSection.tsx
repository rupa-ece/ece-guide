import { motion } from "framer-motion";
import { FileText, Users, Target, TrendingUp, CheckCircle2, Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const tips = [
  {
    icon: FileText,
    title: "Resume Building",
    points: [
      "Highlight technical projects with measurable outcomes",
      "Include relevant certifications (NPTEL, Coursera)",
      "Quantify achievements: 'Reduced power consumption by 30%'",
      "Keep it 1 page — recruiters spend 6 seconds scanning",
    ],
  },
  {
    icon: Target,
    title: "Interview Preparation",
    points: [
      "Master core subjects: Digital Electronics, Signals & Systems",
      "Practice aptitude and logical reasoning daily",
      "Prepare 2-3 strong project explanations",
      "Learn to explain complex concepts simply",
    ],
  },
  {
    icon: Users,
    title: "Top Recruiters for ECE",
    points: [
      "Semiconductor: Intel, Qualcomm, NVIDIA, AMD, TI",
      "Embedded/IoT: Bosch, Continental, Honeywell",
      "IT/Software: TCS, Infosys, Wipro, Cognizant",
      "Core R&D: ISRO, DRDO, BARC, BEL",
    ],
  },
  {
    icon: TrendingUp,
    title: "Skill Building Strategy",
    points: [
      "Start coding early — Python, C, MATLAB",
      "Learn PCB design tools (KiCad, Altium)",
      "Build at least 3 hands-on projects",
      "Contribute to open-source hardware projects",
    ],
  },
];

const PlacementTipsSection = () => {
  return (
    <section className="section-padding bg-muted/30" id="placement-tips">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Career Ready
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Placement <span className="gradient-text">Tips & Guidance</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Actionable advice to help you land your dream job after graduation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="card-glass rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground">{tip.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {tip.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlacementTipsSection;
