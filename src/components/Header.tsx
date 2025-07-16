import { useState } from "react";
import { Menu, X, Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero">
              <MapPin className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary">DeoriaHomes</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Real Estate Platform</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Properties
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Locations
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About Deoria
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              List Property
            </Button>
            <Button size="sm" className="bg-gradient-hero">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              <a href="#" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary">
                Properties
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary">
                Locations
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary">
                About Deoria
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary">
                Contact
              </a>
              <div className="flex flex-col space-y-2 px-3 pt-2">
                <Button variant="outline" size="sm">
                  List Property
                </Button>
                <Button size="sm" className="bg-gradient-hero">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;