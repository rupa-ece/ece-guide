import HeroSection from "@/components/HeroSection";
import WhatIsECE from "@/components/WhatIsECE";
import WhyChooseECE from "@/components/WhyChooseECE";
import SkillsSection from "@/components/SkillsSection";
import CareerSection from "@/components/CareerSection";
import EarningSection from "@/components/EarningSection";
import CoursesSection from "@/components/CoursesSection";
import MotivationSection from "@/components/MotivationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhatIsECE />
      <WhyChooseECE />
      <SkillsSection />
      <CareerSection />
      <EarningSection />
      <CoursesSection />
      <MotivationSection />
      <Footer />
    </div>
  );
};

export default Index;