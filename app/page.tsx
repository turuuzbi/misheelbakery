import About from "@/components/About";
import Contact from "@/components/Contact";
import CustomCakeForm from "@/components/CustomCakeForm";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import Hero from "@/components/Hero";
import InstagramGrid from "@/components/InstagramGrid";
import { MenuPreview } from "@/components/MenuTabs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCarousel />
      <MenuPreview />
      <CustomCakeForm />
      <About />
      <InstagramGrid />
      <Contact />
    </>
  );
}
