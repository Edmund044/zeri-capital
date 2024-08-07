'use client'
import { useRouter } from 'next/navigation'
export default function Topnavigation() {
  const router = useRouter()
    return ( 
        <div className="max-w-screen-xl">

<nav className="bg-background cursor-pointer border-gray-200 dark:bg-gray-900">
  <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
    <a onClick={() => router.push('/')} className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/images/zeri_logo.jpeg" className="h-28" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium  flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-background dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a onClick={() => router.push('/capabilities')} className="block py-2 px-3 font-heading text-black bg-background rounded md:hover:text-blue-700" aria-current="page">Our Capabilities</a>
        </li>
        <li>
          <a onClick={() => router.push('/team')} className="block py-2 px-3 font-heading text-black bg-background rounded md:hover:text-blue-700">Our Team</a>
        </li>
        <li>
          <a onClick={() => router.push('/career')} className="block py-2 px-3 font-heading text-black bg-background rounded md:hover:text-blue-700">Careers</a>
        </li>
        <li>
          <a onClick={() => router.push('/insights')} className="block py-2 px-3 font-heading text-black bg-background rounded md:hover:text-blue-700">Insights</a>
        </li>
        <li>
          <a onClick={() => router.push('/news')} className="block py-2 px-3 font-heading text-black bg-background rounded md:hover:text-blue-700">News & Events</a>
        </li>
        <li>
          <a onClick={() => router.push('/contact')} className="block py-2 px-3 font-heading text-black bg-background rounded md:hover:text-blue-700">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    )
}

