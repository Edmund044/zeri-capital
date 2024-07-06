'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const values = [
    { image: "/images/vision.png",
      overline: "MARKET TRENDS",
      name: "Insights title goes here", 
      date: "28 May 2023", 
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid."
      },]

export default function HeroSectionWithVerticalCardsAndLogo(props) {
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

  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
    {
              props.contents.map((value,index,array)=>{
                return (
                    <div className="mb-8">
        <h2 className={props.cardClassHeading}>{value.title}</h2>
        <p className={props.cardClassSubHeading}>{value.subheading}</p>
                  </div>
                )})}
    </div>
    <div className="lg:mt-0 lg:col-span-5 lg:flex">
    {/* <Image
      src="/images/zeri_logo_v4.jpeg"
      alt="Picture of the author"
      width={400} 
      height={300}
    /> */}
     <img className="rounded-none" src="/images/zeri_logo_v4.jpeg" alt=""></img>
    </div>                
</div>

  {/* <div className={props.cardClassBackground}>
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

  </div> */}
</div>
</section>
    )}
