"use client"

// src/components/YourMoneyYourChoice.tsx
import { useState } from 'react';
import '../app/globals.css'

// Data structure for each tab and its associated content
const tabSections = [
    {
        id: 'custom-reports',
        tabTitle: 'Custom reports',
        tabIconSrc: 'https://framerusercontent.com/images/uWwXZ19U5VuSza6Zq9ejPTeJm8.svg', // Pie chart icon
        tabIconAlt: 'Pie chart icon for custom reports',
        tabIconBg: 'bg-icon-reports-bg', // Yellow-green background
        contentImageSrc: 'https://framerusercontent.com/images/ij7Z2hvZzgSjGCer3nYRCK2GaH4.webp', // Statistics image
        contentImageAlt: 'Bar chart showing analytics with income and outcome',
        mainHeading: "Know exactly what's working and what's not.",
        description: "Gain valuable insights - track performance with precision, identifying successes and improvements effortlessly.",
        listItems: [
            "Value at Production Scale",
            "Assured Governance",
        ],
    },
    {
        id: 'easy-planner',
        tabTitle: 'Easy-to-use planner',
        tabIconSrc: 'https://framerusercontent.com/images/cEw6mxrAdwl7R5Q4VMGII9KF7tI.svg', // Handshake icon
        tabIconAlt: 'Handshake icon for easy-to-use planner',
        tabIconBg: 'bg-icon-planner-bg', // Cyan background
        // Placeholder image. In a real app, you'd have a specific image for this tab.
        contentImageSrc: 'https://framerusercontent.com/images/ij7Z2hvZzgSjGCer3nYRCK2GaH4.webp',
        contentImageAlt: 'Financial planning interface',
        mainHeading: "Effortlessly plan your financial strategy.",
        description: "Our intuitive tools help you set clear financial goals, monitor your progress, and adapt to market changes with confidence.",
        listItems: [
            "Intuitive Interface",
            "Flexible Planning Tools",
        ],
    },
    {
        id: 'global-community',
        tabTitle: 'Global community',
        tabIconSrc: 'https://framerusercontent.com/images/SD47MuB1LMDYqpvgOXdi8HsX6E.svg', // Globe icon
        tabIconAlt: 'Globe icon for global community',
        tabIconBg: 'bg-icon-community-bg', // White background
        // Placeholder image. In a real app, you'd have a specific image for this tab.
        contentImageSrc: 'https://framerusercontent.com/images/ij7Z2hvZzgSjGCer3nYRCK2GaH4.webp',
        contentImageAlt: 'Diverse community members interacting',
        mainHeading: "Connect, learn, and grow with peers.",
        description: "Engage with a diverse, global community of traders and investors. Share insights, gain new perspectives, and enhance your trading journey.",
        listItems: [
            "Expert-Led Discussions",
            "Peer-to-Peer Learning",
        ],
    },
];

// Reusable component for a list item with a checkmark
const CheckListItem: React.FC<{ text: string }> = ({ text }) => (
    <li className="flex items-center gap-3">
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-check-black flex items-center justify-center">
            <img
                src="https://framerusercontent.com/images/Y9xGdX9mecp48wwvXVkVvoDnrc.svg" // Checkmark icon
                alt="Green checkmark"
                className="w-4 h-4 object-contain"
            />
        </div>
        <p className="text-white/80 text-base md:text-lg leading-relaxed">
            {text}
        </p>
    </li>
);

/**
 * Main component for the "Your Money...Your Choice" section.
 * Features tab-based content switching with responsiveness and animations.
 */
const YourMoneyYourChoice: React.FC = () => {
    // State to manage the currently active tab
    const [activeTab, setActiveTab] = useState(tabSections[0].id); // Default to the first tab

    // Find the content corresponding to the active tab
    const currentContent = tabSections.find((tab) => tab.id === activeTab);

    return (
        <section className="py-[100px] px-[30px] bg-coiner-super-dark-bg font-sans overflow-hidden">
            <div className="container max-w-7xl mx-auto flex flex-col items-center">
                {/* Section Heading and Description */}
                <div className="text-center mb-16 px-4">
                    <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                        Your Money...Your Choice
                    </h2>
                    <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                        Empower yourself with financial freedom. Our platform puts you in charge of your money, enabling confident trading and investment decisions.
                    </p>
                </div>

                {/* Main Content Block: Tabs + Dynamic Content */}
                {/* This div applies the outer gradient border and main dark background */}
                <div className="bg-gradient-to-br from-coiner-gradient-start to-coiner-gradient-end
                        rounded-[40px] p-4 sm:p-6 lg:p-10 w-full">

                    {/* Tab Navigation Area */}
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        {tabSections.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 flex items-center gap-3 px-5 py-3 rounded-2xl
                            transition-all duration-300 ease-in-out
                            ${activeTab === tab.id ? 'bg-coiner-tab-bg-active' : 'bg-transparent'}
                            hover:scale-[1.03] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-coiner-yellow-green`}
                                aria-selected={activeTab === tab.id}
                                role="tab"
                            >
                                {/* Tab Icon */}
                                <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full ${tab.tabIconBg}`}>
                                    <img src={tab.tabIconSrc} alt={tab.tabIconAlt} className="w-6 h-6 object-contain" />
                                </div>
                                {/* Tab Title */}
                                <h5 className="text-white text-lg sm:text-xl font-medium whitespace-nowrap">
                                    {tab.tabTitle}
                                </h5>
                            </button>
                        ))}
                    </div>

                    {/* Dynamic Content Display Area */}
                    {currentContent && (
                        <div
                            key={currentContent.id} // Key changes to force re-render and trigger transition on content switch
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center
                         transition-opacity duration-500 ease-in-out opacity-100"
                            role="tabpanel"
                            aria-labelledby={`${currentContent.id}-tab`}
                        >
                            {/* Left Side: Content Image */}
                            <div className="flex justify-center lg:justify-start">
                                <div className="w-full max-w-[500px] aspect-[874/614] rounded-2xl overflow-hidden
                                bg-coiner-tab-bg-active p-4 sm:p-6 lg:p-8"> {/* Background color and padding from Framer HTML */}
                                    <img
                                        src={currentContent.contentImageSrc}
                                        alt={currentContent.contentImageAlt}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>

                            {/* Right Side: Text Content */}
                            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                                    {currentContent.mainHeading}
                                </h2>
                                <p className="text-white/80 text-base sm:text-lg mb-6 leading-relaxed">
                                    {currentContent.description}
                                </p>
                                <ul className="space-y-4">
                                    {currentContent.listItems.map((item, index) => (
                                        <CheckListItem key={index} text={item} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default YourMoneyYourChoice;