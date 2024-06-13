import Footer from "@/components/footer";
import Contact from "@/components/contact"
import Hero from "@/components/hero";
import HorizontalCard from "@/components/cards/horizontal_card";
import "../app/globals.css";
import Topnavigation from "@/components/navigation/TopNavigation";
import HeroSectionCTA from "@/components/heros/HeroSectionCTA";
import HeroWithNoImage from "@/components/heros/HeroWithNoImage";

export default function Insights() {
    return ( 
<div className="bg-white">
    <Topnavigation/>
    <HeroWithNoImage
          heading="Insights"
          description="At Zeri our business is built on the founding philosophy of Transforming Africa. Our work is rooted in the idea that given opportunity, the entrepreneur and their businesses can act as agents of change and provide transformational solutions to Africa's unique challenges."
        />
    <HorizontalCard/>
    <HeroSectionCTA
           heading="Stay Curious"
           subheading="Sign up to get valuable insights and thought leadership that empowers your decision making."
           buttonText="Let's learn"
           type="2"
       />
    <Footer/> 
</div>   

     );
}