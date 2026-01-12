import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";
import ContactFooter from "@/components/ContactFooter";

export default function BookingPage() {
  return (
    <main>
      <Navbar />
      <PageHero title="Book Appointment" subtitle="Reserve Your Slot" />
      <BookingForm />
      <ContactFooter />
    </main>
  );
}
