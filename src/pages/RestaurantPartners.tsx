import { Link } from "react-router-dom";
import { ArrowLeft, Store, TrendingUp, Users, DollarSign, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";

const RestaurantPartners = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-soft sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Partner with Swadoos
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Grow your restaurant business with Hyderabad's leading food delivery platform
          </p>
          <Button variant="app-download" size="lg">
            Contact Us: +91 9121642407
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Partner with <span className="bg-gradient-primary bg-clip-text text-transparent">Swadoos</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-glow transition-smooth">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Increase Revenue</h3>
              <p className="text-muted-foreground">
                Reach thousands of new customers in Hyderabad and boost your daily orders with our growing platform.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-glow transition-smooth">
              <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Expand Customer Base</h3>
              <p className="text-muted-foreground">
                Get discovered by food lovers across all areas of Hyderabad. Our platform connects you with customers actively looking for great food.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-glow transition-smooth">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Competitive Commission</h3>
              <p className="text-muted-foreground">
                Enjoy competitive commission rates and transparent pricing. Maximize your profits with our fair partnership model.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-glow transition-smooth">
              <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Store className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Easy Management</h3>
              <p className="text-muted-foreground">
                Simple dashboard to manage orders, update menu items, and track your business performance in real-time.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-glow transition-smooth">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quick Onboarding</h3>
              <p className="text-muted-foreground">
                Get started in days, not weeks. Our streamlined onboarding process gets your restaurant live quickly.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-glow transition-smooth">
              <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Dedicated Support</h3>
              <p className="text-muted-foreground">
                Our partner support team is always available to help you succeed and resolve any issues quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join 500+ restaurants already partnering with Swadoos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              Email: partners@swadoos.com
            </Button>
            <Button variant="outline" size="lg">
              Call: +91 9121642407
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RestaurantPartners;
