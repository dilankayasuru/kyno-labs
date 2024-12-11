import dynamic from "next/dynamic";
const Background = dynamic(() => import("@/components/background"), { ssr: false });
const Hero = dynamic(() => import("@/sections/hero"), { ssr: false });
const WhoWeAre = dynamic(() => import("@/sections/whoWeAre"), { ssr: false });
const Services = dynamic(() => import("@/sections/services"), { ssr: false });
const Projects = dynamic(() => import("@/sections/projects"), { ssr: false });
const Technologies = dynamic(() => import("@/sections/technologies"), { ssr: false });
const Testimonials = dynamic(() => import("@/sections/testimonials"), { ssr: false });
const ContactUs = dynamic(() => import("@/sections/contactUs"), { ssr: false });
const Footer = dynamic(() => import("@/sections/footer"), { ssr: false });

export default function Home() {
    return (
        <div>
            <Background />
            <Hero />
            <WhoWeAre />
            <Services />
            <Projects />
            <Technologies />
            <Testimonials />
            <ContactUs />
            <Footer />
        </div>
    );
}