'use client'
import { useRouter } from 'next/navigation'
export default function HeroSectionMasonry(){
    const router = useRouter()
    return(
        <div className="grid max-w-screen-xl bg-white px-4 py-8 mx-auto xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="lg:col-span-7 lg:px-auto ">
        <div onClick={() => router.push('/career_')}>
        <div className="absolute w-full h-full rounded-xl text-white">
              <h1 className="font-bold text-5xl pl-4 pt-16">JITAHIDI PROGRAMME</h1>
              <p className="font-normal text-3xl pl-4 ">Still in University</p>
            </div>
              
        <a onClick={() => router.push('/career_')}>
              <img className="h-auto max-w-full mb-4 rounded-none" src="/images/gtc.jpeg" alt=""></img>
        </a>      
            </div>
            <div onClick={() => router.push('/career_')}>
            <div className="absolute w-full h-full rounded-xl text-white">
              <h1 className="font-bold text-5xl w-5/12 pl-4 pt-16">GRADUATE ANALYST PROGRAMME</h1>
              <p className="font-normal text-3xl pl-4">0 - 2 years</p>
            </div>
            <a onClick={() => router.push('/career_')}>
            <img className="h-auto max-w-full rounded-none" src="/images/gtc.jpeg" alt=""></img>
                </a>    
                
            </div>
    
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
        <div onClick={() => router.push('/career_')} className="absolute w-full h-full rounded-xl text-white">
              <h1 className="font-bold text-5xl  w-5/12  pl-4 pt-16">EXPERIENCED PROFESSIONALS</h1>
              <p className="font-normal text-3xl pl-4">3+ years</p>
            </div>
        <a onClick={() => router.push('/career_')}>
        <img className="lg:h-[974px] object-cover  rounded-none" src="/images/gtc.jpeg" alt=""></img>
            </a> 
        </div>                
    </div>
    )
}