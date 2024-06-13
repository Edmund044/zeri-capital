import Footer from "@/components/footer";
import Topnavigation from "@/components/navigation/TopNavigation";
import "../app/globals.css";
import HeroWithNoImage from "@/components/heros/HeroWithNoImage";
import HeroSectionCTA from "@/components/heros/HeroSectionCTA";
import CardWithImage from "@/components/cards/CardWithImage";
export default function Team() {
    return ( 
        <div className="bg-white">
            <Topnavigation/>
            <HeroWithNoImage
              heading="Relationships nurture success"
              description="Zerians are professionals who are purpose led and mission driven to accelerate the growth of Africa’s most impactful businesses. We value every Zerian for we believe they are our most important asset. "
            />
            <CardWithImage 
                content={
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
       />
            <Footer/>
        </div>

     );
}