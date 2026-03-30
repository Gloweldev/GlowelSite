import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import TechStack from "@/components/sections/TechStack";
import Process from "@/components/sections/Process";
import Guarantees from "@/components/sections/Guarantees";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <TechStack />
        <Process />
        <Guarantees />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
