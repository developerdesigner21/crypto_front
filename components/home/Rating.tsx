import React from "react";
import Link from "next/link";
import Image from "next/image";

// Define a type for the coins array
interface Coin {
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  title: string;
  marketCap: string;
  price: string;
  change: string;
  changeClass: string;
}

const coins: Coin[] = [
  {
    imgSrc: "/images/coin/coin-6.jpg",
    imgWidth: 64,
    imgHeight: 65,
    title: "ETH",
    marketCap: "$360,6M",
    price: "$1.878,80",
    change: "-1,62%",
    changeClass: "decrease",
  },
  {
    imgSrc: "/images/coin/coin-7.jpg",
    imgWidth: 59,
    imgHeight: 60,
    title: "arb_ETH",
    marketCap: "$132,18M",
    price: "$1.878,80",
    change: "+1,62%",
    changeClass: "increase",
  },
  {
    imgSrc: "/images/coin/coin-8.jpg",
    imgWidth: 64,
    imgHeight: 65,
    title: "WBTC",
    marketCap: "$50,56M",
    price: "$30.001,96",
    change: "-1,64%",
    changeClass: "decrease",
  },
  {
    imgSrc: "/images/coin/coin-3.jpg",
    imgWidth: 75,
    imgHeight: 75,
    title: "ARB",
    marketCap: "$31,55M",
    price: "$1,11",
    change: "+3,71%",
    changeClass: "increase",
  },
  {
    imgSrc: "/images/coin/coin-9.jpg",
    imgWidth: 64,
    imgHeight: 65,
    title: "WETH",
    marketCap: "$24,34M",
    price: "$1.878,56",
    change: "-1,62%",
    changeClass: "decrease",
  },
  {
    imgSrc: "/images/coin/coin-10.jpg",
    imgWidth: 64,
    imgHeight: 65,
    title: "MATIC",
    marketCap: "$19,36M",
    price: "$0,666",
    change: "-4,42%",
    changeClass: "decrease",
  },
];

export default function Rating() {
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
            <div
              className="swiper-slide1 nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#favorites"
              role="tab"
              aria-controls="favorites"
              aria-selected="true"
            >
              Favorites
            </div>
            <div
              className="swiper-slide1 nav-link"
              data-bs-toggle="tab"
              data-bs-target="#top"
              role="tab"
              aria-controls="top"
              aria-selected="false"
            >
              Top
            </div>
            <div
              className="swiper-slide1 nav-link"
              data-bs-toggle="tab"
              data-bs-target="#popular"
              role="tab"
              aria-controls="popular"
              aria-selected="false"
            >
              Popular
            </div>
            <div
              className="swiper-slide1 nav-link"
              data-bs-toggle="tab"
              data-bs-target="#price"
              role="tab"
              aria-controls="price"
              aria-selected="false"
            >
              Token price
            </div>
            <div
              className="swiper-slide1 nav-link"
              data-bs-toggle="tab"
              data-bs-target="#new"
              role="tab"
              aria-controls="new"
              aria-selected="false"
            >
              New token
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="tab-content mt-8">
          <div
            className="tab-pane fade show active"
            id="favorites"
            role="tabpanel"
          >
            <div className="d-flex justify-content-between">
              Name
              <p className="d-flex gap-8">
                <span>Last price</span>
                <span>Change</span>
              </p>
            </div>
            <ul className="mt-16">
              {coins.map((coin, index) => (
                <li key={index} className="mt-16">
                  <Link
                    href={`/choose-payment`}
                    className="coin-item style-2 gap-12"
                  >
                    <Image
                      alt="img"
                      className="img"
                      src={coin.imgSrc}
                      width={coin.imgWidth}
                      height={coin.imgHeight}
                    />
                    <div className="content">
                      <div className="title">
                        <p className="mb-4 text-button">{coin.title}</p>
                        <span className="text-secondary">{coin.marketCap}</span>
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
          <div className="tab-pane fade" id="top" role="tabpanel">
            <div className="d-flex justify-content-between">
              Name
              <p className="d-flex gap-8">
                <span>Last price</span>
                <span>Change</span>
              </p>
            </div>
            <ul className="mt-16">
              {coins.map((coin, index) => (
                <li key={index} className="mt-16">
                  <Link
                    href={`/choose-payment`}
                    className="coin-item style-2 gap-12"
                  >
                    <Image
                      alt="img"
                      className="img"
                      src={coin.imgSrc}
                      width={coin.imgWidth}
                      height={coin.imgHeight}
                    />
                    <div className="content">
                      <div className="title">
                        <p className="mb-4 text-button">{coin.title}</p>
                        <span className="text-secondary">{coin.marketCap}</span>
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
          <div className="tab-pane fade" id="popular" role="tabpanel">
            <div className="d-flex justify-content-between">
              Name
              <p className="d-flex gap-8">
                <span>Last price</span>
                <span>Change</span>
              </p>
            </div>
            <ul className="mt-16">
              {coins.map((coin, index) => (
                <li key={index} className="mt-16">
                  <Link
                    href={`/choose-payment`}
                    className="coin-item style-2 gap-12"
                  >
                    <Image
                      alt="img"
                      className="img"
                      src={coin.imgSrc}
                      width={coin.imgWidth}
                      height={coin.imgHeight}
                    />
                    <div className="content">
                      <div className="title">
                        <p className="mb-4 text-button">{coin.title}</p>
                        <span className="text-secondary">{coin.marketCap}</span>
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
          <div className="tab-pane fade" id="price" role="tabpanel">
            <div className="d-flex justify-content-between">
              Name
              <p className="d-flex gap-8">
                <span>Last price</span>
                <span>Change</span>
              </p>
            </div>
            <ul className="mt-16">
              {coins.map((coin, index) => (
                <li key={index} className="mt-16">
                  <Link
                    href={`/choose-payment`}
                    className="coin-item style-2 gap-12"
                  >
                    <Image
                      alt="img"
                      className="img"
                      src={coin.imgSrc}
                      width={coin.imgWidth}
                      height={coin.imgHeight}
                    />
                    <div className="content">
                      <div className="title">
                        <p className="mb-4 text-button">{coin.title}</p>
                        <span className="text-secondary">{coin.marketCap}</span>
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
          <div className="tab-pane fade" id="new" role="tabpanel">
            <div className="d-flex justify-content-between">
              Name
              <p className="d-flex gap-8">
                <span>Last price</span>
                <span>Change</span>
              </p>
            </div>
            <ul className="mt-16">
              {coins.map((coin, index) => (
                <li key={index} className="mt-16">
                  <Link
                    href={`/choose-payment`}
                    className="coin-item style-2 gap-12"
                  >
                    <Image
                      alt="img"
                      className="img"
                      src={coin.imgSrc}
                      width={coin.imgWidth}
                      height={coin.imgHeight}
                    />
                    <div className="content">
                      <div className="title">
                        <p className="mb-4 text-button">{coin.title}</p>
                        <span className="text-secondary">{coin.marketCap}</span>
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
  );
}
