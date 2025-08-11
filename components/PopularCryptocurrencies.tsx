import React from 'react';
import '../app/globals.css'

// Data for popular cryptocurrencies, mirroring the image content
const cryptocurrencies = [
    {
        iconSrc: "https://framerusercontent.com/images/wDarZl4QiJ3qIRKVkEVluE0yE.svg", // Ethereum logo
        iconBlurBg: "bg-blur-ethereum-blue",
        name: "Ethereum (ETH)",
        price: "$3,979.05",
        description: "Ethereum (ETH): A blockchain platform enabling smart contracts and decentralized applications, driving innovation",
        alt: "Ethereum logo",
    },
    {
        iconSrc: "https://framerusercontent.com/images/iHBZcuRgwXgQXxCSDG0ZHSsf27Q.svg", // Litecoin logo
        iconBlurBg: "bg-blur-litecoin-yellow",
        name: "Litecoin",
        price: "$56,204.37", // Price as shown in the original image for Litecoin
        description: "Litecoin: A peer-to-peer cryptocurrency, faster and with lower fees, designed to complement Bitcoin as digital silver",
        alt: "Litecoin logo",
    },
    {
        iconSrc: "https://framerusercontent.com/images/3ZdkAjBRU7fZ49d9ktystzLkU.svg", // Bitcoin logo
        iconBlurBg: "bg-blur-bitcoin-orange",
        name: "Bitcoin (BTC)",
        price: "$56,204.37",
        description: "Bitcoin: The pioneering cryptocurrency, decentralized and secure, revolutionizing global finance keep use of coiner website",
        alt: "Bitcoin logo",
    },
    {
        iconSrc: "https://framerusercontent.com/images/iHBZcuRgwXgQXxCSDG0ZHSsf27Q.svg", // Using Litecoin icon for Tether as per original HTML reference
        iconBlurBg: "bg-blur-tether-green",
        name: "Tether (USDT)",
        price: "$600.95",
        description: "Tether: A stablecoin pegged to fiat currency, offering stability and facilitating seamless transactions in the crypto world",
        alt: "Tether logo",
    },
    {
        iconSrc: "https://framerusercontent.com/images/g7SkHIIZZrXE1QZOOweIJSPsVeU.svg", // Binance Coin logo
        iconBlurBg: "bg-blur-binance-orange",
        name: "Binance (BNB)",
        price: "$56,204.37", // Placeholder price for Binance
        description: "Binance: The native cryptocurrency of Binance exchange, empowering users with discounts, utility, and an innovative ecosystem",
        alt: "Binance Coin logo",
    },
];

// TypeScript interface for the properties of a single CryptoCard
interface CryptoCardProps {
    crypto: typeof cryptocurrencies[0]; // Ensures type safety based on our data structure
}

/**
 * Reusable component to render an individual cryptocurrency card.
 * The entire card is now clickable and redirects to a crypto-specific detail page.
 */
