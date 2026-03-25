import Navbar from "@/components/Navbar";
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
import PageLoader from "@/components/PageLoader";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import TestimonialsSection from "@/components/TestimonialsSection";
import StudyRoadmapSection from "@/components/StudyRoadmapSection";
import PlacementTipsSection from "@/components/PlacementTipsSection";
import CollegeComparisonSection from "@/components/CollegeComparisonSection";
import ECENewsSection from "@/components/ECENewsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
      <BackToTop />
      <Navbar />
      <HeroSection />
      <div id="what-is-ece"><WhatIsECE /></div>
      <div id="why-ece"><WhyChooseECE /></div>
      <SkillsSection />
      <div id="roadmap"><StudyRoadmapSection /></div>
      <div id="careers"><CareerSection /></div>
      <div id="earnings"><EarningSection /></div>
      <div id="placement-tips"><PlacementTipsSection /></div>
      <div id="courses"><CoursesSection /></div>
      <div id="tools"><ToolsSection /></div>
      <div id="projects"><ProjectIdeasSection /></div>
      <div id="colleges"><CollegeComparisonSection /></div>
      <TestimonialsSection />
      <div id="news"><ECENewsSection /></div>
      <div id="faq"><FAQSection /></div>
      <MotivationSection />
      <Footer />
    </div>
  );
};

export default Index;
