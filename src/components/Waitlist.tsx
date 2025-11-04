import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Waitlist = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-accent/20 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
                How the waitlist works
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                No commitment to join. In December, we email all waitlisters; enrollment is offered based on time on the list and fit (Year 2 requires approval). We plan up to <strong>3 cohorts for Year 1</strong> and <strong>2 cohorts for Year 2</strong>. If classes fill, you'll stay on the list for the following season.
              </p>
              
              <p className="text-lg font-semibold text-center mb-8 text-foreground">
                Ready to train at a higher level?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
