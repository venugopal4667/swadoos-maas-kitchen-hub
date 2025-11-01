import { Button } from "@/components/ui/button";
import { Smartphone, PlayCircle, Store, Users, Clock } from "lucide-react";
import platformHero from "@/assets/platform-hero.jpg";
import swadoosLogo from "@/assets/swadoos-logo.png";
import bannerCloudKitchen from "@/assets/banner-cloud-kitchen.jpg";
import bannerHomemadeThali from "@/assets/banner-homemade-thali.jpg";
import bannerFreshIngredients from "@/assets/banner-fresh-ingredients.jpg";
import bannerCookingLove from "@/assets/banner-cooking-love.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const banners = [
  {
    image: bannerCloudKitchen,
    alt: "Authentic homemade food from cloud kitchens - Swadoos delivery platform",
    title: "Skip the Junk, Choose Authentic",
    subtitle: "Homemade food from trusted cloud kitchens - Fresh, healthy, and made with love"
  },
  {
    image: bannerHomemadeThali,
    alt: "Traditional homemade thali with dal, roti, and vegetables - Swadoos",
    title: "Complete Homestyle Meals",
    subtitle: "Authentic thalis prepared fresh just like home - No frozen, no junk"
  },
  {
    image: bannerFreshIngredients,
    alt: "Fresh organic ingredients and traditional spices - Swadoos quality",
    title: "100% Natural Ingredients",
    subtitle: "No MSG, no preservatives - Only fresh, healthy ingredients"
  },
  {
    image: bannerCookingLove,
    alt: "Chefs preparing food with love in cloud kitchen - Swadoos",
    title: "Cooked Fresh, Served Hot",
    subtitle: "Every meal prepared on order with care and tradition"
  }
];

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
          <img src={swadoosLogo} alt="Swadoos Food Delivery Platform Logo" className="h-12 w-12 animate-float" />
          <div>
            <h1 className="text-2xl font-bold text-foreground">Swadoos</h1>
            <p className="text-sm text-muted-foreground">Your Favorite Restaurants</p>
          </div>
        </div>
      </nav>

      {/* Hero Banners Carousel */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {banners.map((banner, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-glow">
                  <img
                    src={banner.image}
                    alt={banner.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent flex items-center">
                    <div className="px-8 md:px-16 max-w-2xl">
                      <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-3 animate-fade-in">
                        {banner.title}
                      </h3>
                      <p className="text-lg md:text-xl text-muted-foreground animate-fade-in [animation-delay:200ms]">
                        {banner.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>

      {/* Hero Content */}
      <main className="relative z-10 flex items-center justify-center px-6 py-12">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Food That Feels Like
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Home
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the warmth of traditional cooking crafted with love in every bite. No junk, no frozen meals—just pure, wholesome flavors with <strong className="text-primary">minimal delivery fees</strong>
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
                <span>Top Homemade Cloud Kitchens</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-accent" />
                <span>50,000+ Happy Customers</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>Slot-based - Low Delivery Fee</span>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>🍽️ All ordering & payments through our mobile app only • <strong className="text-primary">Low Delivery Fee</strong></p>
            </div>
          </div>
        </div>
      </main>
    </header>
  );
}