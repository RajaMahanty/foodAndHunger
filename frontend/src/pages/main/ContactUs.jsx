import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';

const ContactUs = () => {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xdkadwda", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("SUCCESS");
                form.reset();
            } else {
                setStatus("ERROR");
            }
        } catch (error) {
            setStatus("ERROR");
            console.log(error);

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-green-50/30 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Get in <span className="text-green-600">Touch</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Have questions? Have any Issue ? We're here to help you connect and contribute.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info Section */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-green-100 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full -mr-32 -mt-32 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

                        <div className="relative z-10 space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-green-100 rounded-xl text-green-600">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Email Us</p>
                                            <a href="mailto:bugsfounder2021@gmail.com" className="text-gray-600 hover:text-green-600 transition-colors">
                                                bugsfounder2021@gmail.com
                                            </a>
                                            <p className="text-sm text-gray-500 mt-1">
                                                For general queries and issues in getting onboarded on platform.
                                            </p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Send Query Regarding</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Please share any issues you encounter, bugs you identify, or suggestions you may have.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-green-100">
                        {status === "SUCCESS" ? (
                            <div className="text-center py-12 space-y-6 animate-fade-in">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                                    <CheckCircle2 className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                                <p className="text-gray-600">
                                    Thank you for contacting us. We will get back to you shortly.
                                </p>
                                <button
                                    onClick={() => setStatus("")}
                                    className="px-6 py-2 text-green-600 font-semibold hover:bg-green-50 rounded-lg transition-colors"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        required
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </button>

                                {status === "ERROR" && (
                                    <p className="text-red-500 text-center text-sm bg-red-50 py-2 rounded-lg">
                                        Oops! There was a problem submitting your form.
                                    </p>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
