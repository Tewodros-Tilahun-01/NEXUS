import PageWrapper from "@/components/PageWrapper";

export default function CompanyPage() {
  return (
    <PageWrapper>
      <main className="pt-[104px] min-h-screen">
        <div className="px-[5%] py-12">
          <h1 className="font-serif text-[clamp(42px,6vw,72px)] font-light leading-tight tracking-tight mb-4">
            About <em className="italic text-gold">Nexus</em>
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-12">
            Building the future of digital asset trading with
            institutional-grade technology and a trader-first philosophy.
          </p>
        </div>

        <div className="px-[5%] py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-light mb-6">Our Story</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Founded in 2018 by a team of former Wall Street traders and
                Silicon Valley engineers, Nexus was built to solve a fundamental
                problem: crypto exchanges were either easy to use but lacked
                depth, or powerful but impossible to navigate.
              </p>
              <p>
                We set out to build something different — a platform that
                combines the speed and liquidity of traditional markets with the
                innovation and accessibility of decentralized finance.
              </p>
              <p>
                Today, Nexus serves over 2.4 million traders across 120
                countries, processing $4.8B in daily volume. But we're just
                getting started.
              </p>
            </div>
          </div>
        </div>

        <div className="px-[5%] py-16 bg-bg2 border-t border-b border-[#c9a84c]/20">
          <h2 className="font-serif text-4xl font-light mb-12 text-center">
            Our <em className="italic text-gold">Values</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Security First",
                desc: "Every architectural decision starts with security. We employ military-grade encryption, multi-party computation, and regular third-party audits.",
              },
              {
                title: "Radical Transparency",
                desc: "We publish real-time proof of reserves and undergo quarterly audits. Our order book is fully transparent with no hidden liquidity.",
              },
              {
                title: "Customer Obsession",
                desc: "Every feature we ship is informed by trader feedback. Our support team includes experienced traders who understand your needs.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-serif text-2xl mb-3 text-gold">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-[5%] py-16">
          <h2 className="font-serif text-4xl font-light mb-12 text-center">
            Leadership <em className="italic text-gold">Team</em>
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Sarah Chen",
                role: "CEO & Co-Founder",
                bio: "Former Goldman Sachs VP. 15 years in trading tech.",
              },
              {
                name: "Marcus Rodriguez",
                role: "CTO & Co-Founder",
                bio: "Ex-Google Senior Engineer. Built systems at scale.",
              },
              {
                name: "Aisha Patel",
                role: "Chief Security Officer",
                bio: "Former NSA. Cybersecurity expert.",
              },
              {
                name: "James Kim",
                role: "Head of Trading",
                bio: "Ex-Citadel quant trader. PhD in Mathematics.",
              },
            ].map((person) => (
              <div key={person.name} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-2xl font-serif">
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="font-medium mb-1">{person.name}</h3>
                <p className="text-sm text-gold mb-2">{person.role}</p>
                <p className="text-xs text-muted">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-[5%] py-16 bg-bg2 border-t border-[#c9a84c]/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-light mb-6">
              Join Our <em className="italic text-gold">Team</em>
            </h2>
            <p className="text-muted mb-8 leading-relaxed">
              We're hiring world-class engineers, traders, and designers who
              want to shape the future of finance. Competitive compensation,
              full benefits, and equity for early team members.
            </p>
            <a
              href="#"
              className="inline-block bg-gold text-[#060508] px-8 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all hover:opacity-90"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
