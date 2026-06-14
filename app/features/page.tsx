import PageWrapper from "@/components/PageWrapper";
import Features from "@/components/Features";

export default function FeaturesPage() {
  return (
    <PageWrapper>
      <main className="pt-[104px] min-h-screen">
        <div className="px-[5%] py-12">
          <h1 className="font-serif text-[clamp(42px,6vw,72px)] font-light leading-tight tracking-tight mb-4">
            Platform <em className="italic text-gold">Features</em>
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-12">
            Enterprise-grade infrastructure designed for professional traders
            who demand speed, security, and reliability.
          </p>
        </div>

        <Features />

        <div className="px-[5%] py-16 bg-bg2 border-t border-b border-[#c9a84c]/20">
          <h2 className="font-serif text-4xl font-light mb-12 text-center">
            Additional <em className="italic text-gold">capabilities</em>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "API Trading",
                desc: "RESTful and WebSocket APIs with comprehensive documentation. Build custom bots and automated strategies.",
              },
              {
                title: "Mobile Apps",
                desc: "Native iOS and Android apps. Trade on the go with full feature parity and biometric authentication.",
              },
              {
                title: "Portfolio Analytics",
                desc: "Track P&L, allocation, and performance across all your holdings. Export tax reports with one click.",
              },
              {
                title: "Social Trading",
                desc: "Follow top traders, copy their strategies, or share your own. Build your reputation in the community.",
              },
              {
                title: "Staking & Earn",
                desc: "Generate passive income on idle assets. Flexible and locked staking options with competitive APYs.",
              },
              {
                title: "24/7 Support",
                desc: "Multilingual customer support via live chat, email, and phone. Average response time under 2 minutes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-bg3 border border-dim rounded-lg"
              >
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
