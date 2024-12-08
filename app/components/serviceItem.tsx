"use client"

import {FaArrowRightLong} from "react-icons/fa6";
import {useState} from "react";
import {motion} from "framer-motion";

interface ServiceItemProps {
    title: string,
    description: string[],
}

export default function ServicesList() {
    return (
        <motion.div layout="position">
            <ServiceItem
                title="Artificial intelligence"
                description={[
                    'Machine Learning and Deep Learning',
                    'Time Series Forecasting',
                    'Computer Vision',
                    'Natural Language Processing',
                    'Generative AI and RAGs',
                    'Predictive Modelling',
                ]}
            />
            <ServiceItem
                title="Data and analytics"
                description={[
                    'Data Analytics',
                    'Sentiment Analysis',
                    'Predictive Analytics',
                    'Data Visualization',
                    'Dashboard Building',
                    'Database Optimization',
                    'Business Intelligence',
                ]}
            />
            <ServiceItem
                title="Web and mobile app development"
                description={[
                    'Full Stack Web Development',
                    'Mobile App Development (Flutter)',
                    'Custom Authentication and Authorization',
                ]}
            />
            <ServiceItem
                title="Cloud and serverless solutions"
                description={[
                    'Cloud Computing (AWS / Azure)',
                    'Web Hosting',
                    'Serverless Framework (Python / JS / TS)',
                ]}
            />
            <ServiceItem
                title="ERP and business solutions"
                description={[
                    'ERP Systems with AI and Analytics',
                    'ERP / SAP System Development',
                ]}
            />
        </motion.div>
    );
}


function ServiceItem(props: ServiceItemProps) {

    const {title, description} = props;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div layout="position" className="relative p-4" onClick={() => setIsOpen(!isOpen)}>
            <motion.div layout="position" className="flex justify-between items-center relative z-10">
                <motion.p layout="position" className="text-lg">{title}</motion.p>
                <motion.div layout="position"
                            className={`transition-all duration-300 h-7 w-7 grid place-content-center rounded-full bg-white ${isOpen ? 'rotate-45' : '-rotate-45'}`}>
                    <FaArrowRightLong className="text-black"/>
                </motion.div>
            </motion.div>
            {isOpen &&
                <motion.div
                    animate={{opacity: 1}}
                    transition={{delay: 0.15}}
                    initial={{opacity: 0}}
                    layout="position"
                    className="text-secondary-text pt-4">
                    <motion.ul layout="position">
                        {
                            description.map((item, id) => (<li key={id} className="mb-1">{item}</li>))
                        }
                    </motion.ul>
                </motion.div>
            }
            <motion.span layout="position"
                         className="rounded-full h-px absolute bottom-0 w-11/12 bg-gradient-to-r from-zinc-400 to-transparent"></motion.span>
        </motion.div>
    )
}