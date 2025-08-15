"use client";
import "../../../app/globals.css";
import Footer1 from "@/components/footers/Footer1";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiSettings } from "react-icons/fi";

const allAssets = {
    forex: [
        { name: "EUR/DKK" },
        { name: "USD/ZAR" },
        { name: "USD/SGD" },
        { name: "EUR/CHF" },
        { name: "XAU/USD" },
        { name: "CN50/USD" },
        { name: "TRY/JPY" },
        { name: "USD/NOK" },
    ],
    currency: [],
    crypto: [],
    indices: [],
};

const tabs = [
    { id: "forex", label: "Forex Trade" },
    { id: "currency", label: "Currency Trade" },
    { id: "crypto", label: "Crypto Trade" },
    { id: "indices", label: "Indices Trade" },
];

export default function AssetsPage() {
    const [activeTab, setActiveTab] = useState("forex");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const router = useRouter();

    const currentAssets = allAssets[activeTab];
    const totalPages = Math.ceil(currentAssets.length / itemsPerPage);

    const paginatedAssets = currentAssets.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleTabChange = (tab: any) => {
        setActiveTab(tab);
        setCurrentPage(1);
    };
    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen bg-surface tf-container">
                <div className="relative z-20 w-full max-w-[672px] mx-auto py-6">
                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10">
                        <img
                            src='https://static.vecteezy.com/system/resources/thumbnails/023/887/195/small_2x/trading-in-laptop-3d-cryptocurrency-investment-icon-png.png'
                            alt='Logs'
                            className='absolute right-2 bottom-20 w-56 h-56 opacity-10 pointer-events-none'
                        />
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-3">
                                    <div>
                                        <h2 className="font-semibold text-lg">Assets Overview</h2>
                                    </div>
                                </div>
                                <a href="/assets/logss" className="flex items-center text-white gap-[4px] p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                    <FiSettings className="text-lg" />
                                    Logs
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
                                    <p className="text-sm text-gray-400">Total Trades</p>
                                    <p className="text-lg font-semibold" style={{ fontSize: "15px" }}>$0.00</p>
                                </a>
                                <a href='#' className="flex flex-col items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                                    <p className="text-sm text-gray-400">Active Trades</p>
                                    <p className="text-lg font-semibold" style={{ fontSize: "15px" }}>0</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-[5px] pb-[20px] relative w-full max-w-[672px] mx-auto">
                    <div className="grid grid-cols-4 gap-1 mb-6 mt-4" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => handleTabChange(tab.id)}
                                className={`p-4 rounded-xl backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all ${activeTab === tab.id
                                    ? "bg-white/10"
                                    : "bg-white/5"
                                    }`}
                            >
                                <p className="text-sm text-[#9CA3AF]">{tab.label}</p>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="w-full max-w-[672px] bg-white/5 backdrop-blur-xl rounded-2xl p-6 mb-6 border border-white/10 mb-[100px]">
                    <h2 className="text-lg font-semibold mb-[16px]">{activeTab} Assets</h2>
                    {currentAssets.length === 0 ? (
                        <div className="flex flex-col gap-4 pt-2">
                            <p className="text-lg mt-4 text-yellow-500">No {activeTab} yet.</p>
                            <hr />
                        </div>
                    ) : (
                        <>
                            <div className="flex flex-col gap-[16px] pt-2">
                                {paginatedAssets.map((asset: any, index: number) => (
                                    <div
                                        key={index}
                                        onClick={() => router.push(`/assets/show/${index + 1}`)}
                                        className="flex justify-between items-center border-b border-white border-opacity-5 pb-4 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-2">
                                            <div style={{ borderRadius: "9999px" }}>
                                                <img
                                                    src='https://cdn-icons-png.freepik.com/512/8991/8991189.png'
                                                    alt="trades"
                                                    style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold">{asset.name}</p>
                                                <span className="text-sm text-gray-400">Trades Live</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-white font-semibold bg-yellow-500 text-xs rounded-full px-2 py-1">
                                                Trade
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                {totalPages > 1 && (
                                    <div className="flex justify-between items-center mt-6 flex-wrap gap-2 text-sm text-gray-400">
                                        <span>
                                            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                                            {Math.min(currentPage * itemsPerPage, currentAssets.length)} of{" "}
                                            {currentAssets.length} results
                                        </span>
                                        <div className="inline-flex rounded-md border border-white/10 overflow-hidden text-white gap-2 p-2">
                                            <button
                                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                                disabled={currentPage === 1}
                                                className="px-3 py-1 border-r border-white/10 hover:bg-white/10 disabled:opacity-40"
                                            >
                                                &lt;
                                            </button>
                                            {[...Array(totalPages)].map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setCurrentPage(i + 1)}
                                                    className={`px-3 py-1 border-r border-white/10 ${currentPage === i + 1
                                                            ? "bg-white/10 text-yellow-400 hover:bg-white/5"
                                                            : "hover:bg-white/5"
                                                        }`}
                                                >
                                                    {i + 1}
                                                </button>
                                            ))}
                                            <button
                                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                                disabled={currentPage === totalPages}
                                                className="px-3 py-1 hover:bg-white/10 disabled:opacity-40"
                                            >
                                                &gt;
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Footer1 />
        </>
    );
}