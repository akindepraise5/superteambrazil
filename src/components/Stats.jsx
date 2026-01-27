import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ label, value, prefix = "", suffix = "" }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center p-8 bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl"
    >
        <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2 font-mono">
            {prefix}{value}{suffix}
        </div>
        <div className="text-sm uppercase tracking-wider text-brazil-green font-bold">{label}</div>
    </motion.div>
);

const Stats = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-40 bg-brazil-blue/20 blur-[100px] z-0 pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <StatCard label="Members" value="2,500" suffix="+" />
                    <StatCard label="Events Hosted" value="150" suffix="+" />
                    <StatCard label="Bounties Paid" value="500" prefix="$" suffix="k" />
                    <StatCard label="Projects Shipped" value="85" suffix="+" />
                </div>
            </div>
        </section>
    );
};

export default Stats;
