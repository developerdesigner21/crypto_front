"use client";


import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios, { AxiosError } from "axios";

interface Wallet {
  id: number;
  name: string;
  is_active: number;
  unique_id: {
    [coinName: string]: {
      usd: number;
      usd_24h_change: number;
    } | null;
  };
  icon: string;
  link: string;
  market_cap: string;
}

export default function Rating() {
  const [coins, setCoins] = useState<Wallet[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"all" | "favorite" | "top">("all");

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        const res = await axios.get("http://localhost:1000/api/wallet/get_wallets"); // adjust path if different
        if (res.data.status_code) {
          setCoins(res.data.data);
        }
      } catch (err) {
        const error = err as AxiosError<{ msg: string }>;
        alert(error.response?.data?.msg || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchWallets();
  }, []);

  const filteredCoins = coins.filter((coin : any ) => {
    if (activeTab === "favorite") {
      return coin.type === "favorite";
    }
    if (activeTab === "top") {
      return coin.type === "top";
    }
    return true;
  });

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <div className="bg-menuDark tf-container">
      <div className="pt-12 pb-12 mt-4">
        <div className="wrap-filter-swiper">
          <h5>
            <Link href={`/cryptex-rating`} className="cryptex-rating">
              <i className="icon-star" />
              Cryptex Rating
            </Link>
          </h5>

          <div className="swiper-wrapper1 menu-tab-v3 mt-12" role="tablist">
            {/* <div className="swiper-slide1 nav-link active">All</div>
            <div className="swiper-slide1 nav-link">Favorites</div>
            <div className="swiper-slide1 nav-link">Top</div> */}
            <div
              className={`nav-link ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All
            </div>
            <div
              className={`nav-link ${activeTab === "favorite" ? "active" : ""}`}
              onClick={() => setActiveTab("favorite")}
            >
              Favorites
            </div>
            <div
              className={`nav-link ${activeTab === "top" ? "active" : ""}`}
              onClick={() => setActiveTab("top")}
            >
              Top
            </div>
          </div>
        </div>

        <div className="tab-content mt-8">
          <div className="tab-pane fade show active" id="favorites">
            <div className="d-flex justify-content-between">
              Name
              <p className="d-flex gap-8">
                <span>Last price</span>
                <span>Change</span>
              </p>
            </div>

            <ul className="mt-16">
              {filteredCoins.map((coin) => {
                const coinName = Object.keys(coin.unique_id)[0];
                const coinData = coin.unique_id[coinName];
                const coinlink = coin.link;
                const price = coinData ? `$${coinData.usd.toLocaleString()}` : "N/A";
                const change =
                  coinData && coinData.usd_24h_change
                    ? `${coinData.usd_24h_change.toFixed(2)}%`
                    : "N/A";
                const changeClass =
                  coinData && coinData.usd_24h_change >= 0
                    ? "increase"
                    : "decrease";

                return (
                  <li key={coin.id} className="mt-16">
                    <Link
                      href={`/coin/${coinName}`}
                      className="coin-item style-2 gap-12"
                    >

                      <Image
                        alt="coin"
                        className="img"
                        src={coin.icon}
                        width={64}
                        height={64}
                      />
                      <div className="content">
                        <div className="title">
                          <p className="mb-4 text-button">{coinName}</p>
                          <span className="text-secondary">{coin.market_cap}</span>
                        </div>
                        <div className="d-flex align-items-center gap-12">
                          <span className="text-small">{price}</span>
                          <span className={`coin-btn ${changeClass}`}>
                            {change}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div >
  );
}
