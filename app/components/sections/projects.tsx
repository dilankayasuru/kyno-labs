"use client"
import GradientText from "@/app/components/gradientText";
import ProjectCard from "@/app/components/projectCard";
import { motion } from "motion/react";
import variants from "@/app/components/variants";

export default function Projects() {
    return (
        <div className="px-6 py-9 text-white">
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{once: true, amount: 0.8}}
                variants={variants}>
                <GradientText text="Our portfolio"/>
            </motion.div>
            <div className="mt-8 flex flex-col gap-8 justify-center items-center">
                <ProjectCard
                    title="ICD Code prediction from Diagnosis ZWSP and Clinical Text using NLP"
                    description="Predicted student grades using machine learning models and provided explanations for the
                    predictions using SHAP and LIME to support educators in understanding key factors and improving
                    outcomes."
                    images={[
                        "/mockup-1.jpg",
                        "/mockup-3.jpg",
                        "/mockup-2.jpg",
                    ]}
                />
                <ProjectCard
                    title="ICD Code prediction from Diagnosis ZWSP and Clinical Text using NLP"
                    description="Predicted student grades using machine learning models and provided explanations for the
                    predictions using SHAP and LIME to support educators in understanding key factors and improving
                    outcomes."
                    images={[
                        "/mockup-3.jpg",
                        "/mockup-2.jpg",
                        "/mockup-1.jpg",
                    ]}
                />
                <ProjectCard
                    title="ICD Code prediction from Diagnosis ZWSP and Clinical Text using NLP"
                    description="Predicted student grades using machine learning models and provided explanations for the
                    predictions using SHAP and LIME to support educators in understanding key factors and improving
                    outcomes."
                    images={[
                        "/mockup-2.jpg",
                        "/mockup-1.jpg",
                        "/mockup-3.jpg",
                    ]}
                />
            </div>
        </div>
    );
}