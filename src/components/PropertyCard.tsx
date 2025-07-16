import { Heart, MapPin, Bed, Bath, Square, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    price: string;
    location: string;
    type: string;
    bedrooms?: number;
    bathrooms?: number;
    area: string;
    image: string;
    isNew?: boolean;
    isFeatured?: boolean;
  };
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="bg-card rounded-xl shadow-property hover:shadow-hero transition-all duration-300 overflow-hidden group animate-scale-in">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {property.isNew && (
            <Badge className="bg-accent text-accent-foreground">New</Badge>
          )}
          {property.isFeatured && (
            <Badge className="bg-secondary text-secondary-foreground">Featured</Badge>
          )}
        </div>

        {/* Heart Icon */}
        <Button
          size="sm"
          variant="secondary"
          className="absolute top-4 right-4 w-8 h-8 p-0 bg-background/80 hover:bg-background"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Price Overlay */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-lg">
            <span className="text-lg font-bold">{property.price}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-card-foreground line-clamp-2 flex-1">
            {property.title}
          </h3>
        </div>

        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            {property.bedrooms && (
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1" />
                <span>{property.bedrooms}</span>
              </div>
            )}
            {property.bathrooms && (
              <div className="flex items-center">
                <Bath className="h-4 w-4 mr-1" />
                <span>{property.bathrooms}</span>
              </div>
            )}
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span>{property.area}</span>
            </div>
          </div>
          <Badge variant="outline" className="text-xs">
            {property.type}
          </Badge>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4 border-t">
          <Button size="sm" variant="outline" className="flex-1">
            <Phone className="h-4 w-4 mr-2" />
            Contact
          </Button>
          <Button size="sm" className="flex-1 bg-gradient-hero">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;