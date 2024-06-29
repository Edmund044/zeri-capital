import Image from 'next/image'
export default function HeroSectionWithImage(props) {
    return ( 

<section className={props.sectionClass}>
<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className={props.headingClass}>{props.heading}</h1>
        <p className="max-w-2xl lg:text-2xl  mb-6 font-body lg:mb-8">{props.subheading} </p>
        <p className="max-w-2xl lg:text-2xl mb-6 font-body lg:mb-8">{props.description}</p>
    </div>
    <div className="lg:mt-0 lg:col-span-5 lg:flex">
    <Image
      src={props.picture}
      alt="Picture of the author"
      width={400} 
      height={300}
    />
    </div>                
</div>
</section>
        );
    }


