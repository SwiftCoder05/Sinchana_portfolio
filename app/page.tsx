import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Reveal } from "@/components/Reveal";
import { TechStack } from "@/components/TechStack";

export default function HomePage() {
  return (
    <>
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <TechStack />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}
