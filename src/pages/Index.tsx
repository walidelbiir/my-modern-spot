import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Process from "../components/Process";
import MidCTA from "../components/MidCTA";
import Portfolio from "../components/Portfolio";
import ClientLogos from "../components/ClientLogos";
import Testimonials from "../components/Testimonials";
import QualityBar from "../components/QualityBar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { ScrollProgress } from "@/components/motion";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <About />
        <Process />
        <Services />
        <MidCTA />
        <Portfolio />
        <QualityBar />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
