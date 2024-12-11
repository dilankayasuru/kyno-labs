import Hero from "@/sections/hero";
import WhoWeAre from "@/sections/whoWeAre";
import Background from "@/components/background";
import Projects from "@/sections/projects";
import Technologies from "@/sections/technologies";
import Testimonials from "@/sections/testimonials";
import ContactUs from "@/sections/contactUs";
import Services from "@/sections/services";
import Footer from "@/sections/footer";
import Cube from "@/components/cube";

export default function Home() {
    return (
        <div>
            <Background/>
            <Hero/>
            <WhoWeAre/>
            <Cube/>
            <Services/>
            <Projects/>
            <Technologies/>
            <Testimonials/>
            <ContactUs/>
            <Footer/>
        </div>
    );
}
