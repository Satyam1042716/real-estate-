import { MapPin, Train, GraduationCap, Building, ShoppingBag, Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LocationHighlights = () => {
  const highlights = [
    {
      icon: Train,
      title: "Deoria Sadar Railway Station",
      description: "Major connectivity hub linking to Delhi, Mumbai, and Kolkata",
      location: "Deoria Sadar"
    },
    {
      icon: GraduationCap,
      title: "Maharshi Devraha Baba Medical College",
      description: "Premier medical education and healthcare facility",
      location: "Deoria City"
    },
    {
      icon: Building,
      title: "Bhatni Commercial Hub",
      description: "Thriving market center with excellent business opportunities",
      location: "Bhatni Block"
    },
    {
      icon: ShoppingBag,
      title: "Salempur Market",
      description: "Traditional bazaar and modern shopping facilities",
      location: "Salempur Nagar Panchayat"
    },
    {
      icon: MapPin,
      title: "Somnath Mandir",
      description: "Historic temple and spiritual center attracting devotees",
      location: "Deoria City"
    },
    {
      icon: Car,
      title: "NH-28 Connectivity",
      description: "National highway ensuring excellent road connectivity",
      location: "Multiple Locations"
    }
  ];

  const blocks = [
    "Deoria Sadar", "Bhatni", "Rudrapur", "Salempur", 
    "Barhaj", "Pathardeva", "Gauri Bazar", "Lar"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose
            <span className="block text-primary">Deoria Region?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the strategic advantages of investing in Deoria's real estate. 
            From excellent connectivity to educational institutions and cultural heritage.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card 
              key={index}
              className="group hover:shadow-property transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <highlight.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {highlight.description}
                    </p>
                    <div className="flex items-center text-xs text-primary">
                      <MapPin className="h-3 w-3 mr-1" />
                      {highlight.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coverage Map */}
        <div className="bg-gradient-property rounded-2xl p-8 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Complete Coverage Across Deoria District
            </h3>
            <p className="text-muted-foreground">
              We cover all major blocks, nagar panchayats, and villages in the region
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {blocks.map((block, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-8 h-8 bg-accent rounded-full mx-auto mb-2 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-accent-foreground" />
                </div>
                <div className="font-medium text-sm text-foreground">{block}</div>
                <div className="text-xs text-muted-foreground mt-1">Block</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              + 100+ villages and rural areas across the district
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHighlights;