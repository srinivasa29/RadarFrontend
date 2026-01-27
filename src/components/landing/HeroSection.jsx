import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplitScreenSection from './SplitScreenSection';
import { TrendingUp, Activity, Layers, Smartphone, Monitor } from 'lucide-react';

const HeroSection = () => {
    const [activeMode, setActiveMode] = useState('investor'); // 'investor' or 'trader'

    // Auto-toggle for demonstration
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveMode(prev => prev === 'investor' ? 'trader' : 'investor');
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const features = [
        {
            title: "One Platform, Two Personas",
            text: "Seamlessly toggle between a 'Lite' investor view and a 'Pro' trading desk."
        },
        {
            title: "Tailored Complexity",
            text: "Radar adjusts tools and data density to match your expertise level."
        },
        {
            title: "Smart Persistence",
            text: "Your layout preference is remembered across every session."
        }
    ];

    const VisualComponent = () => (
        <div className="relative w-full max-w-sm mx-auto h-[400px]">
            {/* Background Glow */}
            <div
                className={`absolute inset-0 blur-[80px] transition-colors duration-1000 ${activeMode === 'investor' ? 'bg-radar-green/20' : 'bg-radar-blue/20'
                    }`}
            />

            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                {/* Toggle Switch Visual */}
                <div className="bg-radar-bg/80 backdrop-blur-md rounded-full p-2 border border-white/10 mb-8 flex relative w-64">
                    <motion.div
                        layout
                        className="absolute top-2 bottom-2 w-[calc(50%-8px)] bg-white/10 rounded-full shadow-lg"
                        animate={{
                            x: activeMode === 'investor' ? 0 : '100%',
                            backgroundColor: activeMode === 'investor' ? '#10C29E' : '#3B82F6'
                        }}
                    />
                    <button
                        className={`flex-1 relative z-10 text-sm font-bold py-3 text-center transition-colors ${activeMode === 'investor' ? 'text-white' : 'text-gray-400'}`}
                        onClick={() => setActiveMode('investor')}
                    >
                        INVESTOR
                    </button>
                    <button
                        className={`flex-1 relative z-10 text-sm font-bold py-3 text-center transition-colors ${activeMode === 'trader' ? 'text-white' : 'text-gray-400'}`}
                        onClick={() => setActiveMode('trader')}
                    >
                        TRADER
                    </button>
                </div>

                {/* Dynamic Card */}
                <div className="w-full relative h-64 perspective-1000">
                    <AnimatePresence mode='wait'>
                        {activeMode === 'investor' ? (
                            <motion.div
                                key="investor"
                                initial={{ rotateY: -90, opacity: 0 }}
                                animate={{ rotateY: 0, opacity: 1 }}
                                exit={{ rotateY: 90, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 bg-gradient-to-br from-radar-teal/20 to-radar-bg border border-radar-teal/30 rounded-2xl p-6 shadow-2xl backdrop-blur-xl"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h4 className="text-gray-400 text-xs uppercase tracking-wider">Total Balance</h4>
                                        <div className="text-3xl font-bold text-white mt-1">$14,230.50</div>
                                    </div>
                                    <div className="bg-radar-green/20 text-radar-green px-2 py-1 rounded text-xs font-bold">+2.4%</div>
                                </div>
                                <div className="h-24 flex items-end justify-between gap-1 mb-4">
                                    {[40, 60, 45, 70, 65, 80, 75].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ delay: i * 0.05 }}
                                            className="w-full bg-radar-teal/50 rounded-t-sm"
                                        />
                                    ))}
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 bg-white/5 rounded-full w-3/4" />
                                    <div className="h-2 bg-white/5 rounded-full w-1/2" />
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="trader"
                                initial={{ rotateY: -90, opacity: 0 }}
                                animate={{ rotateY: 0, opacity: 1 }}
                                exit={{ rotateY: 90, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 bg-gradient-to-br from-radar-blue/20 to-radar-bg border border-radar-blue/30 rounded-2xl p-4 shadow-2xl backdrop-blur-xl"
                            >
                                <div className="grid grid-cols-2 gap-2 mb-2">
                                    <div className="bg-black/40 rounded p-2 border border-white/5">
                                        <div className="text-[10px] text-gray-500">BID</div>
                                        <div className="text-radar-green font-mono text-sm">1.0921</div>
                                    </div>
                                    <div className="bg-black/40 rounded p-2 border border-white/5">
                                        <div className="text-[10px] text-gray-500">ASK</div>
                                        <div className="text-red-400 font-mono text-sm">1.0924</div>
                                    </div>
                                </div>
                                <div className="flex-1 bg-black/40 rounded border border-white/5 p-2 h-32 relative overflow-hidden">
                                    {/* Mock Candlesticks */}
                                    <div className="flex items-end justify-between h-full gap-[2px]">
                                        {[...Array(20)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`w-full rounded-sm ${i % 2 === 0 ? 'bg-radar-green' : 'bg-red-500'}`}
                                                style={{ height: `${Math.random() * 80 + 10}%`, opacity: 0.8 }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );

    return (
        <SplitScreenSection
            id="adaptive-interface"
            title="The Adaptive Interface"
            description="Whether you're building long-term wealth or capitalizing on short-term volatility, Radar adapts to you."
            features={features}
            imageComp={<VisualComponent />}
            reverse={false}
        />
    );
};

export default HeroSection;
