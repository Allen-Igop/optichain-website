import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Equipment from "./components/Equipment";
import Solutions from "./components/Solutions";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutHero2 from "./components2/Aboutv2";
import TrustedPartners from "./components/TrustedPartner";

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <AboutHero2 />

        <TrustedPartners />
        <Equipment />
        <Solutions />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
