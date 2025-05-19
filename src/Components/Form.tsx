import emailjs from 'emailjs-com';
import { useState, type ChangeEvent, type FormEvent } from 'react';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
    const [formData, setFormData] = useState({ from_name: "", from_email: "", message: "" });

    const handleChange = (e: ChangeEvent) => {
        setFormData({ ...formData, [e.target.nodeName]: e.target.nodeValue });
    };

    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
            .then(() => alert("Email sent successfully!"))
            .catch((e: unknown) => console.log(e));
    };

    return (
        <form className="ContactForm" onSubmit={handleOnSubmit}>
            <p className="text-gray-400 text-sm">GET IN TOUCH</p>
            <h1 className="text-4xl font-bold my-3">Contact.</h1>
            <div className="my-5">
                <label>
                    <span>Your Name</span>
                    <div className="bg-[#050816] p-3 rounded-lg">
                        <input placeholder="Write your name here" type="text" id="from_name" name="from_name" onChange={handleChange} required />
                    </div>
                </label>
            </div>
            <div className="my-5">
                <label>
                    <span>Your Email</span>
                    <div className="bg-[#050816] p-3 rounded-lg">
                        <input placeholder="Write your name here" type="email" id="from_email" name="from_email" onChange={handleChange} required />
                    </div>
                </label>
            </div>
            <div className="my-5">
                <label>
                    <span>Your Message</span>
                    <div className="bg-[#050816] p-3 rounded-lg">
                        <textarea placeholder="Write your name here" name="message" onChange={handleChange} required />
                    </div>
                </label>
            </div>
            <button className="bg-[#050816] p-3 rounded-xl text-xl font-bold cursor-pointer hover:bg-violet-800/20" type="submit">Send</button>
        </form>
    )
}

export default ContactForm