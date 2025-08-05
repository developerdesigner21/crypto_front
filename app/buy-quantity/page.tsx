import React from "react";
import Link from "next/link";
import Image from "next/image";
import GoBackButton from "@/components/BackButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy Quantity || Cointex crypto app",
  description: "Cointex crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <>
        <div className="header fixed-top bg-surface d-flex justify-content-between align-items-center">
          <a href="#" className="left back-btn">
            <GoBackButton />
          </a>
          <Link href={`/sell-quantity`} className="right">
            Sell
          </Link>
        </div>
        <div className="pt-45 pb-16">
          <div className="tf-container">
            <div className="mt-4 coin-item style-2 gap-8">
              <Image
                alt="img"
                className="img"
                src="/images/coin/coin-1.jpg"
                width={80}
                height={80}
              />
              <h5>Buy BTC</h5>
            </div>
            <div className="mt-16 d-flex justify-content-between">
              <span>I want to pay</span>
              <span className="text-primary d-flex align-items-center gap-4">
                By quantity <i className="icon-leftRight" />
              </span>
            </div>
            <div className="mt-8 group-ip-select">
              <input type="text" placeholder="Please enter quantity" />
              <div className="select-wrapper">
                <select className="tf-select">
                  <option value="">VND</option>
                  <option value="">BTC</option>
                </select>
              </div>
            </div>
            <p className="mt-8">188.308-300.000,000 USD</p>
            <Link href={`/choose-payment`} className="tf-btn lg primary mt-40">
              Buy
            </Link>
          </div>
        </div>
      </>
    </>
  );
};
export default Page;
