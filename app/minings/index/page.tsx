"use client";
import "../../../app/globals.css";
import Footer1 from "@/components/footers/Footer1";
import { FiSettings } from "react-icons/fi";

export default function MiningPage() {
    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen bg-surface tf-container">
                <div className="relative z-20 w-full max-w-[672px] mx-auto py-6">
                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10">
                        <img
                            src='https://web3connectvaultx.com/assets/images/miners/miner1.png'
                            alt='minors'
                            className='absolute right-2 bottom-20 w-56 h-56 opacity-10 pointer-events-none'
                        />
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-3">
                                    <div>
                                        <h2 className="font-semibold text-lg">Mining Overview</h2>
                                    </div>
                                </div>
                                <a href="/minings/mplans" className="flex items-center text-white gap-[4px] p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                    <FiSettings className="text-lg" />
                                    Miners
                                </a>
                            </div>
                            <div className="mb-6">
                                <p className="text-gray-400 text-sm mb-2">Total Profit</p>
                                <div className="flex items-center gap-3">
                                    <h1 className="text-2xl font-bold">$0.00</h1>
                                    <span className="text-[#9C6FFF] text-sm font-medium bg-[#9C6FFF1A] px-2 py-1 rounded-lg">
                                        8.9 %
                                    </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-[8px]">
                                <a href='#' className="flex flex-col items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                                    <p className="text-sm text-gray-400">Total Mined</p>
                                    <p className="text-lg font-semibold" style={{ fontSize: "15px" }}>$0.00</p>
                                </a>
                                <a href='#' className="flex flex-col items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                                    <p className="text-sm text-gray-400">Active Miners</p>
                                    <p className="text-lg font-semibold" style={{ fontSize: "15px" }}>0</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-[5px] pb-[80px] relative w-full max-w-[672px] mx-auto">
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 mb-6 border border-white/10" style={{ paddingTop: '2px' }}>
                        <div className="mt-8">
                            <h2 className="text-lg font-semibold mb-4">My Miner Logs</h2>
                            <div className="flex flex-col gap-4 pt-2">
                                <p className="mt-4 text-yellow-500">No Miner yet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer1 />
        </>
    );
}