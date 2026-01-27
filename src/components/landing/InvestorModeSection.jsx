import React from 'react';
import { motion } from 'framer-motion';
import SplitScreenSection from './SplitScreenSection';
import { Layers, PieChart, TrendingUp, DollarSign } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const InvestorModeSection = () => {

    const data = [
        { name: 'Jan', value: 4000 },
        { name: 'Feb', value: 3000 },
        { name: 'Mar', value: 5000 },
        { name: 'Apr', value: 4500 },
        { name: 'May', value: 6000 },
        { name: 'Jun', value: 5500 },
        { name: 'Jul', value: 7000 },
    ];

    const features = [
        {
            title: "Simplified Growth",
            text: "Focus on long-term trends with clean area charts and percentage growth views."
        },
        {
            title: "Core Fundamentals",
            text: "View critical metrics like P/E Ratios and 'At a Glance' summaries without the technical noise."
        },
        {
            title: "Curated Watchlists",
            text: "Easily manage mixed asset watchlists to track your diversified portfolio in one spot."
        }
    ];

    const VisualComponent = () => (
        <div className="relative w-full max-w-lg mx-auto bg-gradient-to-br from-[#0F172A] to-[#0A0E17] p-6 rounded-3xl border border-white/5 shadow-2xl backdrop-blur-xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-xl font-bold text-white">Portfolio Value</h3>
                    <div className="text-sm text-gray-400">Total Assets</div>
                </div>
                <div className="text-right">
                    <div className="text-3xl font-bold text-white">$124,592.00</div>
                    <div className="text-sm text-radar-green font-bold bg-radar-green/10 px-2 py-1 rounded inline-block">
                        +12.5% (YTD)
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="h-48 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4ADE80" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#4ADE80" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <Tooltip
                            contentStyle={{ backgroundColor: '#020617', borderColor: '#333' }}
                            itemStyle={{ color: '#4ADE80' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#4ADE80"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorValue)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/* Asset Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                            <Layers size={16} />
                        </div>
                        <div>
                            <div className="font-bold text-sm">Tech ETF</div>
                            <div className="text-xs text-gray-400">Growth</div>
                        </div>
                    </div>
                    <div className="text-green-400 text-sm font-bold">+5.2%</div>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
                            <DollarSign size={16} />
                        </div>
                        <div>
                            <div className="font-bold text-sm">Bitcoin</div>
                            <div className="text-xs text-gray-400">Crypto</div>
                        </div>
                    </div>
                    <div className="text-green-400 text-sm font-bold">+3.8%</div>
                </div>
            </div>

            {/* Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-radar-green/10 rounded-full blur-[50px] pointer-events-none" />
        </div>
    );

    return (
        <SplitScreenSection
            id="investor-mode"
            title="Fundamental Insights (Investor Mode)"
            description="Simplify your investment journey with clear, actionable data minus the noise."
            features={features}
            imageComp={<VisualComponent />}
            reverse={true} // Alternating
        />
    );
};

export default InvestorModeSection;
