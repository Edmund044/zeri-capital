import Footer from "@/components/footer";
import TeamCard from "@/components/team_card";
import Hero from "@/components/hero"
import Topnavigation from "@/components/navigation/TopNavigation";
export default function Team() {
    return ( 
        <div>
            <Topnavigation/>
            <Hero/>
            <TeamCard/>
            <Footer/>
        </div>

     );
}