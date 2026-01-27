import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const SplitScreenSection = ({
    title,
    description,
    features = [], // Array of strings or objects { icon, title, text }
    imageComp,
    reverse = false,
    id,
    className
}) => {
    return (
        <section id={id} className={cn("py-24 relative overflow-hidden", className)}>
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className={cn(
                    "flex flex-col lg:flex-row items-center gap-16 lg:gap-24",
                    reverse ? "lg:flex-row-reverse" : ""
                )}>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 space-y-8"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                            {title}
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-radar-cyan to-transparent rounded-full" />

                        <p className="text-lg text-gray-400 font-light leading-relaxed">
                            {description}
                        </p>

                        <div className="grid gap-6">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                                    className="group p-5 bg-[#0F3942]/40 backdrop-blur-md border border-[#6FFFE9]/10 rounded-2xl hover:border-[#6FFFE9]/40 hover:bg-[#0F3942]/60 transition-all duration-300"
                                >
                                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-[#6FFFE9] shadow-[0_0_10px_rgba(111,255,233,0.5)] group-hover:scale-150 transition-transform" />
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 pl-5">
                                        {feature.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: reverse ? -50 : 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full max-w-[600px] lg:max-w-none relative"
                    >
                        <div className="absolute inset-0 bg-radar-cyan/10 blur-[100px] rounded-full opacity-20" />
                        <div className="relative z-10 w-full aspect-square lg:aspect-auto flex items-center justify-center">
                            {imageComp}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default SplitScreenSection;
