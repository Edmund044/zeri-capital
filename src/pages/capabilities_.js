import Topnavigation from "@/components/navigation/TopNavigation";
import Footer from "@/components/footer";
import "../app/globals.css";
import HeroSectionWithBackGroundImage from "@/components/heros/HeroSectionWithBackGroundImage";
import HeroSectionCTA from "@/components/heros/HeroSectionCTA";
import HeroWithVideo from "@/components/heros/HeroWithVideo";
import HeroWithNoImage from "@/components/heros/HeroWithNoImage";
import HeroSectionWithText from "@/components/heros/HeroSectionWithText";
export default function Capabilities() {
    return ( 
        <div className="bg-white">
        <Topnavigation/>
        <HeroSectionWithBackGroundImage
      heading="Advising Ambitious"
      description="We advise Companies, Governements, Investors, and Fund managers on their most important fianancial stategic matters,s erving as trusted advisor whose sole mission is to ensure the best resukts for their clients."
      jumboTronClass="bg-cover bg-no-repeat bg-[url('/images/gtc.jpeg')] bg-gray-800 bg-blend-multiply"
    />
            <HeroSectionWithText
          heading="Capital Raising"
          description="Raising capital is a balancing act. And at every step of the process, we work with our clients to assess the funding requirements and determine which form of capital are suitable for the business. Our team leverages long-serving regional relationships with private equity, family offices, and large corporates, to source smart capital solutions for our clients.  The team’s capabilities are fully integrated with our global networks, ensuring marketing efforts have the broadest possible reach. \sss"
          lists={['Our bespoke capital-raise strategies prioritise your goals by seeking investors whose intentions align with yours — not just their offers.','Our investor network spans the globe; raise funds from various sources, and grow and expand your business into new markets.','Our specialists are highly experienced at raising equity and will ensure your business interests are well protected during negotiations.']}
        />
            <HeroWithVideo
        video="/images/vision.png"
        />
            <HeroSectionCTA
           heading="Commitment makes all the diffrence"
           buttonText="Get in touch"
           type="1"
           backGroundColor="bg-white"
           subheading="We are determined to help ambitious entrepreneurs, and growing companies reach their full potential."
       />
        <Footer/>
        </div>
    )
}