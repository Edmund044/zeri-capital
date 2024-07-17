import Image from 'next/image'
export default function HeroSectionImageInGrid(props){
    const contents = props.contents;
    // <div className="">
    //      {
    //           contents.map((content,index,array)=>{
    //             return (

    //                 <div key={index} className="lg:col-span-6 lg:px-auto ">
    //                     <h1>{props.card_heading}</h1>
    //                 <Image
    //                           src={content.image}
    //                           alt="Picture of the author"
    //                           width={1000} 
    //                           height={400}
    //                           />
                
    //                 </div>
    //             )
                
    //             })}

    // </div>
    <div className="grid px-4 py-8 mx-auto bg-white xl:gap-0 lg:py-16 lg:grid-cols-12">

    <div  className="lg:col-span-6 lg:px-auto ">
        
        <h1 className="font-bold text-center font-heading text-5xl tracking-tight">Commitments by Ticket Size</h1>
    <Image
              src="/images/commitment1.png"
              alt="Picture of the author"
              width={1000} 
              height={400}
              />

    </div>
    <div  className="lg:col-span-6 lg:px-auto ">
        
        <h1 className="font-bold text-center font-heading text-5xl tracking-tight">Commitments by Investor Type</h1>
    <Image
              src="/images/commitment21.png"
              alt="Picture of the author"
              width={600} 
              height={900}
              className="mt-2"
              />

    </div>
    <div  className="lg:col-span-6 lg:px-auto ">
        
        <h1 className="font-bold text-center font-heading text-5xl tracking-tight">Companies we work with</h1>
    <Image
              src="/images/commitment3.png"
              alt="Picture of the author"
              width={1000} 
              height={400}
              />

    </div>
    <div  className="lg:col-span-6 lg:px-auto ">
        
        <h1 className="font-bold text-center font-heading text-5xl tracking-tight">Transaction Focus</h1>
    <Image
              src="/images/commitment4.png"
              alt="Picture of the author"
              width={518} 
              height={400}
              className="ml-16"
              />

    </div>


</div>

    
}