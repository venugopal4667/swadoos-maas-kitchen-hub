import { Button } from "@/components/ui/button";
import { Star, IndianRupee } from "lucide-react";
import biryaniImg from "@/assets/biryani.jpg";
import dalTadkaImg from "@/assets/dal-tadka.jpg";
import rotisImg from "@/assets/rotis.jpg";
import thaliImg from "@/assets/thali.jpg";

interface MenuItem {
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  isSpecial?: boolean;
}

const menuItems: MenuItem[] = [
  {
    name: "Hyderabadi Biryani",
    description: "Aromatic basmati rice with tender mutton, cooked in traditional dum style",
    image: biryaniImg,
    price: 280,
    rating: 4.8,
    isSpecial: true,
  },
  {
    name: "Dal Tadka",
    description: "Yellow lentils tempered with cumin, garlic, and fresh herbs",
    image: dalTadkaImg,
    price: 120,
    rating: 4.7,
  },
  {
    name: "Home Style Rotis",
    description: "Soft, fluffy rotis made fresh with whole wheat flour",
    image: rotisImg,
    price: 40,
    rating: 4.6,
  },
  {
    name: "Complete Thali",
    description: "A wholesome meal with dal, sabzi, rice, rotis, and accompaniments",
    image: thaliImg,
    price: 180,
    rating: 4.9,
    isSpecial: true,
  },
];

export function MenuHighlights() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Signature Dishes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From traditional biryanis to comfort meals, every dish is crafted with authentic flavors and Maa's love
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {menuItems.map((item, index) => (
            <div 
              key={item.name}
              className={`group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-smooth animate-fade-in ${
                item.isSpecial ? 'ring-2 ring-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.isSpecial && (
                <div className="bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1 text-center">
                  Chef's Special
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-medium">{item.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-foreground font-bold">
                    <IndianRupee className="w-4 h-4" />
                    <span>{item.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            View Full Menu in App
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Download our app to explore our complete menu and place orders
          </p>
        </div>
      </div>
    </section>
  );
}