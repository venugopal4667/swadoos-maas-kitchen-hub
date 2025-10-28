import { Heart, Store, Users, Shield, Award, Clock } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 px-6 bg-gradient-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real Food, Made with
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Real Care</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
            Tired of heavily processed meals, artificial flavors, and sky-high delivery charges? 
            Missing the comfort of home-style cooking that actually tastes authentic?
          </p>
          <p className="text-xl font-semibold text-foreground max-w-3xl mx-auto">
            Swadoos connects you with skilled home chefs operating dedicated kitchens across Hyderabad. 
            Each meal is prepared fresh to order, capturing the essence of traditional recipes passed down through generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              The Swadoos Difference
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We've partnered with passionate home chefs who run their own professional kitchens throughout Hyderabad. 
              Every dish is made from scratch using fresh ingredients and time-honored cooking methods. 
              Say goodbye to preservatives, MSG, and reheated leftovers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our slot-based delivery system keeps costs low, so you can enjoy restaurant-quality food made with 
              the care of home cooking, all while paying <strong className="text-primary">minimal delivery fees</strong>.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-smooth animate-scale-in">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Store className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Top Cloud Kitchens</h4>
              <p className="text-sm text-muted-foreground">Homemade food from trusted cloud kitchens in Hyderabad</p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-smooth animate-scale-in [animation-delay:100ms]">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">50k+ Users</h4>
              <p className="text-sm text-muted-foreground">Trusted by thousands of food lovers in Hyderabad</p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-smooth animate-scale-in [animation-delay:200ms]">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Low Delivery Fee</h4>
              <p className="text-sm text-muted-foreground">Slot-based delivery with minimal charges</p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-smooth animate-scale-in [animation-delay:300ms]">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Quality Assured</h4>
              <p className="text-sm text-muted-foreground">Hygiene certified cloud kitchens with quality checks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}