'use client'
import { useRouter } from 'next/navigation'
export default function HeroSectionMasonry(){
    const router = useRouter()
    return(
        <div className="grid max-w-screen-xl bg-white px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-4 place-self-center lg:col-span-7">
        <div>
              
        <a onClick={() => router.push('/career_')}>
              <img className="h-auto max-w-full mb-4 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""></img>
        </a>      
            </div>
            <div>
            <a onClick={() => router.push('/career_')}>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""></img>
                </a>    
                
            </div>
    
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
        <a onClick={() => router.push('/career_')}>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""></img>
            </a> 
        </div>                
    </div>
    )
}