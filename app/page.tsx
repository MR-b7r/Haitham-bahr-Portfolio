import Contact from "@/components/contact";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {<FloatingNav navItems={navItems} />}
        <Hero />
        <Grid />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
