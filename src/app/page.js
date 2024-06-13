import Footer from "@/components/footer";
import HeroSectionWithCards from "@/components/heros/HeroSectionWithCards";
import HeroSectionWithImage from "@/components/heros/HeroSectionWithImage";
import Topnavigation from "@/components/navigation/TopNavigation";
import HeroSectionCTA from "@/components/heros/HeroSectionCTA"
import HeroWithNoImage from "@/components/heros/HeroWithNoImage";

export default function Home() {
  return (
    <main className="">
        <Topnavigation/>
        <HeroWithNoImage
          heading="We exist for the Entrepreneur"
          description="At Zeri our business is built on the founding philosophy of Transforming Africa. Our work is rooted in the idea that given opportunity, the entrepreneur and their businesses can act as agents of change and provide transformational solutions to Africa's unique challenges."
        />
        <HeroSectionWithImage 
          heading="Our Vision"
          subheading="To be Africa’s most exceptional and effective Investment Banking firm."
          description="We believe every Zerian has the capacity for excellence, integrity, passion and curiosity for service to the Entrepreneur and their businesses, so we leave no one behind for every day is day one"
          picture="/images/vision.png"
          />
        <HeroSectionWithImage 
          heading="Our Purpose"
          subheading="We exist for the Entrepreneur."
          description="We are deeply passionate about the success of the African Entrepreneur. Our commitment to supporting and helping them and the communities they operate in never wavers."
          picture="/images/vision.png"
         />
        <HeroSectionWithImage
           heading="Our Mission"
           subheading="To accelerate the growth of impactful businesses in Africa."
           description="We strongly believe that sustainable growth can lead to the advancement of African economies thereby solving the important twin issues of unemployment and underemployment. Our obsession therefore, is to midwife the growth and success of impactful Businesses in Africa."
           picture="/images/vision.png"
        />
        <HeroSectionWithCards
          heading="Our Values"
          subheading="In Pursuit of our shared vision, we aim to be EPIC."
        />
        <HeroSectionCTA
           heading="Unite By Ambition"
           subheading="As our clients work toward extraordinary achievements, they turn to us during times of important decision-making, raising capital, acquiring another company or selling a business. And as their trusted, and committed Investment Banking and financial advisor, we put our heart into every deal, helping them go further than they ever imagined."
           buttonText="Our Capabilities"
           type="1"
       />
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
