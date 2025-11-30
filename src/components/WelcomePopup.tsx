import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChefHat, UtensilsCrossed, Heart, Check, ArrowLeft } from "lucide-react";

type UserType = "customer" | "chef" | null;

export const WelcomePopup = () => {
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<UserType>(null);

  useEffect(() => {
    // Check if user has already seen the popup
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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {!selectedType ? (
          // Selection Screen
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl text-center font-bold text-primary">
                Welcome to Swadoos!
              </DialogTitle>
            </DialogHeader>
            <p className="text-center text-muted-foreground mb-6">
              Tell us who you are so we can personalize your experience
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="h-auto py-8 px-6 flex flex-col items-center gap-4 hover:bg-primary/10 hover:border-primary transition-all"
                onClick={() => setSelectedType("customer")}
              >
                <UtensilsCrossed className="h-12 w-12 text-primary" />
                <div className="text-center">
                  <p className="font-semibold text-lg text-foreground">I'm a Customer</p>
                  <p className="text-sm text-muted-foreground">Looking for homemade food</p>
                </div>
              </Button>
              <Button
                variant="outline"
                className="h-auto py-8 px-6 flex flex-col items-center gap-4 hover:bg-primary/10 hover:border-primary transition-all"
                onClick={() => setSelectedType("chef")}
              >
                <ChefHat className="h-12 w-12 text-primary" />
                <div className="text-center">
                  <p className="font-semibold text-lg text-foreground">I'm a Chef</p>
                  <p className="text-sm text-muted-foreground">Want to sell my food</p>
                </div>
              </Button>
            </div>
          </>
        ) : selectedType === "chef" ? (
          // Chef Content
          <>
            <DialogHeader>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={handleBack}>
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <DialogTitle className="text-xl font-bold text-primary flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                  Welcome to Swadoos — Where Every Meal Feels Like Home
                </DialogTitle>
              </div>
            </DialogHeader>
            <div className="space-y-4 text-foreground">
              <p className="text-lg font-semibold text-primary">For Chefs & Home Cooks</p>
              
              <p className="text-base font-medium">Your passion deserves a bigger stage.</p>
              
              <p className="text-muted-foreground">
                The cloud-kitchen market is growing faster than ever, and customers are actively searching for fresh, homely, healthy food, snacks, millet dishes, pickles, bakery items, and comfort meals made with love — just like yours.
              </p>
              
              <p className="font-medium">At Swadoos, we help you grow your culinary business effortlessly:</p>
              
              <ul className="space-y-2">
                {[
                  "Reach a vast audience in your city",
                  "Set your own prices and your own menu",
                  "Enjoy bare minimum commission (up to only 10%)",
                  "Receive same-day payouts directly to your bank account",
                  "Get 24/7 support for smooth operations",
                  "Fulfil the cravings of students, employees & families far from home"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t">
                <p className="text-lg font-semibold text-primary">This is your time.</p>
                <p className="text-muted-foreground">Join us and turn your kitchen into a thriving brand.</p>
              </div>
              
              <Button className="w-full mt-4" onClick={handleClose}>
                Get Started
              </Button>
            </div>
          </>
        ) : (
          // Customer Content
          <>
            <DialogHeader>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={handleBack}>
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <DialogTitle className="text-xl font-bold text-primary flex items-center gap-2">
                  🍽️ For Customers — Welcome to Real Food, Made With Heart
                </DialogTitle>
              </div>
            </DialogHeader>
            <div className="space-y-4 text-foreground">
              <p className="text-muted-foreground">
                Tired of greasy restaurant meals, cold deliveries, and food that feels mass-produced?
                At Swadoos, every dish is prepared by trusted home chefs who cook with care, warmth and honesty — just like family.
              </p>
              
              <p className="font-medium text-lg">
                Here, you don't just order food…<br />
                <span className="text-primary">You receive comfort, freshness, and real homely taste.</span>
              </p>
              
              <p className="font-semibold">Why customers love Swadoos:</p>
              
              <ul className="space-y-2">
                {[
                  "Freshly prepared after you order — never reheated",
                  "Healthy, homely meals that your body thanks you for",
                  "A wide range of options: snacks, millet dishes, pickles, bakery items & festival specials",
                  "Customizable meals to match your taste",
                  "Honest, affordable pricing",
                  "Support local home cooks instead of big chains",
                  "Smooth delivery support ensuring your food reaches warm"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t">
                <p className="text-base">
                  Swadoos brings you the joy of real homemade food, right to your doorstep.
                </p>
                <p className="text-muted-foreground italic">
                  Because food should not just fill your stomach…<br />
                  <span className="text-primary font-medium">It should hug your soul.</span>
                </p>
              </div>
              
              <Button className="w-full mt-4" onClick={handleClose}>
                Explore Food
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
