import React, { useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
    const [email, setEmail] = useState("");
    const handleSubmit =(e) => {
        e.preventDefault();
        if(!email.trim()) return;
        alert(`Subscribed with ${email}`); // just a placeholder
        setEmail("");
    }

    return(
        <section className="bg-gray-950 p-6 text-white mt-[5rem]">
            <motion.div
                className="pt-7"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="bg-gray-950 rounded-2xl multi-shadow">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-3 p-4 text-center">
                        <h4 className="text-2xl mb-3 md:mb-0">Get exclusive offers and updates directly to your inbox</h4>
                        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center bg-white p-5 rounded-md gap-2">
                            <input 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="Enter your email address"
                                className="border border-zinc-300 bg-white rounded-md text-sm p-2 text-black w-[280px] outline-0" 
                                required
                            />
                            <button 
                                type="submit" 
                                className="font-bold px-3 btn cursor-pointer text-sm hover:font-black border border-zinc-300 rounded-md shadow py-2"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <motion.div
                    className="flex justify-center items-center py-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="text-sm grid grid-cols-2 gap-20 lg:gap-[200px] md:grid-cols-3 lg:grid-cols-4">
                        {[
                            { title: "Discover", links: ["About Us", "Our Services", "Testimonials", "Careers"] },
                            { title: "Assistance", links: ["Help Center", "Return Policy", "Terms of Service", "Privacy Policy"] },
                            { title: "Explore", links: ["Blog Articles", "Guides & Tutorials", "Partner with Us", "Contact Us"] },
                            { title: "Connect", links: ["Community Forums", "Events & Webinars", "Social Media", "Newsletter"] },
                        ].map((section, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, y: 50 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 * i }}
                            >
                                <p className="font-bold">{section.title}</p>
                                <ul className="flex flex-col gap-2 text-xs pt-1">
                                    {section.links.map((link, idx) => (
                                        <li key={idx}>{link}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <p className="text-center text-sm pt-10">&copy; 2025 Aghogho Ogbotor. All Rights Reserved</p>
            </motion.div>
        </section>
    )
}

export default Footer;
