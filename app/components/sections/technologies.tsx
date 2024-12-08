"use client"
import GradientText from "@/app/components/gradientText";
import {IconCloud} from "@/components/ui/icon-cloud";
import {useEffect, useState} from "react";

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

export default function Technologies() {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, []);

    return (
        <div className="px-6 py-8 text-white">
            <div className="">
                <GradientText text="Technologies"/>
            </div>
            <div className="mt-8">
                <p className="text-secondary-text">
                    Our projects leverage cutting-edge technologies, including Machine Learning, NLP, Cloud Computing,
                    and Data Visualization, alongside robust Databases and intuitive Frontend Frameworks, to deliver
                    innovative and scalable solutions.
                </p>
            </div>
            {mounted &&
                <div className="max-w-xs mx-auto my-0">
                    <IconCloud
                        iconSlugs={slugs}/>
                </div>
            }
        </div>
    );
}