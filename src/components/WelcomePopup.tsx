import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChefHat, UtensilsCrossed, Heart, Check, ArrowLeft, Users, Clock, Wallet, Headphones, Home, Leaf, Sparkles, Truck } from "lucide-react";
import chefBanner from "@/assets/popup-chef-banner.jpg";
import customerBanner from "@/assets/popup-customer-banner.jpg";

type UserType = "customer" | "chef" | null;

export const WelcomePopup = () => {
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<UserType>(null);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("swadoos-welcome-seen");
    if (!hasSeenPopup) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("swadoos-welcome-seen", "true");
    setOpen(false);
  };

  const handleBack = () => {
    setSelectedType(null);
  };

  const chefBenefits = [
    { icon: Users, text: "Reach a vast audience in your city" },
    { icon: Sparkles, text: "Set your own prices and menu" },
    { icon: Wallet, text: "Enjoy bare minimum commission (up to only 10%)" },
    { icon: Clock, text: "Receive same-day payouts directly to your bank" },
    { icon: Headphones, text: "Get 24/7 support for smooth operations" },
    { icon: Home, text: "Fulfil cravings of students, employees & families" },
  ];

  const customerBenefits = [
    { icon: Clock, text: "Freshly prepared after you order — never reheated" },
    { icon: Leaf, text: "Healthy, homely meals that your body thanks you for" },
    { icon: Sparkles, text: "Wide range: snacks, millet dishes, pickles, bakery & more" },
    { icon: UtensilsCrossed, text: "Customizable meals to match your taste" },
    { icon: Wallet, text: "Honest, affordable pricing" },
    { icon: Heart, text: "Support local home cooks instead of big chains" },
    { icon: Truck, text: "Smooth delivery ensuring your food reaches warm" },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden border-0 rounded-2xl">
        {!selectedType ? (
          // Selection Screen
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-2">
                Welcome to Swadoos! 🍽️
              </h2>
              <p className="text-muted-foreground text-lg">
                Tell us who you are for a personalized experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Customer Card */}
              <button
                onClick={() => setSelectedType("customer")}
                className="group relative overflow-hidden rounded-2xl border-2 border-border hover:border-primary transition-all duration-300 bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={customerBanner} 
                    alt="Delicious homemade food" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-primary/10">
                      <UtensilsCrossed className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl text-foreground">I'm a Customer</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Craving real homemade food? Discover trusted home chefs near you.
                  </p>
                </div>
              </button>

              {/* Chef Card */}
              <button
                onClick={() => setSelectedType("chef")}
                className="group relative overflow-hidden rounded-2xl border-2 border-border hover:border-primary transition-all duration-300 bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={chefBanner} 
                    alt="Home chef cooking" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-primary/10">
                      <ChefHat className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl text-foreground">I'm a Chef</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Turn your passion into profit. Join our growing community of home cooks.
                  </p>
                </div>
              </button>
            </div>
          </div>
        ) : selectedType === "chef" ? (
          // Chef Content
          <div className="flex flex-col md:flex-row">
            {/* Image Side */}
            <div className="md:w-2/5 relative">
              <img 
                src={chefBanner} 
                alt="Home chef cooking" 
                className="w-full h-48 md:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background/80 to-transparent" />
              <button 
                onClick={handleBack}
                className="absolute top-4 left-4 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            </div>
            
            {/* Content Side */}
            <div className="md:w-3/5 p-6 max-h-[70vh] overflow-y-auto">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-red-500 fill-red-500" />
                <span className="text-sm font-medium text-primary uppercase tracking-wide">For Chefs & Home Cooks</span>
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Where Every Meal Feels Like Home
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Your passion deserves a bigger stage. The cloud-kitchen market is booming, and customers want fresh, homely food made with love — just like yours.
              </p>
              
              <div className="space-y-3 mb-6">
                {chefBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                    <div className="p-2 rounded-full bg-primary/20">
                      <benefit.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground text-sm font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 mb-6">
                <p className="text-lg font-semibold text-primary mb-1">This is your time.</p>
                <p className="text-muted-foreground text-sm">Join us and turn your kitchen into a thriving brand.</p>
              </div>
              
              <Button className="w-full h-12 text-base font-semibold" onClick={handleClose}>
                <ChefHat className="mr-2 h-5 w-5" />
                Start Your Culinary Journey
              </Button>
            </div>
          </div>
        ) : (
          // Customer Content
          <div className="flex flex-col md:flex-row">
            {/* Image Side */}
            <div className="md:w-2/5 relative">
              <img 
                src={customerBanner} 
                alt="Delicious homemade food" 
                className="w-full h-48 md:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background/80 to-transparent" />
              <button 
                onClick={handleBack}
                className="absolute top-4 left-4 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            </div>
            
            {/* Content Side */}
            <div className="md:w-3/5 p-6 max-h-[70vh] overflow-y-auto">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🍽️</span>
                <span className="text-sm font-medium text-primary uppercase tracking-wide">For Food Lovers</span>
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Real Food, Made With Heart
              </h2>
              
              <p className="text-muted-foreground mb-2">
                Tired of greasy restaurant meals and cold deliveries?
              </p>
              <p className="text-foreground font-medium mb-6">
                At Swadoos, every dish is prepared by trusted home chefs who cook with care — just like family.
              </p>
              
              <div className="space-y-3 mb-6">
                {customerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                    <div className="p-2 rounded-full bg-primary/20">
                      <benefit.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground text-sm font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 mb-6">
                <p className="text-foreground text-sm italic">
                  "Because food should not just fill your stomach…
                  <span className="text-primary font-semibold"> It should hug your soul."</span>
                </p>
              </div>
              
              <Button className="w-full h-12 text-base font-semibold" onClick={handleClose}>
                <UtensilsCrossed className="mr-2 h-5 w-5" />
                Explore Homemade Food
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
