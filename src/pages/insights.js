import Footer from "@/components/footer";
import Contact from "@/components/contact"
import Hero from "@/components/hero";
import HorizontalCard from "@/components/cards/horizontal_card";
import "../app/globals.css";
import Topnavigation from "@/components/navigation/TopNavigation";

export default function Insights() {
    return ( 
<div>
    <Topnavigation/>
    <Hero/>
    <HorizontalCard/>
    <Contact/>
    <Footer/> 
</div>   

     );
}