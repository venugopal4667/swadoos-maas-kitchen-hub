import { Button } from "@/components/ui/button";
import { Star, IndianRupee, Clock } from "lucide-react";
import upmaImg from "@/assets/menu-item-upma.jpg";
import dalRiceImg from "@/assets/menu-item-dal-rice.jpg";
import chickenPulaoImg from "@/assets/menu-item-chicken-pulao.jpg";
import sambarRiceImg from "@/assets/menu-item-sambar-rice.jpg";
import lemonRiceImg from "@/assets/menu-item-lemon-rice.jpg";
import muttonGonguraImg from "@/assets/menu-item-mutton-gongura.jpg";
import dosaImg from "@/assets/menu-item-dosa.jpg";
import fishCurryImg from "@/assets/menu-item-fish-curry.jpg";
import prawnsFryImg from "@/assets/menu-item-prawns-fry.jpg";

interface MenuItem {
  name: string;
  restaurant: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  deliveryTime: string;
  cuisine: string;
  isSpecial?: boolean;
}

const menuItems: MenuItem[] = [
  {
    name: "Millet Upma",
    restaurant: "Swadoos Rasoi",
    description: "Nutritious South Indian breakfast with roasted millet, curry leaves, and cashews",
    image: upmaImg,
    price: 60,
    rating: 4.6,
    deliveryTime: "20-25 min",
    cuisine: "South Indian",
  },
  {
    name: "Dal Rice",
    restaurant: "GharKaZaika",
    description: "Comforting yellow dal with steamed basmati rice, tempered with ghee and spices",
    image: dalRiceImg,
    price: 90,
    rating: 4.7,
    deliveryTime: "25-30 min",
    cuisine: "Homestyle",
    isSpecial: true,
  },
  {
    name: "Chicken Pulao",
    restaurant: "Amma's Kitchen",
    description: "Aromatic basmati rice with tender chicken pieces, spices, and fresh herbs",
    image: chickenPulaoImg,
    price: 180,
    rating: 4.8,
    deliveryTime: "30-35 min",
    cuisine: "Andhra",
  },
  {
    name: "Sambar Rice",
    restaurant: "Rasoda Tales",
    description: "Traditional South Indian comfort meal with tangy sambar and steamed rice",
    image: sambarRiceImg,
    price: 95,
    rating: 4.5,
    deliveryTime: "20-25 min",
    cuisine: "South Indian",
  },
  {
    name: "Lemon Rice",
    restaurant: "Swad Sutra",
    description: "Tangy and flavorful rice with fresh lemon juice, peanuts, and curry leaves",
    image: lemonRiceImg,
    price: 70,
    rating: 4.4,
    deliveryTime: "15-20 min",
    cuisine: "South Indian",
  },
  {
    name: "Mutton Gongura",
    restaurant: "Mitti Ki Rasoi",
    description: "Authentic Andhra specialty with tender mutton in tangy gongura leaves gravy",
    image: muttonGonguraImg,
    price: 250,
    rating: 4.9,
    deliveryTime: "35-40 min",
    cuisine: "Andhra",
    isSpecial: true,
  },
  {
    name: "Crispy Dosa",
    restaurant: "GharSeKhaana",
    description: "Golden brown rice and lentil crepe served with coconut chutney and sambar",
    image: dosaImg,
    price: 60,
    rating: 4.6,
    deliveryTime: "20-25 min",
    cuisine: "South Indian",
  },
  {
    name: "Fish Curry",
    restaurant: "Nani's Rasoi",
    description: "Fresh fish cooked in rich red curry with traditional coastal spices",
    image: fishCurryImg,
    price: 200,
    rating: 4.7,
    deliveryTime: "30-35 min",
    cuisine: "Coastal",
  },
  {
    name: "Prawns Fry",
    restaurant: "Tadka Tales",
    description: "Crispy fried prawns marinated in spices, garnished with curry leaves",
    image: prawnsFryImg,
    price: 280,
    rating: 4.8,
    deliveryTime: "25-30 min",
    cuisine: "Coastal",
  },
];

export function MenuHighlights() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Homemade Dishes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Authentic homemade food from our cloud kitchens - prepared fresh with love and traditional recipes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                  Most Popular
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={`${item.name} from ${item.restaurant}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-medium">{item.rating}</span>
                </div>
                <div className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <span className="text-xs font-medium text-muted-foreground">{item.cuisine}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">{item.restaurant}</p>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-foreground font-bold">
                    <IndianRupee className="w-4 h-4" />
                    <span>{item.price}</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{item.deliveryTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            Explore All Restaurants in App
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Browse 500+ restaurants and thousands of dishes in our mobile app
          </p>
        </div>
      </div>
    </section>
  );
}