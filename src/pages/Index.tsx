import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import LocationHighlights from "@/components/LocationHighlights";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedProperties />
      <LocationHighlights />
      <Footer />
    </div>
  );
};

export default Index;
