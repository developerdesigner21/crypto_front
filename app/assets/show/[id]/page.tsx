'use client';
import Footer1 from '@/components/footers/Footer1';
import { useParams, useRouter } from 'next/navigation';
import { BiHome, BiChevronDown } from 'react-icons/bi';
import { FiArrowLeft } from 'react-icons/fi';
import "../../../../app/globals.css";
import { useEffect, useState } from 'react';
import apiClient from '@/lib/axios-config';

const assetList = [
    {
        name: 'EUR/DKK',
        iframe: 'https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22EUR%2FDKK%22%2C%22frameElementId%22%3A%22tradingview_d6b86%22%2C%22interval%22%3A%221%22%2C%22save_image%22%3A%220%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22web3connectvaultx.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22EUR%2FDKK%22%2C%22page-uri%22%3A%22web3connectvaultx.com%2Fassets%2Fshow%2F1%22%7D'
    },
    {
        name: 'USD/ZAR',
        iframe: 'https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22USD%2FZAR%22%2C%22frameElementId%22%3A%22tradingview_a8cd0%22%2C%22interval%22%3A%221%22%2C%22save_image%22%3A%220%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22web3connectvaultx.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22USD%2FZAR%22%2C%22page-uri%22%3A%22web3connectvaultx.com%2Fassets%2Fshow%2F2%22%7D'
    },
    {
        name: 'USD/SGD',
        iframe: 'https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22USD%2FSGD%22%2C%22frameElementId%22%3A%22tradingview_21be8%22%2C%22interval%22%3A%221%22%2C%22save_image%22%3A%220%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22web3connectvaultx.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22USD%2FSGD%22%2C%22page-uri%22%3A%22web3connectvaultx.com%2Fassets%2Fshow%2F3%22%7D'
    },
    {
        name: 'EUR/CHF',
        iframe: 'https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22EUR%2FCHF%22%2C%22frameElementId%22%3A%22tradingview_e0c98%22%2C%22interval%22%3A%221%22%2C%22save_image%22%3A%220%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22web3connectvaultx.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22EUR%2FCHF%22%2C%22page-uri%22%3A%22web3connectvaultx.com%2Fassets%2Fshow%2F4%22%7D'
    },
    {
        name: 'XAU/USD',
        iframe: 'https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22XAU%2FUSD%22%2C%22frameElementId%22%3A%22tradingview_25915%22%2C%22interval%22%3A%221%22%2C%22save_image%22%3A%220%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22web3connectvaultx.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22XAU%2FUSD%22%2C%22page-uri%22%3A%22web3connectvaultx.com%2Fassets%2Fshow%2F5%22%7D'
    },
    {
        name: 'CN50/USD',
        iframe: 'https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22CN50%2FUSD%22%2C%22frameElementId%22%3A%22tradingview_96941%22%2C%22interval%22%3A%221%22%2C%22save_image%22%3A%220%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22web3connectvaultx.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22CN50%2FUSD%22%2C%22page-uri%22%3A%22web3connectvaultx.com%2Fassets%2Fshow%2F6%22%7D'
    },
    {
        name: 'TRY/JPY',
        iframe: 'https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22TRY%2FJPY%22%2C%22frameElementId%22%3A%22tradingview_6f441%22%2C%22interval%22%3A%221%22%2C%22save_image%22%3A%220%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22web3connectvaultx.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22TRY%2FJPY%22%2C%22page-uri%22%3A%22web3connectvaultx.com%2Fassets%2Fshow%2F7%22%7D'
    },
    {
        name: 'USD/NOK',
        iframe: 'https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22USD%2FNOK%22%2C%22frameElementId%22%3A%22tradingview_78ff2%22%2C%22interval%22%3A%221%22%2C%22save_image%22%3A%220%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22web3connectvaultx.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22USD%2FNOK%22%2C%22page-uri%22%3A%22web3connectvaultx.com%2Fassets%2Fshow%2F8%22%7D'
    }
];

