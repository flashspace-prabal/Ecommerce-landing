const partners = [
  "Luv Films", "Growth School", "Study IQ", "Agrizy", "Stage Ott",
  "Flipkart", "Adda247", "Truly Madly", "Plôm", "Caller Desk",
];

export const TrustedPartners = () => {
  return (
    <section className="py-12 lg:py-16 bg-muted/30 overflow-hidden">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 bg-background">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted Partners
          </span>
        </div>
      </div>

      {/* Row 1 */}
      <div className="relative mb-4">
        <div className="flex animate-marquee-left whitespace-nowrap">
          {[...partners, ...partners].map((name, i) => (
            <div
              key={`r1-${i}`}
              className="flex items-center gap-2.5 mx-6 lg:mx-10 shrink-0"
            >
              <span className="text-lg lg:text-xl font-semibold text-muted-foreground/50 select-none">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — reverse direction */}
      <div className="relative">
        <div className="flex animate-marquee-right whitespace-nowrap">
          {[...partners.slice(5), ...partners.slice(0, 5), ...partners.slice(5), ...partners.slice(0, 5)].map((name, i) => (
            <div
              key={`r2-${i}`}
              className="flex items-center gap-2.5 mx-6 lg:mx-10 shrink-0"
            >
              <span className="text-lg lg:text-xl font-semibold text-muted-foreground/50 select-none">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
