"use client";
import { useEffect, useState } from "react";
import { AiOutlineSwap } from "react-icons/ai";
import { AxiosError } from "axios";
import apiClient from "@/lib/axios-config";
import "../../app/globals.css";

export default function SwapForm() {
  const [coins, setCoins] = useState<{ label: string; value: string }[]>([]);
  const [fromCoin, setFromCoin] = useState("");
  const [toCoin, setToCoin] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [swapResult, setSwapResult] = useState<any>(null);

  // Fetch coin list from database API
  useEffect(() => {
    const fetchCoins = async () => {
    try {
      const { data } = await apiClient.get('/api/wallet/get_wallets');

      if (data?.status_code) {
        const list: { label: string; value: string }[] = [];
        data.data.forEach((wallet: any) => {
          Object.keys(wallet.unique_id).forEach((coinName) => {
            // coinName here is the CoinGecko ID (unique_id key)
            list.push({ label: coinName, value: coinName });
          });
        });
        setCoins(list);
        if (list.length > 1) {
          setFromCoin(list[0].value);
          setToCoin(list[1].value);
        }
      }
    } catch (err) {
      const error = err as AxiosError<{ msg: string }>;
      alert(error.response?.data?.msg || "Something went wrong");
    }
  };
  fetchCoins();
}, []);

  // Handle swap
  const handleSwap = async () => {
    if (!fromCoin || !toCoin || !amount) return alert("Please fill all fields");
    setLoading(true);
    setSwapResult(null);
    try {
  const { data } = await apiClient.post('/api/wallet/swap', {
        fromCoin,
        toCoin,
        amount,
      });
      if (data?.status_code) {
        setSwapResult(data.swap);
      } else {
        alert(data?.msg || "Swap failed");
      }
    } catch (err) {
      const error = err as AxiosError<{ msg: string }>;
        alert(error.response?.data?.msg || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

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
            <span>
              Current Price:{" "}
              {swapResult ? `$${swapResult.to.price_usd}` : "Loading.."}
            </span>
            <span>
              You will receive:{" "}
              <span className="text-purple-400">
                {swapResult ? swapResult.to.amount.toFixed(6) : "0.00"}
              </span>
            </span>
          </div>
        </div>

        {/* Swap Button */}
        <button
          className="w-full bg-purple-500 hover:bg-purple-400 text-white py-3 mt-6 rounded-lg font-medium"
          onClick={handleSwap}
          disabled={loading}
        >
          {loading ? "Swapping..." : "Swap Now →"}
        </button>
      </div>
    </div>
  );
}
