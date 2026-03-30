import { Star } from "lucide-react";

const reviews = [
  { name: "Vikram P.", role: "Freelance Web Developer", text: "Flash Space simplified every aspect of my business life. From tracking expenses to managing compliance — it's been years and I can't imagine working without it.", image: "/clients/client1.webp" },
  { name: "Sneha R.", role: "Manager at GlobeSync", text: "A game-changer for our business. Comprehensive workspace management tools helped us streamline processes and make better decisions.", image: "clients/client3.webp" },
  { name: "Amit K.", role: "CEO, Beta Technologies", text: "As someone new to scaling e-commerce, Flash Space has been invaluable. Its compliance tools helped me understand requirements and optimize operations.", image: "/clients/client2.webp" },
  { name: "Priya D.", role: "Founder, LuxeCart", text: "Multi-state VPOB set up in under 10 days. Now we sell in 12 states with zero compliance issues. The team is incredibly responsive.", image: "/clients/client4.webp" },
  { name: "Rahul M.", role: "COO, UrbanBazaar", text: "Managing GST across multiple states felt impossible. Flash Space handled everything — VPOB, filings, TDS recovery. We scaled from 3 to 18 states in two months.", image: "/clients/client5.webp" },
  { name: "Meera S.", role: "Founder, StyleKart", text: "We were stuck with single-state selling. Flash Space opened up 15 new states for us in just 3 weeks. Revenue jumped 4x within a quarter.", image: "/clients/client6.webp" },
  { name: "Arjun T.", role: "Director, FreshBasket", text: "The dedicated compliance manager is a lifesaver. They handle all government correspondence so we can focus on growing our organic food business.", image: "/clients/client7.webp" },
  { name: "Kavita N.", role: "CEO, TechGear India", text: "Best investment we made. GST registration in 2 days, VPOB addresses across 20 states, and pricing that actually makes sense for a bootstrapped startup.", image: "/clients/client8.webp" },
  { name: "Deepak R.", role: "Ops Head, QuickShip", text: "Compliance used to be our biggest bottleneck. Flash Space eliminated it entirely. We now onboard new states in under a week.", image: "/clients/client9.webp" },
  { name: "Anita J.", role: "Co-founder, PetWorld", text: "From a small Bangalore store to selling across India on Amazon and Flipkart. Flash Space made it possible with their hassle-free VPOB setup.", image: "/clients/client10.webp" },
  { name: "Suresh K.", role: "Founder, OrganicLife", text: "Setting up our physical presence in multiple cities was daunting until we found Flash Space. Their managed office solutions are top-notch.", image: "/clients/client11.jpg" },
  { name: "Riya M.", role: "Director, EduTech Plus", text: "The team's expertise in multi-state GST compliance is unmatched. They handled our expansion seamlessly.", image: "/clients/client12.jpg" },
  { name: "Karan S.", role: "CEO, LogiTrans", text: "Flash Space has been a strategic partner in our growth. Their VPOB services are efficient and cost-effective.", image: "/clients/client13.jpg" },
];

const row1 = reviews.slice(0, 7);
const row2 = reviews.slice(7);

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
    <section className="py-20 bg-muted/30 overflow-hidden">
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
