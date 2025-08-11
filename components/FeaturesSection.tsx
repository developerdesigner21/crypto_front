import '../app/globals.css'

// Define the type for a feature item
interface FeatureItem {
    iconSrc: string;
    altText: string;
    title: string;
    description: string;
}

// Data for the feature items
const featuresData: FeatureItem[] = [
    {
        iconSrc: "https://framerusercontent.com/images/8389I7JzD2kftdSXY1D0ndCVzY.svg",
        altText: "shield icon",
        title: "Trusted & Secure",
        description: "Embrace the peace of mind with our trusted & secure platform, ensuring your data protected",
    },
    {
        iconSrc: "https://framerusercontent.com/images/wVZSGXPFgyUEPeib3sp1s3Ipk.svg",
        altText: "setting icon",
        title: "Automatically",
        description: "Discover the power of automation with our cutting-edge technology, enabling processes",
    },
    {
        iconSrc: "https://framerusercontent.com/images/wvxL0QwUD3iavVFfjuxfdjPbALs.svg",
        altText: "graph icon",
        title: "Trade Algorithm",
        description: "Optimize your trades with our advanced algorithm, data-driven insights to make decisions",
    },
    {
        iconSrc: "https://framerusercontent.com/images/yB9dafg9u8oR2Pf03n4nKc7Yrh8.svg",
        altText: "headphone icon",
        title: "24/7 Support",
        description: "Enjoy round-the-clock support from our team, ensuring assistance whenever you need",
    },
];

const FeaturesSection: React.FC = () => {
    return (
        <section className="relative py-16 md:py-24 font-poppins bg-dark-background overflow-hidden">
            {/* Background Pattern */}
            {/* Position this absolutely behind the content, adjust opacity */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <img
                    src="https://framerusercontent.com/images/ZnQJe5z2yS0keWBmLXWPafNy4.png"
                    alt="bg pattern"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Heading and Subheading */}
                <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto animate-fade-in-up">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        The best crypto features you won't find anywhere else
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Explore our platform's unparalleled crypto features, setting us apart with exclusive
                        offerings not found elsewhere. Join Coiner today itself.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuresData.map((feature, index) => (
                        <div
                            key={index} // Using index is fine here as the list is static
                            className="bg-feature-card-bg rounded-xl p-8 text-center flex flex-col items-center justify-center
                         shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out
                         animate-fade-in-up"
                            style={{ animationDelay: `${0.1 * index}s` }} // Staggered animation
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 mb-6 flex items-center justify-center">
                                <img src={feature.iconSrc} alt={feature.altText} className="w-full h-full object-contain" />
                            </div>
                            {/* Title */}
                            <h3 className="text-white text-2xl font-bold mb-2">{feature.title}</h3>
                            {/* Description */}
                            <p className="text-gray-400 text-base">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;