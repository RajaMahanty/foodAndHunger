import React, { useState, useEffect } from "react";
import { ArrowRight, Utensils, Clock, MapPin, AlertTriangle, Package, Heart } from "lucide-react";

// Mock data for recipient needs
const mockRecipientNeeds = [
    { id: 1, name: "Sunset Old Age Home", need: "50 hot meals", type: "Vegetarian", time: "Today, 5 PM pickup", location: "Downtown Shelter", urgency: "High" },
    { id: 2, name: "Community Youth Center", need: "100 school snacks", type: "Non-perishable", time: "Tomorrow Morning delivery", location: "North Side", urgency: "Medium" },
    { id: 3, name: "The Ark Orphanage", need: "30 kg Raw Meat", type: "Raw Ingredients", time: "Anytime pickup", location: "East District", urgency: "High" },
    { id: 4, name: "City Homeless Foundation", need: "80 liters of Soup", type: "Hot Meals", time: "Today, 7 PM delivery", location: "Central Plaza", urgency: "Immediate" },
    { id: 5, name: "Women's Safety House", need: "15 kg Fresh Produce", type: "Raw Ingredients", time: "Tomorrow Afternoon", location: "West End", urgency: "Medium" },
];

const RecipientListing = () => {
    const [isVisible, setIsVisible] = useState({});

    // Intersection Observer Hook for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
                    }
                });
            },
            { threshold: 0.1 }
        );
        document.querySelectorAll('[id^="recipient-need-"]').forEach((el) => {
            observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const handleDonateClick = (needId) => {
        console.log(`Donation initiated for need ID: ${needId}`);
        // In a real app, this would open a donation modal or navigate to a dedicated form.
        alert(`Thank you for wanting to fulfill the need for ${needId}! Redirecting to the donation confirmation page.`);
    };

    const getUrgencyClass = (urgency) => {
        switch (urgency) {
            case 'Immediate':
                return 'bg-red-500 text-white animate-pulse';
            case 'High':
                return 'bg-yellow-400 text-yellow-900';
            default:
                return 'bg-green-400 text-green-900';
        }
    };

    return (
        <div className="w-full overflow-hidden pt-20">
            {/* --- Hero Section --- */}
            <div className="relative w-full py-16 px-4 border-b-2 border-green-500/10">
                <div className="max-w-7xl mx-auto text-center space-y-4">
                    <Utensils className="w-16 h-16 mx-auto text-green-600 mb-4 animate-bounce-slow" />
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight animate-slide-down">
                        Current Food <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent animate-gradient bg-300">Needs Map</span>
                    </h1>
                    <p className="text-xl opacity-80 max-w-4xl mx-auto animate-slide-down" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                        Browse the list below to find a recipient organization that needs your help right now.
                    </p>
                </div>
            </div>

            {/* --- Needs Listing Grid --- */}
            <div className="py-20 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockRecipientNeeds.map((need, idx) => (
                        <div
                            key={need.id}
                            id={`recipient-need-${need.id}`}
                            className="group p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 relative overflow-hidden"
                            style={{
                                animation: isVisible[`recipient-need-${need.id}`] ? `pop-in 0.6s ease-out ${idx * 0.15}s forwards` : 'none',
                                opacity: isVisible[`recipient-need-${need.id}`] ? 1 : 0
                            }}
                        >
                            {/* Urgency Tag */}
                            <span className={`absolute top-0 right-0 px-4 py-2 text-xs font-bold rounded-bl-xl shadow-lg flex items-center gap-1 uppercase ${getUrgencyClass(need.urgency)}`}>
                                <AlertTriangle className="w-3 h-3" /> {need.urgency}
                            </span>

                            {/* Animated Background Accent */}
                            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex items-center space-x-4 mb-4">
                                    <Heart className="w-10 h-10 text-red-500" />
                                    <h3 className="text-2xl font-bold">{need.name}</h3>
                                </div>

                                <p className="text-3xl font-extrabold text-green-600 mb-4">{need.need}</p>

                                <div className="space-y-3 pt-4 border-t border-gray-200/50">
                                    <div className="flex items-center text-sm opacity-80">
                                        <Package className="w-4 h-4 text-emerald-500 mr-2" />
                                        <span>Type: **{need.type}**</span>
                                    </div>
                                    <div className="flex items-center text-sm opacity-80">
                                        <Clock className="w-4 h-4 text-blue-500 mr-2" />
                                        <span>Required By: **{need.time}**</span>
                                    </div>
                                    <div className="flex items-center text-sm opacity-80">
                                        <MapPin className="w-4 h-4 text-green-500 mr-2" />
                                        <span>Location: **{need.location}**</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleDonateClick(need.id)}
                                    className="mt-6 w-full relative overflow-hidden px-6 py-3 rounded-xl font-bold shadow-md transform transition-all duration-300 hover:scale-[1.02] group/btn text-white bg-green-600 hover:bg-green-700"
                                >
                                    <span className="relative flex items-center justify-center gap-2">
                                        Fulfill Need (Donate)
                                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    ))}
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

export default RecipientListing;
