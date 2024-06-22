import Footer from "@/components/footer";
import Contact from "@/components/contact"
import HeroSectionMap from "@/components/heros/HeroSectionMap";
import HeroWithNoImage from "@/components/heros/HeroWithNoImage";
import ContactForm from "@/components/forms/ContactForm";
import "../app/globals.css";
import Topnavigation from "@/components/navigation/TopNavigation";
import HeroSectionWithCards from "@/components/heros/HeroSectionWithCards";
import HeroSectionCTA from "@/components/heros/HeroSectionCTA";
import HeroSectionWithBackGroundImage from "@/components/heros/HeroSectionWithBackGroundImage";
export default function ContactUs() {
    return ( 
        <main className="">
            <Topnavigation/>
            <HeroSectionWithBackGroundImage
          heading="We'd love to hear from you."
          description="Do you want to start a project, join the team or just say hi? Get in touch through any of the channels below. We’d love to hear from you."
        />
            <ContactForm/>
            <HeroSectionWithCards heading="Corporate Emails"/>
            <HeroSectionMap/>
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