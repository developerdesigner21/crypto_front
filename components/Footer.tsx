
"use client"
// src/components/Footer.tsx

import React, { useState } from 'react';
// Assuming 'logo' is correctly imported from your assets folder
// Social icons as specified in your import list for this iteration
import { FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import '../app/globals.css'
import logo from '../assets/Group 220.png';
import Image from "next/image";
import Toast from './Toast';

// Arrow for the newsletter button (retained from your provided code)
const ArrowIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
);

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState<'success' | 'error'>('success');

    // Data for Quick Links, split into two logical columns as per the cropped image
    const quickLinksCol1 = ['IGO', 'LAUNCHPAD', 'STAKING', 'FARMING', 'CRYPTO'];
    const quickLinksCol2 = ['DEFI', 'WEB3', 'IEO', 'IDO', 'TOKEN', 'GAMING', 'NFT'];

    // Data for Social Media platforms (as defined in your provided code)
    const socialPlatforms = [
        { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com' },
        { name: 'TikTok', icon: FaTiktok, href: 'https://tiktok.com' },
        { name: 'Facebook', icon: FaFacebookF, href: 'https://facebook.com' },
        { name: 'X (Twitter)', icon: SiX, href: 'https://twitter.com' }, // Using SiX for X.com
    ];

    // Email validation function
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email.trim()) {
            showToastMessage('Please enter an email address', 'error');
            return;
        }

        if (!validateEmail(email)) {
            showToastMessage('Email not correct. Please enter a valid email address', 'error');
            return;
        }

        // Email is valid
        showToastMessage('You will get all updates easily on your mail!', 'success');
        setEmail(''); // Clear the input after successful submission
    };

    // Show toast message
    const showToastMessage = (message: string, type: 'success' | 'error') => {
        setToastMessage(message);
        setToastType(type);
        setShowToast(true);
    };

    // Close toast
    const closeToast = () => {
        setShowToast(false);
    };

    return (
        <>
            <Toast 
                message={toastMessage} 
                type={toastType} 
                isVisible={showToast} 
                onClose={closeToast}
                duration={5000}
                position="top-right"
            />
            
            <footer className="bg-[rgb(3,7,18)] text-gray-300 font-sans">
                <div className="container mx-auto px-8 xl:pl-24
                          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 {/* Maintain 4 columns for LG for distribution */}
                          gap-y-12 md:gap-y-16 lg:gap-32">

                    {/* 1. Branding Section (Column 1) */}
                    {/* On mobile: 1 column. On tablet: 1 column. On desktop: 1 column */}
                    <div className="md:col-span-1 lg:col-span-1">
                        <div className="flex items-center mb-6">
                            {/* Logo image imported from your assets */}
                            <Image
                                src={logo} 
                                alt="Header Logo"
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                            <span className="text-white text-3xl font-bold ml-3">BACKEDBY <span className="text-green-400">Quantum</span></span>
                        </div>
                        <p className="leading-relaxed mb-8 max-w-sm">
                            Welcome to Coiner, your gateway to the world of Web3 trading! Our user-friendly platform empowers you to explore a wide range of popular cryptocurrencies
                        </p>

                        {/* Social Media Icons with circular background and hover effects */}
                        <div className="flex items-center gap-4">
                            {socialPlatforms.map((platform) => (
                                <a
                                    key={platform.name}
                                    href={platform.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Follow us on ${platform.name}`}
                                    className="bg-gray-800 rounded-full p-2 text-white
                               hover:bg-gray-700 hover:text-green-400
                               transition-colors duration-300 flex items-center justify-center"
                                >
                                    <platform.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2. Quick Links Column (Column 2) */}
                    {/* On mobile: 1 column. On tablet: 1 column. On desktop: 1 column */}
                    <div className="md:col-span-1 lg:col-span-1">
                        <h3 className="text-white text-xl font-bold mb-8">Quick Links</h3>
                        {/* Inner flex container to create two columns for Quick Links links */}
                        <div className="flex flex-row gap-16">
                            <ul className="space-y-4 list-none"> {/* list-none to remove default bullets */}
                                {quickLinksCol1.map((link) => (
                                    <li key={link}>
                                        <a href="/start-boarding" className="hover:text-white transition-colors duration-300 text-sm tracking-wider">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-4 list-none"> {/* list-none to remove default bullets */}
                                {quickLinksCol2.map((link) => (
                                    <li key={link}>
                                        <a href="/start-boarding" className="hover:text-white transition-colors duration-300 text-sm tracking-wider">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* 3. Empty Column (Filler for the 4-column grid, if needed, or remove if Quick Links spans) */}
                    {/* This `div` acts as a placeholder or can be omitted if Newsletter spans to fill the 3rd and 4th spots */}
                    {/* For this solution, Newsletter will span, so we don't need an explicit empty div here, 
                but the grid setup will effectively create the visual spacing. */}

                    {/* 4. Newsletter Section (Column 3 & 4 combined on LG screens) */}
                    {/* On mobile: 1 column. On tablet: spans 2 columns. On desktop: spans 2 columns to fill remaining space */}
                    <div className="md:col-span-2 lg:col-span-2"> {/* This spans the remaining columns on larger screens */}
                        <h3 className="text-white text-xl font-bold mb-8">Newsletter</h3>
                        <p className="mb-8 leading-relaxed max-w-md">
                            Welcome to Web3ConnectVault your gateway to the world of Web3 trading! Our user-friendly platform
                        </p>
                        <form onSubmit={handleSubmit} className="max-w-md">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter Your Email..."
                                    aria-label="Email for newsletter"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-[#1e293b] rounded-full py-4 pl-6 pr-20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
                                />
                                <button
                                    type="submit"
                                    aria-label="Subscribe to newsletter"
                                    className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300"
                                >
                                    <ArrowIcon />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom Bar */}
                <div className="border-t border-gray-700 mt-16 pt-8 pb-4 text-center text-gray-400 text-sm">
                    Copyright &copy;2024 Coiner. All rights reserved.
                </div>
            </footer>
        </>
    );
};

export default Footer;