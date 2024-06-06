import Footer from "@/components/footer";
import Contact from "@/components/contact"
import HeroSectionMap from "@/components/heros/HeroSectionMap";
import HeroWithNoImage from "@/components/heros/HeroWithNoImage";
import ContactForm from "@/components/forms/ContactForm";
import "../app/globals.css";
import Topnavigation from "@/components/navigation/TopNavigation";
import HeroSectionWithCards from "@/components/heros/HeroSectionWithCards";
export default function ContactUs() {
    return ( 
        <main className="">
            <Topnavigation/>
            <HeroWithNoImage/>
            <ContactForm/>
            <HeroSectionWithCards/>
            <HeroSectionMap/>
            <Contact/>
            <Footer/>
        </main>    

     );
}