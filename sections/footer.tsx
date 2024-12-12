import Image from "next/image";

export default function Footer() {
    return (
        <div className="md:flex md:justify-center md:items-center">
            <div className="flex justify-between items-center md:w-full md:max-w-screen-xl md:mx-6 md:py-9 mx-4 border-zinc-500 border-t py-8">
                <p className="text-secondary-text">&copy; 2024 Kyno Labs</p>
                <Image src="/footer-logo.jpg" alt="logo" width={160} height={32}/>
            </div>
        </div>
    )
}