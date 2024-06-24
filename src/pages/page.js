import Footer from "@/components/footer";
import HeroSectionWithCards from "@/components/heros/HeroSectionWithCards";
import HeroSectionWithImage from "@/components/heros/HeroSectionWithImage";
import Topnavigation from "@/components/navigation/TopNavigation";
import HeroSectionCTA from "@/components/heros/HeroSectionCTA"
import HeroWithNoImage from "@/components/heros/HeroWithNoImage";
import HeroSectionWithCardsAndLogo from "@/components/heros/HeroSectionWithCardsAndLogo";
import clipRule from "@/components/cards/clipRule";
import CardWithImage from "@/components/cards/CardWithImage";

export default function Home() {
  return (
    <main className="bg-white">
        <Topnavigation/>
        <HeroWithNoImage
          heading="We exist htmlFor the Entrepreneur"
          description="At Zeri our business is built on the founding philosophy of Transforming Africa. Our work is rooted in the idea that given opportunity, the entrepreneur and their businesses can act as agents of change and provide transformational solutions to Africa's unique challenges."
          description2="Our goal is to be the firm of choice htmlFor clients with respect to their most challenging Capital Taising needs, most significant M&A transactions, critical Debt Advisory & Structured Finance, and most important Project & Infrastructure Finance needs."
          image="/images/zeri_logo_v3.png"
        />
        <HeroSectionWithImage 
          heading="Our Vision"
          subheading="To be Africa’s most exceptional and effective Investment Banking firm."
          description="We believe every Zerian has the capacity htmlFor excellence, integrity, passion and curiosity htmlFor service to the Entrepreneur and their businesses, so we leave no one behind htmlFor every day is day one"
          picture="/images/vision.png"
          />
        <HeroSectionWithImage 
          heading="Our Purpose"
          subheading="We exist htmlFor the Entrepreneur."
          description="We are deeply passionate about the success of the African Entrepreneur. Our commitment to supporting and helping them and the communities they operate in never wavers."
          picture="/images/vision.png"
         />
        <HeroSectionWithImage
           heading="Our Mission"
           subheading="To accelerate the growth of impactful businesses in Africa."
           description="We strongly believe that sustainable growth can lead to the advancement of African economies thereby solving the important twin issues of unemployment and underemployment. Our obsession therefore, is to midwife the growth and success of impactful Businesses in Africa."
           picture="/images/vision.png"
        />
        <HeroSectionWithCardsAndLogo
            heading="Our Values"
            subheading1="In Pursuit of our shared vision, we aim to be EPIC."
            sectionClass="bg-white"
            cardClassHeading="mt-4 text-3xl font-bold ml-12 text-gray-700 text-black text-left font-heading"
            cardClassSubHeading="mt-1 text-left mx-12 text-xl text-black"
            cardClassBackground="mt-8  bg-[url('/images/card_background_v2.png')] grid grid-cols-1 gap-48 md:grid-cols-2 lg:grid-cols-2"
            contents={[
              {
                title: "Excellence", 
                subheading: "We take pride in our work and bring A-game in all our interactions. We encourage rigorous work ethnic and never settle htmlFor anything but the best.Our work defines who we are."
                },
                {      
                  title: "Passion", 
                  subheading: "This is the collective energy that drives us forward.We value people who go farther than the distance, apply their unique talents to the task at hand, and with clarity, intention and grit."
                },
                { 
                  title: "Integrity", 
                  subheading: "We are honest, transparent, and committed to do what is best htmlFor our clients and company.Integrity is the  defining quality of our team and work."
                },
                { 
                  title: "Curiosity", 
                  subheading: "We seek out knowledge, cultivate our intuition, and always want to understand hidden connections and meetings.Whatever it takes to learn from different perspectives."
                },
            ]}
      />
        <HeroSectionCTA
           heading="Unite By Ambition"
           subheading="As our clients work toward extraordinary achievements, they turn to us during times of important decision-making, raising capital, acquiring another company or selling a business. And as their trusted, and committed Investment Banking and financial advisor, we put our heart into every deal, helping them go further than they ever imagined."
           buttonText="Our Capabilities"
           type="1"
           backGroundColor="bg-white"
       />
       <CardWithImage
                heading="Latest News & Insights"
                sectionClass="bg-accent py-20"
                classHeading="text-5xl text-center text-white font-bold font-heading text-accent md:text-5xl"
                callToActionClass="flex space-x-6 invisible"
                gridClass="mt-8 mx-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                contents={
                  [
                      { image: "/images/vision.png",
                        name: "Zeri Capital inks deal with Safaricom", 
                        title: "25 Apr 2025", 
                        social_media:{
                          linkedin: "https://www.linkedin.com/in/ronaldouma/"} 
                        },
                        { image: "/images/vision.png",
                        name: "One on one interview with the CEO, Ronald Ouma", 
                        title: "25 Apr 2025", 
                        social_media:{
                          linkedin: "https://www.linkedin.com/in/ronaldouma/"} 
                        },
                        { image: "/images/vision.png",
                        name: "2023 Year in Review", 
                        title: "25 Apr 2025", 
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
    </main>
  );
}
