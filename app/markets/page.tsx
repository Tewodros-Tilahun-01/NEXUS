import PageWrapper from "@/components/PageWrapper";
import Markets from "@/components/Markets";

export default function MarketsPage() {
  return (
    <PageWrapper>
      <main className="pt-[104px] min-h-screen">
        <div className="px-[5%] py-12">
          <h1 className="font-serif text-[clamp(42px,6vw,72px)] font-light leading-tight tracking-tight mb-4">
            Live <em className="italic text-gold">Markets</em>
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-12">
            Track real-time prices, 24h changes, and trading volumes across 350+
            digital assets. Deep liquidity and institutional-grade execution.
          </p>
        </div>
        <Markets />

        <div className="px-[5%] py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-bg2 border border-gold/20 rounded-lg">
              <h3 className="font-serif text-2xl mb-3 text-gold">
                Spot Trading
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Trade directly with instant settlement. No leverage, full
                ownership of your assets.
              </p>
            </div>
            <div className="p-8 bg-bg2 border border-gold/20 rounded-lg">
              <h3 className="font-serif text-2xl mb-3 text-gold">
                Margin Trading
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Amplify your positions with up to 10x leverage. Advanced risk
                management tools included.
              </p>
            </div>
            <div className="p-8 bg-bg2 border border-gold/20 rounded-lg">
              <h3 className="font-serif text-2xl mb-3 text-gold">
                Derivatives
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Perpetual futures and options. Hedge your portfolio or speculate
                on price movements.
              </p>
            </div>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
