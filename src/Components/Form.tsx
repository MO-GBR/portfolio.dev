const ContactForm = () => {
    return (
        <form className="ContactForm">
            <p className="text-gray-400 text-sm">GET IN TOUCH</p>
            <h1 className="text-4xl font-bold my-3">Contact.</h1>
            <div className="my-5">
                <label>
                    <span>Your Name</span>
                    <div className="bg-[#050816] p-3 rounded-lg">
                        <input placeholder="Write your name here" />
                    </div>
                </label>
            </div>
            <div className="my-5">
                <label>
                    <span>Your Email</span>
                    <div className="bg-[#050816] p-3 rounded-lg">
                        <input placeholder="Write your name here" />
                    </div>
                </label>
            </div>
            <div className="my-5">
                <label>
                    <span>Your Message</span>
                    <div className="bg-[#050816] p-3 rounded-lg">
                        <textarea placeholder="Write your name here" />
                    </div>
                </label>
            </div>
            <button className="bg-[#050816] p-3 rounded-xl text-xl font-bold cursor-pointer hover:bg-violet-800/20">Send</button>
        </form>
    )
}

export default ContactForm