export default function AssetDetailsPage() {
    const { id } = useParams();
    const assetIndex = parseInt(id as string, 10) - 1;
    const asset = assetList[assetIndex];
    const [coins, setCoins] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const res = await apiClient.get("/api/wallet/get_wallets");
                setCoins(res.data.data);
            } catch (error) {
                console.error("Error fetching coins:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCoins();
    }, []);

    return (
        <>
            <div className="flex flex-col justify-center items-center bg-surface tf-container">
                <div className='fixed top-0 left-0 right-0 z-30 bg-surface border-b border-white/5 tf-container max-w-[672px] mx-auto'>
                    <div className='py-6 flex items-center justify-between'>
                        <a href='/assets/index' className='flex items-center gap-2 text-white/70 hover:text-white transition-colors'>
                            <FiArrowLeft size={20} />
                            <span className='text-sm font-medium'>Back</span>
                        </a>
                        <h1 className='font-semibold text-[20px]'>
                            ({asset?.name})
                        </h1>
                        <a href='/home' className='flex items-center gap-2 text-white/70 hover:text-white transition-colors'>
                            <span className='text-sm font-medium'>Home</span>
                            <BiHome size={20} />
                        </a>
                    </div>
                </div>
                <div className="border border-white/10 rounded-md overflow-hidden w-full max-w-[672px] mx-auto" style={{ marginTop: "100px" }}>
                    <iframe
                        src={asset?.iframe}
                        className="w-full bg-black flex items-center justify-center"
                        style={{ height: "500px" }}
                    />
                </div>

                <div className="mt-6 border border-yellow-500 rounded-md bg-black p-3 text-yellow-400 text-sm w-full max-w-[672px] mx-auto">
                    <strong>Delayed Notice!</strong><br />
                    {asset?.name} data is delayed by 15 minutes because of exchange requirements.
                </div>

                <form className="mt-6 flex flex-col border border-white/10 rounded-md overflow-hidden w-full max-w-[672px] mx-auto p-6 mb-[100px]" style={{ gap: "24px" }}>
                    <div>
                        <label className="block mb-2 text-sm font-medium">Amount (USD)</label>
                        <input
                            type="number"
                            placeholder="Enter amount"
                            className="bg-[#1a1a1a] rounded-lg text-white border-white outline-none text-[16px] focus:ring-0 focus:outline-none"
                            style={{ height: "55px" }}
                        />
                    </div>

                    <div className='relative'>
                        <label className="block mb-2 text-sm font-medium">Select Wallet</label>
                        <select className="bg-[#1a1a1a] rounded-lg text-white border-white outline-none text-[16px] px-2" style={{ height: "55px" }}>
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
                        <div className="absolute right-3 top-[55%] pointer-events-none text-white">
                            <BiChevronDown size={20} />
                        </div>
                    </div>

                    <div className='relative'>
                        <label className="block mb-2 text-sm font-medium">Timeframe</label>
                        <select className="bg-[#1a1a1a] rounded-lg text-white border-white outline-none text-[16px] px-2" style={{ height: "55px" }}>
                            {[...Array(30)].map((_, i) => (
                                <option key={i + 1}>{`${i + 1} min`}</option>
                            ))}
                        </select>
                        <div className="absolute right-3 top-[55%] pointer-events-none text-white">
                            <BiChevronDown size={20} />
                        </div>
                    </div>

                    <div className='relative'>
                        <label className="block mb-2 text-sm font-medium">Leverage</label>
                        <select className="bg-[#1a1a1a] rounded-lg border-white text-white outline-none text-[16px] px-2" style={{ height: "55px" }}>
                            <option>1x</option>
                            <option>5x</option>
                            <option>10x</option>
                        </select>
                        <div className="absolute right-3 top-[55%] pointer-events-none text-white">
                            <BiChevronDown size={20} />
                        </div>
                    </div>

                    <div className="flex justify-between gap-4 mt-4">
                        <button type="submit" className="flex-1 bg-[#22c55e] hover:bg-[#16a34a] py-2 rounded-lg font-semibold border-none text-[16px] text-white !px-[24px] !py-[12px]">
                            Buy
                        </button>
                        <button type="button" className="flex-1 bg-[#ef4444] hover:bg-[#dc2626] py-2 rounded-lg font-semibold border-none text-[16px] text-white !px-[24px] !py-[12px]">
                            Sell
                        </button>
                    </div>
                </form>
            </div>
            <Footer1 />
        </>
    );
}
