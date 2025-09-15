import { Button } from "@/components/ui/button";
import { Smartphone, PlayCircle, Store, Users, Clock } from "lucide-react";
import platformHero from "@/assets/platform-hero.jpg";
import platformLogo from "@/assets/platform-logo.png";

export function HeroSection() {
  return (
    <header className="relative min-h-screen bg-gradient-warm overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={platformHero} 
          alt="Multiple restaurants and cuisines available on Swadoos food delivery platform" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
      </div>
      
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <img src={platformLogo} alt="Swadoos Food Delivery Platform Logo" className="h-12 w-12 animate-float" />
          <div>
            <h1 className="text-2xl font-bold text-foreground">Swadoos</h1>
            <p className="text-sm text-muted-foreground">Your Favorite Restaurants</p>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Your Favorite
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Restaurants Delivered
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover hundreds of restaurants in Hyderabad. From local gems to popular chains - all in one app
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="hero" size="xl" className="animate-scale-in">
                <PlayCircle className="w-5 h-5" />
                Download Android App
              </Button>
              <Button variant="app-download" size="xl" className="animate-scale-in [animation-delay:200ms]">
                <Smartphone className="w-5 h-5" />
                Download iOS App
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Store className="w-4 h-4 text-primary" />
                <span>500+ Restaurants</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-accent" />
                <span>50,000+ Happy Customers</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>30 Min Average Delivery</span>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>🍽️ All ordering & payments through our mobile app only</p>
            </div>
          </div>
        </div>
      </main>
    </header>
  );
}