import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyKaikou from "@/components/WhyKaikou";
import UniqueValue from "@/components/UniqueValue";
import YearPrograms from "@/components/YearPrograms";
import MonthlyThemes from "@/components/MonthlyThemes";
import Waitlist from "@/components/Waitlist";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32">
        <Hero />
        <WhyKaikou />
        <UniqueValue />
        <YearPrograms />
        <MonthlyThemes />
        <Waitlist />
      </div>
    </div>
  );
};

export default Index;
