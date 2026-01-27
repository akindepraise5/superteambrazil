import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Events from './components/Events';
import Members from './components/Members';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-brazil-green selection:text-black overflow-x-hidden">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Stats />
                <Events />
                <Members />
                <Partners />
                <Testimonials />
                <FAQ />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}

export default App;
