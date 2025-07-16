import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <MapPin className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <span className="text-xl font-bold">Deoria Ghar Finder</span>
                <div className="text-sm text-primary-foreground/80">Real Estate Platform</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner for finding the perfect property in Deoria city 
              and surrounding regions. Connecting buyers with quality real estate opportunities.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/satyama.jayasavala" target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                  <Facebook className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://www.instagram.com/satyam_jaiswal_1042?igsh=MThpYnRxa2QwYXloYg==" target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                  <Instagram className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">All Properties</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Residential</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Commercial</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Land & Plots</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Agricultural</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">List Your Property</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-semibold mb-4">Popular Locations</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Deoria Sadar</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Bhatni</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Salempur</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Barhaj</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Gauri Bazar</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Rudrapur</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-primary-foreground/80 mb-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>7068015698</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>satyamjaiswal1042@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-1" />
                <span>Deoria Sadar, Deoria District, Uttar Pradesh</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Newsletter</h4>
              <div className="flex space-x-2">
                <Input
                  placeholder="Your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button size="sm" variant="secondary">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © 2025 Deoria Ghar Finder. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-primary-foreground/80">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;