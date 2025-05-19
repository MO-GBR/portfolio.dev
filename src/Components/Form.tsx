import emailjs from '@emailjs/browser';
import { useRef, type FormEvent } from 'react';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, { publicKey: PUBLIC_KEY })
            .then(() => alert("Email sent successfully!"))
            .catch((e: Error) => console.log(e));
        e.currentTarget.reset();
    };

    return (
        <form className="ContactForm" onSubmit={handleOnSubmit} ref={formRef}>
            <p className="text-gray-400 text-sm">GET IN TOUCH</p>
            <h1 className="text-4xl font-bold my-3">Contact.</h1>
            <div className="my-5">
                <label>
                    <span>Your Name</span>
                    <div className="bg-[#050816] p-3 rounded-lg">
                        <input placeholder="Write your name here" type="text" id="from_name" name="from_name" required />
                    </div>
                </label>
            </div>
            <div className="my-5">
                <label>
                    <span>Your Email</span>
                    <div className="bg-[#050816] p-3 rounded-lg">
                        <input placeholder="Write your name here" type="email" id="from_email" name="from_email" required />
                    </div>
                </label>
            </div>
            <div className="my-5">
                <label>
                    <span>Your Message</span>
                    <div className="bg-[#050816] p-3 rounded-lg">
                        <textarea placeholder="Write your name here" name="message" required />
                    </div>
                </label>
            </div>
            <button className="bg-[#050816] p-3 rounded-xl text-xl font-bold cursor-pointer hover:bg-violet-800/20" type="submit">Send</button>
        </form>
    )
}

export default ContactForm