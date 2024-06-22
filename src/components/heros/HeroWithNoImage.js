import Image from 'next/image'
export default function HeroWithNoImage(props) {
    return ( 


<div className="bg-background">
  <div className="relative isolate px-6 pt-14 lg:px-8">
    {/* <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
    </div> */}
    <div className=" py-4 sm:py-48 lg:py-24">
      {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
        </div> text-2xl bg-red-500 font-bold font-heading tracking-tight text-gray-900 sm:text-6xl animate-slidein
      </div> */}
      <div className="">
        <h1 className="font-bold text-center text-5xl tracking-tight">{props.heading}</h1>
        <p className="mt-6 leading-8 ml-44 mr-32 text-gray-600 text-2xl font-body">{props.description}</p>
        <Image
      src={props.image}
      alt="Picture of the author"
      width={400} 
      height={300}
      className='mx-auto'
    />
        <p className="mt-6 leading-8 ml-44 mr-32 text-gray-600 text-2xl font-body">{props.description2}</p>
      </div>
    </div>
    {/* <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" ></div>
    </div> */}
  </div>
</div>

        );
    }
    