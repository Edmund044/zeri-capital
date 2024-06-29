import Image from 'next/image'
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function HeroSectionHorizontalScrollCard(props) {
  const responsive = [1,2,3]
    return ( 
<div className="flex flex-col bg-white m-auto p-auto">
<h1
        className="max-w-2xl text-5xl font-heading font-extrabold mb-6 font-body lg:mb-8 mx-48"
      >
        {props.heading}
      </h1>
      <p className="max-w-2xl text-2xl mb-6 font-body lg:mb-8 mx-48">{props.subheading} </p>
      <button type="button" class="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
      <div
        className="flex overflow-x-scroll pb-10 hide-scroll-bar"
      >
        <Carousel
            showArrows={true}
            showIndicators={true}
            infiniteLoop={true}
            dynamicHeight={false}
            // className={styles.mySwiper}
          >
            {responsive.map((item) => (
              <div key={item.id} className="">
                          <div
          className="flex flex-row bg-white lg:ml-40 md:ml-20 ml-10 "
        >
        <div className="inline-block overflow-hidden px-3">
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
    
    </div>
              </div>
            ))}
          </Carousel>

      </div>
</div>

        );
    }