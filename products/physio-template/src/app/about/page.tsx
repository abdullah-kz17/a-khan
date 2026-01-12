import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import AboutDoctor from "@/components/AboutDoctor";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactFooter from "@/components/ContactFooter";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHero title="About Our Clinic" subtitle="Expert Care Practice" />
      <AboutDoctor />
      <WhyChooseUs />
      <ContactFooter />
    </main>
  );
}
