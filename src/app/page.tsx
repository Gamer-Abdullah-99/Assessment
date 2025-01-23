import ConnectionSection from "@/components/Connection";
import ForBusiness from "@/components/For-Business";
import ForConsumers from "@/components/For-Consumers";
import Hero from "@/components/Hero";
import MarketCommunity from "@/components/Market-Community";
import Mission from "@/components/Mission";
import ResourcesSection from "@/components/Resources";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ForBusiness />
      <ForConsumers />
      <Mission />
      <MarketCommunity />
      <Reviews />
      <ResourcesSection />
      <ConnectionSection />
    </div>

  );
}
