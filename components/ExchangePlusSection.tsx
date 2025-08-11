import '../app/globals.css'

// Define the type for a feature item
interface FeatureItem {
    id: string;
    title: string;
    description: string;
}

// Data for the feature items on the right side
const featureItems: FeatureItem[] = [
    {
        id: "01",
        title: "Card-to-crypto purchases.",
        description: "Own crypto in minutes using your card",
    },
    {
        id: "02",
        title: "Margin leveraging.",
        description: "Maximize gains with margin trading with coiner",
    },
    {
        id: "03",
        title: "Explore Promotions",
        description: "Giveaways, competitions, and more!",
    },
    {
        id: "04",
        title: "Maximize Savings",
        description: "Save more money, worry less with coiner",
    },
];

const ExchangePlusSection: React.FC = () => {
    return (
        <section className="relative py-16 md:py-24 font-poppins bg-[#0a0a0a]">
            <div className="container mx-auto px-4">
                {/* Main container for the card and grid */}
                <div className="bg-card-dark-bg rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 shadow-2xl">

                    {/* Left Gradient Card: "Exchange Plus!" */}
                    <div className="w-full lg:w-1/3 flex flex-col items-center justify-center p-8 sm:p-10 rounded-2xl text-center
                          bg-gradient-to-br from-primary-green via-primary-yellow to-primary-cyan text-neutral-900
                          shadow-lg animate-fade-in-up [animation-delay:0.1s]">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-black">
                            Exchange <br className="sm:hidden" /> Plus!
                        </h2>
                        <p className="text-base sm:text-lg mb-8 max-w-sm">
                            Explore stop orders, deep liquidity, and more!
                        </p>
                        <a
                            href="#"
                            className="inline-block bg-white text-neutral-900 px-8 py-4 rounded-full font-semibold
                         hover:bg-gray-100 transition-colors duration-300 w-full max-w-xs"
                        >
                            Try Now
                        </a>
                    </div>

                    {/* Right Features Grid */}
                    <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 animate-fade-in-up [animation-delay:0.3s]">
                        {featureItems.map((item, index) => (
                            <div key={item.id} className="flex items-start gap-4 text-left">
                                {/* Circular Number */}
                                <div
                                    className="w-14 h-14 min-w-[3.5rem] rounded-full bg-gray-700 flex items-center justify-center text-white font-semibold text-xl
                             transition-colors duration-300 hover:bg-primary-green" // Optional hover effect
                                >
                                    {item.id}
                                </div>
                                {/* Content Wrap */}
                                <div className="flex-1">
                                    <h5 className="font-bold text-white text-xl mb-1">{item.title}</h5>
                                    <p className="text-gray-400 text-base">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExchangePlusSection;