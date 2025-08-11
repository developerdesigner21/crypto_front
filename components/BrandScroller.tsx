import React from 'react';
import '../app/globals.css'

// Base64 encoded SVG for the "B RAND" logo.
// This SVG is carefully designed to visually match the "B RAND" section
// in your original image, featuring a dark rectangular background with a
// white 'B' inside, followed by dark 'RAND' text.
const BRAND_LOGO_SVG_BASE64 = `PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTYwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxyZWN0IHg9IjAiIHk9IjUiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcng9IjQiIGZpbGw9IiMxQzFDMUMiLz4KICA8dGV4dCB4PSIyMCIgeT0iMjgiIGZvbnQtZmFhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgYWxpZ25tZW50LWJhc2VsaW5lPSJtaWRkbGUiPkI8L3RleHQ+CiAgPHRleHQgeD0iNTAiIHk9IjI4IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMUMxQzFDQyI+UkFORDwvdGV4dD4KPC9zdmc+`;

// Define the array of brand logos, explicitly matching the content and order
// as seen in the original image provided.
// Note: 'bitmax' and 'binance' from your initial code snippet were excluded
// as they were not present in the visual image you provided.
const brandLogos = [
    { src: "https://framerusercontent.com/images/pmj6QxKgdWYONouqE1cucBThbxU.svg", alt: "Crypto" },
    { src: "https://framerusercontent.com/images/3Kx6V4jWJuP9c0sCeWzZKZyso.svg", alt: "Coinxy" },
    { src: `data:image/svg+xml;base64,${BRAND_LOGO_SVG_BASE64}`, alt: "B RAND" }, // Custom generated SVG
    { src: "https://framerusercontent.com/images/BSR1bldQAbipZJQxeygt717Sg4w.svg", alt: "Currency Wave" },
    { src: "https://framerusercontent.com/images/awtNZwvGWDWglLX4O9J63kwqqQ.svg", alt: "Up Shot" },
    { src: "https://framerusercontent.com/images/feEXTT3U2Xmrpe8I4xvvZAozgw.svg", alt: "Upstock" },
];

const BrandScroller: React.FC = () => {
    // To create a seamless infinite scroll, we duplicate the logos array.
    // This allows the animation to scroll through the first set, then transition
    // smoothly into the second set, effectively looping.
    const duplicatedLogos = [...brandLogos, ...brandLogos];

    return (
        <div className='pt-[75px] bg-[#0a0a0a]'>
            <section
                className="relative w-full overflow-hidden
                 bg-gradient-to-r from-[#DFFF5B] to-[#00CED1]
                 group"
            // You can control the animation speed here if needed, e.g.:
            // style={{ '--animation-duration': '40s' } as React.CSSProperties}
            >
                <div
                    // This div is the actual scrolling "track" for the logos.
                    // - `flex items-center`: Lays out logos horizontally and centers them vertically.
                    // - `w-max`: Ensures the div is wide enough to contain all duplicated logos without wrapping.
                    // - `animate-infinite-scroll`: Applies the custom animation defined in tailwind.config.js.
                    // - `group-hover:animation-pause`: Pauses the scrolling animation when the user hovers
                    //   over the parent `section`.
                    className="flex items-center w-max 
                   animate-infinite-scroll 
                   group-hover:animation-pause"
                >
                    {duplicatedLogos.map((logo, index) => (
                        <div
                            key={index} // Using index as key is acceptable here since the list is static and for display.
                            className="flex-shrink-0 
                       mx-8 md:mx-12 lg:mx-16 
                       flex items-center justify-center 
                       h-16 sm:h-16 lg:h-20"
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="object-contain 
                         filter grayscale opacity-50 
                         hover:grayscale-0 hover:opacity-100 
                         transition-all duration-300 h-[60px] sm:h-[40px]"
                            />
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default BrandScroller;