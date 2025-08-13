"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import GoBackButton from "./BackButton";
import { useRouter } from "next/navigation";
export default function UserInfo() {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/log-in");
  };
  return (
    <>
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="#" className="left back-btn">
          <GoBackButton />
        </a>
        <Link href={`/qr-code`} className="right text-secondary">
          <i className="icon-barcode" />
        </Link>
      </div>
      <div className="pt-45 pb-16">
        <div className="bg-menuDark tf-container">
          <div className="pt-12 pb-12 mt-4 d-flex justify-content-between align-items-center">
            <Link className="box-account" href={`/profile`}>
              <Image
                alt="img"
                className="avt"
                src="/images/avt/avt2.jpg"
                width={120}
                height={120}
              />
              <div className="info">
                <h5>Tony Nguyen</h5>
                <p className="text-small text-secondary mt-8 mb-8">
                  Profile and settings
                </p>
                <span className="tag-xs style-2 round-2 red">Unverified</span>
              </div>
            </Link>
            <div style={{display: 'flex', alignItems:'center', gap:'20px'}}>
              <button className='text-danger' style={{backgroundColor: 'transparent', border:'none', padding:0}} onClick={handleLogout}>
                Logout
              </button>
              <Link className="arr-right" href={`/profile`}>
                <i className="icon-arr-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-menuDark tf-container">
          <div className="pt-12 pb-12 mt-4">
            <h5>Buy cryptocurrencies</h5>
            <ul className="mt-16 grid-3 gap-12">
              <li>
                <a
                  href="#cryptocurrency"
                  className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center"
                  data-bs-toggle="modal"
                >
                  <i className="icon icon-currency" />
                  Currency
                </a>
              </li>
              <li>
                <Link
                  href={`/exchange-market`}
                  className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center"
                >
                  <i className="icon icon-swap" />
                  Exchange
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-menuDark tf-container">
          <div className="pt-12 pb-12 mt-4">
            <h5>Exchange</h5>
            <ul className="mt-16 grid-3 gap-12">
              <li>
                <a
                  href="#"
                  className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center"
                >
                  <i className="icon icon-convert" />
                  Convert
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center"
                >
                  <i className="icon icon-metalogo" />
                  Consign
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center"
                >
                  <i className="icon icon-bank" />
                  Deposit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center"
                >
                  <i className="icon icon-fileText" />
                  Futures contract
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center"
                >
                  <i className="icon icon-graph" />
                  Ageless
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center"
                >
                  <i className="icon icon-grid-nine" />
                  Choice
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center"
                >
                  <i className="icon icon-game-control" />
                  Simulated trading
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center"
                >
                  <i className="icon icon-robot" />
                  Bot
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center"
                >
                  <i className="icon icon-database" />
                  Copy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-menuDark tf-container">
          <div className="pt-12 pb-12 mt-4">
            <h5>Help center</h5>
            <ul className="mt-16 grid-3 gap-12">
              <li>
                <a
                  href="#"
                  className="tf-list-item d-flex flex-column gap-8 align-items-center"
                >
                  <i className="icon icon-globe" />
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tf-list-item d-flex flex-column gap-8 align-items-center"
                >
                  <i className="icon icon-headset" />
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="bg-menuDark tf-container">
          <a
            href="#"
            className="pt-12 pb-12 mt-4 d-flex justify-content-between align-items-center"
          >
            <h5>About Cointex</h5>
            <span className="arr-right">
              <i className="icon-arr-right" />
            </span>
          </a>
        </div> */}
      </div>
      {/*cryptocurrency */}
      <div className="modal fade modalRight" id="cryptocurrency">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
              <span className="left" data-bs-dismiss="modal" aria-hidden="true">
                <i className="icon-left-btn" />
              </span>
              <h3>Choose cryptocurrency</h3>
            </div>
            <div className="overflow-auto pt-45 pb-16">
              <div className="tf-container">
                <div className="mt-8 search-box box-input-field">
                  <i className="icon-search" />
                  <input
                    type="text"
                    placeholder="Search cryptocurrency"
                    required
                    className="clear-ip"
                  />
                  <i className="icon-close" />
                </div>
                <h5 className="mt-12">Popular search</h5>
                <ul className="mt-16">
                  <li>
                    <a href="#" className="coin-item style-2 gap-12">
                      <Image
                        alt="img"
                        className="img"
                        src="/images/coin/coin-3.jpg"
                        width={75}
                        height={75}
                      />
                      <div className="content">
                        <div className="title">
                          <p className="mb-4 text-large">Ethereum</p>
                          <span className="text-secondary text-small">ETH</span>
                        </div>
                        <span className="text-small">$30.776,93</span>
                      </div>
                    </a>
                  </li>
                  <li className="mt-16">
                    <a href="#" className="coin-item style-2 gap-12">
                      <Image
                        alt="img"
                        className="img"
                        src="/images/coin/coin-1.jpg"
                        width={80}
                        height={80}
                      />
                      <div className="content">
                        <div className="title">
                          <p className="mb-4 text-large">Bitcoin</p>
                          <span className="text-secondary text-small">BTC</span>
                        </div>
                        <span className="text-small">$1.936,79</span>
                      </div>
                    </a>
                  </li>
                  <li className="mt-16">
                    <a href="#" className="coin-item style-2 gap-12">
                      <Image
                        alt="img"
                        className="img"
                        src="/images/coin/coin-14.jpg"
                        width={64}
                        height={65}
                      />
                      <div className="content">
                        <div className="title">
                          <p className="mb-4 text-large">TetherUS</p>
                          <span className="text-secondary text-small">
                            USDT
                          </span>
                        </div>
                        <span className="text-small">$0,999999</span>
                      </div>
                    </a>
                  </li>
                  <li className="mt-16">
                    <a href="#" className="coin-item style-2 gap-12">
                      <Image
                        alt="img"
                        className="img"
                        src="/images/coin/coin-7.jpg"
                        width={59}
                        height={60}
                      />
                      <div className="content">
                        <div className="title">
                          <p className="mb-4 text-large">BNB</p>
                          <span className="text-secondary text-small">BNB</span>
                        </div>
                        <span className="text-small">$243,41</span>
                      </div>
                    </a>
                  </li>
                  <li className="mt-16">
                    <a href="#" className="coin-item style-2 gap-12">
                      <Image
                        alt="img"
                        className="img"
                        src="/images/coin/coin-9.jpg"
                        width={64}
                        height={65}
                      />
                      <div className="content">
                        <div className="title">
                          <p className="mb-4 text-large">Ripple</p>
                          <span className="text-secondary text-small">XRP</span>
                        </div>
                        <span className="text-small">$0,487814</span>
                      </div>
                    </a>
                  </li>
                  <li className="mt-16">
                    <a href="#" className="coin-item style-2 gap-12">
                      <Image
                        alt="img"
                        className="img"
                        src="/images/coin/coin-4.jpg"
                        width={80}
                        height={80}
                      />
                      <div className="content">
                        <div className="title">
                          <p className="mb-4 text-large">Cardano</p>
                          <span className="text-secondary text-small">ADA</span>
                        </div>
                        <span className="text-small">$0,294842</span>
                      </div>
                    </a>
                  </li>
                  <li className="mt-16">
                    <a href="#" className="coin-item style-2 gap-12">
                      <Image
                        alt="img"
                        className="img"
                        src="/images/coin/coin-11.jpg"
                        width={64}
                        height={64}
                      />
                      <div className="content">
                        <div className="title">
                          <p className="mb-4 text-large">BUSD</p>
                          <span className="text-secondary text-small">
                            BUSD
                          </span>
                        </div>
                        <span className="text-small">$0,999899</span>
                      </div>
                    </a>
                  </li>
                  <li className="mt-16">
                    <a href="#" className="coin-item style-2 gap-12">
                      <Image
                        alt="img"
                        className="img"
                        src="/images/coin/coin-8.jpg"
                        width={64}
                        height={65}
                      />
                      <div className="content">
                        <div className="title">
                          <p className="mb-4 text-large">trueUSD</p>
                          <span className="text-secondary text-small">
                            TUSD
                          </span>
                        </div>
                        <span className="text-small">$0,999999</span>
                      </div>
                    </a>
                  </li>
                  <li className="mt-16">
                    <a href="#" className="coin-item style-2 gap-12">
                      <Image
                        alt="img"
                        className="img"
                        src="/images/coin/coin-5.jpg"
                        width={60}
                        height={60}
                      />
                      <div className="content">
                        <div className="title">
                          <p className="mb-4 text-large">Coin98</p>
                          <span className="text-secondary text-small">C98</span>
                        </div>
                        <span className="text-small">$0,169888</span>
                      </div>
                    </a>
                  </li>
                  <li className="mt-16">
                    <a href="#" className="coin-item style-2 gap-12">
                      <Image
                        alt="img"
                        className="img"
                        src="/images/coin/coin-6.jpg"
                        width={64}
                        height={65}
                      />
                      <div className="content">
                        <div className="title">
                          <p className="mb-4 text-large">Kurama</p>
                          <span className="text-secondary text-small">KRM</span>
                        </div>
                        <span className="text-small">$21.89,39</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
