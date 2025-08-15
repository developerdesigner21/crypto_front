"use client";
import { FiArrowLeft } from "react-icons/fi";
import "../../../app/globals.css";
import Footer1 from "@/components/footers/Footer1";
import { BiHome } from "react-icons/bi";

export default function LogsPage() {
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-surface tf-container">
                <div className="relative z-20 w-full max-w-[672px] mx-auto py-6">
                    <div className='fixed top-0 left-0 right-0 z-30 bg-surface border-b border-white/5 tf-container max-w-[672px] mx-auto'>
                        <div className='py-6 flex items-center justify-between'>
                            <a href='/assets/index' className='flex items-center gap-2 text-white/70 hover:text-white transition-colors'>
                                <FiArrowLeft size={20} />
                                <span className='text-sm font-medium'>Back</span>
                            </a>
                            <h1 className='font-semibold text-[20px]'>
                                Trades Log
                            </h1>
                            <a href='/home' className='flex items-center gap-2 text-white/70 hover:text-white transition-colors'>
                                <span className='text-sm font-medium'>Home</span>
                                <BiHome size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="pt-[100px] relative w-full max-w-[672px] mx-auto px-4">
                        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 mb-6 border border-white/10" style={{ paddingTop: '2px' }}>
                            <div className="mt-8">
                                <h2 className="text-lg font-semibold mb-4">History</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer1 />
        </>
    );
}