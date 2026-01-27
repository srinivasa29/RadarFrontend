import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Activity, Search, Bell, Menu, X
} from 'lucide-react';

// New Sections
import HeroSection from '../components/landing/HeroSection';
import GlobalAssetSection from '../components/landing/GlobalAssetSection';
import TraderModeSection from '../components/landing/TraderModeSection';
import InvestorModeSection from '../components/landing/InvestorModeSection';

// --- Navbar ---
const Navbar = () => (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-xl bg-[#103E46]/80 border-b border-[#6FFFE9]/10 transition-all duration-300">
        {/* Left: Logo & Menu */}
        <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
                <div className="relative">
                    <img
                        src="/radar-logo-final.jpg"
                        alt="Radar Logo"
                        className="h-10 w-auto rounded-full object-contain"
                    />
                </div>
                <span className="text-2xl font-black text-white tracking-tighter font-['Plus_Jakarta_Sans']">RADAR</span>
            </div>

            <div className="hidden lg:flex items-center gap-6 text-sm font-bold text-white/70">
                <a href="#" className="hover:text-[#6FFFE9] transition-colors">Overview</a>
                <a href="#" className="hover:text-[#6FFFE9] transition-colors">Assets</a>
                <a href="#" className="hover:text-[#6FFFE9] transition-colors">Watchlist</a>
                <a href="#" className="hover:text-[#6FFFE9] transition-colors">Signals</a>
                <a href="#" className="hover:text-[#6FFFE9] transition-colors">Insights</a>
            </div>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0F3942]/50 border border-white/10 text-white/50 text-sm focus-within:border-[#6FFFE9]/50 focus-within:text-white transition-all">
                <Search size={14} />
                <input
                    type="text"
                    placeholder="Search AAPL / BTC..."
                    className="bg-transparent border-none outline-none text-white w-32 focus:w-48 transition-all placeholder:text-white/30"
                />
            </div>

            <button className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all relative">
                <Bell size={18} />
                <span className="absolute top-1.5 right-2 w-2 h-2 bg-[#4ADE80] rounded-full"></span>
            </button>

            <div className="h-6 w-[1px] bg-white/10 mx-1"></div>

            <div className="flex gap-2">
                <a href="/login" className="px-4 py-2 text-sm font-bold text-white/80 hover:text-white">Log In</a>
            </div>
        </div>
    </nav>
);

// --- Footer ---
const Footer = () => (
    <footer className="relative z-10 pt-20 pb-10 border-t border-[#6FFFE9]/10 bg-[#0D343B]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1">
                <div className="flex items-center gap-2 mb-6">
                    <img src="/radar-logo-final.jpg" alt="Radar Logo" className="h-8 w-auto rounded-full object-contain" />
                    <span className="text-xl font-bold text-white tracking-widest">RADAR</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                    The advanced analytics platform for modern traders and investors. Real-time data, AI insights, and professional tools.
                </p>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6">Product</h4>
                <ul className="space-y-4 text-sm text-white/50">
                    <li><a href="#" className="hover:text-[#6FFFE9] transition-colors">Trade Center</a></li>
                    <li><a href="#" className="hover:text-[#6FFFE9] transition-colors">Pro Mode</a></li>
                    <li><a href="#" className="hover:text-[#6FFFE9] transition-colors">Live Pulse</a></li>
                    <li><a href="#" className="hover:text-[#6FFFE9] transition-colors">APIs</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6">Resources</h4>
                <ul className="space-y-4 text-sm text-white/50">
                    <li><a href="#" className="hover:text-[#6FFFE9] transition-colors">Learning Lab</a></li>
                    <li><a href="#" className="hover:text-[#6FFFE9] transition-colors">Market Circle</a></li>
                    <li><a href="#" className="hover:text-[#6FFFE9] transition-colors">Documentation</a></li>
                    <li><a href="#" className="hover:text-[#6FFFE9] transition-colors">Ask Pulse AI</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6">Support</h4>
                <ul className="space-y-4 text-sm text-white/50">
                    <li><a href="#" className="hover:text-[#6FFFE9] transition-colors">Help Center</a></li>
                    <li><a href="#" className="hover:text-[#6FFFE9] transition-colors">Security</a></li>
                    <li><a href="#" className="hover:text-[#6FFFE9] transition-colors">Contact Us</a></li>
                </ul>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
            <p>© 2026 Radar Financial Analytics. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
        </div>
    </footer>
);

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#103E46] via-[#1A7870] to-[#42C0A5] text-white font-sans selection:bg-radar-cyan selection:text-radar-dark overflow-x-hidden">
            <Navbar />

            <main className="pt-20">
                <HeroSection />
                <GlobalAssetSection />
                <TraderModeSection />
                <InvestorModeSection />
            </main>

            <Footer />
        </div>
    );
}
