import Image from 'next/image'
export default function HeroSectionHorizontalScrollCard(props) {
    return ( 
        <div class="flex flex-col bg-white m-auto p-auto">
<h1
        class="max-w-2xl text-5xl font-heading font-extrabold mb-6 font-body lg:mb-8 mx-48"
      >
        {props.heading}
      </h1>
      <p className="max-w-2xl text-2xl mb-6 font-body lg:mb-8 mx-48">{props.subheading} </p>
      <div
        class="flex overflow-x-scroll pb-10 hide-scroll-bar"
      >
        <div
          class="flex flex-row bg-white lg:ml-40 md:ml-20 ml-10 "
        >
          <div class="inline-block overflow-hidden px-3">
            {/* <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div> */}
            <div className="grid lg:gap-0 xl:gap-0 lg:py-4 lg:grid-cols-12 snap-center"> 
                <div className="mr-auto place-self-center py-32 px-8 lg:col-span-6 text-white bg-accent">
                    <h1 className={props.cardHeadingClass}>{props.cardHeading}</h1>
                    <p className="text-2xl mb-6 font-body lg:mb-8">{props.description}</p>
                </div>  
                <div className="lg:mt-0 lg:col-span-6 lg:flex">
                <Image
                src={props.picture}
                alt="Picture of the author"
                width={400} 
                height={300}
                />
                </div>             
            </div>
          </div>
          {/* <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div> */}
          {/* <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div> */}
        </div>
      </div>
</div>
        );
    }