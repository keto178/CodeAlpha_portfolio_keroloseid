import Hero from "@/components/sections/Hero/Hero";
import Project from "@/components/sections/ProjectsSection/Project";
import AboutSection from "@/components/sections/AboutSection/AboutSection";
import BlogSection from "@/components/sections/BlogSection/BlogSection";
import ContactSection from "@/components/sections/ContactSection/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Project />
      <BlogSection />
      <ContactSection />
    </>
  );
}
