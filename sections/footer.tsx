import Image from "next/image";

export default function Footer() {
    return(
        <div className="border-t border-zinc-500 mx-4 py-8 flex justify-between items-center">
            <p className="text-secondary-text">&copy; 2024 Kyno Labs</p>
            <Image src="/footer-logo.jpg" alt="logo" width={160} height={32}/>
        </div>
    )
}