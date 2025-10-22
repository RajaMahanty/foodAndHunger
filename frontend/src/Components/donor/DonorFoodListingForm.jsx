import React, { useState } from "react";
import { Send, UtensilsCrossed, Package, Calendar, Edit, Loader2, CheckCircle } from "lucide-react";

const DonorFoodListing = () => {
    const [foodType, setFoodType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [readyTime, setReadyTime] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // IMPORTANT: Since we are in an iFrame environment, we must avoid `alert()`
    // We will simulate a submission and confirmation on the UI itself.
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitted(false);

        // Simulate API call delay
        setTimeout(() => {
            console.log("Donation Submitted:", { foodType, quantity, readyTime, description });
            setLoading(false);
            setSubmitted(true);

            // Clear form after successful submission
            setFoodType('');
            setQuantity('');
            setReadyTime('');
            setDescription('');
        }, 1500);
    };

    return (
        <div className="w-full overflow-hidden pt-20">
            {/* --- Hero Section --- */}
            <div className="relative w-full py-16 px-4 border-b-2 border-green-500/10">
                <div className="max-w-7xl mx-auto text-center space-y-4">
                    <UtensilsCrossed className="w-16 h-16 mx-auto text-emerald-600 mb-4 animate-bounce-slow" />
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight animate-slide-down">
                        List Your Available <span className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent animate-gradient bg-300">Food Donation</span>
                    </h1>
                    <p className="text-xl opacity-80 max-w-4xl mx-auto animate-slide-down" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                        Provide details about the food you have ready so we can match it instantly with a recipient.
                    </p>
                </div>
            </div>

            {/* --- Form Section --- */}
            <div className="py-20 px-4">
                <div className="max-w-3xl mx-auto p-8 rounded-2xl shadow-2xl border border-gray-200/50">

                    {submitted && (
                        <div className="p-4 mb-6 rounded-xl border border-green-400 text-green-800 flex items-center space-x-3 animate-pop-in">
                            <CheckCircle className="w-6 h-6" />
                            <p className="font-semibold">Thank you! Your donation is listed and being matched with a recipient.</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Food Type */}
                        <div className="relative">
                            <label htmlFor="foodType" className="block text-sm font-medium mb-2">Food Type (e.g., Cooked, Fresh Produce, Canned Goods)</label>
                            <div className="relative">
                                <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
                                <input
                                    type="text"
                                    id="foodType"
                                    value={foodType}
                                    onChange={(e) => setFoodType(e.target.value)}
                                    placeholder="Cooked Chicken & Rice"
                                    required
                                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-150"
                                />
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="relative">
                            <label htmlFor="quantity" className="block text-sm font-medium mb-2">Quantity (e.g., 10 kg, 50 servings, 3 boxes)</label>
                            <div className="relative">
                                <UtensilsCrossed className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
                                <input
                                    type="text"
                                    id="quantity"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    placeholder="10 kg (approx. 40 servings)"
                                    required
                                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-150"
                                />
                            </div>
                        </div>

                        {/* Ready Time */}
                        <div className="relative">
                            <label htmlFor="readyTime" className="block text-sm font-medium mb-2">Ready/Expiration Time</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
                                <input
                                    type="text"
                                    id="readyTime"
                                    value={readyTime}
                                    onChange={(e) => setReadyTime(e.target.value)}
                                    placeholder="Ready for pickup by 4 PM today"
                                    required
                                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-150"
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="relative">
                            <label htmlFor="description" className="block text-sm font-medium mb-2">Additional Details (Ingredients, Allergens, Instructions)</label>
                            <div className="relative">
                                <Edit className="absolute left-3 top-3 w-5 h-5 opacity-50" />
                                <textarea
                                    id="description"
                                    rows="4"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="No nuts, main ingredients are chicken, rice, and mixed vegetables."
                                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-150 resize-none"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full relative overflow-hidden px-8 py-3 rounded-xl font-bold shadow-lg transform transition-all duration-300 hover:scale-[1.01] group text-white bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    Submit Donation Listing
                                </>
                            )}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                        </button>
                    </form>
                </div>
            </div>

            {/* --- Reusing the Home page styles for animations --- */}
            <style>{`
                @keyframes slide-down {
                    from { opacity: 0; transform: translateY(-30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes pop-in {
                    from { opacity: 0; transform: scale(0.8); }
                    to { opacity: 1; transform: scale(1); }
                }
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                .animate-slide-down { animation: slide-down 0.8s ease-out forwards; }
                .animate-pop-in { animation: pop-in 0.6s ease-out forwards; }
                .animate-gradient { background-size: 300% 300%; animation: gradient 4s ease infinite; }
                .animate-bounce-slow { animation: bounce-slow 2s infinite; }
                .bg-300 { background-size: 300%; }
            `}</style>
        </div>
    );
};

export default DonorFoodListing;
