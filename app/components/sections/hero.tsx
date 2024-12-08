import NeuralNetwork from "@/app/components/neuralNetwork";
import ShimmerButton from "@/components/ui/shimmer-button";

export default function Hero() {
    return (
        <div className="relative h-dvh p-4 grid place-content-center">
            <NeuralNetwork/>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-end items-end w-fit mb-4 select-none">
                    <h1 className="font-bold cursor-default text-6xl">
                        <span className="text-white">Kyno</span> <span className="text-primary-yellow">Labs</span>
                    </h1>
                    <p className="font-medium text-white">Your Vision, Our Innovation.</p>
                </div>
                <p className="text-secondary-text select-none">
                    We specialize in AI, ML, and software solutions that drive business success.
                </p>
                <ShimmerButton className="mt-8">
                    <span>Get a free consultation</span>
                </ShimmerButton>
            </div>
        </div>
    )
};