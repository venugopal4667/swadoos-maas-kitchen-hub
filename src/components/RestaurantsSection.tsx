import { Link } from "react-router-dom";
import { restaurants } from "@/data/restaurants";
import { ChefHat, ArrowRight } from "lucide-react";

export function RestaurantsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Partner <span className="bg-gradient-primary bg-clip-text text-transparent">Restaurants</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover authentic homemade food from our carefully curated cloud kitchens
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {restaurants.map((restaurant, index) => (
            <Link
              key={restaurant.id}
              to={`/restaurant/${restaurant.id}`}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full p-2">
                  <ChefHat className="w-4 h-4 text-primary" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {restaurant.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {restaurant.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {restaurant.menu.length} items
                  </span>
                  <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    View Menu
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
