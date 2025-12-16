import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, ChefHat, Phone, Mail, MapPin, Utensils, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import popupChefBanner from "@/assets/popup-chef-banner.jpg";

const chefFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Enter a valid email address").max(255).optional().or(z.literal("")),
  kitchenName: z.string().min(2, "Kitchen name must be at least 2 characters").max(100),
  address: z.string().min(10, "Please provide a complete address").max(500),
  area: z.string().min(1, "Please select your area"),
  cuisineType: z.string().min(1, "Please select your cuisine specialty"),
  experience: z.string().min(1, "Please select your experience level"),
  dailyCapacity: z.string().min(1, "Please select daily meal capacity"),
  about: z.string().min(20, "Tell us more about yourself (at least 20 characters)").max(1000),
  fssaiNumber: z.string().max(14, "FSSAI number must be 14 digits").optional().or(z.literal("")),
  termsAccepted: z.boolean().refine((val) => val === true, "You must accept the terms"),
});

type ChefFormValues = z.infer<typeof chefFormSchema>;

const areas = [
  "Ameerpet", "Banjara Hills", "Begumpet", "Dilsukhnagar", "Gachibowli",
  "Himayatnagar", "Jubilee Hills", "Kondapur", "Kukatpally", "LB Nagar",
  "Madhapur", "Manikonda", "Mehdipatnam", "Miyapur", "Secunderabad",
  "Somajiguda", "SR Nagar", "Tolichowki", "Uppal", "Other"
];

const cuisineTypes = [
  "South Indian Vegetarian",
  "South Indian Non-Vegetarian",
  "North Indian",
  "Andhra Specialties",
  "Hyderabadi Cuisine",
  "Multi-Cuisine",
  "Healthy/Diet Food",
  "Millet-Based Meals",
];

const experienceLevels = [
  "Less than 1 year",
  "1-3 years",
  "3-5 years",
  "5-10 years",
  "More than 10 years",
];

const dailyCapacities = [
  "10-25 meals",
  "25-50 meals",
  "50-100 meals",
  "100+ meals",
];

// TODO: Replace with your DigitalOcean Droplet API endpoint
const API_ENDPOINT = "";

export default function ChefRegistration() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<ChefFormValues>({
    resolver: zodResolver(chefFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      kitchenName: "",
      address: "",
      area: "",
      cuisineType: "",
      experience: "",
      dailyCapacity: "",
      about: "",
      fssaiNumber: "",
      termsAccepted: false,
    },
  });

  const onSubmit = async (data: ChefFormValues) => {
    setIsSubmitting(true);
    
    try {
      if (!API_ENDPOINT) {
        // If no API endpoint configured, show success for demo
        console.log("Chef registration data:", data);
        toast({
          title: "Demo Mode",
          description: "API endpoint not configured. Data logged to console.",
        });
        setIsSuccess(true);
        return;
      }

      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit registration");
      }

      setIsSuccess(true);
      toast({
        title: "Registration Submitted!",
        description: "We'll contact you within 24-48 hours.",
      });
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Registration Submitted!</h1>
          <p className="text-muted-foreground">
            Thank you for your interest in joining Swadoos. Our team will review your application and contact you within 24-48 hours.
          </p>
          <div className="pt-4">
            <Link to="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className="flex items-center gap-2">
            <ChefHat className="w-6 h-6" />
            <h1 className="text-xl font-bold">Join Swadoos as a Chef Partner</h1>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img 
          src={popupChefBanner} 
          alt="Chef cooking" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Turn Your Passion Into Profit
          </h2>
          <p className="text-muted-foreground mt-1">
            Minimal commission • Same-day payouts • 24/7 support
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Personal Information
              </h3>
              
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number *</FormLabel>
                      <FormControl>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 bg-muted border border-r-0 border-input rounded-l-md text-sm text-muted-foreground">
                            +91
                          </span>
                          <Input 
                            placeholder="9876543210" 
                            className="rounded-l-none" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com (optional)" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Kitchen Information */}
            <div className="space-y-4 pt-4 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Utensils className="w-5 h-5 text-primary" />
                Kitchen Information
              </h3>

              <FormField
                control={form.control}
                name="kitchenName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kitchen Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Amma's Kitchen" {...field} />
                    </FormControl>
                    <FormDescription>
                      This will be displayed to customers
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kitchen Address *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Enter your complete kitchen address" 
                        rows={2}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="area"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Area *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your area" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {areas.map((area) => (
                          <SelectItem key={area} value={area}>
                            {area}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Expertise & Capacity */}
            <div className="space-y-4 pt-4 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Expertise & Capacity
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="cuisineType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cuisine Specialty *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select cuisine type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {cuisineTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cooking Experience *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {experienceLevels.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="dailyCapacity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Daily Meal Capacity *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="How many meals can you prepare daily?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {dailyCapacities.map((capacity) => (
                          <SelectItem key={capacity} value={capacity}>
                            {capacity}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="about"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>About Your Cooking *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your cooking style, signature dishes, and what makes your food special..."
                        rows={4}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Certifications & Agreement */}
            <div className="space-y-4 pt-4 border-t border-border">
              <FormField
                control={form.control}
                name="fssaiNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>FSSAI License Number</FormLabel>
                    <FormControl>
                      <Input placeholder="14-digit FSSAI number (optional)" {...field} />
                    </FormControl>
                    <FormDescription>
                      Optional, but helps build customer trust
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="termsAccepted"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-normal">
                        I agree to the{" "}
                        <Link to="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>{" "}
                        *
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Registration"}
            </Button>
          </form>
        </Form>

        {/* Contact Info */}
        <div className="mt-8 p-4 bg-muted rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            Have questions? Call us at{" "}
            <a href="tel:+919121642407" className="text-primary font-medium">
              +91 9121642407
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
