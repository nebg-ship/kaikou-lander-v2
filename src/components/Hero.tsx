import { Button } from "@/components/ui/button";
import heroBonsai from "@/assets/hero-bonsai.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBonsai} 
          alt="Beautiful bonsai tree on wooden workbench" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Kaikou School of Bonsai
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-4 font-medium">
            The Premier Bonsai Education Experience
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            <strong>Train where the trees live.</strong> Kaikou is professional, hands-on bonsai school at a working nursery. <strong>Small cohorts, health-first coaching</strong>, and progress you can see on your benches. Led by <strong>John Romano</strong> and <strong>Peter Olson</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="waitlist" 
              size="lg"
              className="w-full sm:w-auto"
            >
              Join Year 1 Waitlist
            </Button>
            <Button 
              variant="waitlist" 
              size="lg"
              className="w-full sm:w-auto"
            >
              Join Year 2 Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
