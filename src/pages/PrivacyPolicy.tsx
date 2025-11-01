import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
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
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: November 2024</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Welcome to Swadoos. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you use our 
                food delivery platform and mobile application.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Information We Collect</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Personal Information</h3>
                  <p className="leading-relaxed">
                    When you create an account or place orders, we collect information such as your name, email address, 
                    phone number, and delivery addresses.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Order Information</h3>
                  <p className="leading-relaxed">
                    We collect details about your orders, including restaurant choices, food preferences, order history, 
                    and payment information.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Location Data</h3>
                  <p className="leading-relaxed">
                    With your permission, we collect location data to provide accurate delivery services and show 
                    nearby restaurants.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">How We Use Your Information</h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li>To process and deliver your food orders</li>
                <li>To communicate with you about your orders and account</li>
                <li>To improve our services and user experience</li>
                <li>To send promotional offers and updates (with your consent)</li>
                <li>To ensure platform security and prevent fraud</li>
                <li>To analyze usage patterns and optimize our platform</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We share your information only when necessary:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li>With restaurants to fulfill your orders</li>
                <li>With delivery partners to complete deliveries</li>
                <li>With payment processors to handle transactions</li>
                <li>With service providers who assist in operating our platform</li>
                <li>When required by law or to protect our legal rights</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your personal information. This includes 
                encryption, secure servers, and regular security audits. However, no method of transmission over 
                the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li>Access and review your personal information</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this privacy policy or how we handle your data, please contact us:
              </p>
              <div className="mt-4 space-y-2 text-muted-foreground">
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

export default PrivacyPolicy;
