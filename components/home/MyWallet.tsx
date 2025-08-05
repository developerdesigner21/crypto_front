"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
const accountOptions: string[] = ["Account 1", "Account 2"];
export default function MyWallet() {
  const [accountOption, setAccountOption] = useState<string>(accountOptions[0]);
  // Use the correct type for modalElement
  const modalElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const body = document.body;
    const showModal = async () => {
      body?.classList.add("notiPrivacyDone");
      const bootstrap = await import("bootstrap"); // dynamically import bootstrap
      const modalEl = document.getElementById("modalNoti");

      if (!modalEl) return; // Guard against null

      const myModal = new bootstrap.Modal(modalEl, {
        keyboard: false,
      });

      // Show the modal after a delay using a promise
      await new Promise((resolve) => setTimeout(resolve, 2000));
      myModal.show();

      modalElement.current?.addEventListener("hidden.bs.modal", () => {
        myModal.hide();
      });
    };
    if (!body?.classList.contains("notiPrivacyDone")) {
      showModal();
    }
  }, []);
  return (
    <>
      <div className="bg-menuDark tf-container">
        <div className="pt-12 pb-12 mt-4">
          <h5>
            <span className="text-primary">My Wallet</span> -{" "}
            <a
              href="#"
              className="choose-account"
              data-bs-toggle="modal"
              data-bs-target="#accountWallet"
            >
              <span className="dom-text">{accountOption} </span> &nbsp;
              <i className="icon-select-down" />
            </a>{" "}
          </h5>
          <h1 className="mt-16">
            <a href="#">$2159,34</a>
          </h1>
          <ul className="mt-16 grid-4 m--16">
            <li>
              <Link
                href={`/choose-payment`}
                className="tf-list-item d-flex flex-column gap-8 align-items-center"
              >
                <span className="box-round bg-surface d-flex justify-content-center align-items-center">
                  <i className="icon icon-way" />
                </span>
                Send
              </Link>
            </li>
            <li>
              <Link
                href={`/qr-code2`}
                className="tf-list-item d-flex flex-column gap-8 align-items-center"
              >
                <span className="box-round bg-surface d-flex justify-content-center align-items-center">
                  <i className="icon icon-way2" />
                </span>
                Receive
              </Link>
            </li>
            <li>
              <Link
                href={`/buy-quantity`}
                className="tf-list-item d-flex flex-column gap-8 align-items-center"
              >
                <span className="box-round bg-surface d-flex justify-content-center align-items-center">
                  <i className="icon icon-wallet" />
                </span>
                Buy
              </Link>
            </li>
            <li>
              <Link
                href={`/earn`}
                className="tf-list-item d-flex flex-column gap-8 align-items-center"
              >
                <span className="box-round bg-surface d-flex justify-content-center align-items-center">
                  <i className="icon icon-exchange" />
                </span>
                Earn
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <>
        {/* account */}
        <div className="modal fade action-sheet" id="accountWallet">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <span>Wallet</span>
                <span className="icon-cancel" data-bs-dismiss="modal" />
              </div>
              <ul className="mt-20 pb-16">
                <li
                  data-bs-dismiss="modal"
                  onClick={() => setAccountOption("Account 1")}
                >
                  <div
                    className={`d-flex justify-content-between gap-8 text-large item-check ${
                      accountOption == accountOptions[0] ? "active" : ""
                    }  dom-value`}
                  >
                    Account 1 <i className="icon icon-check-circle" />
                  </div>
                </li>
                <li
                  onClick={() => setAccountOption("Account 2")}
                  className="mt-4"
                  data-bs-dismiss="modal"
                >
                  <div
                    className={`d-flex justify-content-between gap-8 text-large item-check ${
                      accountOption == accountOptions[1] ? "active" : ""
                    }  dom-value`}
                  >
                    Account 2 <i className="icon icon-check-circle" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* notification */}

        {/* noti popup */}
        <div
          className="modal fade modalCenter"
          id="modalNoti"
          ref={modalElement}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content modal-sm">
              <div className="p-16 line-bt text-center">
                <h4>“Cointex” Would Like To Send You Notifications</h4>
                <p className="mt-8 text-large">
                  Notifications may include alerts, sounds, and icon badges.
                  These can be configured in Settings.
                </p>
              </div>
              <div className="grid-2">
                <a
                  href="#"
                  className="line-r text-center text-button fw-6 p-10 text-secondary btn-hide-modal"
                  data-bs-dismiss="modal"
                >
                  Don’t Allow
                </a>
                <a
                  href="#"
                  className="text-center text-button fw-6 p-10 text-primary btn-hide-modal"
                  data-bs-toggle="modal"
                  data-bs-target="#notiPrivacy"
                >
                  {" "}
                  Allow
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* noti popup 2*/}
        <div className="modal fade modalCenter" id="notiPrivacy">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-20">
              <div className="heading">
                <h3>Privacy</h3>
                <div className="mt-4 text-small">
                  <p>
                    A mobile app privacy policy is a legal statement that must
                    be clear, conspicuous, and consented to by all users. It
                    must disclose how a mobile app gathers, stores, and uses the
                    personally identifiable information it collects from its
                    users.
                  </p>
                  <p>
                    A mobile privacy app is developed and presented to users so
                    that mobile app developers stay compliant with state,
                    federal, and international laws. As a result, they fulfill
                    the legal requirement to safeguard user privacy while
                    protecting the company itself from legal challenges.
                  </p>
                </div>
                <h3 className="mt-12">Authorized Users</h3>
                <p className="mt-4 text-small">
                  A mobile app privacy policy is a legal statement that must be
                  clear, conspicuous, and consented to by all users. It must
                  disclose how a mobile app gathers, stores, and uses the
                  personally identifiable information it collects from its
                  users.
                </p>
                <div className="cb-noti mt-12">
                  <input type="checkbox" className="tf-checkbox" id="cb-ip" />
                  <label htmlFor="cb-ip">
                    I agree to the Term of service and Privacy policy
                  </label>
                </div>
              </div>
              <div className="mt-20">
                <a
                  href="#"
                  className="tf-btn md primary"
                  data-bs-dismiss="modal"
                >
                  I Accept
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
