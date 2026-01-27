import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-brazil-green/20 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-brazil-blue/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-brazil-yellow/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-brazil-green/30 bg-brazil-green/10 text-brazil-green mb-8 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-brazil-green mr-2 animate-pulse"></span>
                        <span className="text-sm font-semibold tracking-wide uppercase">The Solana Hub of Latin America</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                        Building the <span className="bg-clip-text text-transparent bg-gradient-to-r from-brazil-green via-brazil-yellow to-brazil-green bg-[length:200%_auto] animate-gradient text-glow">Future of Solana</span> <br />
                        in Brazil
                    </h1>

                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10">
                        We are the community for builders, founders, and creators.
                        Connect, learn, and launch your projects on the world's most performant blockchain.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="https://t.me/SuperteamDAO" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-black bg-white rounded-full overflow-hidden transition-all duration-300 hover:bg-brazil-yellow hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brazil-yellow">
                            <span className="mr-2">Join Community</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a href="#opportunities" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                            <span className="mr-2">Explore Opportunities</span>
                            <Globe className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>

                {/* Animated Flag/Geometric Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-16 flex justify-center"
                >
                    <div className="relative w-full max-w-4xl h-12 md:h-16 flex items-center justify-center opacity-80">
                        <div className="w-full h-1 bg-gradient-to-r from-transparent via-brazil-green to-transparent"></div>
                        <div className="absolute w-24 h-24 md:w-32 md:h-32 rotate-45 border border-brazil-yellow/30 bg-black backdrop-blur-md flex items-center justify-center">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-brazil-blue/20 rounded-full flex items-center justify-center border border-brazil-blue/40">
                                <div className="w-full h-1 bg-white/20 -rotate-12 transform"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
