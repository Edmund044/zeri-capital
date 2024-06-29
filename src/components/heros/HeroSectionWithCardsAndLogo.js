'use client'
import { useRouter } from 'next/navigation'
export default function HeroSectionWithCardsAndLogo(props) {
  const contents = props.contents
  const router = useRouter()
    return ( 
<section className={props.sectionClass}>
<div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-24">
  <div className="text-center">
    <h1 className=" mb-4 text-3xl lg:text-4xl font-extrabold font-heading md:text-5xl xl:text-5xl text-center">{props.heading}</h1>

    <p className="mb-6 font-body ml-2 text-xl lg:text-3xl lg:mb-8 ">
      {props.subheading1}
    </p>
    <p className="mb-6 font-body ml-2 text-xl lg:text-3xl lg:mb-8 ">
      {props.subheading2}
    </p>
  </div>

  <div className={props.cardClassBackground}>
  {
              contents.map((content,index,array)=>{
                return (
                  <a
                  key={index}
                  className="block mt-4 mb-4 lg:mx-4"
                  href="#"
                >
            
                  <h2 className={props.cardClassHeading}>{content.title}</h2>
            
                  <p className={props.cardClassSubHeading}>
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
