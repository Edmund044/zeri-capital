'use client'
import { useRouter } from 'next/navigation'
export default function CardWithBackGroundImage(props) {
  
  const events = props.contents;
  const router = useRouter()
    return ( 
        <main className=" bg-background py-20">
          <h1 className="mb-4 text-4xl font-extrabold font-heading  text-accent  md:text-5xl xl:text-4xl dark:text-white text-center">{props.heading}</h1>
          <p className="mb-4 text-xl font-normal text-white md:text-5xl lg:text-xl">{props.subheading}</p>
          <div className="lg:mt-8 lg:px-24 lg:mx-24 mx-8 bg-background grid grid-cols-1 gap-8 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {
              events.map((event,index,array)=>{
                return (
                  <div key={index} className="rounded-xl relative"
                  onClick={() => router.push('/events_')}>
           <div className="absolute w-full h-full rounded-xl text-white">
              <p className="font-bold text-xl pt-8 pl-4 lg:pl-4 lg:pt-48">{event.title} </p>
              <button className="border ml-4 py-3 px-4 py-1 border-white bg-white text-black hover:bg-secondary hover:text-white border-none mx-2 absolute bottom-4">
              &rarr;
              </button>
            </div>
            <img
              className="max-h-[160px]  md:max-h-[400px] w-full object-cover rounded-xl"
              src={event.image}
              alt="/"
            ></img>
                  </div>

                )

              })
            }

          </div>
        </main>
        );
    }

