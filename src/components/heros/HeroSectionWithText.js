import Image from 'next/image'
export default function HeroSectionWithText(props) {
    const lists = ['Our bespoke capital-raise strategies prioritise your goals by seeking investors whose intentions align with yours — not just their offers.','Our investor network spans the globe; raise funds from various sources, and grow and expand your business into new markets.','Our specialists are highly experienced at raising equity and will ensure your business interests are well protected during negotiations.']
    return ( 


<div className="bg-gray-100">
  <div className="relative isolate px-6 pt-14 lg:px-8">
    <div className=" py-4 sm:py-48 lg:py-24">
      <div className="">
        <h1 className="font-bold font-heading text-center text-5xl tracking-tight">{props.heading}</h1>
        <p className="mt-6 leading-8 ml-44 mr-32 text-gray-600 text-2xl font-body">{props.description}</p>
        <ul className="mt-6 leading-8 ml-48 mr-32 list-disc text-gray-600 text-2xl font-body">
        {
    lists.map((list,index,array)=>{
      return (
            <li key={index}>{list}</li>
                )
            })}
        </ul>

      </div>
    </div>
  </div>
</div>

        );
    }
    