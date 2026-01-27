import React from 'react';
import { Rocket, Calendar, Banknote, Briefcase, GraduationCap, Users } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, color }) => (
    <div className="group relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        <div className={`absolute top-0 right-0 p-20 opacity-10 rounded-bl-full bg-gradient-to-br from-transparent to-${color}-500 transition-opacity group-hover:opacity-20`}></div>
        <div className={`w-12 h-12 rounded-lg bg-${color}-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`w-6 h-6 text-${color}-400`} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
);

const Features = () => {
    const features = [
        {
            icon: Rocket,
            title: "Builder Support",
            description: "Get technical support, mentorship, and resources to launch your project on Solana.",
            color: "brazil-green" // mapped via classnames or custom logic, simplifying here
        },
        {
            icon: Calendar,
            title: "Events & Hackathons",
            description: "Participate in local meetups, workshops, and global hackathons.",
            color: "brazil-yellow"
        },
        {
            icon: Banknote,
            title: "Grants & Funding",
            description: "Access Foundation grants and VC connections to fund your startup.",
            color: "brazil-blue"
        },
        {
            icon: Briefcase,
            title: "Earn Opportunities",
            description: "Find bounties, jobs, and freelance gigs in the Solana ecosystem.",
            color: "purple"
        },
        {
            icon: GraduationCap,
            title: "Education",
            description: "Master Rust and Solana development with our tailored curriculum.",
            color: "pink"
        },
        {
            icon: Users,
            title: "Network",
            description: "Connect with the top founders and developers in Brazil and beyond.",
            color: "orange"
        }
    ];

    return (
        <section id="mission" className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Do</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We are here to empower the next generation of Brazilian heavy hitters in crypto.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="group relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-brazil-green/30">
                            <feature.icon className="w-10 h-10 text-brazil-green mb-4 group-hover:text-brazil-yellow transition-colors" />
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
