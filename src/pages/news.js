import Footer from "@/components/footer";
import Contact from "@/components/contact"
import CardWithImage from "@/components/cards/card_with_image";
import HeroSectionWithImage from "@/components/heros/HeroSectionWithImage";
import Topnavigation from "@/components/navigation/TopNavigation";
import "../app/globals.css";

export default function news() {
    return ( 
        <main className="">
            <Topnavigation/>
            <HeroSectionWithImage/>
            <CardWithImage/>
            <Contact/>
            <Footer/>
        </main>    

     );
}