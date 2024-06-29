'use client'
import { useRouter } from 'next/navigation'
export default function HeroSectionCTA(props) {
  const router = useRouter()
    return ( 
        <main className="">
<section className={props.backGroundColor}>
  <div className="p-8 md:p-12 lg:px-16 lg:mt-20 lg:py-44">
    <div className="">
      <h2 className="lg:text-5xl text-3xl text-center font-bold font-heading text-accent md:text-5xl">
       {props.heading}
      </h2>

      <p className="lg:text-2xl text-xl text-center text-gray-600 sm:mt-4 sm:block font-body lg:ml-44 lg:mr-32 md:mx-12">
      {props.subheading}
      </p>
    </div>

    {(() => {
        if (props.type == '1') {
          return (
            <div className="mt-8 text-center">
              <a onClick={() => router.push(props.navigationLink)}>
              <button type="submit" className="text-white bg-accent hover:bg-secondary font-medium rounded-full text-sm px-4 py-2 lg:px-8 lg:py-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{props.buttonText}</button>
              </a>
           
          </div>
          )
        } else if (props.type == '2') {
          return (
            <div className="mx-auto mt-8 max-w-xl">
              <form>   
    <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <input type="search" id="search" className="block w-full p-4 ps-2 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your email" required />
       
       <a onClick={() => router.push(props.navigationLink)}>
       <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-accent hover:bg-secondary font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{props.buttonText}</button>
        </a>
    </div>
</form>
          </div>
          )
        }
        else if (props.type == '3') {
          <div className="mx-auto mt-8 max-w-xl">
            lkdknlkdn
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-accent hover:bg-secondary font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{props.buttonText}</button>
          </div>
        }
        else {
          return (
            <div>catch all</div>
          )
        }
      })()}

  </div>
</section>
        </main>    

     );
}

