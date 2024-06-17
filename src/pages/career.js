import Footer from "@/components/footer";
import "../app/globals.css";
import Topnavigation from "@/components/navigation/TopNavigation";
import HeroWithVideo from "@/components/heros/HeroWithVideo";
import HeroSectionCTA from "@/components/heros/HeroSectionCTA";
import HeroSectionMasonry from "@/components/heros/HeroSectionMasonry";
import HeroSectionWithBackGroundImage from "@/components/heros/HeroSectionWithBackGroundImage";
import HeroSectionWithCardsAndLogo from "@/components/heros/HeroSectionWithCardsAndLogo";
export default function Career() {
  return (
  <div className="bg-white">
    <Topnavigation/>


    <HeroSectionWithBackGroundImage
      heading="Transform Your Future"
      description="At Zeri, we provide great opportunities for the exceptionally talented individuals desiring to build their future in a culture that values excellence, teamwork and passion while rewarding individual achievements.We value and cherish every Zerian."
    />

    <HeroWithVideo
     video="/images/vision.png"
     description="We are a team of exceptional people who are driven to deliver exceptional results and are absolutely excited by the opportunity of accelerating the growth of impactful businesses in Africa."
    />
    <HeroSectionWithCardsAndLogo
      heading="Our Culture is about Our People"
      subheading1="The foundation of our culture is built on our core values.These values serve as the bedrock of our organization, inspiring us to excel and uphold the highest standards of integrity,innovation,and client satisfaction."
      subheading2="The Zerian values not only define our culture but also form the essence of why we do wht we do - To exist for th entrepreneur and accelerate the growth of Africa's most business."
      />
    <HeroSectionMasonry
      heading="A Workplace For Everyone"
      subheading1="At Zeri you will feel welcomed and valued.We are always looking for exceptional and qualified individuals who are ready to make an impact on our firm, and clients."
   
    />
    <HeroSectionCTA
           heading="Your Growth Matters"
           buttonText="GET IN TOUCH"
           type="1"
           backGroundColor="bg-gray-100"
       />
    <Footer/> 
  </div>  
  );
}