const CryptoCard: React.FC<CryptoCardProps> = ({ crypto }) => {
    // Generate a friendly URL slug for redirection
    // Ensure the slug is URL-safe and consistent for navigation
    const cryptoSlug = crypto.name.toLowerCase().replace(/\s|\(|\)/g, '').replace(/&/g, 'and');

    return (
        // The entire card is now an anchor <a> element, making the whole area clickable.
        <a
            href={`/crypto/${cryptoSlug}`} // Dynamic link for redirection
            className="relative flex flex-col items-center p-8 pt-16 rounded-[40px] bg-coiner-card-bg-primary text-white
                 w-[320px] h-[450px] overflow-hidden group cursor-pointer
                 transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl"
            aria-label={`View details for ${crypto.name}`} // Accessibility label for the entire card link
        >

            {/* Blurred background element positioned behind the icon */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full filter blur-[36px] opacity-70 ${crypto.iconBlurBg}`}></div>

            {/* Crypto Icon Container - no longer a separate <a>, it's part of the parent card link */}
            <div
                className="relative z-10 w-[80px] h-[80px] flex items-center justify-center rounded-[30px] shadow-lg mb-6 bg-transparent
                   transform transition-transform duration-200 ease-in-out group-hover:scale-105" // Use group-hover for hover effect
            >
                <img
                    decoding="async"
                    loading="lazy"
                    src={crypto.iconSrc}
                    alt={crypto.alt}
                    className="w-full h-full object-contain p-2" // p-2 gives some internal padding to the SVG icon
                />
            </div>

            {/* Name and Price Section */}
            <div className="flex flex-col items-center w-full text-center">
                <div className="flex justify-between items-end w-full pb-4 border-b border-coiner-border-gray">
                    <h3 className="text-xl md:text-2xl font-semibold whitespace-nowrap">{crypto.name}</h3>
                    <p className="text-lg md:text-xl font-medium text-white/90 whitespace-nowrap">{crypto.price}</p>
                </div>

                {/* Description Text */}
                <p className="text-sm md:text-base text-white/70 mt-4 leading-relaxed flex-grow text-center">
                    {crypto.description}
                </p>

                {/* Buy Now "Button" - now a span for styling, not a separate interactive element (<a> or <button>) */}
                {/* It acts as a visual cue but is part of the parent card's clickable area, adhering to HTML validity. */}
                <div className="mt-8 w-full">
                    <span
                        className="inline-flex items-center justify-center px-8 py-3 rounded-full text-white text-base font-medium
                       border-[1.5px] border-coiner-yellow-green/60 group-hover:bg-coiner-yellow-green/10
                       transition-colors duration-300 ease-in-out w-full"
                    // No href attribute here as the entire parent <a> tag handles the navigation
                    >
                        Buy Now
                    </span>
                </div>
            </div>
        </a>
    );
};

/**
 * The main "Popular Cryptocurrencies" section component.
 * Features a horizontal, infinitely scrolling list of crypto cards.
 */
const PopularCryptocurrencies: React.FC = () => {
    // Calculate a dynamic duration for the marquee animation based on the number of cards
    // This helps maintain a similar perceived speed regardless of the number of items.
    const marqueeDuration = cryptocurrencies.length * 8; // e.g., 5 cards * 8s = 40s total animation cycle

    return (
        <section
            className="py-[100px] px-[30px] bg-coiner-main-bg-dark font-sans overflow-hidden relative"
        >
            {/* Section Heading and Description */}
            <div className="text-center mb-16 px-4">
                <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                    Popular cryptocurrencies
                </h2>
                <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                    Explore a variety of popular cryptocurrencies on our platform, empowering you to diversify your portfolio and stay ahead
                </p>
            </div>

            {/* Crypto Card Slider Container */}
            <div className="relative overflow-hidden w-full py-8">
                {/* Left fade overlay */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-coiner-main-bg-dark to-transparent z-10 pointer-events-none"></div>
                {/* Right fade overlay */}
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-coiner-main-bg-dark to-transparent z-10 pointer-events-none"></div>

                {/* Inner track for marquee animation. Content is duplicated for seamless loop. */}
                <div
                    className="flex w-max animate-marquee-rtl"
                    style={{ '--marquee-duration': `${marqueeDuration}s` } as React.CSSProperties} // Set CSS variable for animation duration
                >
                    {/* Render original set of cards */}
                    {cryptocurrencies.map((crypto, index) => (
                        <div key={`original-${index}`} className="flex-shrink-0 mx-4">
                            <CryptoCard crypto={crypto} />
                        </div>
                    ))}
                    {/* Render duplicated set of cards for infinite loop effect */}
                    {cryptocurrencies.map((crypto, index) => (
                        <div key={`duplicate-${index}`} className="flex-shrink-0 mx-4">
                            <CryptoCard crypto={crypto} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularCryptocurrencies;