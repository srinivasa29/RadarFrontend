import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    ArrowRight, Activity, Shield, Globe, Zap, TrendingUp, Search,
    Bell, User, Briefcase, Layout, Layers, BarChart2, Radio, BookOpen, Menu, X
} from 'lucide-react';
import MarketFloorAnimation from '../components/MarketFloorAnimation';
import TickerTape from '../components/landing/TickerTape';
import AssetExplorer from '../components/landing/AssetExplorer';
import WatchlistHub from '../components/landing/WatchlistHub';
import NewsSentiment from '../components/landing/NewsSentiment';
import MarketTable from '../components/landing/MarketTable';

// --- Navbar ---
const Navbar = () => (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-xl bg-[#0b1d21]/80 border-b border-white/5 supports-[backdrop-filter]:bg-[#0b1d21]/60 transition-all duration-300">
        {/* Left: Logo & Menu */}
        <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#6FFFE9] to-[#103E46] p-0.5 shadow-lg shadow-[#42C0A5]/20">
                    <div className="w-full h-full bg-[#103E46] rounded-[10px] flex items-center justify-center border border-white/10">
                        <Activity size={20} className="text-[#6FFFE9]" />
                    </div>
                </div>
                <span className="text-2xl font-black text-white tracking-tighter font-['Plus_Jakarta_Sans']">RADAR</span>
            </div>

            <div className="hidden lg:flex items-center gap-6 text-sm font-bold text-white/60">
                <a href="#" className="hover:text-[#6FFFE9] transition-colors">Overview</a>
                <a href="#" className="hover:text-[#6FFFE9] transition-colors">Assets</a>
                <a href="#" className="hover:text-[#6FFFE9] transition-colors">Watchlist</a>
                <a href="#" className="hover:text-[#6FFFE9] transition-colors">Signals</a>
                <a href="#" className="hover:text-[#6FFFE9] transition-colors">Insights</a>
                <a href="#" className="hover:text-[#6FFFE9] transition-colors">Learn</a>
            </div>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-sm focus-within:border-[#42C0A5]/50 focus-within:text-white transition-all">
                <Search size={14} />
                <input
                    type="text"
                    placeholder="Search AAPL / BTC..."
                    className="bg-transparent border-none outline-none text-white w-32 focus:w-48 transition-all placeholder:text-white/20"
                />
            </div>

            <button className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all relative">
                <Bell size={18} />
                <span className="absolute top-1.5 right-2 w-2 h-2 bg-[#42C0A5] rounded-full"></span>
            </button>

            <div className="h-6 w-[1px] bg-white/10 mx-1"></div>

            <div className="flex gap-2">
                <button className="px-4 py-2 text-sm font-bold text-white/80 hover:text-white">Log In</button>
                <a href="/register" className="hidden sm:flex px-5 py-2 rounded-lg bg-[#42C0A5] text-[#103E46] font-bold text-sm hover:bg-[#6FFFE9] transition-all shadow-[0_0_15px_rgba(66,192,165,0.3)] items-center gap-2">
                    Start Tracking
                </a>
            </div>
        </div>
    </nav>
);

// --- Feature Cards ---
const FeatureCard = ({ icon: Icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="p-6 rounded-2xl bg-[#11292F] border border-white/5 hover:border-[#42C0A5]/30 hover:bg-[#15343B] transition-all group cursor-default"
    >
        <div className="w-12 h-12 rounded-lg bg-[#42C0A5]/10 flex items-center justify-center mb-4 text-[#42C0A5] group-hover:scale-110 transition-transform">
            <Icon size={24} />
        </div>
        <h3 className="text-lg font-bold text-white mb-2 font-['Plus_Jakarta_Sans'] group-hover:text-[#6FFFE9] transition-colors">{title}</h3>
        <p className="text-[#B9F3EA]/60 text-sm leading-relaxed">{desc}</p>
    </motion.div>
);

export default function Home() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);

    // Mode Toggle State for Visual Demo
    const [demoMode, setDemoMode] = useState('TRADER');

    return (
        <div className="min-h-screen bg-[#051419] text-white relative overflow-x-hidden font-sans selection:bg-[#42C0A5] selection:text-[#103E46]">

            {/* --- Background Theme --- */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[#051419]" />
                <motion.div style={{ y: y1 }} className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-[#103E46]/30 rounded-full blur-[150px]" />
                <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-[#42C0A5]/10 rounded-full blur-[150px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
            </div>

            <Navbar />

            {/* --- Hero Section --- */}
            <header className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative z-10"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#42C0A5]/10 border border-[#42C0A5]/20 text-[#6FFFE9] font-bold text-[10px] tracking-widest uppercase mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#42C0A5] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#42C0A5]"></span>
                            </span>
                            Live Multi-Asset Dashboard
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.05] mb-6 font-['Plus_Jakarta_Sans'] tracking-tight">
                            Track Stocks, <br />
                            Crypto & Forex. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FFFE9] to-[#42C0A5]">All in One.</span>
                        </h1>

                        <p className="text-lg text-[#B9F3EA]/70 mb-8 max-w-lg leading-relaxed font-medium">
                            Switch between <span className="text-white border-b border-[#42C0A5]">Trader Mode</span> (technical charts) and <span className="text-white border-b border-[#42C0A5]">Investor Mode</span> (clean growth view) instantly.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="/register" className="px-8 py-4 rounded-xl bg-[#42C0A5] text-[#103E46] font-bold text-base hover:bg-[#6FFFE9] transition-all shadow-[0_10px_30px_-10px_rgba(66,192,165,0.4)] flex items-center gap-2">
                                Start Tracking
                            </a>
                            <a href="/dashboard" className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-base hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-2">
                                Try Demo Mode
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Market Floor Animation (The "Visual Hook") */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="lg:w-1/2 w-full h-[400px] lg:h-[500px] flex items-center justify-center relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-[#051419] via-transparent to-transparent z-10"></div>
                        <div className="scale-100 lg:scale-110">
                            <MarketFloorAnimation />
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* --- Features Strip --- */}
            <section className="relative z-10 px-6 -mt-10 mb-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <FeatureCard
                        icon={Activity}
                        title="Live Multi-Asset"
                        desc="Real-time price movement for stocks, crypto, and forex pairs in one unified view."
                        delay={0.1}
                    />
                    <FeatureCard
                        icon={Layout}
                        title="Dual Mode UI"
                        desc="Toggle between Trader UI (Technical) and Investor UI (Growth) with one click."
                        delay={0.2}
                    />
                    <FeatureCard
                        icon={BookOpen}
                        title="Smart Watchlist"
                        desc="Add mixed assets like AAPL, BTC-USD, EUR/USD and compare relative strengths instantly."
                        delay={0.3}
                    />
                    <FeatureCard
                        icon={Zap}
                        title="Insight Engine"
                        desc="Get volatility alerts, trend signals, and activity insights from market movement."
                        delay={0.4}
                    />
                </div>
            </section>

            {/* --- Dashboard Sections (The "Core" Content) --- */}
            <section className="relative z-10 py-12 px-6 bg-[#08181D]/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto">

                    {/* Ticker Tape Separator */}
                    <div className="mb-12 opacity-80">
                        <TickerTape />
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8">

                        {/* LEFT COLUMN: Asset Explorer & Snapshot (8 cols) */}
                        <div className="lg:col-span-8 flex flex-col gap-8">

                            {/* 1. Asset Explorer */}
                            <AssetExplorer />

                            {/* 2. Mode Demonstration (Chart Zone) */}
                            <div className="bg-[#0b1d21] rounded-3xl border border-white/10 p-8 overflow-hidden relative min-h-[400px]">
                                <div className="flex justify-between items-center mb-6 z-20 relative">
                                    <div>
                                        <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">Pro Chart Zone</h3>
                                        <p className="text-white/40 text-sm">Advanced technical analysis with 50+ indicators.</p>
                                    </div>

                                    {/* Mode Toggle UI */}
                                    <div className="bg-black/40 rounded-lg p-1 flex gap-1 border border-white/5">
                                        <button
                                            onClick={() => setDemoMode('TRADER')}
                                            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${demoMode === 'TRADER' ? 'bg-[#42C0A5] text-[#103E46]' : 'text-white/50 hover:text-white'}`}
                                        >
                                            Trader
                                        </button>
                                        <button
                                            onClick={() => setDemoMode('INVESTOR')}
                                            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${demoMode === 'INVESTOR' ? 'bg-[#42C0A5] text-[#103E46]' : 'text-white/50 hover:text-white'}`}
                                        >
                                            Investor
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full h-[300px] border border-white/5 rounded-xl bg-black/20 relative flex items-center justify-center z-10 transition-all duration-500">
                                    {/* This is a visual placeholder for the landing page */}
                                    {demoMode === 'TRADER' ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            key="trader"
                                            className="text-center opacity-70"
                                        >
                                            <Activity size={48} className="mx-auto mb-4 text-[#42C0A5]" />
                                            <p className="font-mono text-[#42C0A5] text-lg">Rendering Candlestick Pattern...</p>
                                            <p className="text-white/30 text-xs mt-2">RSI • MACD • Bollinger Bands Active</p>
                                            <div className="flex gap-2 justify-center mt-4">
                                                <span className="w-12 h-1 bg-red-500/50 rounded-full"></span>
                                                <span className="w-8 h-1 bg-green-500/50 rounded-full"></span>
                                                <span className="w-16 h-1 bg-red-500/50 rounded-full"></span>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            key="investor"
                                            className="text-center opacity-70"
                                        >
                                            <TrendingUp size={48} className="mx-auto mb-4 text-[#6FFFE9]" />
                                            <p className="font-sans font-bold text-[#6FFFE9] text-xl">Portfolio Growth +12.5%</p>
                                            <p className="text-white/30 text-xs mt-2">Long Term Projection • Dividends • Risk Meter</p>
                                            <div className="w-48 h-2 bg-white/10 rounded-full mt-4 mx-auto overflow-hidden">
                                                <div className="w-2/3 h-full bg-gradient-to-r from-[#6FFFE9] to-[#42C0A5]"></div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Fake Grid Lines */}
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
                                </div>

                                {/* Decorative Glow */}
                                <div className={`absolute bottom-0 right-0 w-64 h-64 rounded-full blur-[100px] transition-colors duration-1000 ${demoMode === 'TRADER' ? 'bg-[#42C0A5]/10' : 'bg-[#6FFFE9]/10'}`}></div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Watchlist & Signals (4 cols) */}
                        <div className="lg:col-span-4 flex flex-col gap-8 h-full">
                            {/* 3. Market Snapshot (Mini) */}
                            <MarketTable />

                            {/* 4. Watchlist Hub */}
                            <WatchlistHub />

                            {/* 5. News & Sentiment */}
                            <div className="flex-1 min-h-[300px]">
                                <NewsSentiment />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- Footer --- */}
            <footer className="relative z-10 pt-20 pb-10 border-t border-white/5 bg-[#051419]">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Activity className="text-[#42C0A5]" />
                            <span className="text-xl font-bold text-white tracking-widest">RADAR</span>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed">
                            The advanced analytics platform for modern traders and investors. Real-time data, AI insights, and professional tools.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-white/50">
                            <li><a href="#" className="hover:text-[#42C0A5] transition-colors">Trade Center</a></li>
                            <li><a href="#" className="hover:text-[#42C0A5] transition-colors">Pro Mode</a></li>
                            <li><a href="#" className="hover:text-[#42C0A5] transition-colors">Live Pulse</a></li>
                            <li><a href="#" className="hover:text-[#42C0A5] transition-colors">APIs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm text-white/50">
                            <li><a href="#" className="hover:text-[#42C0A5] transition-colors">Learning Lab</a></li>
                            <li><a href="#" className="hover:text-[#42C0A5] transition-colors">Market Circle</a></li>
                            <li><a href="#" className="hover:text-[#42C0A5] transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-[#42C0A5] transition-colors">Ask Pulse AI</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Support</h4>
                        <ul className="space-y-4 text-sm text-white/50">
                            <li><a href="#" className="hover:text-[#42C0A5] transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-[#42C0A5] transition-colors">Security</a></li>
                            <li><a href="#" className="hover:text-[#42C0A5] transition-colors">Contact Us</a></li>
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
        </div>
    );
}
