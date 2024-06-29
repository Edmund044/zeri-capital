import Image from 'next/image'
export default function ContactForm() {
    return ( 
        <main className="">

<section className="bg-background dark:bg-gray-900">
<div className="grid max-w-screen-xl px-4 py-12 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto  lg:col-span-6">
    <Image
      src="/images/vision.png"
      alt="Picture of the author"
      width={400} 
      height={600}

    />
    </div>
    <div className="bg-gray-100 lg:mt-0  lg:col-span-6 px-16 pt-16 ">
    <form action="#" className=" space-y-8">
          <div>
              <input type="text" id="fullname" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Full name" required></input>
          </div>
          <div>
              <input type="email" id="email" className="block p-3 w-full text-sm text-gray-900  rounded-none border border-white" placeholder="Email address" required></input>
          </div>
          <div className="sm:col-span-2">
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 rounded-none " placeholder="Your message"></textarea>
          </div>
          <button type="submit" className="lg:ml-44 text-white ml-16 mb-8 bg-accent hover:bg-secondary font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send message &rarr;</button>
      </form>
    </div>                
</div>
</section>
        </main>
    )
}
