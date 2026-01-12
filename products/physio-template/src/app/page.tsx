import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutDoctor from "@/components/AboutDoctor";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import BookingForm from "@/components/BookingForm";
import Testimonials from "@/components/Testimonials";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutDoctor />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <BookingForm />
      <ContactFooter />
      <WhatsAppButton />
    </main>
  );
}
