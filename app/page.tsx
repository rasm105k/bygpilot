import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Testimonials />
      <Pricing />
      <ContactForm />
      <Footer />
    </main>
  );
}
