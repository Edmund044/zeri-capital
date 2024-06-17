import ContactFormCareers from "@/components/forms/ContactFormCareers";
import "../app/globals.css";
import Footer from "@/components/footer";
import HeroSectionCTA from "@/components/heros/HeroSectionCTA";
import HeroSectionWithBackGroundImage from "@/components/heros/HeroSectionWithBackGroundImage";
import HeroWithNoImage from "@/components/heros/HeroWithNoImage";
import Topnavigation from "@/components/navigation/TopNavigation";

export default function Career_(){
    return (
        <div className="bg-white">
            <Topnavigation/>

            <HeroSectionWithBackGroundImage
      heading="Jitahidi Programme"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
      optio, eaque rerum! Provident similique accusantium nemo autem."
      type="1"
    />
            <ContactFormCareers/>
            <HeroSectionCTA
           heading="Your Growth Matters"
           buttonText="GET IN TOUCH"
           type="1"
           backGroundColor="bg-gray-100"
       />
            <Footer/>
        </div>
    )
}