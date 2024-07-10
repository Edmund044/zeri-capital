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
      jumboTronClass="bg-cover bg-no-repeat bg-[url('/images/career.jpeg')] bg-gray-800 bg-blend-multiply"
      type="2"
    />

    <HeroWithVideo
     video="/images/vision.png"
     description="We are a team of exceptional people who are driven to deliver exceptional results and are absolutely excited by the opportunity of accelerating the growth of impactful businesses in Africa."
    />
    <HeroSectionWithCardsAndLogo
      heading="Our Culture is about Our People"
      subheading1="The foundation of our culture is built on our core values.These values serve as the bedrock of our organization, inspiring us to excel and uphold the highest standards of integrity,innovation,and client satisfaction."
      subheading2="The Zerian values not only define our culture but also form the essence of why we do wht we do - To exist for th entrepreneur and accelerate the growth of Africa's most business."
      classHeading="mb-4 text-3xl lg:text-4xl font-extrabold font-heading md:text-5xl xl:text-5xl text-center"
      classSubHeading1="mb-6 font-body ml-2 text-xl lg:text-3xl lg:mb-8 "
      sectionClass="bg-gray-100"
      cardClassHeading="mt-4 text-3xl font-bold ml-12 text-gray-700 text-white text-center font-heading"
      cardClassSubHeading="mt-1 text-center lg:mx-12 text-xl text-white"
      cardClassBackground="mt-8  bg-[url('/images/card_background10.png')] grid grid-cols-1 lg:gap-48 md:grid-cols-2 lg:grid-cols-2"
      contents={[
        {
          title: "Excellence", 
          subheading: "We take pride in our work and bring A-game in all our interactions. We encourage rigorous work ethnic and never settle for anything but the best.Our work defines who we are."
          },
          {      
            title: "Passion", 
            subheading: "This is the collective energy that drives us forward.We value people who go farther than the distance, apply their unique talents to the task at hand, and with clarity, intention and grit."
          },
          { 
            title: "Integrity", 
            subheading: "We are honest, transparent, and committed to do what is best for our clients and company.Integrity is the  defining quality of our team and work."
          },
          { 
            title: "Curiosity", 
            subheading: "We seek out knowledge, cultivate our intuition, and always want to understand hidden connections and meetings.Whatever it takes to learn from different perspectives."
          },
      ]}
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
