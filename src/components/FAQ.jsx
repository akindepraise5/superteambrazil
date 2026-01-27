import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
            >
                <span className="text-lg font-medium text-white">{question}</span>
                {isOpen ? <Minus className="text-brazil-green" /> : <Plus className="text-gray-400" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-gray-400 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "What is Superteam Brazil?",
            answer: "Superteam Brazil is a community of founders, developers, and grantees working on Solana. We help you earn, learn, and build in the crypto ecosystem."
        },
        {
            question: "How do I become a member?",
            answer: "You can start by joining our Discord or Telegram. Full membership is earned by winning bounties, receiving grants, or contributing significantly to the community."
        },
        {
            question: "Do I need to be a developer?",
            answer: "Not at all! We have opportunities for writers, designers, community managers, and business developers. Only about 50% of our members are coders."
        },
        {
            question: "Is it free to join?",
            answer: "Yes, joining the community is completely free. In fact, many members start earning crypto through our bounties within their first week."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-black">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Desperately Asked Questions</h2>
                <div className="space-y-2">
                    {faqs.map((faq, i) => <FAQItem key={i} {...faq} />)}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
