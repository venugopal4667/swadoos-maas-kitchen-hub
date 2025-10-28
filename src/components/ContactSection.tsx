import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Need help with orders, restaurant partnerships, or general questions? We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-smooth">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Customer Support</h3>
                  <p className="text-muted-foreground mb-2">+91 9121642407</p>
                  <p className="text-sm text-muted-foreground">Mon-Sun, 8:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-smooth">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">General Inquiries</h3>
                  <p className="text-muted-foreground mb-2">support@swadoos.com</p>
                  <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-smooth">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Restaurant Partnerships</h3>
                  <p className="text-muted-foreground mb-2">partners@swadoos.com</p>
                  <p className="text-sm text-muted-foreground">Join our platform as a restaurant partner</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-smooth">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Platform Hours</h3>
                  <p className="text-muted-foreground mb-2">6:00 AM - 12:00 AM</p>
                  <p className="text-sm text-muted-foreground">Restaurant availability varies</p>
                </div>
              </div>
            </div>
          </div>

          {/* App Download Reminder */}
          <div className="flex flex-col justify-center">
            <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-8 text-center shadow-glow">
              <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="mb-6 opacity-90">
                For quick support with orders, delivery tracking, or restaurant queries, 
                contact us directly through our mobile app's chat feature.
              </p>
              <Button variant="app-download" size="lg" className="mb-4">
                Download App for Quick Support
              </Button>
              <p className="text-sm opacity-75">
                Remember: All orders must be placed through our mobile app only
              </p>
            </div>

            <div className="mt-8 text-center">
              <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
              <div className="flex justify-center gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold hover:bg-primary-glow transition-colors cursor-pointer">
                  f
                </div>
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold hover:bg-primary-glow transition-colors cursor-pointer">
                  @
                </div>
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold hover:bg-primary-glow transition-colors cursor-pointer">
                  in
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}