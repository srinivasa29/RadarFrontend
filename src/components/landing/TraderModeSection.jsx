import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import SplitScreenSection from './SplitScreenSection';

const TraderModeSection = () => {

    // Tilt Options
    const defaultOptions = {
        reverse: false,
        max: 15,
        perspective: 1000,
        scale: 1.02,
        speed: 1000,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    }

    const features = [
        {
            title: "Technical Depth",
            text: "Access advanced Candlestick charts, MACD, RSI, and Bollinger Bands."
        },
        {
            title: "Market Depth",
            text: "Real-time order book visualizations and granular historical data at 1-minute intervals."
        },
        {
            title: "Low Latency Execution",
            text: "Built on a Node.js and React architecture designed for high-frequency updates and minimal lag."
        }
    ];

    const VisualComponent = () => (
        <Tilt options={defaultOptions} className="w-full max-w-lg relative bg-[#020617] p-1 rounded-3xl border border-white/5 shadow-2xl overflow-hidden aspect-[4/3]">
            {/* Mock Toolbar */}
            <div className="absolute top-0 w-full h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-[10px] text-gray-500 ml-4 font-mono">PRO_TRADER_V2.exe</span>
            </div>

            {/* Mock Chart Content */}
            <div className="mt-10 px-4 h-full flex flex-col">
                <div className="flex justify-between items-end mb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-white">BTC/USD</h3>
                        <span className="text-xs text-radar-purple">Perpetual Contract</span>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-mono text-radar-green">64,231.50</div>
                        <span className="text-xs text-radar-green font-mono">+1.24%</span>
                    </div>
                </div>

                {/* Chart Area */}
                <div className="flex-1 bg-[#0A0E17] border border-white/5 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-end justify-between px-2 pb-2 gap-1">
                        {[...Array(30)].map((_, i) => {
                            const height = Math.random() * 80 + 10;
                            const isGreen = Math.random() > 0.4;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${height}%` }}
                                    transition={{ duration: 0.6, delay: i * 0.05, repeat: Infinity, repeatType: "reverse", repeatDelay: 0 }}
                                    className={`w-full rounded-sm ${isGreen ? 'bg-radar-green' : 'bg-red-500/80'}`}
                                    style={{ opacity: 0.7 }}
                                />
                            )
                        })}
                    </div>
                    {/* Overlay Indicators */}
                    <svg className="absolute inset-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <motion.path
                            d="M0 80 C 20 70, 40 90, 60 50 S 80 40, 100 20"
                            fill="none"
                            stroke="#00f3ff"
                            strokeWidth="0.5"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </svg>
                </div>

                {/* Order Book Snippet */}
                <div className="h-20 grid grid-cols-2 gap-2 mt-2 font-mono text-[10px]">
                    <div className="bg-red-900/10 p-2 rounded">
                        <div className="text-red-400 opacity-50">SELL ORDERS</div>
                        <div className="flex justify-between text-red-300"><span>64,235</span><span>0.5 BTC</span></div>
                        <div className="flex justify-between text-red-300"><span>64,236</span><span>1.2 BTC</span></div>
                    </div>
                    <div className="bg-green-900/10 p-2 rounded">
                        <div className="text-green-400 opacity-50">BUY ORDERS</div>
                        <div className="flex justify-between text-green-300"><span>64,230</span><span>2.1 BTC</span></div>
                        <div className="flex justify-between text-green-300"><span>64,229</span><span>0.8 BTC</span></div>
                    </div>
                </div>
            </div>

            {/* Glow Effects */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-radar-purple/20 blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-radar-cyan/20 blur-[60px] pointer-events-none" />
        </Tilt>
    );

    return (
        <SplitScreenSection
            id="trader-mode"
            title="Professional Terminal (Trader Mode)"
            description="Engineered for speed and precision, giving you the edge in fast-moving markets."
            features={features}
            imageComp={<VisualComponent />}
            reverse={false}
        />
    );
};

export default TraderModeSection;
