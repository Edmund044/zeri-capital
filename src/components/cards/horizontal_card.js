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
                    <a  key={index} onClick={() => router.push('/insights_')}>
                    <div className="grid mr-48  py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    
                        <div className="ml-48   lg:col-span-4">
                        <Image
                          src={newsList.image}
                          alt="Picture of the author"
                          width={400} 
                          height={600}
                        />
                        </div>
                        <div className="mr-48 ml-20 lg:mt-0  lg:col-span-8 ">
                        <div class="mb-8">
                          <p class="max-w-2xl mb-4 text-xl text-grey-dark flex items-center">
                          {newsList.overline}
                          </p>
                          <h3 class="text-black font-bold max-w-2xl mb-4 text-5xl mb-2">{newsList.name}</h3>
                          <p class="max-w-2xl mb-4 text-xl text-grey-dark flex items-center">
                          {newsList.date}
                          </p>
                          <p class="text-grey-darker text-base">
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

//         <main className="flex flex-col w-full bg-red-500">
//             <div class="max-w-md w-full flex-col lg:flex">
//   {/* <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
//   </div> */}
//   <Image
// src="/images/vision.png"
// alt="Picture of the author"
// width={400} 
// height={150}
// />
//   <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
//     <div class="mb-8">
//       <p class="text-sm text-grey-dark flex items-center">
//         <svg class="text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//           <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
//         </svg>
//         Members only
//       </p>
//       <div class="text-black font-bold text-xl mb-2">Can coffee make you a better developer?</div>
//       <p class="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
//     </div>
//     <div class="flex items-center">
//       {/* <img class="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink"></img> */}
//       <div class="text-sm">
//         <p class="text-black leading-none">Jonathan Reinink</p>
//         <p class="text-grey-dark">Aug 18</p>
//       </div>
//     </div>
//   </div>
// </div>
            
        

// <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-3xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//     <Image
//       src="/images/vision.png"
//       alt="Picture of the author"
//       width={300} 
//       height={300}
//     />
//     <div className="flex flex-col justify-between p-4 leading-normal">
//         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//     </div>
// </a>
// <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-3xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//     <Image
//       src="/images/vision.png"
//       alt="Picture of the author"
//       width={300} 
//       height={300}
//     />
//     <div className="flex flex-col justify-between p-4 leading-normal">
//         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//     </div>
// </a>
//         </main>
        );
    }
    

