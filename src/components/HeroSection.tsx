import { Search, MapPin, Home, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImage from "@/assets/deoria-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              <span>Deoria City & Surrounding Region</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Find Your Perfect
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                Plot in Deoria
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
              Explore prime real estate opportunities across Deoria Sadar, Bhatni, Salempur, 
              and all surrounding towns and villages.
            </p>

            {/* Search Box */}
            <div className="bg-background/95 backdrop-blur p-6 rounded-2xl shadow-hero mb-8 animate-slide-up">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Search Location
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Deoria Sadar, Bhatni, Salempur..."
                      className="pl-10 h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Property Type
                  </label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Any Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="land">Land/Plot</SelectItem>
                      <SelectItem value="agricultural">Agricultural</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Budget Range
                  </label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-10">₹0 - ₹10 L</SelectItem>
                      <SelectItem value="10-25">₹10 - ₹25 L</SelectItem>
                      <SelectItem value="25-50">₹25 - ₹50 L</SelectItem>
                      <SelectItem value="50-100">₹50 L - ₹1 Cr</SelectItem>
                      <SelectItem value="100+">₹1 Cr+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button size="lg" className="w-full mt-4 h-12 bg-gradient-hero text-lg font-semibold">
                <Search className="mr-2 h-5 w-5" />
                Search Properties
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 animate-scale-in">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">500+</div>
                <div className="text-sm text-primary-foreground/80">Properties Listed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">15+</div>
                <div className="text-sm text-primary-foreground/80">Towns Covered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">100+</div>
                <div className="text-sm text-primary-foreground/80">Villages Included</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;