'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
export default function HorizontalCard() {
    const router = useRouter()
    const newsLists = [
        { image: "/images/vision.png",
          overline: "MARKET TRENDS",
          name: "Insights title goes here", 
          date: "28 May 2023", 
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid."
          },
          { image: "/images/vision.png",
          overline: "MARKET TRENDS",
          name: "Insights title goes here", 
          date: "28 May 2023", 
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit "
          },
          { image: "/images/vision.png",
          overline: "MARKET TRENDS",
          name: "Insights title goes here", 
          date: "28 May 2023", 
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit "
          },
          { image: "/images/vision.png",
          overline: "MARKET TRENDS",
          name: "Insights title goes here", 
          date: "28 May 2023", 
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit "
          },    
         

    
      ];
    return ( 
        <main className="">

<section className="">
{
              newsLists.map((newsList,index,array)=>{
                return (
                    <a  key={index} className="cursor-pointer" onClick={() => router.push('/insights_')}>
                    <div className="grid mr-48  py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    
                        <div className="ml-48   lg:col-span-5">
                        <Image
                          src={newsList.image}
                          alt="Picture of the author"
                          width={400} 
                          height={600}
                        />
                        </div>
                        <div className="mr-24 ml-20 lg:mt-0  lg:col-span-7 ">
                        <div className="mb-8">
                          <p className="max-w-2xl mb-4 text-xl text-grey-dark flex items-center">
                          {newsList.overline}
                          </p>
                          <h3 className="text-black font-bold max-w-2xl mb-4 text-5xl mb-2">{newsList.name}</h3>
                          <p className="max-w-2xl mb-4 text-xl text-grey-dark flex items-center">
                          {newsList.date}
                          </p>
                          <p className="text-grey-darker text-base">
                          {newsList.body}
                          
                          </p>
                        </div>
                        </div>                
                    </div>
                    </a>

                )

              })
            }


</section>

        </main>

        );
    }
    

