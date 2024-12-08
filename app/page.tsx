import Hero from "@/app/components/sections/hero";
import WhoWeAre from "@/app/components/sections/whoWeAre";
import Services from "@/app/components/sections/services";
import Projects from "@/app/components/sections/projects";
import Technologies from "@/app/components/sections/technologies";
import Testimonials from "@/app/components/sections/testimonials";
import AnimatedGradientBackground from "@/app/components/animatedGradientBackground";

export default function Home() {
    return (
        <div>
            <Hero/>
            <div>
                <AnimatedGradientBackground/>
                <WhoWeAre/>
                <Services/>
                <Projects/>
                <Technologies/>
                <Testimonials/>
            </div>
        </div>
    );
}
