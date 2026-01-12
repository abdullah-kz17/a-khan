import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";
import ContactFooter from "@/components/ContactFooter";

export default function ReviewsPage() {
  return (
    <main>
      <Navbar />
      <PageHero title="Patient Reviews" subtitle="Verified Testimonials" />
      <Testimonials />
      <ContactFooter />
    </main>
  );
}
