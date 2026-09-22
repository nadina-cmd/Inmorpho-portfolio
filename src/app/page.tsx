import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CaseGrid from "@/components/CaseGrid";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-[var(--background)] text-[var(--foreground)]">
      <Preloader />
      <Nav />
      <Hero />
      <CaseGrid />
      <Footer />
    </div>
  );
}
