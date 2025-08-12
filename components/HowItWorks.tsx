// src/components/HowItWorks.tsx
import '../app/globals.css'

// TypeScript interface for FeatureCard props for type safety
interface FeatureCardProps {
    iconSrc: string;
    iconBgColorClass: string; // Tailwind utility class for the icon's background color
    title: string;
    description: string;
    alt: string; // Alt text for accessibility
}

/**
 * A reusable component for displaying a feature card with an icon, title, and description.
 */
const FeatureCard: React.FC<FeatureCardProps> = ({ iconSrc, iconBgColorClass, title, description, alt }) => {
    return (
        <a
            href="/start-boarding" // Replace with a relevant link if necessary, e.g., to a specific page
            className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 sm:p-8 rounded-[30px]
                 bg-coiner-feature-card-bg-transparent text-white
                 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl
                 border border-transparent hover:border-coiner-yellow-green/50 cursor-pointer"
            aria-label={`${title} feature`} // Accessible label for the link
        >
            {/* Icon Wrapper: Fixed size, circular, with a dynamic background color */}
            <div className={`w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0 ${iconBgColorClass}`}>
                <img
                    decoding="async"
                    loading="lazy"
                    src={iconSrc}
                    alt={alt}
                    className="w-8 h-8 object-contain" // Icon image, slightly smaller than container for internal padding
                />
            </div>

            {/* Text Content: Takes the remaining horizontal space */}
            <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-white text-left">
                    {title}
                </h3>
                <p className="text-sm md:text-base text-white/70 mt-1 text-left">
                    {description}
                </p>
            </div>
        </a>
    );
};

/**
 * The main "How It Works" section component.
 * Displays a header, description, an illustrative image, and four feature cards.
 */
const HowItWorks: React.FC = () => {
    return (
        <section
            className="py-[100px] px-[30px] min-h-screen flex items-center justify-center
                 bg-coiner-main-bg-dark font-sans overflow-hidden relative z-0"
        // The original Framer background gradient is complex. We're using the closest solid color.
        // If exact gradient replication is critical, it would require a custom CSS class.
        // Example for custom CSS: style={{ background: 'linear-gradient(0deg,#042318 -20.850262325032652%,rgba(4,35,24,0) 50.45045045045045%,#042318 117.76721149682928%)' }}
        >
            {/* Container for content, centers it and applies max-width */}
            <div className="container max-w-[1280px] mx-auto flex flex-col items-center">
                {/* Heading and Description Section */}
                <div className="text-center mb-16 px-4"> {/* px-4 ensures padding on very small screens */}
                    <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                        How It Works
                    </h2>
                    <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                        Discover how Coiner website simplifies crypto trading through user-friendly interfaces, secure transactions, and real-time market insights.
                    </p>
                </div>

                {/* Main Content Area: Image and Feature Cards */}
                {/* Uses a grid for responsive layout: single column on small screens, two columns on large screens */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">
                    {/* Left Column: Image with gradient background */}
                    <div className="relative flex items-center justify-center w-full max-w-[450px] mx-auto lg:max-w-none
                          h-[450px] lg:h-[600px] xl:h-[700px]
                          rounded-[30px] p-6 lg:p-8 xl:p-10
                          bg-gradient-to-br from-coiner-yellow-green to-coiner-green overflow-hidden">
                        <img
                            decoding="async"
                            loading="lazy"
                            src="https://framerusercontent.com/images/7JFi5vS3N0YhD6wPNoN1e53ZvZg.png"
                            alt="Person holding a phone displaying Coiner app registration screen"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Right Column: Grid of Feature Cards */}
                    {/* Uses a nested grid: single column on very small, two columns on medium+ */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        <FeatureCard
                            iconSrc="https://framerusercontent.com/images/Stscs9t5uKA7zDjYR7OmUZvJ5aw.svg"
                            iconBgColorClass="bg-icon-wallet-bg"
                            title="Create Wallet"
                            description="Create your secure digital wallet, safeguarding your cryptocurrencies"
                            alt="Wallet icon"
                        />
                        <FeatureCard
                            iconSrc="https://framerusercontent.com/images/AznvkIe2Q43pi9RhQpcRsrdTWjk.svg"
                            iconBgColorClass="bg-icon-account-bg"
                            title="Create Account"
                            description="Unlock possibilities, create an account to access trading platform"
                            alt="Briefcase icon representing account creation"
                        />
                        <FeatureCard
                            iconSrc="https://framerusercontent.com/images/BcF21lguLQdkkC8tODe80eog58.svg"
                            iconBgColorClass="bg-icon-register-bg"
                            title="Register"
                            description="Register to explore a world of crypto opportunity with platform"
                            alt="Person icon for registration"
                        />
                        <FeatureCard
                            iconSrc="https://framerusercontent.com/images/VQvK9xkczl83ySNyUKczIseFHo.svg"
                            iconBgColorClass="bg-icon-trading-bg"
                            title="Start Trading"
                            description="Begin your crypto journey today by starting trading on our platform."
                            alt="Line graph icon for trading"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;