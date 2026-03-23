import { Button } from "@/components/ui/button";
import flashspaceLogo from "@/assets/flashspace-logo.png";

const footerLinks = {
  services: [
    { label: "Company Setup", href: "#what-we-do" },
    { label: "Payment Gateway", href: "#what-we-do" },
    { label: "Bank Account", href: "#what-we-do" },
    { label: "VAT Registration", href: "#what-we-do" },
    { label: "Logistics", href: "#what-we-do" },
  ],
  company: [
    { label: "Why Us", href: "#why-us" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Twitter", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] pt-16 lg:pt-24 pb-16 lg:pb-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-background tracking-tight leading-[1.12] max-w-md">
            Start selling online
            <br />
            in the UAE today
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-normal rounded-xl h-12 px-7">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-background/20 bg-background text-foreground hover:bg-background/90 font-normal rounded-xl h-12 px-7">
              Book a Call
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] py-14 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-16">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-xs font-semibold text-background/50 uppercase tracking-wider mb-5">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <img src={flashspaceLogo} alt="FlashSpace" className="h-8 w-auto brightness-0 invert opacity-80" />
            <p className="text-xs text-background/40 tracking-wide">© 2025 FlashSpace Technologies. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
