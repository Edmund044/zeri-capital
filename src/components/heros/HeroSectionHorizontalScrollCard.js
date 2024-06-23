import Image from 'next/image'
export default function HeroSectionHorizontalScrollCard(props) {
    return ( 


<div className="flex overflow-x-auto">
<div className="flex flex-nowrap grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"> 
    <div className="mr-auto place-self-center lg:col-span-6">
        <h1 className={props.headingClass}>{props.heading}</h1>
        <p className="max-w-2xl text-2xl mb-6 font-body lg:mb-8">{props.subheading} </p>
        <p className="max-w-2xl text-2xl mb-6 font-body lg:mb-8">{props.description}</p>
    </div>  
    <div className="lg:mt-0 lg:col-span-6 lg:flex">
    <Image
      src={props.picture}
      alt="Picture of the author"
      width={400} 
      height={300}
    />
    </div>             
</div>
<div className="flex flex-nowrap grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"> 
    <div className="mr-auto place-self-center lg:col-span-6">
        <h1 className={props.headingClass}>{props.heading}</h1>
        <p className="max-w-2xl text-2xl mb-6 font-body lg:mb-8">{props.subheading} </p>
        <p className="max-w-2xl text-2xl mb-6 font-body lg:mb-8">{props.description}</p>
    </div>  
    <div className="lg:mt-0 lg:col-span-6 lg:flex">
    <Image
      src={props.picture}
      alt="Picture of the author"
      width={400} 
      height={300}
    />
    </div>             
</div>
<div className="flex flex-nowrap grid  px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"> 
    <div className="mr-auto place-self-center lg:col-span-6">
        <h1 className={props.headingClass}>{props.heading}</h1>
        <p className="max-w-2xl text-2xl mb-6 font-body lg:mb-8">{props.subheading} </p>
        <p className="max-w-2xl text-2xl mb-6 font-body lg:mb-8">{props.description}</p>
    </div>  
    <div className="lg:mt-0 lg:col-span-6 lg:flex">
    <Image
      src={props.picture}
      alt="Picture of the author"
      width={400} 
      height={300}
    />
    </div>             
</div>
</div>

        );
    }