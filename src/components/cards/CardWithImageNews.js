'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
export default function CardWithImage(props) {
  const router = useRouter()
  const teamMembers = [
    { image: "/images/vision.png",
      name: "Zeri Capital inks deal with Safaricom.", 
      title: "25 Apr 2025", 
      social_media:{
        linkedin: ""} 
      },
      { image: "/images/vision.png",
      name: "Zeri Capital inks deal with Safaricom.", 
      title: "25 Apr 2025", 
      social_media:{
        linkedin: ""} 
      },
      { image: "/images/vision.png",
      name: "Zeri Capital inks deal with Safaricom.", 
      title: "25 Apr 2025", 
      social_media:{
        linkedin: ""} 
      },
      { image: "/images/vision.png",
      name: "Zeri Capital inks deal with Safaricom.", 
      title: "25 Apr 2025", 
      social_media:{
        linkedin: ""} 
      },
      { image: "/images/vision.png",
      name: "Zeri Capital inks deal with Safaricom.", 
      title: "25 Apr 2025", 
      social_media:{
        linkedin: ""} 
      },
      { image: "/images/vision.png",
      name: "Zeri Capital inks deal with Safaricom.", 
      title: "25 Apr 2025", 
      social_media:{
        linkedin: ""} 
      },

  ];
    return ( 
        <main className=" bg-background">
          <a onClick={() => router.push('/news_')}>
          <div className="mt-8 mx-24 bg-background grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {
              teamMembers.map((teamMember,index,array)=>{
                return (
                  <div key={index} className="max-w-sm mb-8 bg-white rounded-3xl dark:bg-gray-800 dark:border-gray-700">

                  <Image
                  src={teamMember.image}
                  alt="Picture of the author"
                  width={400} 
                  height={150}
                  />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{teamMember.name}</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{teamMember.title}</p>
                  </div>
                  </div>

                )

              })
            }

          </div>
          </a>
        </main>
        );
    }

