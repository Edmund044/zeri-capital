export default function HeroSectionWithCards(props) {
    return ( 
<section className="bg-gray-100">
<div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-24">
  <div className="text-center">
    <h1 className="max-w-2xl mx-auto  mb-4 text-4xl text-center font-extrabold font-heading tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">{props.heading}</h1>

    <p className="mb-6 font-body ml-2 text-3xl lg:mb-8 ">
      {props.subheading1}
    </p>
    <p className="mb-6 font-body ml-2 text-3xl lg:mb-8 ">
      {props.subheading2}
    </p>
  </div>

  <div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
    <a
      className="block  rounded-xl bg-gray-100 ml-20 p-8 transition hover:border-blue-500/10 hover:shadow-blue-500/10"
      href="#"
    >

      <h2 className="mt-4 text-xl font-bold ml-8 text-gray-700 text-black font-heading">General Inquiry</h2>

      <p className="mt-1 text-xl text-black">
       hello@zericapital.com
      </p>
    </a>
    <a
      className="block rounded-xl  bg-gray-100 p-8 transition hover:border-blue-500/10 hover:shadow-blue-500/10"
      href="#"
    >

      <h2 className="mt-4 text-xl font-bold ml-8 text-gray-700 font-heading">Research Inquiry</h2>

      <p className="mt-1 text-xl text-black">
       research@zericapital.com
      </p>
    </a>
    <a
      className="block rounded-xl bg-gray-100 p-8 transition hover:border-blue-500/10 hover:shadow-blue-500/10"
      href="#"
    >

      <h2 className="mt-4 text-xl ml-8 font-bold text-gray-700 font-heading">Events Inquiry</h2>

      <p className="mt-1 text-xl text-black">
      events@zericapital.com
      </p>
    </a>
  </div>
</div>
</section>
    )}
