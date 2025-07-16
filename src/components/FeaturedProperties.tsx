import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedProperties = () => {
  // Sample property data - In real app, this would come from API
  const properties = [
    {
      id: "1",
      title: "3BHK Independent House in Deoria Sadar",
      price: "₹45 Lakh",
      location: "Deoria Sadar, Near Railway Station",
      type: "Residential",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,200 sq ft",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
      isNew: true,
      isFeatured: true
    },
    {
      id: "2", 
      title: "Commercial Plot in Bhatni Bazar",
      price: "₹25 Lakh",
      location: "Bhatni, Main Market Road",
      type: "Commercial",
      area: "800 sq ft",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=800&q=80",
      isFeatured: true
    },
    {
      id: "3",
      title: "2BHK Apartment in Salempur",
      price: "₹18 Lakh",
      location: "Salempur Nagar Panchayat",
      type: "Residential",
      bedrooms: 2,
      bathrooms: 1,
      area: "850 sq ft",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
      isNew: true
    },
    {
      id: "4",
      title: "Agricultural Land in Rudrapur",
      price: "₹12 Lakh",
      location: "Rudrapur Village, Near Main Road",
      type: "Agricultural",
      area: "2 Bigha",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "5",
      title: "4BHK Villa in Gauri Bazar",
      price: "₹75 Lakh",
      location: "Gauri Bazar, Premium Location",
      type: "Residential",
      bedrooms: 4,
      bathrooms: 3,
      area: "1,800 sq ft",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=800&q=80",
      isFeatured: true
    },
    {
      id: "6",
      title: "Shop Space in Barhaj Market",
      price: "₹35 Lakh",
      location: "Barhaj, Near Saryu River",
      type: "Commercial",
      area: "600 sq ft",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Properties in
            <span className="block text-primary">Deoria Region</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked premium properties across Deoria Sadar, Bhatni, Salempur, 
            and surrounding towns offering the best value and location.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {properties.map((property, index) => (
            <div
              key={property.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <Button size="lg" className="bg-gradient-hero text-lg px-8">
            View All Properties
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;