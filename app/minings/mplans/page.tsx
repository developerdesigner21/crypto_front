"use client";
import { FiArrowLeft } from "react-icons/fi";
import "../../../app/globals.css";
import Footer1 from "@/components/footers/Footer1";
import { BiHome } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function MpansPage() {
    const router = useRouter();
    const handlePurchase = () => {
        router.push(`/deposit`);
    };
    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen bg-surface tf-container">
                <div className="relative z-20 w-full max-w-[672pxpx] mx-auto py-6">
                    <div className='fixed top-0 left-0 right-0 z-30 bg-surface border-b border-white/5 tf-container max-w-[672px] mx-auto'>
                        <div className='py-6 flex items-center justify-between'>
                            <a href='/minings/index' className='flex items-center gap-2 text-white/70 hover:text-white transition-colors'>
                                <FiArrowLeft size={20} />
                                <span className='text-sm font-medium'>Back</span>
                            </a>
                            <h1 className='font-semibold text-[20px]'>
                                Minors
                            </h1>
                            <a href='/home' className='flex items-center gap-2 text-white/70 hover:text-white transition-colors'>
                                <span className='text-sm font-medium'>Home</span>
                                <BiHome size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="pt-[80px] pb-[80px] relative max-w-[672px] mx-auto">
                        <div className="space-y-6">
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-md relative overflow-hidden">
                                <img
                                    src="https://web3connectvaultx.com/assets/images/miners/miner1.png"
                                    alt=""
                                    className="absolute right-2 bottom-2 w-16 h-16 opacity-70 pointer-events-none"
                                />
                                <h3 className="text-lg font-bold">New Miner</h3>
                                <p className="text-sm text-white/80 mt-1">ROI: <strong>90%</strong></p>
                                <p className="text-sm text-white/80">Return: <strong>Hourly</strong></p>
                                <p className="text-sm text-white/80">Duration: <strong>12 Days</strong></p>
                                <p className="text-sm text-white/80 mb-1">Min Purchase: <strong>$10,000.00</strong></p>
                                <button onClick={handlePurchase} className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl text-sm font-medium transition">
                                    Purchase Miner
                                </button>
                            </div>
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-md relative overflow-hidden">
                                <img
                                    src="https://web3connectvaultx.com/assets/images/miners/miner2.png"
                                    alt=""
                                    className="absolute right-2 bottom-2 w-16 h-16 opacity-70 pointer-events-none"
                                />
                                <h3 className="text-lg font-bold">Miner #12</h3>
                                <p className="text-sm text-white/80 mt-1">ROI: <strong>20%</strong></p>
                                <p className="text-sm text-white/80">Return: <strong>Hourly</strong></p>
                                <p className="text-sm text-white/80">Duration: <strong>34 Days</strong></p>
                                <p className="text-sm text-white/80 mb-1">Min Purchase: <strong>$1,000.00</strong></p>
                                <button onClick={handlePurchase} className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl text-sm font-medium transition">
                                    Purchase Miner
                                </button>
                            </div>
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-md relative overflow-hidden">
                                <img
                                    src="https://web3connectvaultx.com/assets/images/miners/miner3.png"
                                    alt=""
                                    className="absolute right-2 bottom-2 w-16 h-16 opacity-70 pointer-events-none"
                                />
                                <h3 className="text-lg font-bold">Hash #1</h3>
                                <p className="text-sm text-white/80 mt-1">ROI: <strong>12%</strong></p>
                                <p className="text-sm text-white/80">Return: <strong>Hourly</strong></p>
                                <p className="text-sm text-white/80">Duration: <strong>1 Days</strong></p>
                                <p className="text-sm text-white/80 mb-1">Min Purchase: <strong>$10.00</strong></p>
                                <button onClick={handlePurchase} className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl text-sm font-medium transition">
                                    Purchase Miner
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer1 />
        </>
    );
}