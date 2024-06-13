import Image from 'next/image'
export default function CardWithImage(props) {
  const teamMembers = [
    { image: "/images/vision.png",
      name: "Ronald Ouma", 
      title: "Chief Executive Officer.", 
      social_media:{
        linkedin: "https://www.linkedin.com/in/ronaldouma/"} 
      },
      { image: "/images/vision.png",
      name: "Ronald Ouma", 
      title: "Chief Executive Officer.", 
      social_media:{
        linkedin: "https://www.linkedin.com/in/ronaldouma/"} 
      },
      { image: "/images/vision.png",
      name: "Ronald Ouma", 
      title: "Chief Executive Officer.", 
      social_media:{
        linkedin: "https://www.linkedin.com/in/ronaldouma/"} 
      },
      { image: "/images/vision.png",
      name: "Ronald Ouma", 
      title: "Chief Executive Officer.", 
      social_media:{
        linkedin: "https://www.linkedin.com/in/ronaldouma/"} 
      },

  ];;
    return ( 
        <main className=" bg-background">
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
                  <div className="flex space-x-6">
                          <a href={teamMember.social_media.linkedin} className="text-blue-500 hover:text-secondary">
                            <span className="sr-only">Linkedin</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                          </a>
                        </div>
                  </div>
                  </div>

                )

              })
            }
          <div className="max-w-sm mb-8 bg-white rounded-3xl dark:bg-gray-800 dark:border-gray-700">

                <Image
                src="/images/vision.png"
                alt="Picture of the author"
                width={400} 
                height={150}
                />
                <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ronald Ouma</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Chief Executive Officer.</p>
                <div className="flex space-x-6">
                        <a href="https://www.linkedin.com/in/ronaldouma/" className="text-blue-500 hover:text-secondary">
                          <span className="sr-only">Linkedin</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      </div>
                </div>
                </div>

          </div>
        </main>
        );
    }

