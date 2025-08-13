'use client';
import { AxiosError } from 'axios';
import '../../app/globals.css'

import { useEffect, useState } from 'react';
import apiClient from '@/lib/axios-config';
import { useRouter } from 'next/navigation';
import Footer1 from '@/components/footers/Footer1';

interface Coin {
    id: string;
    name: string;
    unique_id: Record<string, { usd: number | string; }>;
}

export default function DepositPage() {
    const [coins, setCoins] = useState<Coin[]>([]);
    const [selectedCoin, setSelectedCoin] = useState<string>('');
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter();

    const selectedCoinData = coins.find(c => c.name === selectedCoin);

    const usdPrice: number | undefined = (() => {
        if (!selectedCoinData?.unique_id) return undefined;
        const key = Object.keys(selectedCoinData.unique_id)[0];
        const raw = selectedCoinData.unique_id[key]?.usd;
        const n = typeof raw === 'string' ? parseFloat(raw) : raw;
        return Number.isFinite(n as number) ? (n as number) : undefined;
    })();

    const coinAmount =
        amount && usdPrice
            ? (parseFloat(amount) / usdPrice).toFixed(8)
            : '0.00000000';

    const handleContinue = () => {
        if (!amount || parseFloat(amount) <= 0) {
            setError('Please enter a amount.');
            return;
        }
        setError('');
        router.push(`/deposit/confirm?coin=${selectedCoin}&amount=${amount}&usdPrice=${usdPrice}`);
    };

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const res = await apiClient.get('/api/wallet/get_wallets');
                if (res.data.status_code) {
                    setCoins(res.data.data);
                    if (res.data.data.length > 0) {
                        setSelectedCoin(res.data.data[0]?.name);
                    }
                }
            } catch (err) {
                const error = err as AxiosError<{ msg: string }>;
                // alert(error.response?.data?.msg || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };
        fetchCoins();
    }, []);

    return (
        <>
        <div className="flex items-center justify-center min-h-screen tf-container">
            <div className="border border-white rounded-lg p-6 w-full max-w-2xl bg-surface text-white">
                <label className="block mb-2 text-sm font-semibold">Select Wallet</label>
                <select
                    value={selectedCoin}
                    onChange={(e) => setSelectedCoin(e.target.value)}
                    className="w-full p-3 bg-[#1a1a1a] rounded-lg text-white outline-none text-[16px]"
                >
                    {loading ? (
                        <option>Loading...</option>
                    ) : (
                        coins.map((coin) => (
                            <option key={coin.id} value={coin.name}>
                                {coin.name}
                            </option>
                        ))
                    )}
                </select>

                <label className="block mt-5 mb-2 text-sm font-semibold">Amount to Deposit</label>
                <div className="flex items-center bg-[#1a1a1a] rounded-lg px-3">
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0"
                        required
                        className="flex-1 bg-transparent p-3 text-white outline-none focus:ring-0 focus:outline-none border-0 text-[16px]"
                    />
                    <span className="text-white font-semibold">USD</span>
                </div>
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

                <p className="text-sm mt-2 text-gray-300">
                    ≈ Input amount in USD{' '}
                    <span className="text-green-500">
                        {loading ? 'Loading...' : `${coinAmount} ${selectedCoin.toLowerCase()}`}
                    </span>
                </p>

                <button onClick={handleContinue} className="w-full mt-5 text-[16px] text-black bg-[#9b5de5] hover:bg-[#9b5df4] border-none hover:text-black p-3 rounded-lg font-semibold">
                    Continue Deposit
                </button>
            </div>
        </div>
        <Footer1 />
        </>
    );
}