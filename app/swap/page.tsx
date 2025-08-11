"use client"
import { useState } from "react";
import { AiOutlineSwap } from "react-icons/ai";
import '../../app/globals.css';

const coins = [
    { label: "ETH", value: "ETH" },
    { label: "arb_ETH", value: "arb_ETH" },
    { label: "WBTC", value: "WBTC" },
    { label: "ARB", value: "ARB" },
    { label: "WETH", value: "WETH" },
    { label: "MATIC", value: "MATIC" },
];

export default function SwapForm() {
    const [fromCoin, setFromCoin] = useState("");
    const [toCoin, setToCoin] = useState("");
    const [amount, setAmount] = useState(0);

    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="bg-[#111] p-6 rounded-2xl w-[420px] border border-gray-700">

                {/* Swap From */}
                <label className="text-sm text-gray-400">Swap from</label>
                <div className="flex items-center justify-between border border-gray-600 rounded-lg px-3 py-2 mt-1">
                    <select
                        className="bg-transparent outline-none w-full"
                        value={fromCoin}
                        onChange={(e) => setFromCoin(e.target.value)}
                    >
                        {coins.map((coin) => (
                            <option key={coin.value} value={coin.value} className="text-black">
                                {coin.label}
                            </option>
                        ))}
                    </select>
                    <input
                        type="number"
                        placeholder="0.000000"
                        className="bg-transparent text-right text-gray-400 outline-none w-28"
                        value={amount || ""}
                        onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                    />
                </div>

                {/* Swap Icon */}
                <div className="flex justify-center my-4">
                    <button className="p-3 rounded-full bg-purple-600 hover:bg-purple-500">
                        <AiOutlineSwap className="text-white text-xl" />
                    </button>
                </div>

                {/* Swap To */}
                <label className="text-sm text-gray-400">Swap to</label>
                <div className="flex flex-col border border-gray-600 rounded-lg px-3 py-2 mt-1">
                    <select
                        className="bg-transparent outline-none"
                        value={toCoin}
                        onChange={(e) => setToCoin(e.target.value)}
                    >
                        {coins.map((coin) => (
                            <option key={coin.value} value={coin.value} className="text-black">
                                {coin.label}
                            </option>
                        ))}
                    </select>
                    <div className="flex justify-between text-sm text-gray-400 mt-1">
                        <span>Current Price: Loading..</span>
                        <span>
                            You will receive:{" "}
                            <span className="text-purple-400">0.00</span>
                        </span>
                    </div>
                </div>

                {/* Swap Button */}
                <button className="w-full bg-purple-500 hover:bg-purple-400 text-white py-3 mt-6 rounded-lg font-medium">
                    Swap Now →
                </button>
            </div>
        </div>
    );
}