import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const OnDemand = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20" />
      <Footer />
    </div>
  );
};

export default OnDemand;
