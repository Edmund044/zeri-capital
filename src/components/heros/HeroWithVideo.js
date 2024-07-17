import Image from 'next/image'
export default function HeroWithVideo(props) {
    return ( 


<div className="bg-white">
  <div className="relative isolate px-6 pt-14 lg:px-8">
    <div className="lg:mx-20 py-4 sm:py-48 lg:py-24">

      <div className="">
        <h1 className="font-bold font-heading lg:text-5xl tracking-tight">{props.heading}</h1>
        <p className="mb-6 font-body text-xl lg:text-3xl lg:mb-8 ">{props.description}</p>
      </div>

      <video className="w-full" controls>
        <source src="/docs/videos/flowbite.mp4" type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>

    </div>
  </div>
</div>

        );
    }
    