import { Link } from "react-router-dom";
import swadoosLogo from "@/assets/swadoos-logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img src={swadoosLogo} alt="Swadoos Food Delivery Platform Logo" className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-bold">Swadoos</h3>
                <p className="text-sm opacity-75">Your Favorite Restaurants</p>
              </div>
            </Link>
            <p className="text-sm opacity-75 leading-relaxed mb-4">
              Hyderabad's leading food delivery platform connecting you with 500+ restaurants. 
              From local favorites to popular chains - discover, order, and enjoy the best food in the city.
            </p>
            <p className="text-xs opacity-60">
              © 2024 Swadoos. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="opacity-75 hover:opacity-100 transition-opacity">About Platform</a></li>
              <li><a href="#menu" className="opacity-75 hover:opacity-100 transition-opacity">Popular Restaurants</a></li>
              <li><a href="#coverage" className="opacity-75 hover:opacity-100 transition-opacity">Delivery Areas</a></li>
              <li><a href="#contact" className="opacity-75 hover:opacity-100 transition-opacity">Contact Us</a></li>
              <li><Link to="/restaurant-partners" className="opacity-75 hover:opacity-100 transition-opacity">Restaurant Partners</Link></li>
              <li><Link to="/privacy-policy" className="opacity-75 hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="opacity-75 hover:opacity-100 transition-opacity">Terms of Service</Link></li>
            </ul>
          </div>

          {/* App Information */}
          <div>
            <h4 className="font-bold mb-4">Mobile App</h4>
            <div className="space-y-3">
              <p className="text-sm opacity-75">
                📱 Download our mobile app to:
              </p>
              <ul className="text-xs opacity-75 space-y-1 ml-4">
                <li>• Browse 500+ restaurants</li>
                <li>• Filter by cuisine & price</li>
                <li>• Track orders in real-time</li>
                <li>• Earn loyalty rewards</li>
                <li>• Get exclusive restaurant offers</li>
                <li>• Read reviews & ratings</li>
              </ul>
              <div className="pt-2">
                <p className="text-xs opacity-60 italic">
                  * All ordering & payments are available only through our mobile application
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-75 text-center md:text-left">
              Connecting Hyderabad with amazing food experiences 🍴
            </p>
            <div className="flex items-center gap-4 text-xs opacity-60">
              <span>support@swadoos.com</span>
              <span>•</span>
              <span>partners@swadoos.com</span>
              <span>•</span>
              <span>+91 9121642407</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}