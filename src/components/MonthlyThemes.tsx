import { Card, CardContent } from "@/components/ui/card";

const themes = [
  { month: "MARCH", title: "Vision, Soil & Spring Readiness", color: "text-primary" },
  { month: "APRIL", title: "Repotting & Early-Season Care", color: "text-primary" },
  { month: "MAY", title: "Design Fundamentals & Foliage Control", color: "text-primary" },
  { month: "JUNE", title: "Conifers, Candles & Summer Structure", color: "text-primary" },
];

const MonthlyThemes = () => {
  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            2026 Monthly Themes (preview)
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            A glimpse into the structured curriculum designed to build your skills season by season.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {themes.map((theme, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`font-bold text-sm ${theme.color} whitespace-nowrap`}>
                      {theme.month}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {theme.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonthlyThemes;
