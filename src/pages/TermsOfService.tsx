import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
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

      {/* Content */}
      <main className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: November 2024</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the Swadoos platform and mobile application, you agree to be bound by these 
                Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Service Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Swadoos is a food delivery platform that connects customers with restaurants in Hyderabad. We facilitate 
                online food ordering and delivery services through our mobile application.
              </p>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-muted-foreground font-semibold">
                  Important: All food orders and payments must be made through our official mobile application only. 
                  Our website serves as an informational platform.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">User Responsibilities</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Account Security</h3>
                  <p className="leading-relaxed">
                    You are responsible for maintaining the confidentiality of your account credentials and for all 
                    activities that occur under your account.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Accurate Information</h3>
                  <p className="leading-relaxed">
                    You must provide accurate and complete information when creating an account and placing orders, 
                    including delivery addresses and contact details.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Prohibited Activities</h3>
                  <p className="leading-relaxed">
                    You may not use our platform for any unlawful purpose, to harass others, or to interfere with 
                    the normal operation of our services.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Orders and Payments</h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li>All orders are subject to acceptance by the restaurant</li>
                <li>Prices are set by individual restaurants and may change without notice</li>
                <li>Delivery fees and service charges apply as displayed in the app</li>
                <li>Payment must be completed at the time of order placement</li>
                <li>We reserve the right to cancel orders in case of suspected fraud</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Cancellations and Refunds</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cancellation and refund policies vary by restaurant and order status:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li>Orders may be cancelled within a limited time after placement</li>
                <li>Refunds are processed according to our refund policy</li>
                <li>Food quality issues should be reported immediately</li>
                <li>Refund processing time may vary depending on your payment method</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Delivery</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We strive to deliver orders within the estimated time, but delivery times may vary due to:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li>Restaurant preparation time</li>
                <li>Traffic conditions and weather</li>
                <li>Order volume and delivery partner availability</li>
                <li>Address accuracy and accessibility</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Swadoos acts as a platform connecting customers with restaurants. We are not responsible for the 
                quality, safety, or legality of food prepared by restaurants. Our liability is limited to the maximum 
                extent permitted by law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of our services after changes 
                constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: support@swadoos.com</p>
                <p>Phone: +91 9121642407</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
