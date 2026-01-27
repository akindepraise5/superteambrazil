import React from 'react';
import { Twitter, Github, Linkedin, Disc } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brazil-green via-brazil-yellow to-brazil-blue flex items-center justify-center mr-2">
                                <span className="font-bold text-black text-sm">S</span>
                            </div>
                            <span className="font-bold text-xl tracking-tight">Superteam <span className="text-brazil-green">Brazil</span></span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering the builders of tomorrow. The talent layer of the Solana ecosystem in Brazil.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Discover</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-brazil-yellow transition-colors">Earn</a></li>
                            <li><a href="#" className="hover:text-brazil-yellow transition-colors">Build</a></li>
                            <li><a href="#" className="hover:text-brazil-yellow transition-colors">Grants</a></li>
                            <li><a href="#" className="hover:text-brazil-yellow transition-colors">Idea Board</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Community</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-brazil-yellow transition-colors">Events</a></li>
                            <li><a href="#" className="hover:text-brazil-yellow transition-colors">Members</a></li>
                            <li><a href="#" className="hover:text-brazil-yellow transition-colors">Twitter (X)</a></li>
                            <li><a href="#" className="hover:text-brazil-yellow transition-colors">Telegram</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-brazil-yellow transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-brazil-yellow transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-brazil-yellow transition-colors">Brand Assets</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © 2026 Superteam Brazil. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Disc size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
