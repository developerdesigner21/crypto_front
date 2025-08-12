"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import '../app/globals.css'

// =======================================================================
// IMPORTANT: REPLACE THESE PLACEHOLDER CDN URLs WITH YOUR ACTUAL IMAGE URLs
// You will need to create/upload these specific images to your CDN.
// - Crypto Icons (SVG or PNG)
// - Graph Images (PNG)
// =======================================================================
const BITCOIN_ICON_CDN_URL =
    "https://your-cdn-domain.com/images/bitcoin-icon.png";
const ETHEREUM_ICON_CDN_URL =
    "https://your-cdn-domain.com/images/ethereum-icon.png";
const LITECOIN_ICON_CDN_URL =
    "https://your-cdn-domain.com/images/litecoin-icon.png";
const BINANCE_ICON_CDN_URL =
    "https://your-cdn-domain.com/images/binance-icon.png";

const GRAPH_GROWTH_UP_CDN_URL =
    "https://your-cdn-domain.com/images/growth-graph-up.png"; // Example for up-trend graph
const GRAPH_GROWTH_DOWN_CDN_URL =
    "https://your-cdn-domain.com/images/growth-graph-down.png"; // Example for down-trend graph
const GRAPH_BALANCE_CDN_URL =
    "https://your-cdn-domain.com/images/balance-graph.png"; // Graph for 'Your Balance' card
// =======================================================================

// Framer Motion Variants for animations
const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.15, // Stagger children elements
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, x: 100 },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

// Reusable Statistic Item Component
interface StatisticItemProps {
    value: string;
    label: string;
    isGreen?: boolean;
}

const StatisticItem: React.FC<StatisticItemProps> = ({
    value,
    label,
    isGreen = false,
}) => (
    <motion.div
        variants={itemVariants}
        className="border-b border-gray-800 pb-4 last:border-b-0 last:pb-0"
    >
        <p
            className={`text-4xl font-extrabold ${isGreen ? "text-coiner-green" : "text-white"
                } mb-1`}
        >
            {value}
        </p>
        <p className="text-light-text text-lg">{label}</p>
    </motion.div>
);

const StatisticsSection: React.FC = () => {
    return (
        <motion.section
            className="bg-dark-background text-white py-16 sm:py-20 lg:py-24 px-4 font-inter overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Animate when 30% of section is visible
            variants={sectionVariants}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Content Block */}
                <div className="flex flex-col text-center lg:text-left">
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
                    >
                        Our statistics over the years
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl text-light-text mb-12 max-w-xl mx-auto lg:mx-0"
                    >
                        Follow our remarkable growth journey over the years through
                        comprehensive statistics, reflecting our unwavering dedication to
                        excellence and customer satisfaction.
                    </motion.p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-y-12 sm:gap-x-8 text-left">
                        <StatisticItem value="250+" label="Happy Clients" />
                        <StatisticItem
                            value="90%"
                            label="Customer Satisfaction"
                            isGreen={true}
                        />
                        <StatisticItem
                            value="5k"
                            label="Successful Project"
                            isGreen={true}
                        />
                        <StatisticItem value="100%" label="Security Certification" />
                    </div>
                </div>

                {/* Right Visual Block - Crypto Cards */}
                <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[600px] flex justify-center items-center">
                    {/* Large Card (Bitcoin, Ethereum, Litecoin, Binance) */}
                    <motion.div
                        variants={cardVariants}
                        className="absolute bg-card-bg rounded-3xl p-6 sm:p-8 w-[85%] max-w-[420px] shadow-2xl z-10
                       -rotate-6 translate-x-4 -translate-y-4 lg:-rotate-12 lg:translate-x-12 lg:-translate-y-8"
                        style={{ originX: 0.5, originY: 0.5 }} // Center origin for rotation
                    >
                        {/* Bitcoin Row */}
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
                            <div className="flex items-center">
                                {/* <img
                                    src={BITCOIN_ICON_CDN_URL}
                                    alt="Bitcoin"
                                    className="w-8 h-8 mr-3 rounded-full"
                                /> */}
                                <span className="font-semibold text-dark-text text-lg">
                                    Bitcoin <span className="text-gray-500 text-sm">BTC</span>
                                </span>
                            </div>
                            <div className="flex items-center text-coiner-green font-medium">
                                6.5%
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 ml-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Ethereum Row */}
                        <div className="pb-4 mb-4 border-b border-gray-200">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center">
                                    {/* <img
                                        src={ETHEREUM_ICON_CDN_URL}
                                        alt="Ethereum"
                                        className="w-8 h-8 mr-3 rounded-full"
                                    /> */}
                                    <span className="font-semibold text-dark-text text-lg">
                                        Ethereum <span className="text-gray-500 text-sm">ETH</span>
                                    </span>
                                </div>
                                <div className="flex items-center text-coiner-green font-medium">
                                    3.4%
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 ml-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm mb-2">Price</p>
                            <div className="flex items-center justify-between">
                                <p className="text-dark-text text-2xl font-bold">
                                    $ 170,892.90
                                </p>
                                <img
                                    src={GRAPH_GROWTH_UP_CDN_URL}
                                    alt="Growth Graph"
                                    className="h-10 w-24"
                                />
                            </div>
                        </div>

                        {/* Litecoin Row */}
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
                            <div className="flex items-center">
                                {/* <img
                                    src={LITECOIN_ICON_CDN_URL}
                                    alt="Litecoin"
                                    className="w-8 h-8 mr-3 rounded-full"
                                /> */}
                                <span className="font-semibold text-dark-text text-lg">
                                    Litecoin <span className="text-gray-500 text-sm">LTC</span>
                                </span>
                            </div>
                            <div className="flex items-center text-red-500 font-medium">
                                2.5%
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 ml-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Binance Row */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                {/* <img
                                    src={BINANCE_ICON_CDN_URL}
                                    alt="Binance"
                                    className="w-8 h-8 mr-3 rounded-full"
                                /> */}
                                <span className="font-semibold text-dark-text text-lg">
                                    Binance <span className="text-gray-500 text-sm">BNB</span>
                                </span>
                            </div>
                            <div className="flex items-center text-coiner-green font-medium">
                                4.3%
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 ml-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                                    />
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    {/* Smaller Balance Card */}
                    <motion.div
                        variants={cardVariants}
                        className="absolute bg-card-bg rounded-3xl p-6 sm:p-8 w-[70%] max-w-[300px] shadow-2xl z-20
                       rotate-6 -translate-x-20 translate-y-20 lg:rotate-12 lg:-translate-x-28 lg:translate-y-24"
                        style={{ originX: 0.5, originY: 0.5 }} // Center origin for rotation
                    >
                        <p className="text-gray-500 text-sm mb-2">Your Balance</p>
                        <p className="text-dark-text text-3xl font-bold mb-4">3545.23</p>
                        <div className="relative">
                            <img
                                src={GRAPH_BALANCE_CDN_URL}
                                alt="Balance Graph"
                                className="w-full h-auto"
                            />
                            <div className="absolute bottom-0 left-0 flex items-center bg-white rounded-full p-2 pr-3 shadow-md -mb-3">
                                {/* <img
                                    src={ETHEREUM_ICON_CDN_URL}
                                    alt="Ethereum Small"
                                    className="w-5 h-5 mr-1"
                                /> */}
                                <span className="text-coiner-green text-xs font-semibold">
                                    +6.58%
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default StatisticsSection;
