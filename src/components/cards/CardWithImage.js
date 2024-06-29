'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function CardWithImage(props) {
  const contents = props.contents;
  const router = useRouter()
    return ( 
        <main className={props.sectionClass}>
           <h2 className={props.classHeading}>{props.heading}</h2>
          <div className={props.gridClass}>
            {
              contents.map((content,index,array)=>{
                return (
                  <div key={index} className="lg:max-w-sm mb-8 bg-white dark:bg-gray-800 dark:border-gray-700">
                  <h2 className={props.classCardHeading}>{content.card_heading}</h2>
                  <Image
                  src={content.image}
                  alt="Picture of the author"
                  width={1000} 
                  height={400}
                  />
                  <div className="lg:p-5">
                    <h5 className="mb-2 text-2xl ml-4 font-bold tracking-tight text-gray-900 dark:text-white">{content.name}</h5>
                  <p className="mb-3 font-normal ml-4 text-gray-700 dark:text-gray-400">{content.title}</p>
                  <div className={props.callToActionClass}>
                          <a href={content.social_media.linkedin} className="text-blue-500 hover:text-secondary">
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
          </div>
         <div>
         <a onClick={() => router.push(props.navigationLink)}>
         <button type="submit" className={props.buttonClass}>View all</button>
         </a>
           
         </div>
        </main>
        );
    }

