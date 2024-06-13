export default function HeroSectionWithCards(props) {
    return ( 
<section className="bg-gray-500">
<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-24">
  <div className="mx-auto max-w-lg text-center">
    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold font-heading tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{props.heading}</h1>

    <p className="max-w-2xl mb-6 font-body lg:mb-8">
      {props.subheading}
    </p>
  </div>

  <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    <a
      className="block rounded-xl bg-white p-8 transition hover:border-blue-500/10 hover:shadow-blue-500/10"
      href="#"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-10 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>

      <h2 className="mt-4 text-xl font-bold text-black font-heading">Digital campaigns</h2>

      <p className="mt-1 text-sm text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
        distinctio alias voluptatum blanditiis laudantium.
      </p>
    </a>
    <a
      className="block rounded-xl bg-white p-8 transition hover:border-blue-500/10 hover:shadow-blue-500/10"
      href="#"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-10 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>

      <h2 className="mt-4 text-xl font-bold text-black font-heading">Digital campaigns</h2>

      <p className="mt-1 text-sm text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
        distinctio alias voluptatum blanditiis laudantium.
      </p>
    </a>
    <a
      className="block rounded-xl bg-white p-8 transition hover:border-blue-500/10 hover:shadow-blue-500/10"
      href="#"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-10 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>

      <h2 className="mt-4 text-xl font-bold text-black font-heading">Digital campaigns</h2>

      <p className="mt-1 text-sm text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
        distinctio alias voluptatum blanditiis laudantium.
      </p>
    </a>
  </div>
</div>
</section>
    )}
