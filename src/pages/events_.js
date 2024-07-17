import CardWithDetailedNews from "@/components/cards/CardWithDetailedNews";
import "../app/globals.css";
import Footer from "@/components/footer";
import HeroSectionCTA from "@/components/heros/HeroSectionCTA";
import Topnavigation from "@/components/navigation/TopNavigation";
import HeroSectionWithBackGroundImage from "@/components/heros/HeroSectionWithBackGroundImage";

export default function News_() {
    return ( 
        <div className="bg-white">
            <Topnavigation/>
            <HeroSectionWithBackGroundImage
                 heading="Advising the ambitious"
                 description="We advise Companies, Governments, Investors, and Fund managers on their most important financial strategic matters, serving as a trusted advisor whose sole mission is to ensure the best results for their clients."
                 buttonText=""
                 jumboTronClass="bg-cover font-heading bg-no-repeat bg-[url('/images/gtc.jpeg')] bg-gray-800 bg-blend-multiply"
    />
            <CardWithDetailedNews 
                title="Zeri capital inks deal with safaricom"
                date="25 APR 2023"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
"
                navigationLink="/news"
                />
            <HeroSectionCTA
                       heading="Stay Curious"
                       subheading="Sign up to get valuable insights and thought leadership that empowers your decision making."
                       buttonText="Let's learn"
                       type="2"
                       backGroundColor="bg-white font-heading"
            />
            <Footer/>
        </div>
    )
}