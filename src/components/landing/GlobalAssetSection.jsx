import React from 'react';
import { motion } from 'framer-motion';
import SplitScreenSection from './SplitScreenSection';
import { Globe, Search, RefreshCw, Box } from 'lucide-react';

const GlobalAssetSection = () => {

    const features = [
        {
            title: "Unified Multi-Asset Support",
            text: "Track Stocks, Cryptocurrencies, and Forex pairs within a single, normalized dashboard."
        },
        {
            title: "Smart Search",
            text: "A universal search bar that distinguishes between tickers like $AAPL, #BTC, and €EURUSD automatically."
        },
        {
            title: "Real-Time Precision",
            text: "Experience live price ticking and high-frequency data for volatile digital assets."
        }
    ];

    const VisualComponent = () => {
        // Orbital Animation
        const orbits = [
            { radius: 100, speed: 10, icon: "₿", color: "#F7931A", label: "BTC" },
            { radius: 150, speed: 15, icon: "$", color: "#4ADE80", label: "AAPL" },
            { radius: 190, speed: 20, icon: "€", color: "#60A5FA", label: "EUR" },
            { radius: 120, speed: 12, reverse: true, icon: "Ξ", color: "#627EEA", label: "ETH" },
        ];

        return (
            <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] flex items-center justify-center bg-[#134E4A]/60 rounded-full border border-[#2DD4BF]/20 backdrop-blur-md shadow-[0_0_50px_rgba(19,78,74,0.3)]">
                {/* Core */}
                <div className="absolute z-20 w-16 h-16 bg-[#10706B] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,112,107,0.8)] animate-pulse">
                    <Globe className="text-[#6FFFE9] w-8 h-8 animate-spin-slow" />
                </div>

                {/* Background Gradients */}
                <div className="absolute inset-0 bg-[#6FFFE9]/5 blur-3xl rounded-full" />

                {/* Orbits */}
                {orbits.map((orbit, idx) => (
                    <motion.div
                        key={idx}
                        className="absolute rounded-full border border-white/5"
                        style={{
                            width: orbit.radius * 2,
                            height: orbit.radius * 2,
                        }}
                        animate={{ rotate: orbit.reverse ? -360 : 360 }}
                        transition={{ duration: orbit.speed, repeat: Infinity, ease: "linear" }}
                    >
                        <div
                            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-radar-bg border border-white/10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
                            style={{ color: orbit.color }}
                        >
                            {orbit.icon}
                        </div>
                        {/* Comet Tail Effect */}
                        <div className="absolute top-0 left-1/2 w-20 h-[2px] bg-gradient-to-r from-transparent to-white/20 blur-[1px] -translate-x-full rotate-12 origin-right" />
                    </motion.div>
                ))}

                {/* Floating Data Points */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-10 right-0 bg-white/5 backdrop-blur-md rounded-lg p-3 border border-white/10 text-xs"
                >
                    <div className="text-gray-400">USD/JPY</div>
                    <div className="text-radar-green font-mono">145.23 ▲</div>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    className="absolute -bottom-5 left-0 bg-white/5 backdrop-blur-md rounded-lg p-3 border border-white/10 text-xs"
                >
                    <div className="text-gray-400">BTC/USD</div>
                    <div className="text-radar-green font-mono">68,402.10 ▲</div>
                </motion.div>

            </div>
        );
    };

    return (
        <SplitScreenSection
            id="global-assets"
            title="Global Asset Coverage"
            description="Access the world's most traded markets from a single, unified interface."
            features={features}
            imageComp={<VisualComponent />}
            reverse={true} // Alternating
        />
    );
};

export default GlobalAssetSection;
