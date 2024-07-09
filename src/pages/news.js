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
              jumboTronClass="bg-cover bg-no-repeat bg-[url('/images/gtc.jpeg')] bg-gray-800 bg-blend-multiply"
              type="2"
            />
            <CardWithBackGroundImage
             heading="Zeri News"
             contents={[
                { image: "/images/zeri_capital_blue.png",
                  title: "Lake Basin Economic Forum.", 
                  },
                  { image: "/images/zeri_light_blue.png",
                  title: "Zeri Economic Forum.", 
                  },
                  { image: "/images/zeri_capital_gray.png",
                  title: "Prof. Thandika Makandawire Lecture Series.", 
                  },
              ]}
            />
            <HeroSectionWithImage 
          heading="Zeri News"
          headingClass="max-w-2xl mb-4 lg:text-5xl text-3xl font-extrabold font-heading tracking-tight text-accent leading-none md:text-5xl xl:text-6xl dark:text-white"
          description="We believe every Zerian has the capacity for excellence, integrity, passion and curiosity for service to the Entrepreneur and their businesses, so we leave no one behind htmlFor every day is day one"
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