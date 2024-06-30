import Image from 'next/image'
export default function HeroSectionWithImageOverlay(props) {
    return ( 

<section className={props.sectionClass}>
<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-6">
        <p className="max-w-2xl lg:text-2xl mb-6 font-body lg:mb-8">{props.description}</p>
    </div>
    <div className="lg:mt-0 lg:col-span-6">
        <div className='lg:absolute max-w-2xl lg:ml-48'>
        <p className="lg:text-2xl lg:ml-28 mb-6 font-body lg:mb-8">{props.subheading} </p>
    <h1 className={props.headingClass}> - {props.heading}</h1>
        </div>
      <img className="rounded-none" src={props.picture} alt=""></img>
    </div>                
</div>
</section>
        );
    }


