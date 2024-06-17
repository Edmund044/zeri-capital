'use client'
import { useRouter } from 'next/navigation'
export default function HeroSectionWithCardsAndLogo(props) {
  const contents = [
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
  ];
  const router = useRouter()
    return ( 
<section className="bg-gray-100">
<div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-24">
  <div className="text-center">
    <h1 className=" mb-4 text-4xl font-extrabold font-heading md:text-5xl xl:text-5xl text-center">{props.heading}</h1>

    <p className="mb-6 font-body ml-2 text-3xl lg:mb-8 ">
      {props.subheading1}
    </p>
    <p className="mb-6 font-body ml-2 text-3xl lg:mb-8 ">
      {props.subheading2}
    </p>
  </div>

  <div className="mt-8  bg-[url('/images/card_background10.png')]  bg-accent grid grid-cols-1 gap-48 md:grid-cols-2 lg:grid-cols-2">
  {
              contents.map((content,index,array)=>{
                return (
                  <a
                  key={index}
                  className="block mt-4 mb-4 mx-4"
                  href="#"
                >
            
                  <h2 className="mt-4 text-3xl font-bold ml-8 text-gray-700 text-white text-center font-heading">{content.title}</h2>
            
                  <p className="mt-1 text-center mx-12 text-xl text-white">
                   {content.subheading}
                  </p>
                </a>

)

})
}

  </div>
</div>
</section>
    )}
