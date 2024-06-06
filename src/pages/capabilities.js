import Footer from "@/components/footer";
import "../app/globals.css";
import Topnavigation from "@/components/navigation/TopNavigation";
import HeroWithNoImage from "@/components/heros/HeroWithNoImage";
import HeroSectionWithImage from "@/components/heros/HeroSectionWithImage";
import HeroSectionWithCards from "@/components/heros/HeroSectionWithCards";
import MetricCard from "@/components/cards/MetricCards";

export default function Capabilities() {
    return ( 
        <div>
        <Topnavigation/>
        <HeroWithNoImage/>
        <HeroSectionWithImage/>
        <HeroSectionWithCards/>
        <MetricCard/>
        <HeroSectionWithImage/>
        <HeroSectionWithImage/>
        <HeroSectionWithImage/>
        <MetricCard/>
        <HeroWithNoImage/>
        <Footer/> 
        </div>
     );
}