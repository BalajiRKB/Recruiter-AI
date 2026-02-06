import Header from "./components/Header";
import Hero from "./components/Hero";
import Flowchart from "./components/Flowchart";
import ImpactResults from "./components/ImpactResults";
import SocialProof from "./components/SocialProof";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Flowchart />
      <ImpactResults />
      <SocialProof />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
