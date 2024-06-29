import Image from 'next/image'
export default function HeroSectionWithBlockImage(props) {
    return ( 


<div className="bg-white">
  <div className="relative isolate px-6 pt-14 lg:px-8">

    <div className=" py-4 sm:py-48 lg:py-4">
      <div className="">
        <h1 className="font-bold text-center text-4xl lg:text-5xl tracking-tight">{props.heading}</h1>
        <Image
      src={props.image}
      alt="Picture of the author"
      width={1200} 
      height={300}
      className='mx-auto'
    />
      </div>
    </div>

  </div>
</div>

        );
    }
    