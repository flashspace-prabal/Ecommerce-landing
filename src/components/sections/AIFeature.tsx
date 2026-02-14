import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play, Sparkles, Zap, Shield, BarChart3, Building2, Users, CalendarCheck, Briefcase } from "lucide-react";
import officeIllustrated from "@/assets/office-illustrated.jpg";
import workspaceCoworking from "@/assets/workspace-coworking.jpg";
import workspaceMeeting from "@/assets/workspace-meeting.jpg";
import workspaceDaypass from "@/assets/workspace-daypass.jpg";
import workspaceManaged from "@/assets/workspace-managed.jpg";

const navItems = [
  { id: "ai-platform", label: "AI Platform", icon: Sparkles },
  { id: "virtual-office", label: "Virtual Office", icon: Building2 },
  { id: "coworking", label: "Coworking", icon: Users },
  { id: "on-demand", label: "On Demand", icon: CalendarCheck },
  { id: "business-setup", label: "Business Setup", icon: Briefcase },
];

export const AIFeature = () => {
  const [activeSection, setActiveSection] = useState("ai-platform");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navItems.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top - 120) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveSection(closest.id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[220px_1fr] gap-8 lg:gap-16">
          {/* Left sticky navigation */}
          <div className="hidden lg:block">
            <div className="sticky top-32 space-y-1">
              {navItems.map((item, i) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground/50 hover:text-muted-foreground"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        isActive ? "bg-primary scale-125" : "bg-foreground/20 group-hover:bg-foreground/40"
                      }`}
                    />
                    <item.icon className={`w-4 h-4 transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-40 group-hover:opacity-60"}`} />
                    <span className={`text-sm tracking-wide transition-all duration-200 ${
                      isActive ? "font-bold" : "font-medium"
                    }`}>
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right content sections */}
          <div className="space-y-32">
            {/* === AI Platform === */}
            <div id="ai-platform" className="scroll-mt-28 space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden"
              >
                <img src={officeIllustrated} alt="Premium private office" className="w-full h-[400px] lg:h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span className="text-white/90 text-sm font-medium">AI-Powered</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight">
                    Flash. The #1 AI
                    <br />
                    <span className="text-white/70">for workspace management.</span>
                  </h2>
                </div>
              </motion.div>

              <div className="max-w-2xl">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Flash AI works with any workspace to handle even your most complex
                  requirements—from compliance documentation to smart access control,
                  across all your locations.
                </p>
                <Button variant="outline" size="lg" className="group border-primary/30 hover:bg-primary/5 font-semibold">
                  Learn more
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </div>
            </div>

            {/* === Virtual Office === */}
            <div id="virtual-office" className="scroll-mt-28 space-y-10">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
                  Virtual Office
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Establish your business presence in premium locations without the overhead.
                  Get a registered business address, mail handling, and professional credibility.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden">
                <img src={workspaceManaged} alt="Virtual office space" className="w-full h-[350px] lg:h-[420px] object-cover" />
              </motion.div>
              <div className="grid sm:grid-cols-3 gap-6">
                {["Business Address & GST Registration", "Mail & Courier Handling", "Meeting Room Access (on-demand)"].map((f, i) => (
                  <div key={i} className="rounded-xl bg-muted/40 border border-border p-5">
                    <Building2 className="w-5 h-5 text-primary mb-3" />
                    <p className="text-sm font-semibold text-foreground">{f}</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="lg" className="group border-primary/30 hover:bg-primary/5 font-semibold">
                Explore Virtual Office
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>

            {/* === Coworking === */}
            <div id="coworking" className="scroll-mt-28 space-y-10">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
                  Coworking
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Dedicated desks, private cabins, and fully-equipped coworking spaces
                  designed for focused productivity and collaboration.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden">
                <img src={workspaceCoworking} alt="Coworking space" className="w-full h-[350px] lg:h-[420px] object-cover" />
              </motion.div>
              <div className="grid sm:grid-cols-3 gap-6">
                {["Dedicated Seats & Private Cabins", "High-Speed Internet & Amenities", "Flexible Monthly Plans"].map((f, i) => (
                  <div key={i} className="rounded-xl bg-muted/40 border border-border p-5">
                    <Users className="w-5 h-5 text-primary mb-3" />
                    <p className="text-sm font-semibold text-foreground">{f}</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="lg" className="group border-primary/30 hover:bg-primary/5 font-semibold">
                Explore Coworking
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>

            {/* === On Demand === */}
            <div id="on-demand" className="scroll-mt-28 space-y-10">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
                  On Demand
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Day passes, meeting rooms, and team plans—book by the hour or by the day
                  with instant access across all locations.
                </p>
              </motion.div>
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden">
                  <img src={workspaceDaypass} alt="Day pass workspace" className="w-full h-[280px] object-cover" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-3xl overflow-hidden">
                  <img src={workspaceMeeting} alt="Meeting room" className="w-full h-[280px] object-cover" />
                </motion.div>
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                {["Day Pass from ₹200/day", "Meeting & Conference Rooms", "Team Plans for Hybrid Teams"].map((f, i) => (
                  <div key={i} className="rounded-xl bg-muted/40 border border-border p-5">
                    <CalendarCheck className="w-5 h-5 text-primary mb-3" />
                    <p className="text-sm font-semibold text-foreground">{f}</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="lg" className="group border-primary/30 hover:bg-primary/5 font-semibold">
                Explore On Demand
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>

            {/* === Business Setup === */}
            <div id="business-setup" className="scroll-mt-28 space-y-10">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
                  Business Setup
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  End-to-end company registration, GST filing, compliance documentation,
                  and legal support to get your business operational fast.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden bg-muted/30 border border-border p-8 lg:p-12">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "Company Registration", desc: "Pvt Ltd, LLP, OPC setup" },
                    { title: "GST Registration", desc: "Complete filing support" },
                    { title: "Compliance", desc: "Annual returns & audits" },
                    { title: "Legal Support", desc: "Contracts & agreements" },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <Briefcase className="w-6 h-6 text-primary mx-auto mb-3" />
                      <h4 className="text-sm font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              <Button variant="outline" size="lg" className="group border-primary/30 hover:bg-primary/5 font-semibold">
                Explore Business Setup
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
