import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle, GraduationCap, Briefcase, TrendingUp, BookOpen } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
  category: "career" | "education" | "skills" | "general";
}

const faqs: FAQ[] = [
  {
    category: "general",
    question: "Is ECE a good branch for the future?",
    answer: "Absolutely! ECE is at the heart of technological innovation. With the rise of 5G, IoT, AI chips, electric vehicles, and smart devices, ECE engineers are in high demand across industries. The field offers diverse career paths from chip design to robotics.",
  },
  {
    category: "career",
    question: "What is the average salary for ECE freshers?",
    answer: "ECE freshers in India typically earn ₹3-8 LPA in core companies, while those in IT/software roles earn ₹4-15 LPA. Top performers at companies like Qualcomm, Intel, or NVIDIA can earn ₹15-30 LPA as freshers.",
  },
  {
    category: "education",
    question: "Should I pursue higher studies (M.Tech/MS) or take a job?",
    answer: "It depends on your goals. For research, academia, or specialized roles (VLSI, RF), higher studies are beneficial. For software or general core roles, work experience is valuable. Many opt for M.Tech after 2-3 years of experience.",
  },
  {
    category: "skills",
    question: "What programming languages should ECE students learn?",
    answer: "Essential: C/C++ (embedded), Python (automation/ML), Verilog/VHDL (hardware). Beneficial: MATLAB, Assembly, JavaScript. For software roles, add Java, React, or cloud technologies.",
  },
  {
    category: "career",
    question: "Can ECE students get software/IT jobs?",
    answer: "Yes! Many top tech companies actively hire ECE students. Your hardware knowledge is a unique advantage for system software, embedded systems, IoT, and hardware-software integration roles.",
  },
  {
    category: "education",
    question: "What are the best entrance exams for ECE higher studies?",
    answer: "India: GATE (IITs, PSUs), ESE (UPSC). Abroad: GRE (MS in US), TOEFL/IELTS. GATE is crucial for M.Tech admissions and PSU jobs like ISRO, DRDO, BHEL.",
  },
  {
    category: "skills",
    question: "How important are projects and internships?",
    answer: "Extremely important! Projects showcase practical skills, and internships provide industry exposure. Aim for at least 2-3 significant projects and 1-2 internships before graduation.",
  },
  {
    category: "general",
    question: "What is the difference between ECE and EEE?",
    answer: "ECE focuses on electronics, communication, and signals (circuits, VLSI, wireless). EEE covers electrical power systems, machines, and high-voltage applications. ECE is more aligned with modern tech/semiconductor industries.",
  },
];

const categoryIcons = {
  career: Briefcase,
  education: GraduationCap,
  skills: TrendingUp,
  general: BookOpen,
};

const categoryColors = {
  career: "from-blue-500 to-cyan-500",
  education: "from-purple-500 to-pink-500",
  skills: "from-green-500 to-emerald-500",
  general: "from-orange-500 to-amber-500",
};

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            <HelpCircle className="w-4 h-4 inline mr-2" />
            Common Questions
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything ECE students want to know about careers, education, and skills
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const Icon = categoryIcons[faq.category];
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className="card-glass rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  className="w-full p-5 flex items-center gap-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className={`w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br ${categoryColors[faq.category]} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="flex-1 font-medium text-foreground">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pl-19 text-muted-foreground leading-relaxed">
                    <div className="pl-14">{faq.answer}</div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
