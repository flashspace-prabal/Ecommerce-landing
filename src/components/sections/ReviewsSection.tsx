import { Star } from "lucide-react";

const reviews = [
  { name: "Vikram P.", role: "Freelance Web Developer", text: "Flash Space simplified every aspect of my business life. From tracking expenses to managing compliance — it's been years and I can't imagine working without it.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format" },
  { name: "Sneha R.", role: "Manager at GlobeSync", text: "A game-changer for our business. Comprehensive workspace management tools helped us streamline processes and make better decisions.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format" },
  { name: "Amit K.", role: "CEO, Beta Technologies", text: "As someone new to scaling e-commerce, Flash Space has been invaluable. Its compliance tools helped me understand requirements and optimize operations.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format" },
  { name: "Priya D.", role: "Founder, LuxeCart", text: "Multi-state VPOB set up in under 10 days. Now we sell in 12 states with zero compliance issues. The team is incredibly responsive.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format" },
  { name: "Rahul M.", role: "COO, UrbanBazaar", text: "Managing GST across multiple states felt impossible. Flash Space handled everything — VPOB, filings, TDS recovery. We scaled from 3 to 18 states in two months.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&auto=format" },
  { name: "Meera S.", role: "Founder, StyleKart", text: "We were stuck with single-state selling. Flash Space opened up 15 new states for us in just 3 weeks. Revenue jumped 4x within a quarter.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&auto=format" },
  { name: "Arjun T.", role: "Director, FreshBasket", text: "The dedicated compliance manager is a lifesaver. They handle all government correspondence so we can focus on growing our organic food business.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&auto=format" },
  { name: "Kavita N.", role: "CEO, TechGear India", text: "Best investment we made. GST registration in 2 days, VPOB addresses across 20 states, and pricing that actually makes sense for a bootstrapped startup.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&auto=format" },
  { name: "Deepak R.", role: "Ops Head, QuickShip", text: "Compliance used to be our biggest bottleneck. Flash Space eliminated it entirely. We now onboard new states in under a week.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&auto=format" },
  { name: "Anita J.", role: "Co-founder, PetWorld", text: "From a small Bangalore store to selling across India on Amazon and Flipkart. Flash Space made it possible with their hassle-free VPOB setup.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&auto=format" },
];

const row1 = reviews.slice(0, 5);
const row2 = reviews.slice(5, 10);

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="flex-shrink-0 w-[340px] bg-card rounded-xl border border-border/40 p-5 mx-3">
    <div className="flex items-center gap-3 mb-3">
      <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
      <div>
        <p className="text-sm font-semibold text-foreground">{review.name}</p>
        <p className="text-xs text-muted-foreground">{review.role}</p>
      </div>
    </div>
    <div className="flex gap-0.5 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">"{review.text}"</p>
  </div>
);

export const ReviewsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
            What Our Clients Are Saying
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Our users love how Flash Space simplifies their processes and streamlines operations.
          </p>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-4">
        <div className="flex animate-marquee-left">
          {[...row1, ...row1, ...row1].map((r, i) => (
            <ReviewCard key={`r1-${i}`} review={r} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <div className="flex animate-marquee-right">
          {[...row2, ...row2, ...row2].map((r, i) => (
            <ReviewCard key={`r2-${i}`} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
};
