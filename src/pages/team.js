import Footer from "@/components/footer";
import Topnavigation from "@/components/navigation/TopNavigation";
import "../app/globals.css";
import HeroWithNoImage from "@/components/heros/HeroWithNoImage";
import HeroSectionCTA from "@/components/heros/HeroSectionCTA";
import CardWithImage from "@/components/cards/CardWithImage";
import HeroSectionWithBackGroundImage from "@/components/heros/HeroSectionWithBackGroundImage";
export default function Team() {
    return ( 
        <div className="bg-white">
            <Topnavigation/>
            <HeroSectionWithBackGroundImage
              heading="Relationships nurture success"
              description="Zerians are professionals who are purpose led and mission driven to accelerate the growth of Africa’s most impactful businesses. We value every Zerian htmlFor we believe they are our most important asset. "
              jumboTronClass="bg-cover bg-no-repeat bg-[url('/images/team.jpeg')] bg-gray-800 bg-blend-multiply"
            />
            
            <CardWithImage
                gridClass="mt-8 mx-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                classHeading="text-5xl text-center font-bold font-heading text-accent md:text-5xl"
                contents={
                    [
                        { image: "/images/vision.png",
                          name: "Ronald Ouma", 
                          title: "Chief Executive Officer.", 
                          social_media:{
                            linkedin: "https://www.linkedin.com/in/ronaldouma/"} 
                          },
                          { image: "/images/vision.png",
                          name: "Ronald Ouma", 
                          title: "Chief Executive Officer.", 
                          social_media:{
                            linkedin: "https://www.linkedin.com/in/ronaldouma/"} 
                          },
                          { image: "/images/vision.png",
                          name: "Ronald Ouma", 
                          title: "Chief Executive Officer.", 
                          social_media:{
                            linkedin: "https://www.linkedin.com/in/ronaldouma/"} 
                          },
                          { image: "/images/vision.png",
                          name: "Ronald Ouma", 
                          title: "Chief Executive Officer.", 
                          social_media:{
                            linkedin: "https://www.linkedin.com/in/ronaldouma/"} 
                          },
                    
                      ]
                }
            />
            <HeroSectionCTA
                heading="Stay Curious"
                subheading="Sign up to get valuable insights and thought leadership that empowers your decision making."
                buttonText="Let's learn"
                type="2"
                backGroundColor="bg-white"
       />
            <Footer/>
        </div>

     );
}