import Footer from "@/components/footer";
import HorizontalCard from "@/components/cards/horizontal_card";
import "../app/globals.css";
import Topnavigation from "@/components/navigation/TopNavigation";
import HeroSectionCTA from "@/components/heros/HeroSectionCTA";
import HeroSectionWithBackGroundImage from "@/components/heros/HeroSectionWithBackGroundImage";

export default function Insights() {
    return ( 
<div className="bg-white">
    <Topnavigation/>
    <HeroSectionWithBackGroundImage
        heading="Insights"
        description="At Zeri our business is built on the founding philosophy of Transforming Africa. Our work is rooted in the idea that given opportunity, the entrepreneur and their businesses can act as agents of change and provide transformational solutions to Africa's unique challenges."
        jumboTronClass="bg-cover bg-no-repeat font-heading bg-[url('/images/gtc.jpeg')] bg-gray-800 bg-blend-multiply"
        type="2"
    />
    <HorizontalCard/>
    <HeroSectionCTA
           heading="Stay Curious"
           subheading="Sign up to get valuable insights and thought leadership that empowers your decision making."
           buttonText="Let's learn"
           type="2"
           backGroundColor="bg-white font-heading"
       />
    <Footer/> 
</div>   

     );
}