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
                    <section className="bg-cover bg-no-repeat bg-[url('/images/gtc.jpeg')] bg-gray-800 bg-blend-multiply">
                    <div className="px-4 w-5/12 ml-12 py-24 lg:py-32">
                        <p className="text-white mb-16 text-2xl" onClick={() => router.push('/career')}>&larr; Back to careers</p>
                        <h1 className="mb-4 lg:text-5xl text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{props.heading}</h1>
                        <p className="mb-4 text-xl font-normal text-white md:text-5xl lg:text-xl">{props.description}</p>
                        <button type="submit" className="text-white  bg-accent hover:bg-secondary font-medium rounded-full text-sm px-12 py-12 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{props.buttonText}</button>
                    </div>
                </section>
                  )
                } else if (props.type == '2') {
                  return (
                    <section className={props.jumboTronClass}>
                    <div className=" py-24 text-center lg:py-16">
                        <h1 className="mb-8 lg:text-5xl text-center text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{props.heading}</h1>
                        <p className="font-body text-white mx-12 text-xl lg:text-3xl">{props.description}</p>
                    </div>
                </section>
                  )
                }
                else if (props.type == '3') {
                    <section className="bg-center bg-no-repeat bg-[url('/images/gtc.jpeg')] bg-accent bg-blend-multiply">
                    <div className="px-4 mx-auto text-center py-24 lg:py-48">
                        <p className="text-white">&larr; Back to careers</p>
                        <h1 className="mb-4 lg:text-5xl text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{props.heading}</h1>
                        <p className="mb-8 text-2xl ml-8 font-normal text-gray-300 lg:text-4xl sm:px-16 lg:px-48">{props.description}</p>
                        <button type="submit" className="text-white absolute  bg-accent hover:bg-secondary font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{props.buttonText}</button>
                    </div>
                </section>
                }
                else {
                  return (
                    <section className={props.jumboTronClass}>
                    <div className=" py-24 text-center lg:py-48">
                        <h1 className="mb-8 lg:text-5xl text-center text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{props.heading}</h1>
                        <p className="mb-6 font-body text-white mx-12 text-xl lg:text-3xl lg:mb-8">{props.description}</p>
                        <button type="submit" className="text-white text-center  bg-accent hover:bg-secondary font-medium rounded-full text-sm lg:px-8 lg:py-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{props.buttonText}</button>
                    </div>
                </section>
                  )
                }
              })()}
        
        </section>
                </main>   

    )
}