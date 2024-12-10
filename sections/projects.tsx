"use client"
import {motion} from "motion/react";
import variants from "@/components/animation/variants";
import ProjectCard from "@/components/projectCard";
import {projects} from "@/components/assets";

export default function Projects() {
    return (
        <div className="px-6 py-9 text-white">
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{once: true, amount: 0.8}}
                variants={variants}>
                <p className="gradient-title">Our portfolio</p>
            </motion.div>
            <div className="mt-8 flex flex-col gap-8 justify-center items-center">
                {
                    projects.map((project, id) =>
                        <ProjectCard
                            key={id}
                            images={project.images}
                            title={project.title}
                            description={project.title}/>
                    )
                }
            </div>
        </div>
    )
}