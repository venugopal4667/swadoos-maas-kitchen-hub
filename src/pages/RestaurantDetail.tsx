import { useParams, Link } from "react-router-dom";
import { restaurants } from "@/data/restaurants";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { ArrowLeft, IndianRupee, ChefHat, Star } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function RestaurantDetail() {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Restaurant Not Found</h1>
          <Link to="/">
            <Button variant="default">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Restaurant Hero */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-glow">
                <span className="text-9xl">{restaurant.emoji}</span>
              </div>
              <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-3 shadow-glow">
                <ChefHat className="w-6 h-6" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                {restaurant.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {restaurant.description}
              </p>
              <div className="flex items-center gap-6 justify-center md:justify-start">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold text-foreground">4.5</span>
                  <span className="text-sm text-muted-foreground">(200+ ratings)</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {restaurant.menu.length} Menu Items
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Menu</span>
            </h2>
            <p className="text-muted-foreground">
              Fresh, homemade dishes prepared with love and authentic ingredients
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-[50px]">#</TableHead>
                  <TableHead>Dish Name</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {restaurant.menu.map((item, index) => (
                  <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-medium text-muted-foreground">
                      {index + 1}
                    </TableCell>
                    <TableCell className="font-medium text-foreground">
                      {item.name}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1 font-semibold text-foreground">
                        <IndianRupee className="w-4 h-4" />
                        <span>{item.price}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-12 text-center bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Order?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Download the Swadoos app to place your order and enjoy fresh homemade food delivered to your doorstep
            </p>
            <Button size="lg" variant="default">
              Order Now via App
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
