"use client"
import {motion} from "motion/react";
import variants from "@/components/animation/variants";
import {InputField, TextArea} from "@/components/inputField";
import {FormEvent, useState} from "react";

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
            <div>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{once: true, amount: 0.8}}
                    variants={variants}
                    className="mt-4">
                    <p className="text-secondary-text">
                        {"Let's discuss how we can help you leverage Tech and AI to achieve your project and business goals."}
                    </p>
                </motion.div>
                <ContactForm/>
            </div>

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