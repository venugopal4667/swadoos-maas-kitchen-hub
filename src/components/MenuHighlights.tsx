import { Button } from "@/components/ui/button";
import { Star, IndianRupee, Clock } from "lucide-react";
import biryaniImg from "@/assets/biryani.jpg";
import pizzaImg from "@/assets/restaurant-pizza.jpg";
import chineseImg from "@/assets/restaurant-chinese.jpg";
import burgerImg from "@/assets/restaurant-burger.jpg";
import sushiImg from "@/assets/restaurant-sushi.jpg";
import thaliImg from "@/assets/thali.jpg";

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
    name: "Hyderabadi Biryani",
    restaurant: "Bawarchi Restaurant",
    description: "Aromatic basmati rice with tender mutton, cooked in traditional dum style",
    image: biryaniImg,
    price: 280,
    rating: 4.8,
    deliveryTime: "35-40 min",
    cuisine: "Indian",
    isSpecial: true,
  },
  {
    name: "Margherita Pizza",
    restaurant: "Pizza Corner",
    description: "Wood-fired pizza with fresh mozzarella, basil, and authentic tomato sauce",
    image: pizzaImg,
    price: 320,
    rating: 4.6,
    deliveryTime: "25-30 min",
    cuisine: "Italian",
  },
  {
    name: "Vegetable Fried Rice",
    restaurant: "Dragon Express",
    description: "Wok-tossed rice with fresh vegetables and authentic Chinese flavors",
    image: chineseImg,
    price: 180,
    rating: 4.4,
    deliveryTime: "20-25 min",
    cuisine: "Chinese",
  },
  {
    name: "Classic Burger",
    restaurant: "Burger Hub",
    description: "Juicy beef patty with lettuce, tomato, cheese, and crispy fries",
    image: burgerImg,
    price: 250,
    rating: 4.5,
    deliveryTime: "15-20 min",
    cuisine: "American",
  },
  {
    name: "Sushi Platter",
    restaurant: "Tokyo Kitchen",
    description: "Fresh assorted sushi rolls and nigiri with wasabi and pickled ginger",
    image: sushiImg,
    price: 450,
    rating: 4.7,
    deliveryTime: "30-35 min",
    cuisine: "Japanese",
    isSpecial: true,
  },
  {
    name: "Complete Thali",
    restaurant: "Maa's Kitchen",
    description: "Traditional Indian thali with dal, sabzi, rice, rotis, and accompaniments",
    image: thaliImg,
    price: 180,
    rating: 4.9,
    deliveryTime: "25-30 min",
    cuisine: "Indian",
  },
];

export function MenuHighlights() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Popular <span className="bg-gradient-primary bg-clip-text text-transparent">Dishes & Restaurants</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From local favorites to international cuisines - discover the most loved dishes across our partner restaurants
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