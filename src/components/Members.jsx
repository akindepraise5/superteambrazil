import React, { useState } from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';

const MemberCard = ({ name, role, tags, image }) => (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-brazil-green/50 transition-all duration-300">
        <div className="flex items-center space-x-4 mb-4">
            <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover border-2 border-brazil-green/30" />
            <div>
                <h3 className="font-bold text-lg">{name}</h3>
                <p className="text-brazil-green text-sm">{role}</p>
            </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, idx) => (
                <span key={idx} className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">{tag}</span>
            ))}
        </div>
        <div className="flex space-x-3 pt-4 border-t border-white/10">
            <a href="#" className="text-gray-400 hover:text-white"><Twitter size={18} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Github size={18} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={18} /></a>
        </div>
    </div>
);

const Members = () => {
    const [filter, setFilter] = useState('All');
    const filters = ['All', 'Developers', 'Designers', 'Founders'];

    const members = [
        { name: "Ana Silva", role: "Rust Developer", tags: ["Rust", "Anchor", "DeFi"], image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
        { name: "Lucas Oliveira", role: "Product Designer", tags: ["UI/UX", "Figma", "NFTs"], image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
        { name: "Mariana Santos", role: "Founder @ SolPay", tags: ["Business", "Strategy"], image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" },
        { name: "Pedro Costa", role: "Full Stack Dev", tags: ["React", "Web3.js", "Typescript"], image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
        { name: "Julia Pereira", role: "Community Manager", tags: ["Marketing", "Events"], image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" },
        { name: "Rafael Souza", role: "Smart Contract Engineer", tags: ["Security", "Rust"], image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" }
    ];

    return (
        <section id="members" className="py-24 bg-gradient-to-b from-black to-zinc-900 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet the <span className="text-brazil-yellow">Force</span></h2>
                    <p className="text-gray-400">The brilliant minds building the future of Brazil.</p>
                </div>

                <div className="flex justify-center mb-12 space-x-2">
                    {filters.map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${filter === f ? 'bg-brazil-green text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {members
                        .filter(m => filter === 'All' || m.role.includes(filter) || (filter === 'Developers' && (m.role.includes('Dev') || m.role.includes('Engineer'))))
                        .map((member, idx) => (
                            <MemberCard key={idx} {...member} />
                        ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="text-brazil-green font-bold hover:text-white transition-colors border-b border-brazil-green hover:border-white pb-1">
            View Directory ->
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Members;
