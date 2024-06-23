import Image from 'next/image'
export default function HeroSectionImageInGrid(props){
    const contents = props.contents;
    <div className="">
         {
              contents.map((content,index,array)=>{
                return (

                    <div key={index} className="lg:col-span-6 lg:px-auto ">
                        <h1>{props.card_heading}</h1>
                    <Image
                              src={content.image}
                              alt="Picture of the author"
                              width={1000} 
                              height={400}
                              />
                
                    </div>
                )
                
                })}

    </div>

    
}