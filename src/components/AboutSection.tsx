import { Heart, Store, Users, Shield, Award, Clock } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 px-6 bg-gradient-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Food Should Nourish 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Your Soul</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
            Tired of junk food, frozen meals, or chemical-filled restaurant dishes? 
            Done with prices higher than restaurant menus?
          </p>
          <p className="text-xl font-semibold text-foreground max-w-3xl mx-auto">
            We get it. That's why we created Swadoos — bringing you the authentic taste of 
            traditional, homemade food through our network of cloud kitchens.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Why Choose Swadoos Platform
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We've carefully curated homemade cloud kitchens across Hyderabad to bring you 
              authentic, traditional food prepared fresh with love and care. No junk food, no frozen meals, 
              no harmful additives - just pure, homemade goodness.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our platform connects you with trusted cloud kitchens that cook on order, ensuring quality, 
              freshness, and the authentic taste of home-cooked meals with <strong className="text-primary">FREE delivery on every order</strong>.
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
              <h4 className="font-semibold text-foreground mb-2">FREE Delivery</h4>
              <p className="text-sm text-muted-foreground">Slot-based delivery system with no delivery charges</p>
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