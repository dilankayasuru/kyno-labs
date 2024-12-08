import GradientText from "@/app/components/gradientText";

export default function WhoWeAre() {
    return (
        <div className="px-4 py-8 text-white">
            <div className="text-center">
                <GradientText text="Who we are"/>
                <p className="mt-4">Welcome to Kyno Labs: Your vision, Our innovation</p>
            </div>
            <p className="text-secondary-text my-8">
                At Kyno Labs, we specialize in AI, ML, DL, and software development. With 3 years of experience and over
                10 successful projects, we deliver cutting-edge AI solutions and data-driven insights to drive growth
                and improve efficiency for businesses.
            </p>
            <div className="mt-8 grid gap-4">
                <div className="transparent-card rounded-2xl p-4">
                    <div className="text-center pt-8">
                        <p className="text-2xl font-medium">3+ Years</p>
                        <p className="text-secondary-text">3 Years of Expertise in AI & Software Development</p>
                    </div>
                </div>
                <div className="transparent-card rounded-2xl p-4">
                    <div className="text-center">
                        <div className="grid place-content-center">
                            <img src="/map.png" alt="map" className="h-40"/>
                        </div>
                        <p className="text-secondary-text">Serving Clients Worldwide</p>
                    </div>
                </div>
                <div className="transparent-card rounded-2xl p-4">
                    <div className="text-center">
                        <p className="text-2xl font-medium">10+ Projects</p>
                        <p className="text-secondary-text">
                            Having completed over 10 successful projects, Kyno Labs
                            empowers businesses with cutting-edge AI and data-driven solutions.
                        </p>
                        <div className="grid place-content-center mt-4">
                            <img src="/brain.png" alt="artifitial brain image" className="h-40"/>
                        </div>
                    </div>
                </div>
                <div className="transparent-card rounded-2xl p-4">
                    <div className="text-center">
                        <div className="grid place-content-center">
                            <img src="/placeholder-company1.png" alt="compnay 1 logo" className="h-40"/>
                        </div>
                        <p className="text-secondary-text">Trusted by Company 1</p>
                    </div>
                </div>
                <div className="transparent-card rounded-2xl p-4">
                    <div className="text-center">
                        <div className="grid place-content-center">
                            <img src="/placeholder-company2.png" alt="compnay 2 logo" className="h-40"/>
                        </div>
                        <p className="text-secondary-text">Trusted by Company 2</p>
                    </div>
                </div>
            </div>
        </div>
    )
}