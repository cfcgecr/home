import Navbar from "../components/navbar";
import Hero from "../components/hero";
import SectionGreenCards from "@/components/section-green-cards";
import Projects from "@/components/project";
import WhyJoin from "@/components/why-join";
import "../styles/globals.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col items-center">
        <Hero />
        <SectionGreenCards />
        <Projects />
        <WhyJoin />
      </main>
    </>
  );
}
