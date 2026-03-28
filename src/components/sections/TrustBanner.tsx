import { Building2, Briefcase, MapPin, ShieldCheck, Clock } from "lucide-react";

const stats = [
  { value: "5,000+", label: "Businesses Served", icon: Building2 },
  { value: "47+", label: "Industries Served", icon: Briefcase },
  { value: "100+", label: "Spaces Across India", icon: MapPin },
  { value: "98%", label: "VO/COI/GST Approval Rate", icon: ShieldCheck },
  { value: "<3 Days", label: "GST Approval", icon: Clock },
];

export const TrustBanner = () => {
  return (
    <section className="py-8 border-y border-border/40 bg-muted text-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-1.5 pt-4 sm:pt-0 px-2">
              <stat.icon className="w-5 h-5 mb-1 text-primary" />
              <span className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground leading-snug">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};