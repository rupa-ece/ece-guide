import HeroSection from "@/components/HeroSection";
import WhatIsECE from "@/components/WhatIsECE";
import WhyChooseECE from "@/components/WhyChooseECE";
import SkillsSection from "@/components/SkillsSection";
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
      <HeroSection />
      <WhatIsECE />
      <WhyChooseECE />
      <SkillsSection />
      <CareerSection />
      <EarningSection />
      <CoursesSection />
      <ToolsSection />
      <ProjectIdeasSection />
      <FAQSection />
      <MotivationSection />
      <Footer />
    </div>
  );
};

export default Index;