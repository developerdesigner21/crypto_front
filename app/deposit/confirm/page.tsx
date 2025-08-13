'use client';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import '../../../app/globals.css';
import { FiArrowLeft, FiCopy } from "react-icons/fi";

export default function ConfirmDeposit() {
    const searchParams = useSearchParams();
    const amount = searchParams.get('amount');
    const usdPrice = searchParams.get('usdPrice');
    const coinName = searchParams.get('coin');
    const address = "bc1qjeg4nly98vu8a05r9nhswm6tvhmdr7kxneq0tp";
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    const coinAmount =
        amount && usdPrice
            ? (parseFloat(amount) / parseFloat(usdPrice)).toFixed(8)
            : '0.00000000';

    const [transactionId, setTransactionId] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const handleConfirm = () => {
        if (!transactionId) {
            return;
        }
        console.log({ transactionId, file });
    };

    return (
        <div className="bg-surface min-h-screen relative overflow-hidden text-white tf-container">
            <div className='fixed top-0 left-0 right-0 z-30 bg-surface border-b border-white/5 tf-container max-w-2xl mx-auto'>
                <div className='py-6 flex items-center justify-between'>
                    <a href='/deposit' className='flex items-center gap-2 text-white/70 hover:text-white transition-colors'>
                        <FiArrowLeft size={20} />
                        <span className='text-sm font-medium'>Back</span>
                    </a>
                    <h1 className='font-semibold text-[20px]'>
                        Confirm Bitcoin ({coinName}) Deposit
                    </h1>
                    <div className='w-10'></div>
                </div>
            </div>

            <div className="pt-[100px] pb-[80px] relative max-w-2xl mx-auto">
                <div className='bg-white/5 backdrop-blur-xl rounded-2xl p-6 mb-6 border border-white/10'>
                    <div className='flex justify-center mb-4'>
                        <img
                            src='https://quickchart.io/qr?text=bc1qjeg4nly98vu8a05r9nhswm6tvhmdr7kxneq0tp&size=200&dark=000000&light=FFFFFF&margin=2'
                            alt='qr'
                            className='w-48 h-48 bg-white rounded-xl p-2'
                        />
                    </div>
                    <div className='flex items-center gap-2 w-full'>
                        <input
                            type="text"
                            value={address}
                            readOnly
                            className="flex-grow px-3 py-2 w-[80%] p-2 rounded bg-gray-800"
                        />
                        <button 
                            onClick={handleCopy}
                            className='w-[20%] flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border-none hover:text-white py-2 rounded-lg font-semibold'
                        >
                            <FiCopy size={18} />
                            <span className="text-sm font-medium ml-1">{copied ? "Copied!" : "Copy"}</span>
                        </button>
                    </div>
                </div>

                <div className='bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10'>
                    <div className="mb-6">
                        <div className='flex justify-between items-center mb-2'>
                            <label className="text-sm font-medium">Amount to Deposit</label>
                        </div>
                        <div className='flex items-center gap-3 p-1 bg-white/5 rounded-xl'>
                            <input
                                type="text"
                                value={coinAmount}
                                readOnly
                                className="w-full p-2 rounded bg-gray-800 outline-none focus:ring-0 focus:outline-none border-0"
                            />
                            <span className='bg-transparent text-sm font-medium px-2'>{coinName}</span>
                        </div>
                    </div>

                    <div className="mb-6">
                        <div className='flex justify-between items-center mb-2'>
                            <label className="text-sm font-medium">Transaction ID</label>
                        </div>
                        <div className='flex items-center gap-3 p-1 bg-white/5 rounded-xl'>
                            <input
                                type="text"
                                value={transactionId}
                                placeholder='Enter Transaction Id'
                                onChange={(e) => setTransactionId(e.target.value)}
                                className="w-full p-2 rounded bg-gray-800 outline-none focus:ring-0 focus:outline-none border-0"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <div className='flex justify-between items-center mb-2'>
                            <label className="text-sm font-medium">Upload Transaction Proof</label>
                        </div>
                        <input
                            type="file"
                            onChange={(e) => setFile(e.target.files?.[0] || null)}
                            className="w-full text-sm"
                        />
                    </div>

                    <button
                        onClick={handleConfirm}
                        className="w-full text-[16px] text-black bg-[#9b5de5] hover:bg-[#9b5df4] border-none hover:text-black py-2 rounded-lg font-semibold"
                    >
                        Confirm Deposit
                    </button>
                </div>
            </div>
        </div>
    );
}
