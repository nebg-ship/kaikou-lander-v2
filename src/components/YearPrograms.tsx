import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import year1Session from "@/assets/year-1-session.jpg";
import year2Session from "@/assets/year-2-session.jpg";

const YearPrograms = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 space-y-16">
        {/* Year 1 */}
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                <img 
                  src={year1Session} 
                  alt="Year 1 bonsai training session"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 md:p-10 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Year 1 — Foundations that stick
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  You've dabbled, taken a workshop, and caught the bug. <strong>Year 1</strong> is your next step. Fun, professional, and hands-on at a working nursery. Build health-first habits, rock-solid fundamentals, and confident technique.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-bold text-foreground mb-2">What you'll learn (and actually use):</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Repotting, pruning, wiring, styling/aftercare, and how to <em>read a tree</em>—health, timing, and design—across deciduous, conifers, and select tropicals.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-foreground mb-2">What's included:</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Pre-bonsai material <em>(Hinoki, Juniper 'Nana', Tiger Bark Ficus—may vary)</em>, one <strong>18L</strong> bag of aggregates (<strong>Akadama, American Pumice, Red Lava</strong>) + sifter & soil scoops, <strong>Kaikou tee</strong>, <strong>NEBG leather tool roll</strong>.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div>
                      <span className="font-bold text-foreground">Perks:</span>
                      <span className="text-muted-foreground"> One-time 15% off hardgoods and 10% off trees (exclusions apply).</span>
                    </div>
                    <div>
                      <span className="font-bold text-foreground">Format:</span>
                      <span className="text-muted-foreground"> 8 targeted weekends (March–October)—small cohorts, big progress.</span>
                    </div>
                    <div>
                      <span className="font-bold text-foreground">Tuition:</span>
                      <span className="text-muted-foreground"> $1,295 (two installments: at enrollment & April 2026).</span>
                    </div>
                  </div>
                </div>
                
                <Button variant="waitlist" size="lg" className="w-full sm:w-auto">
                  Join Year 1 Waitlist
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
        
        {/* Year 2 */}
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden md:order-2">
                <img 
                  src={year2Session} 
                  alt="Year 2 advanced bonsai training"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 md:p-10 flex flex-col justify-center md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Year 2 — Refinement & results
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  You've built the fundamentals. <strong>Year 2</strong> is about <strong>refinement, design decisions, and show-ready work</strong> with fresh eyes from visiting pros. Also available for experienced practitioners (by approval).
                </p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-bold text-foreground mb-2">What makes Year 2 special:</h3>
                    <ul className="text-muted-foreground text-sm space-y-2 list-disc list-inside leading-relaxed">
                      <li><strong>4 guest-artist weekends included</strong> (4 of 8 sessions): top professionals, advanced techniques, sharper critiques.</li>
                      <li><strong>Focus areas:</strong> strategic pruning, wiring refinement, deadwood/detail, silhouette & density management, repot timing, display decisions.</li>
                      <li><strong>Momentum between classes:</strong> progress tracking and targeted "next steps" so work continues at home.</li>
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div>
                      <span className="font-bold text-foreground">Perks:</span>
                      <span className="text-muted-foreground"> One-time 15% off hardgoods and 10% off trees (exclusions apply).</span>
                    </div>
                    <div>
                      <span className="font-bold text-foreground">Format:</span>
                      <span className="text-muted-foreground"> 8 targeted weekends (March–October).</span>
                    </div>
                    <div>
                      <span className="font-bold text-foreground">Tuition:</span>
                      <span className="text-muted-foreground"> $1,295 (two installments: at enrollment & April 2026).</span>
                    </div>
                  </div>
                </div>
                
                <Button variant="waitlist" size="lg" className="w-full sm:w-auto">
                  Join Year 2 Waitlist
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default YearPrograms;
