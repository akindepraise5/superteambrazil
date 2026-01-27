import React from 'react';

const Partners = () => {
    // Placeholder logos - in prod would be real SVGs
    const partners = Array(8).fill("Solana");

    return (
        <section className="py-20 bg-black border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-8">Trusted by the Ecosystem</p>
                <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((_, i) => (
                        <div key={i} className="text-2xl font-bold text-white flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-white/20"></div>
                            <span>PROJECT {i + 1}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
