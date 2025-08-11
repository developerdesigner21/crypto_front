// src/components/DownloadSection.tsx
import '../app/globals.css'

/**
 * Component for the "Download and enjoy the experience" section.
 * Features a gradient background, a phone image, text, and app download buttons.
 */
const DownloadSection: React.FC = () => {
    return (
        <section className="py-[100px] px-[30px] bg-coiner-super-dark-bg font-sans overflow-hidden">
            <div className="container max-w-7xl mx-auto">
                {/* Main container with gradient background and rounded corners */}
                <div className="bg-gradient-to-br from-coiner-yellow-green via-coiner-green to-coiner-cyan
                        rounded-[30px] p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

                    {/* Left side: Mobile Phone Image */}
                    <div className="flex-shrink-0 w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[450px] aspect-[655/700] lg:w-1/2 flex items-center justify-center">
                        <img
                            decoding="async"
                            loading="lazy"
                            src="https://framerusercontent.com/images/mSPUMKMOsmX81AzCQO3g1eiukj8.webp"
                            alt="Mobile phone displaying cryptocurrency exchange interface"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Right side: Content (Text and Buttons) */}
                    <div className="flex-1 text-center lg:text-left">
                        <h3 className="text-coiner-text-dark text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                            Download and enjoy the experience
                        </h3>
                        <p className="text-coiner-text-dark text-lg sm:text-xl leading-relaxed mb-8">
                            Don't miss out! Download now for an enjoyable app experience. Seize the opportunity to immerse yourself in seamless functionalities and endless possibilities.
                        </p>

                        {/* App Store Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
                            <a
                                href="https://www.apple.com/in/app-store/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[180px] h-[60px] flex items-center justify-center rounded-full overflow-hidden
                           transition-transform duration-300 ease-in-out hover:scale-105"
                                aria-label="Download on the App Store"
                            >
                                <img
                                    decoding="async"
                                    src="https://framerusercontent.com/images/7MiyJs1CYjb7xXAkgUwkS5t2Q.png"
                                    alt="Download on the App Store"
                                    className="w-full h-full object-cover"
                                />
                            </a>
                            <a
                                href="https://play.google.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[180px] h-[60px] flex items-center justify-center rounded-full overflow-hidden
                           transition-transform duration-300 ease-in-out hover:scale-105"
                                aria-label="Get it on Google Play"
                            >
                                <img
                                    decoding="async"
                                    src="https://framerusercontent.com/images/UaLWf2GGrquxylIIyeMSMZG62Bg.png"
                                    alt="Android App on Google Play"
                                    className="w-full h-full object-cover"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadSection;