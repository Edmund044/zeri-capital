import Image from 'next/image'
export default function HeroWithNoImage(props) {
    return ( 


<div className="bg-background">
  <div className="relative isolate px-6 pt-14 lg:px-8">
    <div className=" py-4 sm:py-48 lg:py-24">
      <div className="">
        <h1 className="font-bold text-center text-5xl tracking-tight">{props.heading}</h1>
        <p className="mt-6 leading-8 lg:ml-44 lg:mr-32 text-gray-600 text-2xl font-body md:mx-12">{props.description}</p>
        <Image
      src={props.image}
      alt="Picture of the author"
      width={400} 
      height={300}
      className='mx-auto'
    />
        <p className="mt-6 leading-8 text-gray-600 text-2xl font-body lg:ml-44 lg:mr-32 md:mx-12">{props.description2}</p>
      </div>
    </div>
  </div>
</div>

        );
    }
    