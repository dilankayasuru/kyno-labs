"use client"
import dynamic from "next/dynamic";
import {FormEvent, useEffect, useState} from "react";

const InputField = dynamic(() => import("@/components/inputField").then(mod => mod.InputField), {ssr: false});
const TextArea = dynamic(() => import("@/components/inputField").then(mod => mod.TextArea), {ssr: false});
import CloseIcon from "@/components/icons/close";

interface ConsultationFormProps {
    onClose: () => void
}

export default function ConsultationForm(props: ConsultationFormProps) {
    const {onClose} = props;

    const [response, setResponse] = useState({
        error: false,
        message: "",
    });

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setResponse({
            error: false,
            message: "Sending..."
        });
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY;

        if (!apiKey) {
            setResponse({
                error: true,
                message: "Failed to send the message!"
            });
            return;
        }
        formData.append("access_key", apiKey);
        formData.append("subject", "New consultation booking from KynoLabs");
        formData.append("from_name", "KynoLabs consultations");
        formData.append("Date", new Date().toDateString());
        formData.append("Time", new Date().toTimeString());

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResponse({
                error: false,
                message: "Message sent successfully"
            });
            form.reset();
        } else {
            setResponse({
                error: true,
                message: data.message
            });
        }
    }

    useEffect(() => {
        if (!response.error && !response.message) return;
        const closeForm = setTimeout(onClose, 2000);
        return () => {
            clearTimeout(closeForm);
        }
    }, [response, onClose]);

    return (
        <div
            className="fixed top-0 left-0 flex justify-center items-center w-full p-4 h-screen text-white z-50 backdrop-blur bg-black bg-opacity-50">
            <div
                className="animate-appear sm:max-w-md w-full gradient-border p-4 rounded-2xl bg-[linear-gradient(135deg,_#ffffff21,_#d9d9d900)] bg-black relative">
                <button onClick={onClose}
                        className="bg-white bg-opacity-50 hover:bg-opacity-100 active:bg-opacity-100 transition-all duration-300 absolute top-0 right-0 m-4 rounded-full">
                    <CloseIcon/>
                </button>
                <div>
                    <div>
                        <p className="text-2xl mb-2">Let&apos;s chat,</p>
                        <p className="text-secondary-text">Tell us a bit about your needs, and our team will get back to
                            you with tailored insights. Fill
                            out the form below to schedule your free consultation.</p>
                    </div>
                    <form
                        className="mt-8"
                        onSubmit={(e) => handleSubmit(e)}>
                        <InputField id="name" label="Name" placeholder="Name" type="text" required={true}/>
                        <InputField id="email" label="Email" placeholder="Email" type="email" required={true}/>
                        <InputField id="user-subject" label="Subject" placeholder="Subject" type="text"
                                    required={true}/>
                        <TextArea label="description" id="description" placeholder="Description" required={true}/>
                        <button
                            className="w-full py-2 bg-primary-blue mt-2 rounded-2xl gradient-border"
                            type="submit">Submit
                        </button>
                        <p className={`mt-2 font-light text-center ${response.error ? 'text-red-400' : 'text-secondary-text'}`}>{response.message}</p>
                    </form>
                </div>
            </div>
        </div>
    )
}