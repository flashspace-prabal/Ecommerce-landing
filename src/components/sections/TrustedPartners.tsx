const partners = [
  { name: "Flipkart", logo: "https://logo.clearbit.com/flipkart.com" },
  { name: "Growth School", logo: "https://logo.clearbit.com/growthschool.io" },
  { name: "Study IQ", logo: "https://logo.clearbit.com/studyiq.com" },
  { name: "Agrizy", logo: "https://logo.clearbit.com/agrizy.com" },
  { name: "Adda247", logo: "https://logo.clearbit.com/adda247.com" },
  { name: "Truly Madly", logo: "https://logo.clearbit.com/trulymadly.com" },
  { name: "Caller Desk", logo: "https://logo.clearbit.com/callerdesk.io" },
  { name: "Luv Films", logo: "https://logo.clearbit.com/luvfilms.com" },
  { name: "Plôm", logo: "https://logo.clearbit.com/plom.in" },
  { name: "Stage OTT", logo: "https://logo.clearbit.com/thestage.in" },
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
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={`r1-${i}`}
              className="flex items-center gap-3 mx-8 lg:mx-12 shrink-0"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 lg:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="text-lg lg:text-xl font-semibold text-muted-foreground/50 select-none hidden">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — reverse direction */}
      <div className="relative">
        <div className="flex animate-marquee-right whitespace-nowrap">
          {[...partners.slice(5), ...partners.slice(0, 5), ...partners.slice(5), ...partners.slice(0, 5)].map((partner, i) => (
            <div
              key={`r2-${i}`}
              className="flex items-center gap-3 mx-8 lg:mx-12 shrink-0"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 lg:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="text-lg lg:text-xl font-semibold text-muted-foreground/50 select-none hidden">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
