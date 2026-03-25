const stats = [
  { value: "87,000+", label: "Virtual Office Registrations" },
  { value: "47+", label: "Industries Served" },
  { value: "180+", label: "Spaces Present in 29 States & UTs" },
  { value: "97.98%", label: "VO/COI/ GST Approval Rate in < 3 Weeks" },
  { value: "2166", label: "GSTINs Queries Solved" },
  { value: "4.9", label: "Google Business Reviews by 1400+ Clients" },
];

export const TrustBanner = () => {
  return (
    <section className="py-10 lg:py-12 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-primary-foreground/20">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-1.5 pt-4 sm:pt-0 px-2">
              <span className="text-2xl lg:text-3xl font-bold tracking-tight text-secondary">
                {stat.value}
              </span>
              <span className="text-xs text-primary-foreground/70 leading-snug">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
