import type {Metadata} from "next";
import "./globals.css";
import {Poppins} from "next/font/google";
import Navbar from "@/app/components/navbar";

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
            className={poppins.className}
        >
        <Navbar/>
        {children}
        </body>
        </html>
    );
}
