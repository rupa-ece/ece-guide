import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsECE from "@/components/WhatIsECE";
import WhyChooseECE from "@/components/WhyChooseECE";
import SkillsSection from "@/components/SkillsSection";
import DomainPathwaysSection from "@/components/DomainPathwaysSection";
import CareerSection from "@/components/CareerSection";
import EarningSection from "@/components/EarningSection";
import CoursesSection from "@/components/CoursesSection";
import ToolsSection from "@/components/ToolsSection";
import ProjectIdeasSection from "@/components/ProjectIdeasSection";
import FAQSection from "@/components/FAQSection";
import MotivationSection from "@/components/MotivationSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <div id="what-is-ece"><WhatIsECE /></div>
      <div id="why-ece"><WhyChooseECE /></div>
      <SkillsSection />
      <DomainPathwaysSection />
      <div id="careers"><CareerSection /></div>
      <div id="earnings"><EarningSection /></div>
      <div id="courses"><CoursesSection /></div>
      <div id="tools"><ToolsSection /></div>
      <div id="projects"><ProjectIdeasSection /></div>
      <div id="faq"><FAQSection /></div>
      <MotivationSection />
      <Footer />
    </div>
  );
};

export default Index;