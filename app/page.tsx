import Hero from "@/sections/hero";
import WhoWeAre from "@/sections/whoWeAre";
import Background from "@/components/background";
import Projects from "@/sections/projects";
import Technologies from "@/sections/technologies";
import Testimonials from "@/sections/testimonials";
import ContactUs from "@/sections/contactUs";

export default function Home() {
    return (
        <div>
            <Hero/>
            <div>
                <Background/>
                <WhoWeAre/>
                <Projects/>
                <Technologies/>
                <Testimonials/>
                <ContactUs/>
            </div>
        </div>
    );
}
