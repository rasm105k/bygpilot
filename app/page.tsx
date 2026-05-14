import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Tools from "@/components/Tools";
import Demo from "@/components/Demo";
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
      <Tools />
      <Demo />
      <Features />
      <Testimonials />
      <Pricing />
      <ContactForm />
      <Footer />
    </main>
  );
}
