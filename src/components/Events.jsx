import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const EventCard = ({ title, date, location, type, image }) => (
    <div className="flex flex-col bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-brazil-green/50 transition-colors group">
        <div className="h-48 bg-gray-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
            {/* Placeholder for event image */}
            <div className={`w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500`} style={{ backgroundImage: `url(${image})` }}></div>
            <div className="absolute top-4 left-4 z-20">
                <span className="bg-brazil-green text-black text-xs font-bold px-3 py-1 rounded-full uppercase">{type}</span>
            </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center text-sm text-gray-400 mb-3 space-x-4">
                <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-brazil-yellow" />
                    {date}
                </div>
                <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-brazil-blue" />
                    {location}
                </div>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-brazil-green transition-colors">{title}</h3>
            <div className="mt-auto pt-4">
                <button className="w-full flex items-center justify-between text-sm font-bold uppercase tracking-wider hover:text-brazil-yellow transition-colors">
                    Register Now <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    </div>
);

const Events = () => {
    const events = [
        {
            title: "Solana Rio Meetup",
            date: "Oct 24, 2026",
            location: "Rio de Janeiro",
            type: "Meetup",
            image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Superteam Build Station",
            date: "Nov 02, 2026",
            location: "São Paulo",
            type: "Hackathon",
            image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "DeFi Summit Brazil",
            date: "Nov 15, 2026",
            location: "Florianopolis",
            type: "Conference",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2072&auto=format&fit=crop"
        }
    ];

    return (
        <section id="events" className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Upcoming Events</h2>
                        <p className="text-gray-400 max-w-xl">Join the community at our next gathering. Always free, always open.</p>
                    </div>
                    <button className="mt-6 md:mt-0 px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                        View All Events
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {events.map((event, idx) => (
                        <EventCard key={idx} {...event} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
