import GradientText from "@/app/components/gradientText";
import ServicesList from "@/app/components/serviceItem";

export default function Services() {
    return (
        <div className="px-4 py-8 text-white">
            <div className="text-center">
                <GradientText text="Our services"/>
            </div>
            <div className="mt-8">
                <ServicesList/>
            </div>
        </div>
    );
}
