import React from 'react';
import '../app/globals.css'

const HeroHeader: React.FC = () => {
    return (
        <section className="relative overflow-hidden
                        py-16 md:py-24 xl:pb-[100px] /* Responsive vertical padding */
                        min-h-screen flex items-center justify-center /* Center content vertically if space allows */
                        bg-[#101418] text-white">

            {/* Background Pattern - Uses CDN image */}
            {/* Original HTML had multiple hidden variants for bg pattern for different screen sizes.
          For Tailwind, we can use one image and let CSS handle scaling, or define responsive visibility/sizing.
          Using a single image with object-cover and opacity for a subtle background. */}
            <div className="absolute inset-0 -z-10 opacity-30">
                <img
                    decoding="async"
                    src="https://framerusercontent.com/images/ZoO46Q0SHYWPmETAlOKdYbmEktE.png"
                    alt="bg pattern"
                    // object-cover ensures it covers the area, w-full h-full makes it fill its parent.
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Main Container - max-width and horizontal padding */}
            {/* This div acts as the main content wrapper, centering everything horizontally */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Content full wrap - flex column, items centered for all screens */}
                <div className="flex flex-col items-center text-center">
                    {/* Content block for text */}
                    <div className="max-w-4xl px-4"> {/* max-w limits width, px-4 provides internal padding */}
                        {/* Display Text */}
                        <div className="mb-4"> {/* Responsive bottom margin for heading */}
                            <h1
                                className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl 
             font-bold  leading-tight tracking-tight text-center text-white "
                            >
                                Trusted Secure <span className="text-[rgb(90,223,137)]">Web3</span> Crypto Exchange
                            </h1>

                        </div>
                        {/* Context paragraph */}
                        <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20"> {/* Responsive bottom margin for paragraph */}
                            <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto">
                                Experience peace of mind with our trusted and secure Web3 crypto exchange. Safeguard your assets
                                and embrace seamless transactions in the decentralized world. Join us for a worry-free trading
                            </p>
                        </div>
                    </div>

                    {/* Button Wrap - Stack on mobile, row on small screens and up, with responsive gap */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8
                          mb-16 "> {/* Responsive bottom margin for button group */}
                        {/* Primary Gradient Button */}
                        <a
                            // Corrected href from original Framer site to relative path
                            href="/start-boarding"
                            className="px-8 py-3 rounded-full text-[rgb(20,20,20)] font-semibold text-lg
                bg-[linear-gradient(99deg,rgb(222,248,76)_0%,rgb(90,223,137)_49.5495%,#36DAE5_100%)] /* Direct gradient */
                hover:scale-105 transition-transform duration-300 inline-flex items-center justify-center whitespace-nowrap
                w-full sm:w-auto" // Full width on mobile, auto on small screens
                            tabIndex={0}
                        >
                            Get Started
                        </a>

                        {/* Primary-Arrow1 Button */}
                        <a
                            // Corrected href from original Framer site to relative path
                            href="/start-boarding"
                            className="px-8 py-3 rounded-full text-white font-semibold text-lg
                relative group inline-flex items-center justify-center gap-2 /* group for hover, gap for text & icon */
                border-[1.5px] border-solid border-[rgba(222,247,77,0.6)] /* Custom  */
                bg-transparent hover:bg-gray-800 transition-colors duration-300 whitespace-nowrap
                w-full sm:w-auto" // Full width on mobile, auto on small screens
                            tabIndex={0}
                        >
                            Explore
                            {/* Arrow icon and its background */}
                            <div className="relative w-8 h-8 rounded-full flex items-center justify-center overflow-hidden
                bg-[linear-gradient(128deg,rgb(222,248,76)_0%,rgb(33,212,225)_100%)]">
                                {/* Explore button arrow - Uses CDN image */}
                                <img
                                    decoding="async"
                                    src="https://framerusercontent.com/images/ngy1IpEcsZnZ2Mo0jrOre8Wk8.svg"
                                    alt="arrow icon"
                                    className="w-4 h-4 object-contain z-10"
                                />
                                {/* Arrow back (hover effect) */}
                                {/* This element expands on hover to create the "arrow back" effect */}
                                <div className="absolute inset-0 rounded-full bg-[rgba(222,248,76,0.44)] scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Image wrap (Main Dashboard Image) - Uses CDN image */}
                {/* The original HTML had multiple SSR variants for this image; a single responsive img tag is usually sufficient with modern img attributes */}
                <div className="relative w-full max-w-6xl mx-auto z-0 mt-8 md:mt-0"> {/* Relative for potential internal absolute positioning, max-w to control size, mx-auto to center, z-0 to stack correctly */}
                    <img
                        decoding="async"
                        src="https://framerusercontent.com/images/DbY7cvm12ymahzXVmnWsT0C1yA.webp"
                        alt="statistics dashboard"
                        className="w-full h-auto object-contain"
                        // Retaining original srcset and sizes for proper responsive image loading
                        sizes="(min-width: 1440px) 1205px, (min-width: 810px) and (max-width: 1199px) calc((100vw - 60px) * 1.004), (min-width: 1200px) and (max-width: 1439px) calc(min(100vw - 80px, 1200px) * 1.0045), (max-width: 809px) calc(100vw - 40px)"
                        srcSet="https://framerusercontent.com/images/DbY7cvm12ymahzXVmnWsT0C1yA.webp?scale-down-to=512 512w,
                    https://framerusercontent.com/images/DbY7cvm12ymahzXVmnWsT0C1yA.webp?scale-down-to=1024 1024w,
                    https://framerusercontent.com/images/DbY7cvm12ymahzXVmnWsT0C1yA.webp?scale-down-to=2048 2048w,
                    https://framerusercontent.com/images/DbY7cvm12ymahzXVmnWsT0C1yA.webp 2403w"
                    />
                </div>

                {/* Floating Crypto Icons - Positioned absolutely relative to the main container (div.container).
            Visibility controlled by breakpoints to avoid clutter on small screens.
            Sizes scale with breakpoints. Exact percentages might need fine-tuning
            based on your specific design goals and screen sizes.
            Animation classes added for visual flair. */}

                {/* Bitcoin (top-left) */}
                <div className="absolute top-[20%] left-[5%]
                        w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24
                        animate-pulse hidden md:block"> {/* Hide on extra small screens */}
                    <img
                        decoding="async"
                        src="https://framerusercontent.com/images/3ZdkAjBRU7fZ49d9ktystzLkU.svg"
                        alt="bitcoin icon"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Bitcoin Diamond 1 (top-right) */}
                <div className="absolute top-[10%] right-[10%]
                        w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20
                        animate-bounce hidden md:block" style={{ animationDuration: '3s' }}>
                    <img
                        decoding="async"
                        src="https://framerusercontent.com/images/g7SkHIIZZrXE1QZOOweIJSPsVeU.svg"
                        alt="bitcoin diamond icon"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Bitcoin Diamond 2 (bottom-left) */}
                <div className="absolute bottom-[20%] left-[15%]
                        w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18
                        animate-pulse hidden lg:block" style={{ animationDelay: '0.5s' }}> {/* Hide on md screens and below */}
                    <img
                        decoding="async"
                        src="https://framerusercontent.com/images/wDarZl4QiJ3qIRKVkEVluE0yE.svg"
                        alt="bitcoin diamond icon"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Bitcoin T (large, top-right of image) */}
                <div className="absolute top-1/4 right-[5%]
                        w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40
                        animate-spin-slow hidden md:block"> {/* Hide on extra small screens */}
                    <img
                        decoding="async"
                        src="https://framerusercontent.com/images/ESqyW6qXru2MvWsGvcdZsAVvko.svg"
                        alt="bitcoin T icon"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Bitcoin T (small, bottom-right) */}
                <div className="absolute bottom-[5%] right-[5%] /* Adjusted from original bottom-left for layout variety */
                        w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24
                        animate-spin-slow hidden md:block" style={{ animationDelay: '0.2s' }}> {/* Hide on extra small screens */}
                    <img
                        decoding="async"
                        src="https://framerusercontent.com/images/iHBZcuRgwXgQXxCSDG0ZHSsf27Q.svg"
                        alt="bitcoin t icon"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroHeader;