import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Building, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


export function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-warmwhite pb-20">
      {/* Header */}
      <section className="py-16 md:py-20 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            We're here to help with your taxation and compliance needs.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
              <h2 className="text-2xl font-bold text-navy mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center shrink-0 text-gold">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Office Address</h4>
                    <p className="text-muted-foreground mt-1">123 Financial District,<br />New Delhi, India 110001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center shrink-0 text-gold">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Phone Number</h4>
                    <p className="text-muted-foreground mt-1">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center shrink-0 text-gold">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Email Address</h4>
                    <p className="text-muted-foreground mt-1">contact@incomegainsolutions.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center shrink-0 text-gold">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Working Hours</h4>
                    <p className="text-muted-foreground mt-1">Mon - Sat: 10:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden h-[300px] relative">
              <div className="absolute inset-0 bg-navy/5 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                  <p>Interactive Map Embed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy">Full Name</label>
                <Input placeholder="John Doe" className="bg-warmwhite/50" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-navy">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="bg-warmwhite/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-navy">Phone Number</label>
                  <Input type="tel" placeholder="+91 98765 43210" className="bg-warmwhite/50" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy">Service Interested In</label>
                <select className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-warmwhite/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Select a service...</option>
                  <option value="taxation">Taxation & Regulatory</option>
                  <option value="gst">GST Compliance</option>
                  <option value="banking">Banking & Financial Documentation</option>
                  <option value="registration">Business Registration</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy">Message</label>
                <Textarea placeholder="How can we help you?" className="min-h-[120px] bg-warmwhite/50" />
              </div>
              <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-navy font-bold h-12 text-md mt-4">
                Send Message <Send size={18} className="ml-2" />
              </Button>
            </form>
          </div>

        </div>
      </section>

      {/* Banking Association Section */}
      <section className="bg-navy py-16 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border border-gold/30 scale-110 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                <Building size={64} className="text-gold" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">For Banking & Institutional Associations</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                Income Gain Solutions seeks an opportunity to associate with esteemed banking institutions for professional service assignments and long-term collaboration.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 mb-8">
                {[
                  "Professionally Qualified Leadership",
                  "Timely Delivery of Assignments",
                  "Structured Documentation Methodology",
                  "Confidential & Ethical Practices",
                  "Compliance-Focused Approach",
                  "Analytical & Practical Financial Structuring"
                ].map((prop, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className="text-sm font-medium">{prop}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild size="lg" className="bg-white text-navy hover:bg-white/90 font-bold">
                <Link to="/contact">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
