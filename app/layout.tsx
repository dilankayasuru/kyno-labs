import type {Metadata} from "next";
import "./globals.css";
import {Poppins} from "next/font/google";
import Navbar from "@/app/components/navbar";
import {Suspense} from "react";

const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Kyno Labs",
    description: "Official website of Kyno Labs",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${poppins.className} bg-black`}
        >
        <Navbar/>
        <Suspense fallback={<div className="bg-black text-white">Loading...</div>}>
            {children}
        </Suspense>
        </body>
        </html>
    );
}
