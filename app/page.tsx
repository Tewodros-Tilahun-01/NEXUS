import PageWrapper from "@/components/PageWrapper";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Markets from "@/components/Markets";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Stats />
      <Markets />
      <Features />
      <HowItWorks />
      <CTA />
    </PageWrapper>
  );
}
