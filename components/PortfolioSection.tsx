// src/components/PortfolioSection.tsx
import '../app/globals.css'

// TypeScript interface for the properties of a single Step item
interface StepItemProps {
    number: string;
    title: string;
    description: string;
}

/**
 * Reusable component to display an individual step in the portfolio creation process.
 */
const StepItem: React.FC<StepItemProps> = ({ number, title, description }) => {
    return (
        <div className="flex items-start gap-4 lg:gap-6 py-4 transition-transform duration-300 ease-in-out hover:scale-[1.01]">
            {/* Number Icon/Wrap */}
            {/* w-20 h-20 for smaller screens, w-24 h-24 for medium+ */}
            <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center
                      rounded-full border-[1.5px] border-coiner-step-border-gray
                      text-white text-3xl sm:text-4xl font-semibold">
                {number}
            </div>

            {/* Content Wrap */}
            <div className="flex-1 pt-2"> {/* pt-2 for slight vertical alignment adjustment */}
                <h4 className="text-white text-2xl sm:text-3xl font-semibold mb-2 leading-tight">
                    {title}
                </h4>
                <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

/**
 * Main component for the "Create your cryptocurrency portfolio today" section.
 * It includes a main heading, descriptive text, a list of steps, and a dashboard image.
 */
const PortfolioSection: React.FC = () => {
    return (
        <section
            className="relative py-[100px] px-[30px] bg-coiner-super-dark-bg font-sans overflow-hidden"
        >
            {/* Background Pattern - Positioned absolutely behind other content */}


            {/* Main Content Container - Placed above the background pattern with z-index */}
            <div className="relative z-10 container max-w-7xl mx-auto flex flex-col items-center">
                {/* Heading and Description Section */}
                <div className="text-center mb-16 px-4"> {/* px-4 for padding on very small screens */}
                    <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                        Create your cryptocurrency portfolio today
                    </h2>
                    <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                        Start building your cryptocurrency portfolio quickly today, seizing the opportunities of the digital asset market with Coiner. Join us now!
                    </p>
                </div>

                {/* Content Area: Steps List on Left, Dashboard Image on Right */}
                {/* Uses a grid to switch layout: single column on small, two columns on large screens */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center justify-center w-full">
                    {/* Left Column: List of Steps */}
                    <div className="flex flex-col gap-8">
                        <StepItem
                            number="01"
                            title="Verify your identity"
                            description="Ensure security - verify your identity to access our full range of services with Coiner"
                        />
                        <StepItem
                            number="02"
                            title="Fund your account"
                            description="Boost your account - fund it quickly and securely to start trading with Coiner"
                        />
                        <StepItem
                            number="03"
                            title="Start trading"
                            description="Take the leap - start trading now and explore the world of crypto opportunities with Coiner."
                        />
                    </div>

                    {/* Right Column: Dashboard Image */}
                    <div className="flex justify-center lg:justify-end"> {/* Centers on small, aligns right on large */}
                        <div className="w-full max-w-[550px] aspect-[1190/989] rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                decoding="async"
                                loading="lazy"
                                src="https://framerusercontent.com/images/hSgICHJoLrknJoEucvrbyDwqFI.webp"
                                alt="Coiner dashboard with portfolio statistics and market values"
                                className="w-full h-full object-cover" // object-cover to ensure image fills container without distortion
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;