import Footer from "@/components/footer";
import Contact from "@/components/contact"
import HeroSectionMap from "@/components/heros/HeroSectionMap";
import HeroWithNoImage from "@/components/heros/HeroWithNoImage";
import ContactForm from "@/components/forms/ContactForm";
import "../app/globals.css";
import Topnavigation from "@/components/navigation/TopNavigation";
import HeroSectionWithCards from "@/components/heros/HeroSectionWithCards";
import HeroSectionCTA from "@/components/heros/HeroSectionCTA";
export default function ContactUs() {
    return ( 
        <main className="">
            <Topnavigation/>
            <HeroWithNoImage
          heading="We'd love to hear from you."
          description="Do you want to start a project, join the team or just say hi? Get in touch through any of the channels below. We’d love to hear from you."
        />
            <ContactForm/>
            <HeroSectionWithCards heading="Corporate Emails"/>
            <HeroSectionMap/>
            <HeroSectionCTA
                heading="Stay Curious"
                subheading="Sign up to get valuable insights and thought leadership that empowers your decision making."
                buttonText="Let's learn"
                type="2"
       />
            <Footer/>
        </main>    

     );
}