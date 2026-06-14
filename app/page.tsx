import ConstellationBg from "@/components/ConstellationBg";
import Nav from "@/components/Nav";
import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Markets from "@/components/Markets";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ConstellationBg />
      <Nav />
      <Ticker />
      <Hero />
      <Stats />
      <Markets />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </>
  );
}
