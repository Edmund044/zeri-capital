'use client'
import { useRouter } from 'next/navigation'
export default function HeroSectionWithBackGroundImage(props){
    const router = useRouter()
    return (
        <main className="">
        <section className="bg-background">
        
            {(() => {
                if (props.type == '1') {
                  return (
                    <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-accent bg-blend-multiply">
                    <div class="px-4 w-5/12 ml-12 py-24 lg:py-48">
                        <p className="text-white mb-16 text-2xl" onClick={() => router.push('/career')}>&larr; Back to careers</p>
                        <h1 class="mb-4 text-5xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{props.heading}</h1>
                        <p class="mb-4 text-4xl font-normal text-white md:text-5xl lg:text-4xl">{props.description}</p>
                        <button type="submit" className="text-white absolute  bg-accent hover:bg-secondary font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{props.buttonText}</button>
                    </div>
                </section>
                  )
                } else if (props.type == '2') {
                  return (
                    <div className="mx-auto mt-8 max-w-xl">
                  </div>
                  )
                }
                else if (props.type == '3') {
                    <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-accent bg-blend-multiply">
                    <div class="px-4 mx-auto text-center py-24 lg:py-48">
                        <p className="text-white">&larr; Back to careers</p>
                        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{props.heading}</h1>
                        <p class="mb-8 text-2xl ml-8 font-normal text-gray-300 lg:text-4xl sm:px-16 lg:px-48">{props.description}</p>
                        <button type="submit" className="text-white absolute  bg-accent hover:bg-secondary font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{props.buttonText}</button>
                    </div>
                </section>
                }
                else {
                  return (
                    <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-accent bg-blend-multiply">
                    <div class="px-4 mx-auto text-center py-24 lg:py-48">
                        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{props.heading}</h1>
                        <p class="mb-8 text-2xl ml-8 font-normal text-gray-300 lg:text-4xl sm:px-16 lg:px-48">{props.description}</p>
                        <button type="submit" className="text-white absolute  bg-accent hover:bg-secondary font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{props.buttonText}</button>
                    </div>
                </section>
                  )
                }
              })()}
        
        </section>
                </main>   

    )
}