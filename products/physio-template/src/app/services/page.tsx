import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import ContactFooter from "@/components/ContactFooter";

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <PageHero title="Clinical Services" subtitle="Specialized Treatments" />
      <Services />
      <ContactFooter />
    </main>
  );
}
