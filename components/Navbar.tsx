"use client"

import { useState, useRef, useEffect } from "react";
import logo from '../assets/Group 220.png';
import Image from "next/image";
import '../app/globals.css'
const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const navItems = [
        "IGO",
        "LAUNCHPAD",
        "STAKING",
        "FARMING",
        "CRYPTO",
        "DEFI",
        "WEB3",
        "IDO",
        "TOKEN",
        "NFT",
    ];

    // Effect to close the mobile menu when a click occurs outside of it
    useEffect(() => {
        const handler = (event: MouseEvent) => {
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [isMenuOpen]);

    // NEW: Effect to handle window resize and close mobile menu on desktop sizes
    useEffect(() => {
        const handleResize = () => {
            // Tailwind CSS 'lg' breakpoint is 1024px
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false); // Close the mobile menu if desktop view is active
            }
        };

        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize(); // Important for initial load on desktop sizes

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

    // Handler to close the mobile menu after a navigation link is clicked
    const handleNavLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="relative bg-[#101418] py-4 font-sans z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo Section */}
                <a href="/" className="flex items-center">
                    {/* <img
                        src=''
                        alt="BACKEDBY Quantum Logo"
                        className="h-10 sm:h-12"
                    /> */}
                    <Image
                        src={logo}
                        alt="Header Logo"
                        width={48} // ~w-12
                        height={48}
                        className="object-contain"
                        priority
                    />
                    <div className="flex flex-col font-bold leading-tight ml-3 sm:ml-4">
                        <span className="text-gray-300 uppercase text-xs sm:text-base">
                            BACKEDBY
                        </span>
                        <span className="bg-gradient-to-br from-[#00BCD4] to-[#99CC00] text-transparent bg-clip-text capitalize text-xl sm:text-2xl">
                            Quantum
                        </span>
                    </div>
                </a>

                {/* Desktop Navigation Links - Hidden on smaller screens */}
                <div className="hidden lg:flex items-center space-x-8 xl:space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            // href={`#${item.toLowerCase()}`}
                            href="/start-boarding"
                            className="text-white/80 hover:text-sky-400 transition-colors duration-300 uppercase text-sm"
                        >
                            {item}
                        </a>
                    ))}

                    {/* Connect Wallet Button */}
                    <a href="/start-boarding" className="bg-blue-700 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-800 transition-colors duration-300 border-2 border-sky-400">
                        Connect Wallet
                    </a>
                </div>

                {/* Mobile Hamburger Icon - Visible only on smaller screens */}
                <div className="lg:hidden flex items-center">
                    <button
                        ref={buttonRef}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white focus:outline-none relative w-8 h-6"
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {/* Hamburger lines with animation for open/close state */}
                        <span
                            className={`block absolute h-0.5 w-full bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-2.5" : "top-0"
                                }`}
                        ></span>
                        <span
                            className={`block absolute h-0.5 w-full bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : "top-1/2 -translate-y-1/2"
                                }`}
                        ></span>
                        <span
                            className={`block absolute h-0.5 w-full bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : "bottom-0"
                                }`}
                        ></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay - Expands/collapses based on isMenuOpen state */}
            <div
                id="mobile-menu"
                ref={mobileMenuRef}
                className={`lg:hidden absolute top-full left-0 w-full bg-gray-900 py-4 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <ul className="flex flex-col items-center space-y-4">
                    {navItems.map((item) => (
                        <li key={`mobile-${item}`}>
                            <a
                                href="/start-boarding"
                                className="block text-white text-lg py-2 hover:text-sky-400 uppercase"
                                onClick={handleNavLinkClick}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="/start-boarding" className="bg-blue-700 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-800 transition-colors duration-300 w-full mt-4 border-2 border-sky-400">
                            Connect Wallet
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;