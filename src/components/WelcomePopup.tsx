import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChefHat, UtensilsCrossed, Heart, ArrowLeft, Users, Clock, Wallet, Headphones, Home, Leaf, Sparkles, Truck } from "lucide-react";
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
    { icon: Wallet, text: "Bare minimum commission (up to only 10%)" },
    { icon: Clock, text: "Same-day payouts to your bank" },
    { icon: Headphones, text: "24/7 support for smooth operations" },
    { icon: Home, text: "Fulfil cravings of students & families" },
  ];

  const customerBenefits = [
    { icon: Clock, text: "Freshly prepared — never reheated" },
    { icon: Leaf, text: "Healthy, homely meals" },
    { icon: Sparkles, text: "Snacks, millet dishes, pickles & more" },
    { icon: UtensilsCrossed, text: "Customizable to your taste" },
    { icon: Wallet, text: "Honest, affordable pricing" },
    { icon: Heart, text: "Support local home cooks" },
    { icon: Truck, text: "Food delivered warm" },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden border-0 rounded-2xl">
        {!selectedType ? (
          // Selection Screen
          <div className="p-6 sm:p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                Welcome to Swadoos! 🍽️
              </h2>
              <p className="text-muted-foreground">
                Tell us who you are for a personalized experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Customer Card */}
              <button
                onClick={() => setSelectedType("customer")}
                className="group relative overflow-hidden rounded-2xl border-2 border-border hover:border-primary transition-all duration-300 bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={customerBanner} 
                    alt="Happy customers enjoying food" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <UtensilsCrossed className="h-5 w-5 text-primary" />
                    <h3 className="font-bold text-lg text-foreground">I'm a Customer</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Craving real homemade food? Discover trusted home chefs.
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
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <ChefHat className="h-5 w-5 text-primary" />
                    <h3 className="font-bold text-lg text-foreground">I'm a Chef</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Turn your passion into profit. Join our home cook community.
                  </p>
                </div>
              </button>
            </div>
          </div>
        ) : selectedType === "chef" ? (
          // Chef Content
          <div className="flex flex-col md:flex-row min-h-[500px]">
            {/* Image Side */}
            <div className="md:w-1/2 relative flex-shrink-0">
              <img 
                src={chefBanner} 
                alt="Home chef cooking" 
                className="w-full h-56 md:h-full object-cover"
              />
              <button 
                onClick={handleBack}
                className="absolute top-4 left-4 p-2 rounded-full bg-background/90 hover:bg-background transition-colors shadow-lg"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            </div>
            
            {/* Content Side */}
            <div className="md:w-1/2 p-5 sm:p-6 flex flex-col justify-center overflow-y-auto max-h-[60vh] md:max-h-none">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">For Chefs & Home Cooks</span>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Your Kitchen, Your Brand
              </h2>
              
              <p className="text-muted-foreground text-sm mb-4">
                The cloud-kitchen market is booming. Customers want fresh, homely food made with love — just like yours.
              </p>
              
              <div className="space-y-2 mb-4">
                {chefBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-primary/5">
                    <benefit.icon className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="p-3 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 mb-4">
                <p className="text-primary font-semibold text-sm">This is your time.</p>
                <p className="text-muted-foreground text-xs">Turn your kitchen into a thriving brand.</p>
              </div>
              
              <Button className="w-full h-11 font-semibold" onClick={handleClose}>
                <ChefHat className="mr-2 h-4 w-4" />
                Start Your Journey
              </Button>
            </div>
          </div>
        ) : (
          // Customer Content
          <div className="flex flex-col md:flex-row min-h-[500px]">
            {/* Image Side */}
            <div className="md:w-1/2 relative flex-shrink-0">
              <img 
                src={customerBanner} 
                alt="Happy customers enjoying food" 
                className="w-full h-56 md:h-full object-cover"
              />
              <button 
                onClick={handleBack}
                className="absolute top-4 left-4 p-2 rounded-full bg-background/90 hover:bg-background transition-colors shadow-lg"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            </div>
            
            {/* Content Side */}
            <div className="md:w-1/2 p-5 sm:p-6 flex flex-col justify-center overflow-y-auto max-h-[60vh] md:max-h-none">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🍽️</span>
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">For Food Lovers</span>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Real Food, Made With Heart
              </h2>
              
              <p className="text-muted-foreground text-sm mb-4">
                Tired of greasy meals and cold deliveries? At Swadoos, every dish is prepared by trusted home chefs — just like family.
              </p>
              
              <div className="space-y-2 mb-4">
                {customerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-primary/5">
                    <benefit.icon className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="p-3 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 mb-4">
                <p className="text-foreground text-sm italic">
                  "Food should not just fill your stomach…
                  <span className="text-primary font-semibold"> It should hug your soul."</span>
                </p>
              </div>
              
              <Button className="w-full h-11 font-semibold" onClick={handleClose}>
                <UtensilsCrossed className="mr-2 h-4 w-4" />
                Explore Homemade Food
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
