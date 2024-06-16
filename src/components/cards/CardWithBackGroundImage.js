'use client'
import { useRouter } from 'next/navigation'
export default function CardWithBackGroundImage(props) {
  
  const events = [
    { image: "/images/zeri_capital_blue.png",
      title: "Lake Basin Economic Forum.", 
      },
      { image: "/images/zeri_light_blue.png",
      title: "Zeri Economic Forum.", 
      },
      { image: "/images/zeri_capital_gray.png",
      title: "Prof. Thandika Makandawire Lecture Series.", 
      },
  ];
  const router = useRouter()
    return ( 
        <main className=" bg-background py-20">
          <h1 className="mb-4 text-5xl font-extrabold font-heading  text-accent  md:text-5xl xl:text-6xl dark:text-white text-center">Zeri Events</h1>
          <div className="mt-8 px-24 mx-24 bg-background grid grid-cols-3 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {
              events.map((event,index,array)=>{
                return (
                  <div key={index} className="rounded-xl relative"
                  onClick={() => router.push('/events_')}>
           <div className="absolute w-full h-full rounded-xl text-white">
              <p className="font-bold text-xl pl-4 pt-72">{event.title} </p>
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

