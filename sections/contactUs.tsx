"use client"
import {motion} from "motion/react";
import variants from "@/components/animation/variants";
import {InputField, TextArea} from "@/components/inputField";
import {FormEvent, useState} from "react";
import Email from "@/components/icons/email";
import Linkedin from "@/components/icons/linkedin";
import Instargram from "@/components/icons/instargram";
import Facebook from "@/components/icons/facebook";
import Phone from "@/components/icons/phone";
import {contacts} from "@/public/assets";

export default function ContactUs() {
    return (
        <div className="px-6 py-8 text-white">
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{once: true, amount: 0.8}}
                variants={variants}>
                <p className="gradient-title">Contact us</p>
            </motion.div>
            <ContactForm/>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{once: true, amount: 0.8}}
                variants={variants}
                className="mt-12">
                <p className="text-secondary-text mb-4">
                    Let us discuss how we can help you leverage Tech and AI to achieve your project and business goals.
                </p>
                <ContactCard/>
            </motion.div>
        </div>
    )
}

function ContactForm() {

    const [result, setResult] = useState({
        error: false,
        message: "",
    });

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setResult({
            error: false,
            message: "Sending..."
        });
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY;

        if (!apiKey) {
            setResult({
                error: true,
                message: "Failed to send the message!"
            });
            return;
        }
        formData.append("access_key", apiKey);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult({
                error: false,
                message: "Message sent successfully"
            });
            form.reset();
        } else {
            setResult({
                error: true,
                message: data.message
            });
        }
    }

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true, amount: 0.8}}
            variants={variants}
            className="mt-8">
            <p className="mb-4">Send us a message</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <InputField id="name" label="Name" placeholder="Name" type="text" required={true}/>
                <InputField id="email" label="Email" placeholder="Email" type="email" required={true}/>
                <InputField id="phone" label="Phone" placeholder="Phone (optional)" type="tel"/>
                <TextArea label="message" id="message" placeholder="Message" required={true}/>
                <button
                    className="w-full py-2 bg-primary-blue mt-2 rounded-2xl gradient-border"
                    type="submit">Submit
                </button>
                <p className={`mt-2 font-light text-center ${result.error ? 'text-red-400' : 'text-secondary-text'}`}>{result.message}</p>
            </form>
        </motion.div>
    )
}

function ContactCard() {

    const iconMap: { [key: string]: JSX.Element } = {
        Email: <Email height={24} width={24} color="white"/>,
        Linkedin: <Linkedin height={24} width={24} color="white"/>,
        Instargram: <Instargram height={24} width={24} color="white"/>,
        Facebook: <Facebook height={24} width={24} color="white"/>,
        Phone: <Phone height={24} width={24} color="white"/>,
    }

    return (
        <div
            className="gradient-border bg-[linear-gradient(135deg,_#ffffff21,_#d9d9d900)] bg-black p-4 rounded-3xl grid grid-cols-2 gap-4">
            {contacts.map((contact, id) =>
                <ContactCardItem key={id} title={contact.title} value={contact.value} icon={iconMap[contact.icon]}/>
            )}
        </div>
    )
}

interface ContactCardItemProps {
    title: string,
    value: string,
    icon: React.ReactNode,
}

function ContactCardItem(props: ContactCardItemProps) {
    const {title, value, icon} = props;
    return (
        <div className={`flex items-center gap-2 ${title === "Email" ? 'col-span-2 justify-center' : ''}`}>
            <div>
                {icon}
            </div>
            <div>
                <p className="text-secondary-text text-sm">{title}</p>
                <p className="font-light text-sm">{value}</p>
            </div>
        </div>
    )
}