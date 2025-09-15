import { MapPin, Clock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CoverageSection() {
  const areas = [
    "Banjara Hills", "Jubilee Hills", "Madhapur", "Gachibowli", 
    "Kondapur", "Kukatpally", "Miyapur", "Begumpet",
    "Somajiguda", "Ameerpet", "Secunderabad", "Hitech City"
  ];

  return (
    <section className="py-20 px-6 bg-gradient-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            We Deliver <span className="bg-gradient-primary bg-clip-text text-transparent">Across Hyderabad</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bringing the taste of home to your doorstep across major areas in Hyderabad
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Coverage Areas */}
          <div className="md:col-span-2">
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-primary" />
                Coverage Areas
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {areas.map((area, index) => (
                  <div 
                    key={area}
                    className="bg-secondary rounded-lg p-3 text-center hover:bg-primary hover:text-primary-foreground transition-colors animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="font-medium">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                Don't see your area? Check availability in our app - we're expanding every day!
              </p>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Delivery Time</h4>
              <p className="text-muted-foreground text-sm mb-2">30-45 minutes</p>
              <p className="text-xs text-muted-foreground">Fresh food prepared after you order</p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Free Delivery</h4>
              <p className="text-muted-foreground text-sm mb-2">On orders above ₹199</p>
              <p className="text-xs text-muted-foreground">Safe and hygienic packaging</p>
            </div>
          </div>
        </div>

        <div className="text-center bg-card rounded-2xl p-8 shadow-soft">
          <h3 className="text-xl font-bold text-foreground mb-4">Check if we deliver to your area</h3>
          <p className="text-muted-foreground mb-6">Enter your pincode in our app to see if we serve your location</p>
          <Button variant="hero" size="lg">
            Check Delivery Availability
          </Button>
        </div>
      </div>
    </section>
  );
}