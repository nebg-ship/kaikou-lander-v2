import Hero from "@/components/Hero";
import WhyKaikou from "@/components/WhyKaikou";
import UniqueValue from "@/components/UniqueValue";
import YearPrograms from "@/components/YearPrograms";
import MonthlyThemes from "@/components/MonthlyThemes";
import Waitlist from "@/components/Waitlist";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyKaikou />
      <UniqueValue />
      <YearPrograms />
      <MonthlyThemes />
      <Waitlist />
    </div>
  );
};

export default Index;
