import ContactForm from "@/components/ContactForm";
import MockDatastream from "@/components/MockDatastream";
import Newsletter from "@/components/Newsletter";
import LandingContent from "@/components/landing/LandingContent";
import LandingHero from "@/components/landing/LandingHero";
import LandingPartners from "@/components/landing/LandingPartners";

export default function Home() {
  return (
    <main>
      <LandingHero />
      <MockDatastream />
      <LandingPartners />
      <LandingContent />
      <ContactForm />
      <Newsletter />
    </main>
  );
}

export const runtime = "nodejs"; // default
