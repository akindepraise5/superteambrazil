import React from 'react';
import { Send, MessageCircle } from 'lucide-react';

const CTA = () => {
    return (
        <section id="join" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-brazil-green/10 to-brazil-blue/10 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Ready to Build With Us?</h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    Join 2,000+ others in the fastest growing Web3 community in Latin America.
                    Your journey starts here.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <button className="flex items-center px-8 py-4 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-blue-900/20">
                        <Send className="w-5 h-5 mr-2" />
                        Join Telegram
                    </button>
                    <button className="flex items-center px-8 py-4 bg-[#5865F2] hover:bg-[#4752c4] text-white rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-indigo-900/20">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Join Discord
                    </button>
                </div>

                <div className="max-w-md mx-auto bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <h3 className="font-bold text-lg mb-2">Subscribe to our Newsletter</h3>
                    <p className="text-sm text-gray-400 mb-4">Get the latest grants, bounties, and news delivered to your inbox.</p>
                    <form className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brazil-green transition-colors"
                        />
                        <button className="bg-brazil-green text-black font-bold px-4 py-2 rounded-lg hover:bg-brazil-green/90 transition-colors">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CTA;
