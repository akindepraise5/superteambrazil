import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ content, author, role, image }) => (
    <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-2xl relative">
        <Quote className="w-8 h-8 text-brazil-green/20 absolute top-6 right-6" />
        <p className="text-gray-300 mb-6 relative z-10 leading-relaxed">"{content}"</p>
        <div className="flex items-center space-x-3">
            <img src={image} alt={author} className="w-10 h-10 rounded-full bg-gray-700 object-cover" />
            <div>
                <h4 className="text-white font-bold text-sm">{author}</h4>
                <p className="text-gray-500 text-xs">{role}</p>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    const testimonials = [
        {
            content: "Superteam Brazil helped me find my first grant for my DeFi project. The support from the community is unmatched.",
            author: "Carlos Mendez",
            role: "Founder, SolanaDeFi",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            content: "I went from knowing nothing about Rust to winning a hackathon prize in 3 months thanks to the study groups.",
            author: "Fernanda Lima",
            role: "Developer",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            content: "The best place to network with serious builders in the region. Highly recommended.",
            author: "Roberto Silva",
            role: "VC Analyst",
            image: "https://randomuser.me/api/portraits/men/86.jpg"
        }
    ];

    return (
        <section className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Community <span className="text-brazil-green">Love</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
