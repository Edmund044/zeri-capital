import Image from "next/image";
import Footer from "@/components/footer";
import Contact from "@/components/contact"
import "../app/globals.css";
import Topnavigation from "@/components/navigation/TopNavigation";
export default function Career() {
  return (
  <div>
    <Topnavigation/>
    <Contact/>
    <Footer/> 
  </div>  
  );
}
