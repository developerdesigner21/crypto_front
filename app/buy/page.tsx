import Image from "next/image";
import bybit from '../../assets/bybit.jpg';
import ramp from '../../assets/Ramp.jpg';
import coinbase from '../../assets/coinbase.webp';
import kranken from '../../assets/kraken.jpg';
import gemini from '../../assets/Gemini.png';
import crypto from '../../assets/crypto.webp';
import transak from '../../assets/transak.jpg';
import '../../app/globals.css'

const cryptoServices = [
    { name: "ByBit", desc: "Buy Bitcoin, Ethereum & more", logo: bybit, link:'https://www.bybitglobal.com/en/fiat/trade/express/home/buy/USDT/INR' },
    { name: "Ramp", desc: "Buy Bitcoin, Ethereum & more", logo: ramp, link:'https://ramp.network/buy' },
    { name: "CoinBase", desc: "Buy Bitcoin, Ethereum & more", logo: coinbase, link:'http://coinbase.com/en-in' },
    { name: "Kraken", desc: "Buy Bitcoin, Ethereum & more", logo: kranken, link:'https://www.kraken.com/' },
    { name: "Gemini", desc: "Buy Bitcoin, Ethereum & more", logo: gemini, link:'https://www.gemini.com/' },
    { name: "Crypto.com", desc: "Buy Bitcoin, Ethereum & more", logo: crypto, link:'https://crypto.com/' },
    { name: "Transak", desc: "Buy Bitcoin, Ethereum & more", logo: transak,link:'https://transak.com/' },
];

export default function BuyCryptoGrid() {
    return (
        <div className="bg-[#11150f] text-white px-6 pt-8 tf-container">
            <h2 className="text-lg font-semibold mb-8">Buy Crypto</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                {cryptoServices.map((service, i) => (
                    <a
                        href={service.link}
                        target="blank"
                        key={i}
                        className="flex items-center gap-4 bg-black/20 rounded-lg px-3 py-2 transition border border-[#f1f1f2]"
                    >
                       <div className="w-10 h-10 relative rounded-full overflow-hidden mr-[12px]">
                            <Image 
                                src={service.logo} 
                                alt={service.name} 
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="font-medium">{service.name}</h3>
                            <p className="text-sm text-neutral-400">{service.desc}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}