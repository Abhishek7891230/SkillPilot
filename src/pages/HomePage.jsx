import { FeaturesSection } from "../components/features.jsx";
import { Footer } from "../components/Footer.jsx";
import { HeroSection } from "../components/HeroSection.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { PlatformOverview } from "../components/Platform.jsx";

export function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PlatformOverview />
      <Footer />
    </>
  );
}
