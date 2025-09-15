import { Heart, Store, Users, Shield, Award, Clock } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 px-6 bg-gradient-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Connecting You with 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Your Favorite Food</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Swadoos brings together the best restaurants in Hyderabad on one platform. 
            From traditional home-style cooking to international cuisines - discover, order, and enjoy!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Why Choose Swadoos Platform
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We've carefully curated the finest restaurants and eateries across Hyderabad to bring you 
              an unmatched variety of cuisines and dining experiences, all at your fingertips. From local 
              family-owned gems to popular restaurant chains.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our platform ensures quality, reliability, and convenience - making food ordering as simple 
              as a few taps on your phone while maintaining the highest standards of food safety and delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-smooth animate-scale-in">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Store className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">500+ Restaurants</h4>
              <p className="text-sm text-muted-foreground">Curated selection of the best local and chain restaurants</p>
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
              <h4 className="font-semibold text-foreground mb-2">Fast Delivery</h4>
              <p className="text-sm text-muted-foreground">Average 30-minute delivery across the city</p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-smooth animate-scale-in [animation-delay:300ms]">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Quality Assured</h4>
              <p className="text-sm text-muted-foreground">Hygiene certified restaurants with quality checks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}