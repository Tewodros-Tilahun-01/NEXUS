import PageWrapper from "@/components/PageWrapper";
import HowItWorks from "@/components/HowItWorks";
import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <PageWrapper>
      <main className="pt-[104px] min-h-screen">
        <div className="px-[5%] py-12">
          <h1 className="font-serif text-[clamp(42px,6vw,72px)] font-light leading-tight tracking-tight mb-4">
            How It <em className="italic text-gold">Works</em>
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-12">
            From account creation to your first trade in minutes. Our
            streamlined onboarding gets you started fast.
          </p>
        </div>

        <HowItWorks />

        <div className="px-[5%] py-16">
          <div className="max-w-3xl mx-auto bg-bg2 border border-[#c9a84c]/20 rounded-xl p-10 text-center">
            <h2 className="font-serif text-3xl font-light mb-4">
              Ready to <em className="italic text-gold">get started?</em>
            </h2>
            <p className="text-muted mb-8">
              Create your account in under 3 minutes. No credit card required.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="#"
                className="bg-gold text-[#060508] px-8 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all hover:opacity-90"
              >
                Create Account
              </Link>
              <Link
                href="#"
                className="bg-transparent text-gold-soft border border-[#c9a84c]/20 px-8 py-3 rounded-lg text-sm font-normal tracking-wide transition-all hover:bg-[#c9a84c]/10"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>

        <div className="px-[5%] py-16 bg-bg2 border-t border-[#c9a84c]/20">
          <h2 className="font-serif text-4xl font-light mb-12 text-center">
            Frequently Asked <em className="italic text-gold">Questions</em>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "What documents do I need for verification?",
                a: "A government-issued ID (passport or driver's license) and proof of address dated within the last 3 months. The entire process is handled through our secure AI-powered system.",
              },
              {
                q: "What are the trading fees?",
                a: "Maker fees start at 0.08% and taker fees at 0.12%. Volume-based discounts available. No deposit or withdrawal fees for crypto transfers.",
              },
              {
                q: "Is my crypto insured?",
                a: "Yes. We maintain a $650M insurance policy covering assets in cold storage. 95% of all funds are held offline in geographically distributed vaults.",
              },
              {
                q: "Can I trade with leverage?",
                a: "Yes. Margin trading is available with up to 10x leverage on select pairs. Derivatives trading offers perpetual futures with up to 50x leverage for qualified traders.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-bg3 border border-dim rounded-lg">
                <h3 className="text-lg font-medium mb-2 text-gold-soft">
                  {item.q}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
