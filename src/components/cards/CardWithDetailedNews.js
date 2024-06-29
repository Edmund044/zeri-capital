'use client'
import { useRouter } from 'next/navigation'
export default function CardWithDetailedNews(props) {
    const router = useRouter()
    return (
<main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
  <div className="flex justify-between px-4 mx-auto max-w-screen-xl pt-8 pb-16">
      <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <p className="text-center" onClick={() => router.push(props.navigationLink)}>&larr; Back to all</p>
          
          <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                  {/* <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos"></img>
                      <div>
                          <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Jese Leos</a>
                          <p className="text-base text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p>
                          <p className="text-base text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                      </div>
                  </div> */}
              </address>
              <h1 className="mb-4 text-3xl font-extrabold text-center leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{props.title}</h1>
              <p className="text-center">{props.date}</p>
          </header>
          <figure><img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt=""></img>
              <figcaption></figcaption>
          </figure>
          <p className="lead">
            <br/>
            {props.body}

</p>
         

        
      </article>
  </div>
</main>

    )}



