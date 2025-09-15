import swadoosLogo from "@/assets/swadoos-logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img src={swadoosLogo} alt="Swadoos Logo" className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-bold">Swadoos</h3>
                <p className="text-sm opacity-75">Directly from Maa's Kitchen</p>
              </div>
            </div>
            <p className="text-sm opacity-75 leading-relaxed mb-4">
              Bringing the warmth and authenticity of home-cooked meals to families across Hyderabad. 
              Every dish made with love, care, and traditional recipes.
            </p>
            <p className="text-xs opacity-60">
              © 2024 Swadoos. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="opacity-75 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#menu" className="opacity-75 hover:opacity-100 transition-opacity">Menu Highlights</a></li>
              <li><a href="#coverage" className="opacity-75 hover:opacity-100 transition-opacity">Delivery Areas</a></li>
              <li><a href="#contact" className="opacity-75 hover:opacity-100 transition-opacity">Contact Us</a></li>
              <li><span className="opacity-75">Privacy Policy</span></li>
              <li><span className="opacity-75">Terms of Service</span></li>
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
                <li>• Browse our complete menu</li>
                <li>• Place orders quickly</li>
                <li>• Track delivery in real-time</li>
                <li>• Earn loyalty rewards</li>
                <li>• Get exclusive offers</li>
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
              Made with ❤️ for food lovers in Hyderabad
            </p>
            <div className="flex items-center gap-4 text-xs opacity-60">
              <span>support@swadoos.com</span>
              <span>•</span>
              <span>+91 9876543210</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}