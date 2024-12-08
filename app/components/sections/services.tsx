import GradientText from "@/app/components/gradientText";
import ServiceItem from "@/app/components/serviceItem";

export default function Services() {
    return (
        <div className="px-6 py-9 text-white">
            <div>
                <GradientText text="Our services"/>
            </div>
            <div className="mt-9">
                <ServicesList/>
            </div>
        </div>
    );
}

function ServicesList() {
    return (
        <div>
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
        </div>
    );
}

