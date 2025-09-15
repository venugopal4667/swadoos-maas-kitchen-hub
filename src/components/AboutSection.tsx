import { Heart, Home, Leaf, Shield } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 px-6 bg-gradient-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Story: Directly from 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Maa's Kitchen</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Swadoos, we believe that nothing beats the warmth and love of home-cooked meals. 
            Every dish is prepared with the same care and authenticity that your mother puts into her cooking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Why Swadoos is Different
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're not just another food delivery service. We're a bridge between the comfort of home 
              and the convenience of modern life. Each meal tells a story of tradition, quality, and the 
              unwavering love that goes into every mother's cooking.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From carefully selected ingredients to time-honored recipes, we ensure that every bite 
              reminds you of home, no matter where you are in Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-smooth animate-scale-in">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Made with Love</h4>
              <p className="text-sm text-muted-foreground">Every dish prepared with the care of a mother's touch</p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-smooth animate-scale-in [animation-delay:100ms]">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Home Style</h4>
              <p className="text-sm text-muted-foreground">Authentic recipes passed down through generations</p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-smooth animate-scale-in [animation-delay:200ms]">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Fresh & Healthy</h4>
              <p className="text-sm text-muted-foreground">Only the freshest ingredients, no preservatives</p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-smooth animate-scale-in [animation-delay:300ms]">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Trusted</h4>
              <p className="text-sm text-muted-foreground">Hygienic preparation in certified kitchens</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}