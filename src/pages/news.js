import Footer from "@/components/footer";
import Contact from "@/components/contact"
import CardWithImage from "@/components/cards/CardWithImageNews";
import HeroSectionWithImage from "@/components/heros/HeroSectionWithImage";
import Topnavigation from "@/components/navigation/TopNavigation";
import "../app/globals.css";
import HeroSectionCTA from "@/components/heros/HeroSectionCTA";
import CardWithBackGroundImage from "@/components/cards/CardWithBackGroundImage";
import HeroSectionWithBackGroundImage from "@/components/heros/HeroSectionWithBackGroundImage";

export default function news() {
    return ( 
        <main className="bg-white">
            <Topnavigation/>
            <HeroSectionWithBackGroundImage
              heading="News & Events"
            />
            <CardWithBackGroundImage/>
            <HeroSectionWithImage 
          heading="Zeri News"
          description="We believe every Zerian has the capacity for excellence, integrity, passion and curiosity for service to the Entrepreneur and their businesses, so we leave no one behind for every day is day one"
          picture="/images/vision.png"
          />
            <CardWithImage/>
            <HeroSectionCTA
           heading="Stay Updated"
           subheading="On the latest thought leadership and news from Zeri, please subscribe."
           buttonText="Let's learn"
           type="2"
           backGroundColor="bg-gray-100"
       />
            <Footer/>
        </main>    

     );
}