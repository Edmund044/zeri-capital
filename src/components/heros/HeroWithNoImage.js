import Image from 'next/image'
export default function HeroWithNoImage(props) {
    return ( 


<div className="bg-cover bg-no-repeat bg-[url('/images/singapore2.jpg')] bg-gray-600 bg-blend-multiply">
  <div className="relative isolate px-6 lg:px-8">
    <div className="py-4 sm:py-48 lg:py-56">
      <div className="">
        <h1 className="font-bold font-heading text-white text-center mb-6 text-4xl lg:text-5xl tracking-tight">{props.heading}</h1>
        <p className="mb-6 font-body text-white ml-2 text-xl lg:text-3xl lg:mb-8">{props.description}</p>
        {/* <Image
      src={props.image}
      alt="Picture of the author"
      width={400} 
      height={300}
      className='mx-auto'
    /> */}
        {/* <p className="mb-6 font-body ml-2 text-xl lg:text-3xl lg:mb-8">{props.description2}</p> */}
      </div>
    </div>
  </div>
</div>

        );
    }
    