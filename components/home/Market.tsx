"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import Chart1 from "./charts/Chart1";
import Chart2 from "./charts/Chart2";
import Chart3 from "./charts/Chart3";
export default function Market() {
  return (
    <div className="bg-menuDark tf-container">
      <div className="pt-12 pb-12 mt-4">
        <h5>Market</h5>
        <Swiper
          className="swiper tf-swiper swiper-wrapper-r mt-16"
          spaceBetween={16}
          slidesPerView={2.8}
        >
          <SwiperSlide className="swiper-slide">
            <Link href={`/exchange-market`} className="coin-box d-block">
              <div className="coin-logo">
                <Image
                  alt="img"
                  className="logo"
                  src="/images/coin/market-1.jpg"
                  width={76}
                  height={77}
                />
                <div className="title">
                  <p>Bitcoin</p>
                  <span>BTC</span>
                </div>
              </div>
              <div className="mt-8 mb-8 coin-chart">
                <Chart1 />
              </div>
              <div className="coin-price d-flex justify-content-between">
                <span>$30780</span>
                <span className="text-primary d-flex align-items-center gap-2">
                  <i className="icon-select-up" /> 11,75%
                </span>
              </div>
              <div className="blur bg1"></div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Link href={`/exchange-market`} className="coin-box d-block">
              <div className="coin-logo">
                <Image
                  alt="img"
                  className="logo"
                  src="/images/coin/market-3.jpg"
                  width={76}
                  height={77}
                />
                <div className="title">
                  <p>Binance</p>
                  <span>BNB</span>
                </div>
              </div>
              <div className="mt-8 mb-8 coin-chart">
                <Chart2 />
              </div>
              <div className="coin-price d-flex justify-content-between">
                <span>$270.10</span>
                <span className="text-primary d-flex align-items-center gap-2">
                  <i className="icon-select-up" /> 21,59%
                </span>
              </div>
              <div className="blur bg2"></div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Link href={`/exchange-market`} className="coin-box d-block">
              <div className="coin-logo">
                <Image
                  alt="img"
                  className="logo"
                  src="/images/coin/coin-3.jpg"
                  width={75}
                  height={75}
                />
                <div className="title">
                  <p>Ethereum</p>
                  <span>ETH</span>
                </div>
              </div>
              <div className="mt-8 mb-8 coin-chart">
                <Chart3 />
              </div>
              <div className="coin-price d-flex justify-content-between">
                <span>$1478.10</span>
                <span className="text-primary d-flex align-items-center gap-2">
                  <i className="icon-select-up" /> 4,75%
                </span>
              </div>
              <div className="blur bg3"></div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
