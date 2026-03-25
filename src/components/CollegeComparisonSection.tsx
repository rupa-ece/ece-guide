import { motion } from "framer-motion";
import { GraduationCap, MapPin, IndianRupee, TrendingUp, Star, Trophy } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const colleges = [
  {
    name: "IIT Bombay",
    location: "Mumbai, Maharashtra",
    nirf: 3,
    avgPackage: "₹20-25 LPA",
    highestPackage: "₹2+ Cr",
    fees: "~₹8-10 Lakhs (4 years)",
    placement: "98%",
    highlight: "Top for VLSI & Semiconductors",
  },
  {
    name: "IIT Delhi",
    location: "New Delhi",
    nirf: 2,
    avgPackage: "₹22-27 LPA",
    highestPackage: "₹2.4 Cr",
    fees: "~₹8-10 Lakhs (4 years)",
    placement: "97%",
    highlight: "Strong AI/ML + ECE research",
  },
  {
    name: "IIT Madras",
    location: "Chennai, Tamil Nadu",
    nirf: 1,
    avgPackage: "₹21-26 LPA",
    highestPackage: "₹1.8 Cr",
    fees: "~₹8-10 Lakhs (4 years)",
    placement: "98%",
    highlight: "Best for Communication Systems",
  },
  {
    name: "NIT Trichy",
    location: "Tiruchirappalli, TN",
    nirf: 9,
    avgPackage: "₹12-15 LPA",
    highestPackage: "₹52 LPA",
    fees: "~₹6-7 Lakhs (4 years)",
    placement: "95%",
    highlight: "Best NIT for ECE placements",
  },
  {
    name: "BITS Pilani",
    location: "Pilani, Rajasthan",
    nirf: 14,
    avgPackage: "₹15-20 LPA",
    highestPackage: "₹70 LPA",
    fees: "~₹20 Lakhs (4 years)",
    placement: "92%",
    highlight: "Industry-oriented curriculum",
  },
  {
    name: "VIT Vellore",
    location: "Vellore, Tamil Nadu",
    nirf: 12,
    avgPackage: "₹7-10 LPA",
    highestPackage: "₹44 LPA",
    fees: "~₹10-12 Lakhs (4 years)",
    placement: "90%",
    highlight: "Excellent industry connections",
  },
];

const CollegeComparisonSection = () => {
  return (
    <section className="section-padding" id="colleges">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              College Guide
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Top <span className="gradient-text">ECE Colleges</span> in India
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Compare the best engineering colleges for ECE based on placements, fees, and rankings.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.map((college, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="card-glass rounded-2xl p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground">{college.name}</h3>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" /> {college.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary/10">
                    <Trophy className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-bold text-primary">#{college.nirf}</span>
                  </div>
                </div>

                <div className="space-y-2.5 flex-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Avg Package</span>
                    <span className="font-semibold text-foreground">{college.avgPackage}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Highest Package</span>
                    <span className="font-semibold text-primary">{college.highestPackage}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Fees</span>
                    <span className="font-semibold text-foreground">{college.fees}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Placement Rate</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">{college.placement}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border">
                  <p className="text-xs text-primary flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5" />
                    {college.highlight}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-xs text-muted-foreground mt-8">
            * Data is approximate and based on 2024-25 placement reports. Actual figures may vary.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CollegeComparisonSection;
