import { CheckCircle, Leaf, Clock, Heart, Package, Ban } from "lucide-react";

export function WhyDifferentSection() {
  const differences = [
    {
      icon: Ban,
      title: "No Frozen Food",
      description: "We don't freeze food or stall it for days. Every meal is prepared fresh.",
      color: "text-red-500"
    },
    {
      icon: Leaf,
      title: "No Harmful Additives",
      description: "Zero MSG, no preservatives, no chemical fillers — just pure, natural ingredients.",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Cooked on Order",
      description: "Your meal starts cooking only after you place your order — fresh, hot, and made with care.",
      color: "text-accent"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish is prepared with the same care and quality you'd expect from Maa's kitchen.",
      color: "text-primary"
    },
    {
      icon: Package,
      title: "Bulk & Subscriptions",
      description: "Weekly & monthly dabba packages for employees, students, and hostels at pocket-friendly rates.",
      color: "text-accent"
    },
    {
      icon: CheckCircle,
      title: "Free Delivery, Always",
      description: "Enjoy free delivery on all orders — because good food should be accessible to everyone.",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How We're 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Different</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Unlike other apps that freeze food, use harmful substances, or rush through cooking, 
            Swadoos brings you authentic, homemade taste with quality you can trust.
          </p>
        </div>

        {/* Comparison Visual */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          <div className="bg-destructive/10 border-2 border-destructive/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-destructive mb-4">Other Apps</h3>
            <ul className="space-y-3 text-left">
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="text-destructive mt-1">✗</span>
                <span>Frozen packets and pre-cooked meals</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="text-destructive mt-1">✗</span>
                <span>MSG and harmful preservatives</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="text-destructive mt-1">✗</span>
                <span>Rush cooking in 10 minutes</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="text-destructive mt-1">✗</span>
                <span>Food stalled for days</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Swadoos</h3>
            <ul className="space-y-3 text-left">
              <li className="flex items-start gap-3 text-foreground">
                <span className="text-primary mt-1">✓</span>
                <span>Fresh cooking on every order</span>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <span className="text-primary mt-1">✓</span>
                <span>100% natural, no chemicals</span>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <span className="text-primary mt-1">✓</span>
                <span>Prepared with care and love</span>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <span className="text-primary mt-1">✓</span>
                <span>Always fresh, never frozen</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {differences.map((diff, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-background w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <diff.icon className={`w-7 h-7 ${diff.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{diff.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{diff.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-foreground font-semibold mb-4">
            With Swadoos, you don't have to compromise on health for taste.
          </p>
          <p className="text-lg text-muted-foreground">
            Order fresh, eat healthy, and feel the love of homemade food… every single time.
          </p>
        </div>
      </div>
    </section>
  );
}