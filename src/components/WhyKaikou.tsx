import { Card, CardContent } from "@/components/ui/card";
import smallCohorts from "@/assets/small-cohorts.jpg";
import workingNursery from "@/assets/working-nursery.jpg";
import rightWork from "@/assets/right-work.jpg";

const features = [
  {
    title: "Small Cohorts, Real Coaching",
    description: "8-10 students max. Hands-on feedback and personal attention for every technique, every session.",
    image: smallCohorts,
  },
  {
    title: "Learn Where the Trees Live",
    description: "Everything happens at a working nursery. See how pros manage stock, timing, and real-world care.",
    image: workingNursery,
  },
  {
    title: "Do the Right Work, On Time",
    description: "Strategic pruning, wiring, and repotting timed to each tree's needs. No guesswork, just progress.",
    image: rightWork,
  },
];

const WhyKaikou = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Why Kaikou?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKaikou;
