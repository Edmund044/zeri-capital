import Footer from "@/components/footer";
import "../app/globals.css";
import Topnavigation from "@/components/navigation/TopNavigation";
import HeroSectionWithBackGroundImage from "@/components/heros/HeroSectionWithBackGroundImage";
import CardWithBackGroundImage from "@/components/cards/CardWithBackGroundImage";
import HeroWithVideo from "@/components/heros/HeroWithVideo";
import HeroSectionWithCardsAndLogo from "@/components/heros/HeroSectionWithCardsAndLogo";
import HeroSectionCTA from "@/components/heros/HeroSectionCTA";
import HeroSectionWithBlockImage from "@/components/heros/HeroSectionWithBlockImage";
import CardWithImage from "@/components/cards/CardWithImage";
import HeroSectionHorizontalScrollCard from "@/components/heros/HeroSectionHorizontalScrollCard";
import HeroSectionImageInGrid from "@/components/heros/HeroSectionImageInGrid";
import Image from 'next/image'
export default function Capabilities() {
    return ( 
        <div className="bg-white">
        <Topnavigation/>
        <HeroSectionWithBackGroundImage
              heading="Advising the ambitious"
              description="We advise Companies, Governements, Investors, and Fund managers on their most important fianancial stategic matters,s erving as trusted advisor whose sole mission is to ensure the best resukts for their clients."
              buttonText="Our Capabilities"
              jumboTronClass="bg-cover bg-no-repeat bg-[url('/images/gtc.jpeg')] bg-gray-800 bg-blend-multiply"
            />
        <CardWithBackGroundImage
            heading="I.INVESTMENT BANKING"
            contents={[
                { image: "/images/zeri_capital_blue.png",
                  title: "Capital raising.", 
                  },
                  { image: "/images/zeri_light_blue.png",
                  title: "Mergers & acquisition.", 
                  },
                  { image: "/images/zeri_capital_gray.png",
                  title: "Debt & Structured Finance.", 
                  },
                  { image: "/images/zeri_light_blue.png",
                  title: "Restructuring.", 
                  },
                  { image: "/images/zeri_capital_gray.png",
                  title: "Sovereign Advisory.", 
                  },
                  { image: "/images/zeri_capital_blue.png",
                  title: "Private Equity Advisory.", 
                  },
              ]}
        />
        <CardWithBackGroundImage
            heading="II.FINANCIAL ADVISORY"
            contents={[
                { image: "/images/zeri_capital_gray.png",
                  title: "Financial Modelling and Analysis.", 
                  },
                  { image: "/images/zeri_capital_blue.png",
                  title: "Valuation Analysis.", 
                  },
                  { image: "/images/zeri_light_blue.png",
                  title: "Due Diligence: Financial & Commercial.", 
                  },
                  { image: "/images/zeri_capital_blue.png",
                  title: "Strategy & Growth.", 
                  },
                  { image: "/images/zeri_light_blue.png",
                  title: "Start-Up Advisory.", 
                  },
              ]}
        />
        <HeroSectionHorizontalScrollCard
          heading="Industries"
          subheading="We are sector agnostic though largely provide advice and understanding in sectors that have high imapct:"
          description="We are deeply passionate about the success of the African Entrepreneur. Our commitment to supporting and helping them and the communities they operate in never wavers."
          picture="/images/money.png"
          sectionClass="bg-accent text-white dark:bg-gray-900 lg:py-4"
          headingClass="max-w-2xl mb-4 mx-24 text-5xl font-extrabold font-heading tracking-tight text-accent leading-none md:text-5xl xl:text-6xl dark:text-white"
          cardHeading="Financial Services"
          cardHeadingClass="text-4xl font-extrabold text-white"
        />
        <HeroWithVideo
        video="/images/vision.png"
        />
        <HeroSectionWithCardsAndLogo
      heading="Creating value that endures for the long term"
      subheading1="We understand what it takes to build strong foundations, create growth and generate results. We are committed to ensuring our clients' long-term success."
      sectionClass="bg-accent text-white"
      cardClassHeading="mt-4 text-3xl font-bold ml-12 text-gray-700 text-white text-center font-heading"
      cardClassSubHeading="mt-1 text-center mx-12 text-xl text-white"
      cardClassBackground="mt-8  bg-[url('/images/card_background10.png')] grid grid-cols-1 gap-48 md:grid-cols-2 lg:grid-cols-2"
      contents={[
        {
          title: "$6.3B+", 
          subheading: "In transactions successfully structured and advised."
          },
          {      
            title: "950+", 
            subheading: "Investor Relations, including Institutional, Family offices, and Sovereign Funds, who invest $ 1 M – $ 300 M per commitment."
          },
          { 
            title: "540+", 
            subheading: "Engagements completed to date."
          },
          { 
            title: "17+", 
            subheading: "Industries"
          },
      ]}
      />
          <div className="grid px-4 py-8 mx-auto bg-white xl:gap-0 lg:py-16 lg:grid-cols-12">

                    <div  className="lg:col-span-6 lg:px-auto ">
                        
                        <h1 className="font-bold text-center text-5xl tracking-tight">Commitments by Ticket Size</h1>
                    <Image
                              src="/images/commitment1.png"
                              alt="Picture of the author"
                              width={1000} 
                              height={400}
                              />
                
                    </div>
                    <div  className="lg:col-span-6 lg:px-auto ">
                        
                        <h1 className="font-bold text-center text-5xl tracking-tight">Commitments by Investor Type</h1>
                    <Image
                              src="/images/commitment21.png"
                              alt="Picture of the author"
                              width={600} 
                              height={900}
                              className="mt-2"
                              />
                
                    </div>
                    <div  className="lg:col-span-6 lg:px-auto ">
                        
                        <h1 className="font-bold text-center text-5xl tracking-tight">Companies we work with</h1>
                    <Image
                              src="/images/commitment3.png"
                              alt="Picture of the author"
                              width={1000} 
                              height={400}
                              />
                
                    </div>
                    <div  className="lg:col-span-6 lg:px-auto ">
                        
                        <h1 className="font-bold text-center text-5xl tracking-tight">Transaction Focus</h1>
                    <Image
                              src="/images/commitment4.png"
                              alt="Picture of the author"
                              width={518} 
                              height={400}
                              className="ml-16"
                              />
                
                    </div>


    </div>
      
      <HeroSectionWithBlockImage
        heading="Our Footprint"
        image="/images/footprint.png"
      />
        <HeroSectionCTA
           heading="Your Success is our legacy"
           buttonText="Let's do it"
           type="1"
           backGroundColor="bg-gray-100"
           subheading="Clients come to us for advice at all stages of their business.Raisinf capital,creating acquisition plans,selling a company and many more. Whatever your most important challenge might be, our investment banking and fianancial advisory capabilities always come with Excellence, Passion, Intergrity and Curiosity for the work.That is how we help you achieve the extraordinary and be impactful."
       />
        <Footer/> 
        </div>
     );
}