import Hero from "@/app/components/sections/hero";
import WhoWeAre from "@/app/components/sections/whoWeAre";
import Services from "@/app/components/sections/services";

export default function Home() {
    return (
        <div>
            <Hero/>
            <div className="bg-black">
                <WhoWeAre/>
                <Services/>
            </div>
        </div>
    );
}
