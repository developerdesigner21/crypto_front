"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { coins3, coins4 } from "@/data/coinItems";
interface Coin {
  imageAlt: string;
  imageSrc: string;
  name: string;
  value: string;
  price: string;
  changeClass: string;
  change: string;
}
const Exchange = () => {
  const [selectedCoin, setSelectedCoin] = useState(coins4[0]);
  return (
    <>
      <div className="header-style2 fixed-top d-flex align-items-center justify-content-between bg-surface">
        <h3 className="d-flex gap-12">
          <a href="#">Market</a>
          <Link href={`/exchange-trade`} className="text-secondary">
            Trade
          </Link>
        </h3>
        <i
          className="icon-funnel text-white"
          data-bs-toggle="modal"
          data-bs-target="#filter"
        />
      </div>
      <div className="pt-55 pb-80">
        <div className="tf-container">
          <div className="mt-4 search-box box-input-field">
            <Link href={`/home-search`} className="icon-search" />
            <input
              type="text"
              placeholder="Swap over 210.00 tokens on more than 10 chains"
              required
              className="clear-ip"
            />
            <i className="icon-close" />
          </div>
          <div className="mt-20">
            <div className="line-bt">
              <div
                className="swiper swiper-wrapper-r market-swiper"
                data-space-between={20}
                style={{ maxWidth: "100vw", overflow: "scroll" }}
                data-preview="auto"
              >
                <div className="swiper-wrapper menu-tab-v3" role="tablist">
                  <div
                    className="swiper-slide ms-2 mr-2 nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#all"
                    role="tab"
                    aria-controls="all"
                    aria-selected="true"
                  >
                    All
                  </div>
                  <div
                    className="swiper-slide ms-2 mr-2 nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#favorites"
                    role="tab"
                    aria-controls="favorites"
                    aria-selected="false"
                  >
                    <i className="icon-star" />
                    Favorites
                  </div>
                  <div
                    className="swiper-slide ms-2 mr-2 nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#attractive"
                    role="tab"
                    aria-controls="attractive"
                    aria-selected="false"
                  >
                    Attractive
                  </div>
                  <div
                    className="swiper-slide ms-2 mr-2 nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#meme"
                    role="tab"
                    aria-controls="meme"
                    aria-selected="false"
                  >
                    Meme
                  </div>
                  <div
                    className="swiper-slide ms-2 mr-2 nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#staking"
                    role="tab"
                    aria-controls="staking"
                    aria-selected="false"
                  >
                    Staking
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-content mt-8 mb-16">
              <div
                className="tab-pane fade show active"
                id="all"
                role="tabpanel"
              >
                <div className="d-flex justify-content-between">
                  Name/Revenue
                  <p className="d-flex gap-8">
                    <span>Last price</span>
                    <span>24h change</span>
                  </p>
                </div>
                <ul className="mt-16">
                  {coins3.map((coin: Coin, index: number) => (
                    <li key={index} className="mt-16">
                      <Link
                        href={`/choose-payment`}
                        className="coin-item style-2 gap-12"
                      >
                        <Image
                          alt={coin.imageAlt}
                          className="img"
                          src={coin.imageSrc}
                          width={64}
                          height={65}
                        />
                        <div className="content">
                          <div className="title">
                            <p className="mb-4 text-button">{coin.name}</p>
                            <span className="text-secondary">{coin.value}</span>
                          </div>
                          <div className="d-flex align-items-center gap-12">
                            <span className="text-small">{coin.price}</span>
                            <span className={`coin-btn ${coin.changeClass}`}>
                              {coin.change}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tab-pane fade" id="favorites" role="tabpanel">
                <div className="d-flex justify-content-between">
                  Name/Revenue
                  <p className="d-flex gap-8">
                    <span>Last price</span>
                    <span>24h change</span>
                  </p>
                </div>
                <ul className="mt-16">
                  {coins3.map((coin: Coin, index: number) => (
                    <li key={index} className="mt-16">
                      <Link
                        href={`/choose-payment`}
                        className="coin-item style-2 gap-12"
                      >
                        <Image
                          alt={coin.imageAlt}
                          className="img"
                          src={coin.imageSrc}
                          width={64}
                          height={65}
                        />
                        <div className="content">
                          <div className="title">
                            <p className="mb-4 text-button">{coin.name}</p>
                            <span className="text-secondary">{coin.value}</span>
                          </div>
                          <div className="d-flex align-items-center gap-12">
                            <span className="text-small">{coin.price}</span>
                            <span className={`coin-btn ${coin.changeClass}`}>
                              {coin.change}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tab-pane fade" id="attractive" role="tabpanel">
                <div className="d-flex justify-content-between">
                  Name/Revenue
                  <p className="d-flex gap-8">
                    <span>Last price</span>
                    <span>24h change</span>
                  </p>
                </div>
                <ul className="mt-16">
                  {coins3.map((coin: Coin, index: number) => (
                    <li key={index} className="mt-16">
                      <Link
                        href={`/choose-payment`}
                        className="coin-item style-2 gap-12"
                      >
                        <Image
                          alt={coin.imageAlt}
                          className="img"
                          src={coin.imageSrc}
                          width={64}
                          height={65}
                        />
                        <div className="content">
                          <div className="title">
                            <p className="mb-4 text-button">{coin.name}</p>
                            <span className="text-secondary">{coin.value}</span>
                          </div>
                          <div className="d-flex align-items-center gap-12">
                            <span className="text-small">{coin.price}</span>
                            <span className={`coin-btn ${coin.changeClass}`}>
                              {coin.change}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tab-pane fade" id="meme" role="tabpanel">
                <div className="d-flex justify-content-between">
                  Name/Revenue
                  <p className="d-flex gap-8">
                    <span>Last price</span>
                    <span>24h change</span>
                  </p>
                </div>
                <ul className="mt-16">
                  {coins3.map((coin: Coin, index: number) => (
                    <li key={index} className="mt-16">
                      <Link
                        href={`/choose-payment`}
                        className="coin-item style-2 gap-12"
                      >
                        <Image
                          alt={coin.imageAlt}
                          className="img"
                          src={coin.imageSrc}
                          width={64}
                          height={65}
                        />
                        <div className="content">
                          <div className="title">
                            <p className="mb-4 text-button">{coin.name}</p>
                            <span className="text-secondary">{coin.value}</span>
                          </div>
                          <div className="d-flex align-items-center gap-12">
                            <span className="text-small">{coin.price}</span>
                            <span className={`coin-btn ${coin.changeClass}`}>
                              {coin.change}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tab-pane fade" id="staking" role="tabpanel">
                <div className="d-flex justify-content-between">
                  Name/Revenue
                  <p className="d-flex gap-8">
                    <span>Last price</span>
                    <span>24h change</span>
                  </p>
                </div>
                <ul className="mt-16">
                  {coins3.map((coin: Coin, index: number) => (
                    <li key={index} className="mt-16">
                      <Link
                        href={`/choose-payment`}
                        className="coin-item style-2 gap-12"
                      >
                        <Image
                          alt={coin.imageAlt}
                          className="img"
                          src={coin.imageSrc}
                          width={64}
                          height={65}
                        />
                        <div className="content">
                          <div className="title">
                            <p className="mb-4 text-button">{coin.name}</p>
                            <span className="text-secondary">{coin.value}</span>
                          </div>
                          <div className="d-flex align-items-center gap-12">
                            <span className="text-small">{coin.price}</span>
                            <span className={`coin-btn ${coin.changeClass}`}>
                              {coin.change}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade action-sheet" id="filter">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span>Filters</span>
              <span className="icon-cancel" data-bs-dismiss="modal" />
            </div>
            <ul className="mt-20 pb-16">
              {coins4.map((coin, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedCoin(coin)}
                  className={index === 0 ? "mt-4" : ""}
                >
                  <div
                    className={`item-check coin-item style-2 gap-8  ${
                      selectedCoin == coin ? "active" : ""
                    }`}
                  >
                    <Image
                      alt="img"
                      className="img"
                      src={coin.src}
                      width={coin.width}
                      height={coin.height}
                    />
                    <p className="content text-large">
                      {coin.alt}
                      <i className="icon icon-check-circle" />
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exchange;
