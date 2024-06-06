import Footer from "@/components/footer";
import HeroSectionWithCards from "@/components/heros/HeroSectionWithCards";
import HeroSectionWithImage from "@/components/heros/HeroSectionWithImage";
import Topnavigation from "@/components/navigation/TopNavigation";
import Contact from "@/components/contact"
import HeroWithNoImage from "@/components/heros/HeroWithNoImage";

export default function Home() {
  return (
    <main className="">
        <Topnavigation/>
        <HeroWithNoImage/>
        <HeroSectionWithImage/>
        <HeroSectionWithImage/>
        <HeroSectionWithImage/>
        <HeroSectionWithCards/>
        <Contact/>
        <Footer/>
    </main>
  );
}
