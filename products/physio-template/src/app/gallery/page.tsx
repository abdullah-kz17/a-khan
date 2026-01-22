import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import ContactFooter from "@/components/ContactFooter";

export default function GalleryPage() {
  return (
    <main>
      <Navbar />
      <PageHero title="Clinical Gallery" subtitle="State-of-the-Art Facility" />
      <Gallery />
      <ContactFooter />
    </main>
  );
}
