import Image from "next/image";
import Footer from "@/components/footer";
import CardWithImage from "@/components/cards/CardWithImage"
import "../app/globals.css";
import Topnavigation from "@/components/navigation/TopNavigation";
import HeroWithNoImage from "@/components/heros/HeroWithNoImage";
import HeroSectionWithCards from "@/components/heros/HeroSectionWithCards";
import CTACard from "@/components/cards/CTACard";
export default function Career() {
  return (
  <div>
    <Topnavigation/>
    <HeroWithNoImage/>
    <HeroSectionWithCards/>
    <CardWithImage/>
    <CTACard/>
    <Footer/> 
  </div>  
  );
}
